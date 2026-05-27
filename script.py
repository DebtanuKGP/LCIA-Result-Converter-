import pandas as pd, os, json
from pathlib import Path

xlsx='/mnt/data/sustainability-1289649-supplementary.xlsx'
if not os.path.exists(xlsx): xlsx='sustainability-1289649-supplementary.xlsx'
out=Path('output/lca-conversion-tool-v2')
out.mkdir(parents=True, exist_ok=True)

readme = pd.read_excel(xlsx, sheet_name='Readme', header=None)
notes = [str(x).strip() for x in readme[0].dropna().tolist() if str(x).strip()]
xls = pd.ExcelFile(xlsx)

all_data = {'meta': {'sourceWorkbook': os.path.basename(xlsx), 'notes': notes}, 'categories': []}

for s in xls.sheet_names:
    if s == 'Readme':
        continue
    df = pd.read_excel(xlsx, sheet_name=s, header=None)
    methods = [str(x).strip() for x in df.iloc[0,1:9].tolist()]
    cat = {'name': s, 'methods': methods, 'adjustmentNote': None, 'hasAdjusted': False, 'conversions': {}}
    keyname = s.lower().replace('eutrphoication','eutrophication').split('(')[0].strip()
    for n in notes:
        nn = n.lower().replace('eutrphoication','eutrophication')
        if keyname and keyname in nn:
            cat['adjustmentNote'] = n
            break
    for i in range(1,9):
        src = str(df.iloc[i,0]).strip()
        for j in range(1,9):
            tgt = str(df.iloc[0,j]).strip()
            val = df.iloc[i,j]
            if pd.notna(val) and str(val).strip() != '':
                cat['conversions'].setdefault(f'{src}->{tgt}', {})['original_cf'] = float(val)
    for i in range(11,19):
        src = str(df.iloc[i,0]).strip()
        for j in range(1,9):
            tgt = str(df.iloc[10,j]).strip()
            val = df.iloc[i,j]
            if pd.notna(val) and str(val).strip() != '':
                cat['conversions'].setdefault(f'{src}->{tgt}', {})['original_r2'] = float(val)
    if df.shape[1] >= 20 and str(df.iloc[0,10]).startswith('CF'):
        cat['hasAdjusted'] = True
        for i in range(1,9):
            src = str(df.iloc[i,10]).strip()
            for j in range(11,19):
                tgt = str(df.iloc[0,j]).strip()
                val = df.iloc[i,j]
                if src and pd.notna(val) and str(val).strip() != '':
                    cat['conversions'].setdefault(f'{src}->{tgt}', {})['adjusted_cf'] = float(val)
        for i in range(11,19):
            src = str(df.iloc[i,10]).strip()
            for j in range(11,19):
                tgt = str(df.iloc[10,j]).strip()
                val = df.iloc[i,j]
                if src and pd.notna(val) and str(val).strip() != '':
                    cat['conversions'].setdefault(f'{src}->{tgt}', {})['adjusted_r2'] = float(val)
    final = {}
    for k,v in cat['conversions'].items():
        cf = v.get('adjusted_cf', v.get('original_cf'))
        r2 = v.get('adjusted_r2', v.get('original_r2'))
        dataset = 'adjusted' if ('adjusted_cf' in v or 'adjusted_r2' in v) else 'original'
        status = 'usable' if r2 >= 0.95 else ('caution' if r2 >= 0.90 else 'not_recommended')
        final[k] = {'cf': cf, 'r2': r2, 'datasetVersion': dataset, 'status': status}
    cat['conversions'] = final
    all_data['categories'].append(cat)

(out/'data.js').write_text('window.LCA_DATA = ' + json.dumps(all_data, ensure_ascii=False, indent=2) + ';', encoding='utf-8')

unit_map = {
  'Climate change': {'CML':'kg CO2 eq','EDIP':'kg CO2 eq','EF':'kg CO2 eq','EPD':'kg CO2 eq','ILCD':'kg CO2 eq','IMPACT2002+':'kg CO2 eq','ReCiPe-H':'kg CO2 eq','TRACI':'kg CO2 eq'},
  'Acidification': {'CML':'kg SO2 eq','EDIP':'m2','EF':'mol H+ eq','EPD':'kg SO2 eq','ILCD':'mol H+ eq','IMPACT2002+':'kg SO2 eq','ReCiPe-H':'kg SO2 eq','TRACI':'kg SO2 eq'},
  'Ozone Depletion': {'CML':'kg CFC-11 eq','EDIP':'kg CFC-11 eq','EF':'kg CFC-11 eq','EPD':'kg CFC-11 eq','ILCD':'kg CFC-11 eq','IMPACT2002+':'kg CFC-11 eq','ReCiPe-H':'kg CFC-11 eq','TRACI':'kg CFC-11 eq'},
  'Eutrphoication': {'CML':'kg PO4 eq','EDIP':'kg P','EF':'kg P eq','EPD':'kg PO4 eq','ILCD':'kg P eq','IMPACT2002+':'kg PO4 P-lim','ReCiPe-H':'kg P eq','TRACI':'kg N eq'},
  'Energy Use': {'CML':'MJ','EDIP':'MJ','EF':'MJ','EPD':'MJ','ILCD':'MJ primary','IMPACT2002+':'kg oil eq','ReCiPe-H':'MJ surplus','TRACI':'MJ'},
  'Resource': {'CML':'kg Sb eq','EDIP':'PR2004','EF':'kg Sb eq','EPD':'kg Sb eq','ILCD':'kg Sb eq','IMPACT2002+':'Not specified','ReCiPe-H':'kg Cu eq','TRACI':'Not specified'},
  'Smog': {'CML':'kg C2H4 eq','EDIP':'person·ppm·h','EF':'kg NMVOC eq','EPD':'kg NMVOC eq','ILCD':'kg NMVOC eq','IMPACT2002+':'kg C2H4 eq','ReCiPe-H':'kg NOx eq','TRACI':'kg O3 eq'},
  'Water': {'CML':'Not specified','EDIP':'Not specified','EF':'m3 deprived','EPD':'m3 eq','ILCD':'m3 water eq','IMPACT2002+':'Not specified','ReCiPe-H':'m3','TRACI':'Not specified'},
  'Human Toxicity (Cancer)': {'CML':'kg 1,4-DB eq','EDIP':'person','EF':'CTUh','EPD':'Not specified','ILCD':'CTUh','IMPACT2002+':'kg C2H3Cl eq','ReCiPe-H':'kg 1,4-DCB eq','TRACI':'CTUh'},
  'Human Toxicity (Non-cancer)': {'CML':'kg 1,4-DB eq','EDIP':'person','EF':'CTUh','EPD':'Not specified','ILCD':'CTUh','IMPACT2002+':'kg C2H3Cl eq','ReCiPe-H':'kg 1,4-DCB eq','TRACI':'CTUh'},
  'Particulate Matter': {'CML':'Not specified','EDIP':'Not specified','EF':'disease incidence','EPD':'kg PM2.5 eq','ILCD':'kg PM2.5 eq','IMPACT2002+':'kg PM2.5 eq','ReCiPe-H':'kg PM2.5 eq','TRACI':'kg PM2.5 eq'},
  'Ecotoxicity': {'CML':'kg 1,4-DB eq','EDIP':'m3','EF':'CTUe','EPD':'Not specified','ILCD':'CTUe','IMPACT2002+':'kg TEG water','ReCiPe-H':'kg 1,4-DCB eq','TRACI':'CTUe'},
  'Land Use': {'CML':'Not specified','EDIP':'Not specified','EF':'Pt','EPD':'kg C deficit','ILCD':'m2 org. arable','IMPACT2002+':'m2a crop eq','ReCiPe-H':'Not specified','TRACI':'Not specified'},
  'Ionizing Radiation': {'CML':'Not specified','EDIP':'Not specified','EF':'kBq U-235 eq','EPD':'kBq U235 eq','ILCD':'Bq C-14 eq','IMPACT2002+':'kBq Co-60 eq','ReCiPe-H':'Not specified','TRACI':'Not specified'}
}

html=f'''<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>LCIA Conversion Calculator</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{{--bg:#f7f6f2;--surface:#fff;--surface2:#f2f0ea;--text:#222;--muted:#666;--border:#d9d5cc;--primary:#01696f;--primary2:#0c4e54;--danger:#a13544;--warn:#da7101;--ok:#437a22;--radius:16px;--shadow:0 10px 28px rgba(0,0,0,.08)}}
[data-theme="dark"]{{--bg:#171614;--surface:#1d1b19;--surface2:#252321;--text:#e8e5df;--muted:#b1aaa0;--border:#3a3631;--primary:#4f98a3;--primary2:#68b4bf;--danger:#dd6974;--warn:#fdab43;--ok:#6daa45;--shadow:0 12px 32px rgba(0,0,0,.35)}}
*{{box-sizing:border-box}} body{{margin:0;font-family:Inter,sans-serif;background:var(--bg);color:var(--text);line-height:1.55}}
.wrap{{max-width:1200px;margin:auto;padding:24px}} .top{{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}}
.logo{{font-weight:700;font-size:1.25rem}} .logo span{{color:var(--primary)}}
.grid{{display:grid;grid-template-columns:1.1fr .9fr;gap:24px;margin-top:24px}} @media (max-width:900px){{.grid{{grid-template-columns:1fr}}}}
.card{{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow);padding:20px}}
h1,h2,h3{{margin:0 0 12px}} p{{margin:0 0 12px;color:var(--muted)}} label{{display:block;font-size:.92rem;font-weight:600;margin:0 0 8px}}
select,input{{width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--border);background:var(--surface2);color:var(--text);font-size:1rem}}
.form-grid{{display:grid;grid-template-columns:1fr 1fr;gap:16px}} @media (max-width:640px){{.form-grid{{grid-template-columns:1fr}}}}
.full{{grid-column:1/-1}} .btn{{appearance:none;border:none;background:var(--primary);color:#fff;padding:12px 16px;border-radius:12px;font-weight:700;cursor:pointer}} .btn:hover{{background:var(--primary2)}}
.theme{{background:transparent;border:1px solid var(--border);color:var(--text);padding:10px 12px;border-radius:12px;cursor:pointer}}
.result{{display:grid;gap:12px}} .metric{{padding:14px;border-radius:14px;background:var(--surface2);border:1px solid var(--border)}} .big{{font-size:1.7rem;font-weight:700;color:var(--primary)}}
.badge{{display:inline-block;padding:6px 10px;border-radius:999px;font-size:.82rem;font-weight:700}} .usable{{background:rgba(67,122,34,.12);color:var(--ok)}} .caution{{background:rgba(218,113,1,.14);color:var(--warn)}} .not_recommended{{background:rgba(161,53,68,.14);color:var(--danger)}}
table{{width:100%;border-collapse:collapse;font-size:.92rem}} th,td{{padding:10px;border:1px solid var(--border);text-align:center}} th{{background:var(--surface2);position:sticky;top:0}}
.table-wrap{{overflow:auto;max-height:460px;border:1px solid var(--border);border-radius:14px}} .note{{font-size:.9rem;color:var(--muted)}} .statusline{{font-size:.9rem;padding:8px 12px;border-radius:12px;background:var(--surface2);border:1px solid var(--border);color:var(--muted)}}
code{{background:var(--surface2);padding:2px 6px;border-radius:6px}}
</style>
</head>
<body>
<div class="wrap">
<div class="top"><div><div class="logo">LCA <span>Method Converter</span></div><p>Version 1: single-value LCIA conversion calculator with reliability guidance.</p></div><button class="theme" id="themeToggle">Toggle theme</button></div>
<div class="statusline" id="appStatus">Loading data…</div>
<div class="grid">
<section class="card"><h2>Calculator</h2><p>This tool uses conversion factors from your supplementary workbook. Preferred values use adjusted data when available.</p>
<div class="form-grid">
<div class="full"><label for="category">Impact category</label><select id="category"></select></div>
<div><label for="source">Source LCIA method</label><select id="source"></select><p class="note" id="sourceUnit">Unit: —</p></div>
<div><label for="target">Target LCIA method</label><select id="target"></select><p class="note" id="targetUnit">Unit: —</p></div>
<div class="full"><label for="value">Original result value</label><input id="value" type="number" step="any" placeholder="Enter a number, e.g. 196"></div>
<div class="full"><button class="btn" id="calcBtn">Convert result</button></div>
</div></section>
<section class="card"><h2>Explanation</h2><div class="result" id="resultPanel"><div class="metric"><strong>What happens here</strong><p>The app will show the conversion factor, reliability score, source used, units, and converted result.</p></div></div></section>
</div>
<section class="card" style="margin-top:24px"><h2>Conversion matrix viewer</h2><p>Inspect the selected category as a full method-to-method conversion card.</p><div class="table-wrap"><table id="matrixTable"></table></div><p class="note" id="categoryNote"></p></section>
<section class="card" style="margin-top:24px"><h2>VS Code guide</h2>
<p><strong>Step 1:</strong> Create one folder, for example <code>lca-tool</code>, and place <code>lca-converter.html</code> and <code>data.js</code> inside it.</p>
<p><strong>Step 2:</strong> Open that folder in VS Code using <code>File → Open Folder</code>.</p>
<p><strong>Step 3:</strong> Install the <strong>Live Server</strong> extension by Ritwick Dey from the VS Code marketplace.</p>
<p><strong>Step 4:</strong> Right-click <code>lca-converter.html</code> and click <code>Open with Live Server</code>, or click the <code>Go Live</code> button at the bottom-right.</p>
<p><strong>Step 5:</strong> Your browser should open the calculator. If the impact categories still do not appear, check that both files are in the same folder and refresh the page.</p>
</section>
</div>
<script src="data.js"></script>
<script>
const data = window.LCA_DATA;
const UNIT_MAP = {json.dumps(unit_map, ensure_ascii=False)};
const categoryEl = document.getElementById('category');
const sourceEl = document.getElementById('source');
const targetEl = document.getElementById('target');
const valueEl = document.getElementById('value');
const resultPanel = document.getElementById('resultPanel');
const matrixTable = document.getElementById('matrixTable');
const categoryNote = document.getElementById('categoryNote');
const sourceUnit = document.getElementById('sourceUnit');
const targetUnit = document.getElementById('targetUnit');
const appStatus = document.getElementById('appStatus');
function fmt(n){{ return Number.isFinite(n) ? new Intl.NumberFormat(undefined,{{maximumFractionDigits:6}}).format(n) : '—'; }}
function getCategory(){{ return data.categories.find(c => c.name === categoryEl.value); }}
function statusText(s){{ return s==='usable' ? 'High confidence' : s==='caution' ? 'Use with caution' : 'Not recommended'; }}
function getUnit(category, method){{ return (UNIT_MAP[category] && UNIT_MAP[category][method]) ? UNIT_MAP[category][method] : 'Not specified'; }}
function updateUnitHints(){{ const cat = categoryEl.value; sourceUnit.textContent = 'Unit: ' + getUnit(cat, sourceEl.value); targetUnit.textContent = 'Unit: ' + getUnit(cat, targetEl.value); }}
function populateCategories(){{
  if(!data || !data.categories || !data.categories.length){{ appStatus.textContent = 'Data failed to load.'; return; }}
  data.categories.forEach(c => {{ const o=document.createElement('option'); o.value=c.name; o.textContent=c.name; categoryEl.appendChild(o); }});
  categoryEl.value = data.categories[0].name; updateMethods(); updateMatrix(); appStatus.textContent = 'Data loaded successfully: ' + data.categories.length + ' impact categories available.';
}}
function updateMethods(){{
  const cat=getCategory(); sourceEl.innerHTML=''; targetEl.innerHTML='';
  cat.methods.forEach(m=>{{ const a=document.createElement('option'); a.value=m; a.textContent=m; sourceEl.appendChild(a); const b=document.createElement('option'); b.value=m; b.textContent=m; targetEl.appendChild(b); }});
  sourceEl.selectedIndex=0; targetEl.selectedIndex=1; updateUnitHints();
  categoryNote.textContent = cat.adjustmentNote ? 'Adjustment note: ' + cat.adjustmentNote : 'No specific adjustment note for this category.';
}}
function updateMatrix(){{
  const cat=getCategory(); let html='<thead><tr><th>From \\ To</th>' + cat.methods.map(m=>`<th>${{m}}</th>`).join('') + '</tr></thead><tbody>';
  cat.methods.forEach(src=>{{ html += `<tr><th>${{src}}</th>`; cat.methods.forEach(tgt=>{{ const rec = cat.conversions[`${{src}}->${{tgt}}`]; html += rec ? `<td><div><strong>${{fmt(rec.cf)}}</strong></div><div style="font-size:.8rem;color:var(--muted)">R² ${{fmt(rec.r2)}}</div></td>` : '<td>—</td>'; }}); html += '</tr>'; }});
  html += '</tbody>'; matrixTable.innerHTML = html;
}}
function calculate(){{
  const cat=getCategory(), src=sourceEl.value, tgt=targetEl.value, val=parseFloat(valueEl.value); const rec = cat.conversions[`${{src}}->${{tgt}}`];
  if(!Number.isFinite(val)){{ resultPanel.innerHTML = '<div class="metric">Please enter a valid numeric value.</div>'; return; }}
  if(!rec){{ resultPanel.innerHTML = '<div class="metric">No conversion record found for this method pair.</div>'; return; }}
  const converted = val * rec.cf;
  resultPanel.innerHTML = `
    <div class="metric"><div class="big">${{fmt(converted)}}</div><p>Converted result from <strong>${{src}}</strong> to <strong>${{tgt}}</strong> for <strong>${{cat.name}}</strong>.</p></div>
    <div class="metric"><strong>Formula used</strong><p>Converted result = Original value × CF = ${{fmt(val)}} × ${{fmt(rec.cf)}}.</p><p>Source unit: ${{getUnit(cat.name, src)}} | Target unit: ${{getUnit(cat.name, tgt)}}</p></div>
    <div class="metric"><strong>Conversion factor</strong><p>CF = ${{fmt(rec.cf)}}</p><p>Dataset used: ${{rec.datasetVersion}}</p></div>
    <div class="metric"><strong>Reliability</strong><p><span class="badge ${{rec.status}}">${{statusText(rec.status)}}</span></p><p>R² = ${{fmt(rec.r2)}}</p></div>
    <div class="metric"><strong>Interpretation</strong><p>${{rec.r2 < 0.90 ? 'The workbook indicates this conversion should not be used.' : rec.r2 < 0.95 ? 'This conversion may be usable, but interpret it carefully.' : 'This conversion is strongly supported by the reported correlation.'}}</p></div>`;
}}
document.getElementById('calcBtn').addEventListener('click', calculate);
categoryEl.addEventListener('change', ()=>{{ updateMethods(); updateMatrix(); updateUnitHints(); calculate(); }});
sourceEl.addEventListener('change', ()=>{{ updateUnitHints(); calculate(); }});
targetEl.addEventListener('change', ()=>{{ updateUnitHints(); calculate(); }});
document.getElementById('themeToggle').addEventListener('click', ()=>{{ document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; }});
populateCategories();
</script></body></html>'''

(out/'lca-converter.html').write_text(html, encoding='utf-8')
print(json.dumps({'ok': True, 'folder': str(out), 'files': [str(out/'lca-converter.html'), str(out/'data.js')], 'categories': len(all_data['categories'])}, indent=2))