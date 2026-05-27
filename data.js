window.LCA_DATA = {
  "meta": {
    "sourceWorkbook": "sustainability-1289649-supplementary.xlsx",
    "notes": [
      "Note: Conversion factors (CF) with R2<0.90 cannot be used",
      "Adjustments:",
      "Climate change: adjustments are made for regression models of ILCD by removing outliers of door and fiber",
      "Acidification: No adjustment",
      "Ozone depletion: adjustments are made for regression models of EF, ReCiPe and TRACI by removing outliers of cement and fiber",
      "Eutrophication: adjustments are made for regresson models of IMPACT 2002+ by removing outlier of fiber",
      "Energy use: adjustments are made for regression models of TRACI by removing outlier of cement",
      "Resource depletion: No adjustment",
      "Smog: adjustments are made for regression models of CML, EDIP, IMPACT 2002+, ReCiPe and TRACI by removing outlier of fiber",
      "Water depletion: No adjustment",
      "Human toxicity (Cancer): No adjustment",
      "Human toxicity (Non-cancer): No adjustment",
      "Particulate matter: No adjustment",
      "Ecotoxicity: adjustments are made for regression models of EF and IMPACT 2002+ by removing outliers of fiber and cement",
      "Land use: No adjustment",
      "Ionizing radiation: No adjustment"
    ]
  },
  "categories": [
    {
      "name": "Climate change",
      "methods": [
        "CML",
        "EDIP",
        "EF",
        "EPD",
        "ILCD",
        "IMPACT2002+",
        "ReCiPe-H",
        "TRACI"
      ],
      "adjustmentNote": "Climate change: adjustments are made for regression models of ILCD by removing outliers of door and fiber",
      "hasAdjusted": false,
      "conversions": {
        "CML->CML": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EDIP": {
          "cf": 0.9877985140340528,
          "r2": 0.9999307891766295,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EF": {
          "cf": 1.0246563925493417,
          "r2": 0.9997683754672299,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EPD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->ILCD": {
          "cf": 0.1466961049262379,
          "r2": 0.06833758675410456,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->IMPACT2002+": {
          "cf": 0.9536021327161802,
          "r2": 0.9993757951221768,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->ReCiPe-H": {
          "cf": 1.0173819226510037,
          "r2": 0.9999099705409659,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->TRACI": {
          "cf": 0.9877985140340528,
          "r2": 0.9999307891766295,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->CML": {
          "cf": 1.0122821354458513,
          "r2": 0.9999307891766295,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EDIP": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EF": {
          "cf": 1.0371147908231646,
          "r2": 0.9994552171485338,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EPD": {
          "cf": 1.0122821354458513,
          "r2": 0.9999307891766295,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->ILCD": {
          "cf": 0.14687167999921596,
          "r2": 0.06684445614146636,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->IMPACT2002+": {
          "cf": 0.9655148619710319,
          "r2": 0.9997217057496623,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->ReCiPe-H": {
          "cf": 1.0297995130396842,
          "r2": 0.9996892589956832,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->TRACI": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->CML": {
          "cf": 0.9757108653563455,
          "r2": 0.9997683754672299,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EDIP": {
          "cf": 0.9636881336493713,
          "r2": 0.9994552171485338,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EF": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EPD": {
          "cf": 0.9757108653563455,
          "r2": 0.99976837546723,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->ILCD": {
          "cf": 0.14750242435813643,
          "r2": 0.07255676356308519,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->IMPACT2002+": {
          "cf": 0.9300979806337009,
          "r2": 0.9984099828623122,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->ReCiPe-H": {
          "cf": 0.9928136676804048,
          "r2": 0.9999665507233954,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->TRACI": {
          "cf": 0.9636881336493713,
          "r2": 0.9994552171485338,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->CML": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EDIP": {
          "cf": 0.9877985140340528,
          "r2": 0.9999307891766295,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EF": {
          "cf": 1.0246563925493417,
          "r2": 0.9997683754672299,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EPD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->ILCD": {
          "cf": 0.1466961049262379,
          "r2": 0.06833758675410456,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EPD->IMPACT2002+": {
          "cf": 0.9536021327161802,
          "r2": 0.9993757951221768,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->ReCiPe-H": {
          "cf": 1.0173819226510037,
          "r2": 0.9999099705409659,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->TRACI": {
          "cf": 0.9877985140340528,
          "r2": 0.9999307891766295,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->CML": {
          "cf": 0.46584458931930256,
          "r2": 0.0683375867541046,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->EDIP": {
          "cf": 0.45512147843493767,
          "r2": 0.06684445614146632,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->EF": {
          "cf": 0.491902176379942,
          "r2": 0.07255676356308521,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->EPD": {
          "cf": 0.46584458931930256,
          "r2": 0.0683375867541046,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->ILCD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->IMPACT2002+": {
          "cf": 0.4298332542033695,
          "r2": 0.06393989957716473,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->ReCiPe-H": {
          "cf": 0.48291563566683937,
          "r2": 0.07094355165960646,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->TRACI": {
          "cf": 0.45512147843493767,
          "r2": 0.06684445614146632,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->CML": {
          "cf": 1.0480007970154366,
          "r2": 0.9993757951221768,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->EDIP": {
          "cf": 1.0354286040805212,
          "r2": 0.9997217057496623,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->EF": {
          "cf": 1.0734460278927478,
          "r2": 0.9984099828623121,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->EPD": {
          "cf": 1.0480007970154366,
          "r2": 0.9993757951221768,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->ILCD": {
          "cf": 0.14875512527681817,
          "r2": 0.06393989957716463,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->IMPACT2002+": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->ReCiPe-H": {
          "cf": 1.065973196639315,
          "r2": 0.9988287533316156,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->TRACI": {
          "cf": 1.0354286040805212,
          "r2": 0.9997217057496623,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->CML": {
          "cf": 0.9828265553760671,
          "r2": 0.999909970540966,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->EDIP": {
          "cf": 0.970761052357537,
          "r2": 0.9996892589956832,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->EF": {
          "cf": 1.007204658110421,
          "r2": 0.9999665507233956,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->EPD": {
          "cf": 0.9828265553760671,
          "r2": 0.999909970540966,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->ILCD": {
          "cf": 0.14690671914493544,
          "r2": 0.07094355165960627,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->IMPACT2002+": {
          "cf": 0.937011133563785,
          "r2": 0.9988287533316157,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->ReCiPe-H": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->TRACI": {
          "cf": 0.970761052357537,
          "r2": 0.9996892589956832,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->CML": {
          "cf": 1.0122821354458513,
          "r2": 0.9999307891766295,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->EDIP": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->EF": {
          "cf": 1.0371147908231646,
          "r2": 0.9994552171485338,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->EPD": {
          "cf": 1.0122821354458513,
          "r2": 0.9999307891766295,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->ILCD": {
          "cf": 0.14687167999921596,
          "r2": 0.06684445614146636,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->IMPACT2002+": {
          "cf": 0.9655148619710319,
          "r2": 0.9997217057496623,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->ReCiPe-H": {
          "cf": 1.0297995130396842,
          "r2": 0.9996892589956832,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->TRACI": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        }
      }
    },
    {
      "name": "Acidification",
      "methods": [
        "CML",
        "EDIP",
        "EF",
        "EPD",
        "ILCD",
        "IMPACT2002+",
        "ReCiPe-H",
        "TRACI"
      ],
      "adjustmentNote": "Acidification: No adjustment",
      "hasAdjusted": false,
      "conversions": {
        "CML->CML": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EDIP": {
          "cf": 15.670226196912235,
          "r2": 0.9983339827745937,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EF": {
          "cf": 1.1624964493378227,
          "r2": 0.9998268714962634,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EPD": {
          "cf": 0.9440950958301385,
          "r2": 0.9989874082371084,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->ILCD": {
          "cf": 1.162493949134858,
          "r2": 0.9998269722270848,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->IMPACT2002+": {
          "cf": 0.9441061597416539,
          "r2": 0.9989862797111967,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->ReCiPe-H": {
          "cf": 0.8146022331841075,
          "r2": 0.9999858125562096,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->TRACI": {
          "cf": 0.9414734001016961,
          "r2": 0.9994002797990402,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->CML": {
          "cf": 0.06370897077231162,
          "r2": 0.9983339827745937,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EDIP": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EF": {
          "cf": 0.07409709838306007,
          "r2": 0.9991222117278529,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EPD": {
          "cf": 0.06022055994970011,
          "r2": 0.9997531613136649,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->ILCD": {
          "cf": 0.07409692508882412,
          "r2": 0.9991219366640842,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->IMPACT2002+": {
          "cf": 0.060221300787093555,
          "r2": 0.9997531976258437,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->ReCiPe-H": {
          "cf": 0.051900635314130895,
          "r2": 0.9984416062914655,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->TRACI": {
          "cf": 0.06003723220834019,
          "r2": 0.9996301805697756,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->CML": {
          "cf": 0.8600687529547136,
          "r2": 0.9998268714962634,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EDIP": {
          "cf": 13.483958664112418,
          "r2": 0.9991222117278529,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EF": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EPD": {
          "cf": 0.8123242860307934,
          "r2": 0.9996451685404749,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->ILCD": {
          "cf": 0.9999977988919355,
          "r2": 0.9999999999695032,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->IMPACT2002+": {
          "cf": 0.8123340005561692,
          "r2": 0.9996445188161809,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->ReCiPe-H": {
          "cf": 0.7006286958280504,
          "r2": 0.9998548391634502,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->TRACI": {
          "cf": 0.8099863470204249,
          "r2": 0.9998554560701136,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->CML": {
          "cf": 1.0581427788889244,
          "r2": 0.9989874082371084,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EDIP": {
          "cf": 16.601525494759915,
          "r2": 0.9997531613136648,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EF": {
          "cf": 1.2305986485089289,
          "r2": 0.9996451685404749,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EPD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->ILCD": {
          "cf": 1.2305958455080381,
          "r2": 0.9996450152723478,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->IMPACT2002+": {
          "cf": 1.0000122836759158,
          "r2": 0.9999999995384272,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->ReCiPe-H": {
          "cf": 0.8620146643494024,
          "r2": 0.9990872641606923,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->TRACI": {
          "cf": 0.9969730181407038,
          "r2": 0.9999116700307521,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->CML": {
          "cf": 0.860070689375345,
          "r2": 0.9998269722270848,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->EDIP": {
          "cf": 13.483986487514567,
          "r2": 0.9991219366640842,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->EF": {
          "cf": 1.0000022010824128,
          "r2": 0.9999999999695032,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->EPD": {
          "cf": 0.8123260117619321,
          "r2": 0.999645015272348,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->ILCD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->IMPACT2002+": {
          "cf": 0.8123357262453157,
          "r2": 0.9996443653940108,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->ReCiPe-H": {
          "cf": 0.7006302727820838,
          "r2": 0.9998549384934444,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->TRACI": {
          "cf": 0.8099880825482535,
          "r2": 0.9998553392180745,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->CML": {
          "cf": 1.0581291832526127,
          "r2": 0.9989862797111968,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->EDIP": {
          "cf": 16.601321867164124,
          "r2": 0.9997531976258436,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->EF": {
          "cf": 1.2305831322236527,
          "r2": 0.9996445188161809,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->EPD": {
          "cf": 0.9999877160134034,
          "r2": 0.9999999995384272,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->ILCD": {
          "cf": 1.2305803291632278,
          "r2": 0.9996443653940107,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->IMPACT2002+": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->ReCiPe-H": {
          "cf": 0.8620036211457234,
          "r2": 0.9990862107755453,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->TRACI": {
          "cf": 0.9969606159291827,
          "r2": 0.999911357832601,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->CML": {
          "cf": 1.2275755845248257,
          "r2": 0.9999858125562096,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->EDIP": {
          "cf": 19.23756039301548,
          "r2": 0.9984416062914656,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->EF": {
          "cf": 1.4270823406422912,
          "r2": 0.9998548391634502,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->EPD": {
          "cf": 1.1590142319849555,
          "r2": 0.999087264160692,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->ILCD": {
          "cf": 1.4270792703877753,
          "r2": 0.9998549384934444,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->IMPACT2002+": {
          "cf": 1.159027858198113,
          "r2": 0.9990862107755452,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->ReCiPe-H": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->TRACI": {
          "cf": 1.1557607897520643,
          "r2": 0.9994397668254107,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->CML": {
          "cf": 1.0615278983889367,
          "r2": 0.9994002797990403,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->EDIP": {
          "cf": 16.65017096559142,
          "r2": 0.9996301805697756,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->EF": {
          "cf": 1.234410258577977,
          "r2": 0.9998554560701136,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->EPD": {
          "cf": 1.0029475741435097,
          "r2": 0.999911670030752,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->ILCD": {
          "cf": 1.2344074693944769,
          "r2": 0.9998553392180745,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->IMPACT2002+": {
          "cf": 1.002959737682986,
          "r2": 0.9999113578326011,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->ReCiPe-H": {
          "cf": 0.8647462136518858,
          "r2": 0.9994397668254108,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->TRACI": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        }
      }
    },
    {
      "name": "Ozone Depletion",
      "methods": [
        "CML",
        "EDIP",
        "EF",
        "EPD",
        "ILCD",
        "IMPACT2002+",
        "ReCiPe-H",
        "TRACI"
      ],
      "adjustmentNote": "Ozone depletion: adjustments are made for regression models of EF, ReCiPe and TRACI by removing outliers of cement and fiber",
      "hasAdjusted": false,
      "conversions": {
        "CML->CML": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EDIP": {
          "cf": 0.9976671214221354,
          "r2": 0.9999781047043393,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EF": {
          "cf": 0.9424135781030151,
          "r2": 0.8047288761858841,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->EPD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->ILCD": {
          "cf": 0.9996259888749749,
          "r2": 0.9999991246961296,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->IMPACT2002+": {
          "cf": 1.0000000097466335,
          "r2": 0.9999999999999954,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->ReCiPe-H": {
          "cf": 3.358021115472218,
          "r2": 0.2988294208682656,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->TRACI": {
          "cf": 1.128188278556781,
          "r2": 0.9256887451342554,
          "datasetVersion": "original",
          "status": "caution"
        },
        "EDIP->CML": {
          "cf": 1.0023163871321226,
          "r2": 0.9999781047043393,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EDIP": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EF": {
          "cf": 0.9435094171393013,
          "r2": 0.8028600048290568,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->EPD": {
          "cf": 1.0023163871321226,
          "r2": 0.9999781047043393,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->ILCD": {
          "cf": 1.0019424098508158,
          "r2": 0.9999790262873622,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->IMPACT2002+": {
          "cf": 1.0023163966026185,
          "r2": 0.9999781041082992,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->ReCiPe-H": {
          "cf": 3.3555144397497765,
          "r2": 0.29699939261799646,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->TRACI": {
          "cf": 1.130163871108528,
          "r2": 0.9246246890533744,
          "datasetVersion": "original",
          "status": "caution"
        },
        "EF->CML": {
          "cf": 0.8539020392784699,
          "r2": 0.8047288761858841,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->EDIP": {
          "cf": 0.8509295087518148,
          "r2": 0.8028600048290568,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->EF": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EPD": {
          "cf": 0.8539020392784699,
          "r2": 0.804728876185884,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->ILCD": {
          "cf": 0.8532706836095344,
          "r2": 0.8041400186023117,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->IMPACT2002+": {
          "cf": 0.853902065492745,
          "r2": 0.8047289099084631,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->ReCiPe-H": {
          "cf": 4.901909081005919,
          "r2": 0.7027817829087558,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->TRACI": {
          "cf": 1.0971145701597937,
          "r2": 0.9661382275512247,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->CML": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EDIP": {
          "cf": 0.9976671214221354,
          "r2": 0.9999781047043393,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EF": {
          "cf": 0.9424135781030151,
          "r2": 0.8047288761858841,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EPD->EPD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->ILCD": {
          "cf": 0.9996259888749749,
          "r2": 0.9999991246961296,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->IMPACT2002+": {
          "cf": 1.0000000097466335,
          "r2": 0.9999999999999954,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->ReCiPe-H": {
          "cf": 3.358021115472218,
          "r2": 0.2988294208682656,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EPD->TRACI": {
          "cf": 1.128188278556781,
          "r2": 0.9256887451342554,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ILCD->CML": {
          "cf": 1.0003732754303187,
          "r2": 0.9999991246961296,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->EDIP": {
          "cf": 0.9980404227387221,
          "r2": 0.9999790262873623,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->EF": {
          "cf": 0.9424207746135278,
          "r2": 0.8041400186023117,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->EPD": {
          "cf": 1.0003732754303187,
          "r2": 0.9999991246961296,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->ILCD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->IMPACT2002+": {
          "cf": 1.0003732851532836,
          "r2": 0.9999991246415322,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->ReCiPe-H": {
          "cf": 3.3548983995004313,
          "r2": 0.29805108702551836,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->TRACI": {
          "cf": 1.1283587831764423,
          "r2": 0.9252768617960753,
          "datasetVersion": "original",
          "status": "caution"
        },
        "IMPACT2002+->CML": {
          "cf": 0.9999999902533622,
          "r2": 0.9999999999999954,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->EDIP": {
          "cf": 0.9976671114009061,
          "r2": 0.9999781041082992,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->EF": {
          "cf": 0.9424135886638167,
          "r2": 0.8047289099084631,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->EPD": {
          "cf": 0.9999999902533622,
          "r2": 0.9999999999999954,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->ILCD": {
          "cf": 0.9996259791046961,
          "r2": 0.9999991246415321,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->IMPACT2002+": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->ReCiPe-H": {
          "cf": 3.358021280367291,
          "r2": 0.29882945604136896,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->TRACI": {
          "cf": 1.128188279946071,
          "r2": 0.9256887654588076,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ReCiPe-H->CML": {
          "cf": 0.08898973847764008,
          "r2": 0.29882942086826564,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->EDIP": {
          "cf": 0.0885108372950838,
          "r2": 0.29699939261799685,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->EF": {
          "cf": 0.14336899589425642,
          "r2": 0.7027817829087558,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->EPD": {
          "cf": 0.08898973847764008,
          "r2": 0.29882942086826564,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->ILCD": {
          "cf": 0.08884057027476612,
          "r2": 0.2980510870255184,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->IMPACT2002+": {
          "cf": 0.08898974458216774,
          "r2": 0.29882945604136885,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->ReCiPe-H": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->TRACI": {
          "cf": 0.14209525699631678,
          "r2": 0.5541208258509038,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->CML": {
          "cf": 0.8205090965121796,
          "r2": 0.9256887451342555,
          "datasetVersion": "original",
          "status": "caution"
        },
        "TRACI->EDIP": {
          "cf": 0.8181332926051252,
          "r2": 0.9246246890533742,
          "datasetVersion": "original",
          "status": "caution"
        },
        "TRACI->EF": {
          "cf": 0.880617443090294,
          "r2": 0.9661382275512246,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->EPD": {
          "cf": 0.8205090965121796,
          "r2": 0.9256887451342555,
          "datasetVersion": "original",
          "status": "caution"
        },
        "TRACI->ILCD": {
          "cf": 0.8200200819027873,
          "r2": 0.9252768617960753,
          "datasetVersion": "original",
          "status": "caution"
        },
        "TRACI->IMPACT2002+": {
          "cf": 0.8205091135169895,
          "r2": 0.9256887654588077,
          "datasetVersion": "original",
          "status": "caution"
        },
        "TRACI->ReCiPe-H": {
          "cf": 3.899643362939744,
          "r2": 0.5541208258509036,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->TRACI": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        }
      }
    },
    {
      "name": "Eutrphoication",
      "methods": [
        "CML",
        "EDIP",
        "EF",
        "EPD",
        "ILCD",
        "IMPACT2002+",
        "ReCiPe-H",
        "TRACI"
      ],
      "adjustmentNote": "Eutrophication: adjustments are made for regresson models of IMPACT 2002+ by removing outlier of fiber",
      "hasAdjusted": false,
      "conversions": {
        "CML->CML": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EDIP": {
          "cf": 0.22166734489697656,
          "r2": 0.9944835662712407,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EF": {
          "cf": 0.2516026494689375,
          "r2": 0.9945731924896809,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EPD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->ILCD": {
          "cf": 0.25417647356049994,
          "r2": 0.9937750228303718,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->IMPACT2002+": {
          "cf": 0.12039915123928027,
          "r2": 0.918633667758462,
          "datasetVersion": "original",
          "status": "caution"
        },
        "CML->ReCiPe-H": {
          "cf": 0.25173661136075354,
          "r2": 0.9945341642694896,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->TRACI": {
          "cf": 2.0960280430970157,
          "r2": 0.9870668895155641,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->CML": {
          "cf": 4.48637830138419,
          "r2": 0.9944835662712407,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EDIP": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EF": {
          "cf": 1.1349947152034585,
          "r2": 0.9999996215798412,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EPD": {
          "cf": 4.48637830138419,
          "r2": 0.9944835662712408,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->ILCD": {
          "cf": 1.147044057767569,
          "r2": 0.9999617866738366,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->IMPACT2002+": {
          "cf": 0.548843644681833,
          "r2": 0.9431887559434867,
          "datasetVersion": "original",
          "status": "caution"
        },
        "EDIP->ReCiPe-H": {
          "cf": 1.1356214282756283,
          "r2": 0.9999998349063767,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->TRACI": {
          "cf": 9.478680825479623,
          "r2": 0.9973647926588178,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->CML": {
          "cf": 3.9529519843648138,
          "r2": 0.9945731924896809,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EDIP": {
          "cf": 0.8810610377164461,
          "r2": 0.9999996215798412,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EF": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EPD": {
          "cf": 3.9529519843648138,
          "r2": 0.9945731924896809,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->ILCD": {
          "cf": 1.0106129641471744,
          "r2": 0.9999557412652045,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->IMPACT2002+": {
          "cf": 0.48352215945852406,
          "r2": 0.9430222570572384,
          "datasetVersion": "original",
          "status": "caution"
        },
        "EF->ReCiPe-H": {
          "cf": 1.0005520068837008,
          "r2": 0.9999998819196283,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->TRACI": {
          "cf": 8.351125224514007,
          "r2": 0.9973235384770305,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->CML": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EDIP": {
          "cf": 0.22166734489697656,
          "r2": 0.9944835662712407,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EF": {
          "cf": 0.2516026494689375,
          "r2": 0.9945731924896809,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EPD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->ILCD": {
          "cf": 0.25417647356049994,
          "r2": 0.9937750228303718,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->IMPACT2002+": {
          "cf": 0.12039915123928027,
          "r2": 0.918633667758462,
          "datasetVersion": "original",
          "status": "caution"
        },
        "EPD->ReCiPe-H": {
          "cf": 0.25173661136075354,
          "r2": 0.9945341642694896,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->TRACI": {
          "cf": 2.0960280430970157,
          "r2": 0.9870668895155641,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->CML": {
          "cf": 3.909783659005052,
          "r2": 0.9937750228303718,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->EDIP": {
          "cf": 0.871772779696021,
          "r2": 0.9999617866738365,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->EF": {
          "cf": 0.9894546940717676,
          "r2": 0.9999557412652046,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->EPD": {
          "cf": 3.909783659005052,
          "r2": 0.9937750228303718,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->ILCD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->IMPACT2002+": {
          "cf": 0.4791736307407253,
          "r2": 0.9459407862080231,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ILCD->ReCiPe-H": {
          "cf": 0.990003143088103,
          "r2": 0.9999601951380167,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->TRACI": {
          "cf": 8.263335903469592,
          "r2": 0.997345984525904,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->CML": {
          "cf": 7.62990152590675,
          "r2": 0.918633667758462,
          "datasetVersion": "original",
          "status": "caution"
        },
        "IMPACT2002+->EDIP": {
          "cf": 1.7185017355721723,
          "r2": 0.943188755943487,
          "datasetVersion": "original",
          "status": "caution"
        },
        "IMPACT2002+->EF": {
          "cf": 1.9503185916303998,
          "r2": 0.9430222570572384,
          "datasetVersion": "original",
          "status": "caution"
        },
        "IMPACT2002+->EPD": {
          "cf": 7.62990152590675,
          "r2": 0.918633667758462,
          "datasetVersion": "original",
          "status": "caution"
        },
        "IMPACT2002+->ILCD": {
          "cf": 1.9741086018146523,
          "r2": 0.9459407862080231,
          "datasetVersion": "original",
          "status": "caution"
        },
        "IMPACT2002+->IMPACT2002+": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->ReCiPe-H": {
          "cf": 1.9515532653579046,
          "r2": 0.9431749421934594,
          "datasetVersion": "original",
          "status": "caution"
        },
        "IMPACT2002+->TRACI": {
          "cf": 16.256723069442206,
          "r2": 0.9369640203221674,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ReCiPe-H->CML": {
          "cf": 3.9506933810444584,
          "r2": 0.9945341642694896,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->EDIP": {
          "cf": 0.8805749962157856,
          "r2": 0.9999998349063766,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->EF": {
          "cf": 0.9994481796445628,
          "r2": 0.9999998819196283,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->EPD": {
          "cf": 3.9506933810444584,
          "r2": 0.9945341642694896,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->ILCD": {
          "cf": 1.0100575964020229,
          "r2": 0.9999601951380168,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->IMPACT2002+": {
          "cf": 0.48329449107835987,
          "r2": 0.9431749421934594,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ReCiPe-H->ReCiPe-H": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->TRACI": {
          "cf": 8.346530871894013,
          "r2": 0.9973267588462753,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->CML": {
          "cf": 0.4709225588685873,
          "r2": 0.9870668895155641,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->EDIP": {
          "cf": 0.1052218985977251,
          "r2": 0.9973647926588178,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->EF": {
          "cf": 0.11942385147686123,
          "r2": 0.9973235384770304,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->EPD": {
          "cf": 0.4709225588685873,
          "r2": 0.9870668895155641,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->ILCD": {
          "cf": 0.12069532162030844,
          "r2": 0.997345984525904,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->IMPACT2002+": {
          "cf": 0.05763547895352788,
          "r2": 0.9369640203221674,
          "datasetVersion": "original",
          "status": "caution"
        },
        "TRACI->ReCiPe-H": {
          "cf": 0.1194899742364411,
          "r2": 0.9973267588462754,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->TRACI": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        }
      }
    },
    {
      "name": "Energy Use",
      "methods": [
        "CML",
        "EDIP",
        "EF",
        "EPD",
        "ILCD",
        "IMPACT2002+",
        "ReCiPe-H",
        "TRACI"
      ],
      "adjustmentNote": "Energy use: adjustments are made for regression models of TRACI by removing outlier of cement",
      "hasAdjusted": false,
      "conversions": {
        "CML->CML": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EF": {
          "cf": 0.9684455271402461,
          "r2": 0.9980310296997743,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EPD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->IMPACT2002+": {
          "cf": 1.0406572325189871,
          "r2": 0.9971255122030608,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->ReCiPe-H": {
          "cf": 0.02338359666553166,
          "r2": 0.9995986114533336,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->TRACI": {
          "cf": 0.05254097008457919,
          "r2": 0.6046837538124065,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->CML": {
          "cf": 1.0305494751438344,
          "r2": 0.9980310296997743,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EF": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EPD": {
          "cf": 1.0305494751438344,
          "r2": 0.9980310296997743,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->IMPACT2002+": {
          "cf": 1.0749489162018266,
          "r2": 0.9998075636346285,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->ReCiPe-H": {
          "cf": 0.0241125520635896,
          "r2": 0.9988395475789612,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->TRACI": {
          "cf": 0.05572874590105333,
          "r2": 0.6392886845558277,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EPD->CML": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EF": {
          "cf": 0.9684455271402461,
          "r2": 0.9980310296997743,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EPD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->IMPACT2002+": {
          "cf": 1.0406572325189871,
          "r2": 0.9971255122030608,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->ReCiPe-H": {
          "cf": 0.02338359666553166,
          "r2": 0.9995986114533336,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->TRACI": {
          "cf": 0.05254097008457919,
          "r2": 0.6046837538124065,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->CML": {
          "cf": 0.9581690118939985,
          "r2": 0.9971255122030609,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->EF": {
          "cf": 0.9300977456373468,
          "r2": 0.9998075636346285,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->EPD": {
          "cf": 0.9581690118939985,
          "r2": 0.9971255122030609,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->IMPACT2002+": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->ReCiPe-H": {
          "cf": 0.022425194194669137,
          "r2": 0.9984838209011535,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->TRACI": {
          "cf": 0.05232634444619872,
          "r2": 0.651386124725722,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->CML": {
          "cf": 42.74785550534154,
          "r2": 0.9995986114533336,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->EF": {
          "cf": 41.42404938908261,
          "r2": 0.9988395475789612,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->EPD": {
          "cf": 42.74785550534154,
          "r2": 0.9995986114533336,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->IMPACT2002+": {
          "cf": 44.52509138754797,
          "r2": 0.9984838209011536,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->ReCiPe-H": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->TRACI": {
          "cf": 2.2803636480420164,
          "r2": 0.6230706919563714,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->CML": {
          "cf": 11.508804516532546,
          "r2": 0.6046837538124067,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->EF": {
          "cf": 11.471434969860761,
          "r2": 0.6392886845558277,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->EPD": {
          "cf": 11.508804516532546,
          "r2": 0.6046837538124067,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->IMPACT2002+": {
          "cf": 12.448531072058147,
          "r2": 0.6513861247257222,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->ReCiPe-H": {
          "cf": 0.27323304004225707,
          "r2": 0.6230706919563715,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->TRACI": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        }
      }
    },
    {
      "name": "Resource",
      "methods": [
        "CML",
        "EDIP",
        "EF",
        "EPD",
        "ILCD",
        "IMPACT2002+",
        "ReCiPe-H",
        "TRACI"
      ],
      "adjustmentNote": "Resource depletion: No adjustment",
      "hasAdjusted": false,
      "conversions": {
        "CML->CML": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EDIP": {
          "cf": 48.14048574531594,
          "r2": 0.9916550568977561,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EF": {
          "cf": 1.0000118000722527,
          "r2": 0.9999943925993703,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EPD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->ILCD": {
          "cf": 33.58897912204134,
          "r2": 0.9921352656223771,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->ReCiPe-H": {
          "cf": 732.5992230654991,
          "r2": 0.4136437014994535,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->CML": {
          "cf": 0.02059919092100653,
          "r2": 0.9916550568977561,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EDIP": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EF": {
          "cf": 0.020601365584936013,
          "r2": 0.9918354773256286,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EPD": {
          "cf": 0.02059919092100653,
          "r2": 0.9916550568977561,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->ILCD": {
          "cf": 0.690647342081984,
          "r2": 0.9802802953499737,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->ReCiPe-H": {
          "cf": 16.018013714153266,
          "r2": 0.4621374203847451,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->CML": {
          "cf": 0.9999825927325244,
          "r2": 0.9999943925993703,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EDIP": {
          "cf": 48.14416176619244,
          "r2": 0.9918354773256286,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EF": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EPD": {
          "cf": 0.9999825927325244,
          "r2": 0.9999943925993703,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->ILCD": {
          "cf": 33.58716822092706,
          "r2": 0.9920572644488059,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->ReCiPe-H": {
          "cf": 731.8450764181575,
          "r2": 0.4128045767907254,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EPD->CML": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EDIP": {
          "cf": 48.14048574531594,
          "r2": 0.9916550568977561,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EF": {
          "cf": 1.0000118000722527,
          "r2": 0.9999943925993703,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EPD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->ILCD": {
          "cf": 33.58897912204134,
          "r2": 0.9921352656223771,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->ReCiPe-H": {
          "cf": 732.5992230654991,
          "r2": 0.4136437014994535,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->CML": {
          "cf": 0.029537523662674533,
          "r2": 0.992135265622377,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->EDIP": {
          "cf": 1.419364465220238,
          "r2": 0.9802802953499737,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->EF": {
          "cf": 0.029536793870901187,
          "r2": 0.992057264448806,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->EPD": {
          "cf": 0.029537523662674533,
          "r2": 0.992135265622377,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->ILCD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->ReCiPe-H": {
          "cf": 21.912340491744462,
          "r2": 0.4208174744172289,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->CML": {
          "cf": 0.000564624815964992,
          "r2": 0.41364370149945345,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->EDIP": {
          "cf": 0.028851106549896866,
          "r2": 0.46213742038474503,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->EF": {
          "cf": 0.0005640600587368839,
          "r2": 0.4128045767907254,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->EPD": {
          "cf": 0.000564624815964992,
          "r2": 0.41364370149945345,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->ILCD": {
          "cf": 0.019204588144099574,
          "r2": 0.420817474417229,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->ReCiPe-H": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        }
      }
    },
    {
      "name": "Smog",
      "methods": [
        "CML",
        "EDIP",
        "EF",
        "EPD",
        "ILCD",
        "IMPACT2002+",
        "ReCiPe-H",
        "TRACI"
      ],
      "adjustmentNote": "Smog: adjustments are made for regression models of CML, EDIP, IMPACT 2002+, ReCiPe and TRACI by removing outlier of fiber",
      "hasAdjusted": false,
      "conversions": {
        "CML->CML": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EDIP": {
          "cf": 1.0111748728960421,
          "r2": 0.6074945019294948,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->EF": {
          "cf": 9.011042107220712,
          "r2": 0.4030265331331877,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->EPD": {
          "cf": 8.802749128294044,
          "r2": 0.35879626887766325,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->ILCD": {
          "cf": 8.626881969230192,
          "r2": 0.383215656393166,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->IMPACT2002+": {
          "cf": -0.6086555023068108,
          "r2": 0.004607775373894099,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->ReCiPe-H": {
          "cf": 7.417383281141114,
          "r2": 0.9365609020996737,
          "datasetVersion": "original",
          "status": "caution"
        },
        "CML->TRACI": {
          "cf": 186.72932661572275,
          "r2": 0.9833830519162919,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->CML": {
          "cf": 0.6007808522670346,
          "r2": 0.6074945019294948,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->EDIP": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EF": {
          "cf": 10.692351528888809,
          "r2": 0.9550810846857407,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EPD": {
          "cf": 10.954260053975924,
          "r2": 0.9351635015380751,
          "datasetVersion": "original",
          "status": "caution"
        },
        "EDIP->ILCD": {
          "cf": 10.448473692573867,
          "r2": 0.9461313330861211,
          "datasetVersion": "original",
          "status": "caution"
        },
        "EDIP->IMPACT2002+": {
          "cf": 3.9305581218700376,
          "r2": 0.32341996534947626,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->ReCiPe-H": {
          "cf": 5.337824143005287,
          "r2": 0.8163441621356733,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->TRACI": {
          "cf": 105.17115568028838,
          "r2": 0.5250505720419001,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->CML": {
          "cf": 0.04472585172032828,
          "r2": 0.4030265331331877,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->EDIP": {
          "cf": 0.08932376401068405,
          "r2": 0.9550810846857407,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EF": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EPD": {
          "cf": 1.0342439009510263,
          "r2": 0.9978691693469753,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->ILCD": {
          "cf": 0.9815854504427267,
          "r2": 0.9995583603333117,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->IMPACT2002+": {
          "cf": 0.4579954235253484,
          "r2": 0.5256381410032209,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->ReCiPe-H": {
          "cf": 0.43135276047687476,
          "r2": 0.6381402591674997,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->TRACI": {
          "cf": 7.556713669214828,
          "r2": 0.32447406521799005,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EPD->CML": {
          "cf": 0.040759569953483114,
          "r2": 0.35879626887766347,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EPD->EDIP": {
          "cf": 0.08536984670166299,
          "r2": 0.9351635015380753,
          "datasetVersion": "original",
          "status": "caution"
        },
        "EPD->EF": {
          "cf": 0.9648296387625753,
          "r2": 0.9978691693469754,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EPD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->ILCD": {
          "cf": 0.9479215510364136,
          "r2": 0.9992382672062406,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->IMPACT2002+": {
          "cf": 0.46124924749282986,
          "r2": 0.5714895158245704,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EPD->ReCiPe-H": {
          "cf": 0.4017571313453361,
          "r2": 0.5934040446284339,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EPD->TRACI": {
          "cf": 6.806744449736686,
          "r2": 0.28220537459834294,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->CML": {
          "cf": 0.044421108085168574,
          "r2": 0.38321565639316624,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->EDIP": {
          "cf": 0.09055210942040018,
          "r2": 0.9461313330861211,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ILCD->EF": {
          "cf": 1.0183100817992758,
          "r2": 0.9995583603333117,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->EPD": {
          "cf": 1.0541360370103623,
          "r2": 0.9992382672062405,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->ILCD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->IMPACT2002+": {
          "cf": 0.4751869891196503,
          "r2": 0.5454334199738715,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->ReCiPe-H": {
          "cf": 0.43267362094248746,
          "r2": 0.6188991499072987,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->TRACI": {
          "cf": 7.474033435424491,
          "r2": 0.3059653161053941,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->CML": {
          "cf": -0.007570416034079713,
          "r2": 0.004607775373894445,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->EDIP": {
          "cf": 0.08228347102919903,
          "r2": 0.32341996534947626,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->EF": {
          "cf": 1.1476929986706055,
          "r2": 0.5256381410032209,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->EPD": {
          "cf": 1.239003681699132,
          "r2": 0.5714895158245704,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->ILCD": {
          "cf": 1.147829028282872,
          "r2": 0.5454334199738714,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->IMPACT2002+": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->ReCiPe-H": {
          "cf": 0.14113719117319923,
          "r2": 0.027262729047498498,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->TRACI": {
          "cf": -3.2089893643732657,
          "r2": 0.02334995339089031,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->CML": {
          "cf": 0.12626567437615138,
          "r2": 0.9365609020996737,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ReCiPe-H->EDIP": {
          "cf": 0.15293575439449694,
          "r2": 0.8163441621356733,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->EF": {
          "cf": 1.4793930110984206,
          "r2": 0.6381402591674996,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->EPD": {
          "cf": 1.4770218082784075,
          "r2": 0.5934040446284339,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->ILCD": {
          "cf": 1.4304064771944234,
          "r2": 0.6188991499072986,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->IMPACT2002+": {
          "cf": 0.1931647414893116,
          "r2": 0.02726272904749842,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->ReCiPe-H": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->TRACI": {
          "cf": 23.325647074065564,
          "r2": 0.9014268214233725,
          "datasetVersion": "original",
          "status": "caution"
        },
        "TRACI->CML": {
          "cf": 0.005266355691090945,
          "r2": 0.9833830519162918,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->EDIP": {
          "cf": 0.0049923438479463934,
          "r2": 0.5250505720419002,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->EF": {
          "cf": 0.042938515262244216,
          "r2": 0.32447406521799,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->EPD": {
          "cf": 0.04145966940322846,
          "r2": 0.2822053745983431,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->ILCD": {
          "cf": 0.04093710828951047,
          "r2": 0.30596531610539407,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->IMPACT2002+": {
          "cf": -0.0072764196884307,
          "r2": 0.023349953390890264,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->ReCiPe-H": {
          "cf": 0.038645308254947275,
          "r2": 0.9014268214233725,
          "datasetVersion": "original",
          "status": "caution"
        },
        "TRACI->TRACI": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        }
      }
    },
    {
      "name": "Water",
      "methods": [
        "CML",
        "EDIP",
        "EF",
        "EPD",
        "ILCD",
        "IMPACT2002+",
        "ReCiPe-H",
        "TRACI"
      ],
      "adjustmentNote": "Water depletion: No adjustment",
      "hasAdjusted": false,
      "conversions": {
        "CML->CML": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EDIP": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EF": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->EPD": {
          "cf": 0.9793262289758443,
          "r2": 0.9998850137315931,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->ILCD": {
          "cf": -0.04624281313449759,
          "r2": 0.02876767732143073,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->ReCiPe-H": {
          "cf": 0.034208304930212,
          "r2": 0.986811573378791,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EF": {
          "cf": 1.0209927847814806,
          "r2": 0.999885013731593,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->EPD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EPD->ILCD": {
          "cf": -0.04764413326094657,
          "r2": 0.02929138325015561,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EPD->ReCiPe-H": {
          "cf": 0.03496048977947041,
          "r2": 0.988623328791002,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->EF": {
          "cf": -0.6221005032232718,
          "r2": 0.0287676773214306,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->EPD": {
          "cf": -0.6147951750895931,
          "r2": 0.02929138325015525,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->ILCD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->ReCiPe-H": {
          "cf": -0.023487510860427982,
          "r2": 0.03458030392285567,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->IMPACT2002+": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->EF": {
          "cf": 28.847134501167922,
          "r2": 0.9868115733787911,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->EPD": {
          "cf": 28.27830316529329,
          "r2": 0.9886233287910019,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->ILCD": {
          "cf": -1.4722847443624516,
          "r2": 0.03458030392285548,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->ReCiPe-H": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->TRACI": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        }
      }
    },
    {
      "name": "Human Toxicity (Cancer)",
      "methods": [
        "CML",
        "EDIP",
        "EF",
        "EPD",
        "ILCD",
        "IMPACT2002+",
        "ReCiPe-H",
        "TRACI"
      ],
      "adjustmentNote": "Human toxicity (Cancer): No adjustment",
      "hasAdjusted": false,
      "conversions": {
        "CML->CML": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EDIP": {
          "cf": 169977.25836866364,
          "r2": 0.828687454023192,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->EF": {
          "cf": 2.8039270343292164e-08,
          "r2": 0.4599477725502842,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->ILCD": {
          "cf": 1.5649710764534558e-07,
          "r2": 0.6830141320616641,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->IMPACT2002+": {
          "cf": -2.6609189146541468,
          "r2": 0.19934643918768583,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->ReCiPe-H": {
          "cf": 0.10452354884554566,
          "r2": 0.6638841561616957,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->TRACI": {
          "cf": 1.5650858276813753e-07,
          "r2": 0.6830099028901678,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->CML": {
          "cf": 4.8752842702395626e-06,
          "r2": 0.828687454023192,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->EDIP": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EF": {
          "cf": 1.0467504104994379e-13,
          "r2": 0.22348699709171135,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->ILCD": {
          "cf": 6.325231912458678e-13,
          "r2": 0.3890100683694485,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->IMPACT2002+": {
          "cf": -4.165491552951833e-06,
          "r2": 0.017032115507696663,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->ReCiPe-H": {
          "cf": 4.183233088628229e-07,
          "r2": 0.3707481691191889,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->TRACI": {
          "cf": 6.325667345232688e-13,
          "r2": 0.3890041711195126,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->CML": {
          "cf": 16403699.772462785,
          "r2": 0.4599477725502842,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->EDIP": {
          "cf": 2135055261025.2017,
          "r2": 0.22348699709171135,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->EF": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->ILCD": {
          "cf": 4.437413977001766,
          "r2": 0.9386,
          "datasetVersion": "original",
          "status": "caution"
        },
        "EF->IMPACT2002+": {
          "cf": -28508846.89727826,
          "r2": 0.0391137450372124,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->ReCiPe-H": {
          "cf": 3006838.848602621,
          "r2": 0.9390943163099582,
          "datasetVersion": "original",
          "status": "caution"
        },
        "EF->TRACI": {
          "cf": 4.437757472923964,
          "r2": 0.9386,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ILCD->CML": {
          "cf": 4364388.213547777,
          "r2": 0.6830141320616641,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->EDIP": {
          "cf": 615013131144.2089,
          "r2": 0.38901006836944857,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->EF": {
          "cf": 0.21152996704213278,
          "r2": 0.9386,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ILCD->ILCD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->IMPACT2002+": {
          "cf": -9988728.703816757,
          "r2": 0.10072762124366302,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->ReCiPe-H": {
          "cf": 676936.8039701749,
          "r2": 0.9984888169114248,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->TRACI": {
          "cf": 1.0000764209950654,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->CML": {
          "cf": -0.07491639000717021,
          "r2": 0.19934643918768605,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->EDIP": {
          "cf": -4088.8608922102176,
          "r2": 0.017032115507696843,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->EF": {
          "cf": -1.3719862181078476e-09,
          "r2": 0.03911374503721258,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->ILCD": {
          "cf": -1.0084128243985077e-08,
          "r2": 0.10072762124366309,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->IMPACT2002+": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->ReCiPe-H": {
          "cf": -0.006612339039884891,
          "r2": 0.09436893118370417,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->TRACI": {
          "cf": -1.0084996020410196e-08,
          "r2": 0.10072956165480983,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->CML": {
          "cf": 6.351527129476982,
          "r2": 0.6638841561616955,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->EDIP": {
          "cf": 886271.8410959144,
          "r2": 0.37074816911918906,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->EF": {
          "cf": 3.1231947024576546e-07,
          "r2": 0.9390943163099581,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ReCiPe-H->ILCD": {
          "cf": 1.4750103865757866e-06,
          "r2": 0.9984888169114248,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->IMPACT2002+": {
          "cf": -14.271641338183283,
          "r2": 0.0943689311837043,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->ReCiPe-H": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->TRACI": {
          "cf": 1.4751231458259158e-06,
          "r2": 0.9984888675991042,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->CML": {
          "cf": 4364041.197037897,
          "r2": 0.6830099028901676,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->EDIP": {
          "cf": 614961473452.5737,
          "r2": 0.38900417111951274,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->EF": {
          "cf": 0.21151401190098199,
          "r2": 0.9386,
          "datasetVersion": "original",
          "status": "caution"
        },
        "TRACI->ILCD": {
          "cf": 0.9999235847812217,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->IMPACT2002+": {
          "cf": -9988061.61657889,
          "r2": 0.10072956165480959,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->ReCiPe-H": {
          "cf": 676885.0928985012,
          "r2": 0.9984888675991043,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->TRACI": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        }
      }
    },
    {
      "name": "Human Toxicity (Non-cancer)",
      "methods": [
        "CML",
        "EDIP",
        "EF",
        "EPD",
        "ILCD",
        "IMPACT2002+",
        "ReCiPe-H",
        "TRACI"
      ],
      "adjustmentNote": "Human toxicity (Cancer): No adjustment",
      "hasAdjusted": false,
      "conversions": {
        "CML->CML": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EDIP": {
          "cf": 169977.25836866364,
          "r2": 0.828687454023192,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->EF": {
          "cf": 1.8013119848471052e-07,
          "r2": 0.6068221113721722,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->ILCD": {
          "cf": 5.027782365376477e-07,
          "r2": 0.8030923015969104,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->IMPACT2002+": {
          "cf": 0.025401235736554166,
          "r2": 0.2249639421311929,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->ReCiPe-H": {
          "cf": 1.321837316703114,
          "r2": 0.8816735957061257,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->TRACI": {
          "cf": 5.027929955728957e-07,
          "r2": 0.8030852475586393,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->CML": {
          "cf": 4.8752842702395626e-06,
          "r2": 0.828687454023192,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->EDIP": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EF": {
          "cf": 7.020083333954357e-13,
          "r2": 0.3213356657285863,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->ILCD": {
          "cf": 2.1787972833758047e-12,
          "r2": 0.5258199366375508,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->IMPACT2002+": {
          "cf": 8.930206312400606e-08,
          "r2": 0.09694314052071606,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->ReCiPe-H": {
          "cf": 6.097149819318533e-06,
          "r2": 0.6540281298737178,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->TRACI": {
          "cf": 2.1788451766195427e-12,
          "r2": 0.5258075641524275,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->CML": {
          "cf": 3368778.515198072,
          "r2": 0.6068221113721722,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->EDIP": {
          "cf": 457737679799.8499,
          "r2": 0.3213356657285863,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->EF": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->ILCD": {
          "cf": 2.3292053350819786,
          "r2": 0.9216044314574569,
          "datasetVersion": "original",
          "status": "caution"
        },
        "EF->IMPACT2002+": {
          "cf": 144613.078920942,
          "r2": 0.3898834936307036,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->ReCiPe-H": {
          "cf": 5276872.627640743,
          "r2": 0.7513140680809631,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->TRACI": {
          "cf": 2.329281533748892,
          "r2": 0.9216025284680758,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ILCD->CML": {
          "cf": 1597309.1976441897,
          "r2": 0.8030923015969105,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->EDIP": {
          "cf": 241334951465.9074,
          "r2": 0.5258199366375509,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->EF": {
          "cf": 0.3956733301166941,
          "r2": 0.9216044314574567,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ILCD->ILCD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->IMPACT2002+": {
          "cf": 45668.8691463146,
          "r2": 0.2288923179281844,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->ReCiPe-H": {
          "cf": 2437977.9839393217,
          "r2": 0.9440583874524026,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ILCD->TRACI": {
          "cf": 1.0000337466900615,
          "r2": 0.9999999995476037,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->CML": {
          "cf": 8.856417241443648,
          "r2": 0.22496394213119272,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->EDIP": {
          "cf": 1085564.3994036235,
          "r2": 0.09694314052071627,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->EF": {
          "cf": 2.6960458662514725e-06,
          "r2": 0.38988349363070357,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->ILCD": {
          "cf": 5.011998812470168e-06,
          "r2": 0.22889231792818446,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->IMPACT2002+": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->ReCiPe-H": {
          "cf": 8.53741250876203,
          "r2": 0.1054875307938673,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->TRACI": {
          "cf": 5.012043917173259e-06,
          "r2": 0.22888098939245813,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->CML": {
          "cf": 0.6670061319687725,
          "r2": 0.8816735957061256,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->EDIP": {
          "cf": 107267.84633066748,
          "r2": 0.654028129873718,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->EF": {
          "cf": 1.4237866272259647e-07,
          "r2": 0.7513140680809632,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->ILCD": {
          "cf": 3.87230070850344e-07,
          "r2": 0.9440583874524027,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ReCiPe-H->IMPACT2002+": {
          "cf": 0.01235591353769117,
          "r2": 0.10548753079386695,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->ReCiPe-H": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->TRACI": {
          "cf": 3.87243579475525e-07,
          "r2": 0.9440605367239583,
          "datasetVersion": "original",
          "status": "caution"
        },
        "TRACI->CML": {
          "cf": 1597248.2803655262,
          "r2": 0.8030852475586393,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->EDIP": {
          "cf": 241323968217.05927,
          "r2": 0.5258075641524276,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->EF": {
          "cf": 0.3956595693199828,
          "r2": 0.9216025284680758,
          "datasetVersion": "original",
          "status": "caution"
        },
        "TRACI->ILCD": {
          "cf": 0.9999662539963582,
          "r2": 0.9999999995476035,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->IMPACT2002+": {
          "cf": 45666.19789747265,
          "r2": 0.22888098939245816,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->ReCiPe-H": {
          "cf": 2437898.4875684055,
          "r2": 0.9440605367239582,
          "datasetVersion": "original",
          "status": "caution"
        },
        "TRACI->TRACI": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        }
      }
    },
    {
      "name": "Particulate Matter",
      "methods": [
        "CML",
        "EDIP",
        "EF",
        "EPD",
        "ILCD",
        "IMPACT2002+",
        "ReCiPe-H",
        "TRACI"
      ],
      "adjustmentNote": "Particulate matter: No adjustment",
      "hasAdjusted": false,
      "conversions": {
        "EF->ILCD": {
          "cf": 5055.329764983504,
          "r2": 0.7507602362193135,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->IMPACT2002+": {
          "cf": 6198.221512361311,
          "r2": 0.5161417453070211,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->ReCiPe-H": {
          "cf": 7822.243932502227,
          "r2": 0.40939029492025186,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->TRACI": {
          "cf": 7092.821820238664,
          "r2": 0.6427521052093562,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->EF": {
          "cf": 0.00014850865742123618,
          "r2": 0.7507602362193136,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->ILCD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->IMPACT2002+": {
          "cf": 1.427650473686861,
          "r2": 0.9321296143197281,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ILCD->ReCiPe-H": {
          "cf": 1.8417584886617462,
          "r2": 0.7725701278147034,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->TRACI": {
          "cf": 1.4818105548796654,
          "r2": 0.9549672853306737,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->EF": {
          "cf": 8.327255556737735e-05,
          "r2": 0.5161417453070212,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->ILCD": {
          "cf": 0.6529116415396365,
          "r2": 0.9321296143197282,
          "datasetVersion": "original",
          "status": "caution"
        },
        "IMPACT2002+->IMPACT2002+": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->ReCiPe-H": {
          "cf": 1.3245026401948945,
          "r2": 0.8736665123687168,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->TRACI": {
          "cf": 0.9903131915950767,
          "r2": 0.932643646648994,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ReCiPe-H->EF": {
          "cf": 5.2336682217131205e-05,
          "r2": 0.4093902949202518,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->ILCD": {
          "cf": 0.41947417784188756,
          "r2": 0.7725701278147034,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->IMPACT2002+": {
          "cf": 0.6596185510360033,
          "r2": 0.8736665123687168,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->ReCiPe-H": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->TRACI": {
          "cf": 0.5952022058451826,
          "r2": 0.6764872862838098,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->EF": {
          "cf": 9.062008344483246e-05,
          "r2": 0.6427521052093562,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->ILCD": {
          "cf": 0.6444597672664198,
          "r2": 0.9549672853306735,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->IMPACT2002+": {
          "cf": 0.9417663569105893,
          "r2": 0.9326436466489939,
          "datasetVersion": "original",
          "status": "caution"
        },
        "TRACI->ReCiPe-H": {
          "cf": 1.1365671693423967,
          "r2": 0.6764872862838098,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->TRACI": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        }
      }
    },
    {
      "name": "Ecotoxicity",
      "methods": [
        "CML",
        "EDIP",
        "EF",
        "EPD",
        "ILCD",
        "IMPACT2002+",
        "ReCiPe-H",
        "TRACI"
      ],
      "adjustmentNote": "Ecotoxicity: adjustments are made for regression models of EF and IMPACT 2002+ by removing outliers of fiber and cement",
      "hasAdjusted": false,
      "conversions": {
        "CML->CML": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EDIP": {
          "cf": 2455.453903222831,
          "r2": 0.9799649720901286,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->EF": {
          "cf": 1.2364636286168904,
          "r2": 0.7321475516395537,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->ILCD": {
          "cf": 15.836416044713898,
          "r2": 0.9772107681171631,
          "datasetVersion": "original",
          "status": "usable"
        },
        "CML->IMPACT2002+": {
          "cf": -741.8852009047445,
          "r2": 0.179467784673108,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "CML->ReCiPe-H": {
          "cf": 0.05044707804111966,
          "r2": 0.9240769792162117,
          "datasetVersion": "original",
          "status": "caution"
        },
        "CML->TRACI": {
          "cf": 15.721643950764593,
          "r2": 0.9767300529923537,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->CML": {
          "cf": 0.00039909727924596983,
          "r2": 0.9799649720901286,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EDIP": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->EF": {
          "cf": 0.00046963142911522066,
          "r2": 0.6498352235046284,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->ILCD": {
          "cf": 0.006397006971378322,
          "r2": 0.981027326421361,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->IMPACT2002+": {
          "cf": -0.3427887097714265,
          "r2": 0.23573231616172002,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EDIP->ReCiPe-H": {
          "cf": 2.091265239154912e-05,
          "r2": 0.9770288189588243,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EDIP->TRACI": {
          "cf": 0.006349930771065954,
          "r2": 0.9803240043760371,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->CML": {
          "cf": 0.5921302775873274,
          "r2": 0.7321475516395537,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->EDIP": {
          "cf": 1383.7132338627957,
          "r2": 0.6498352235046284,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->EF": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->ILCD": {
          "cf": 8.654430179400858,
          "r2": 0.6094182739548611,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->IMPACT2002+": {
          "cf": -553.2883744975775,
          "r2": 0.2084396108135208,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->ReCiPe-H": {
          "cf": 0.02599524352203518,
          "r2": 0.512375052776211,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "EF->TRACI": {
          "cf": 8.586872122466396,
          "r2": 0.6084329221272404,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->CML": {
          "cf": 0.0617065607115917,
          "r2": 0.977210768117163,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->EDIP": {
          "cf": 153.35723891043153,
          "r2": 0.981027326421361,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->EF": {
          "cf": 0.07041691495823597,
          "r2": 0.609418273954861,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->ILCD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->IMPACT2002+": {
          "cf": -46.761154357080805,
          "r2": 0.18298230550531303,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ILCD->ReCiPe-H": {
          "cf": 0.003206405673609639,
          "r2": 0.9580730337638043,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->TRACI": {
          "cf": 0.9929933989376516,
          "r2": 0.9999929130030393,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->CML": {
          "cf": -0.0002419077566909859,
          "r2": 0.17946778467310806,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->EDIP": {
          "cf": -0.687689849292025,
          "r2": 0.23573231616172002,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->EF": {
          "cf": -0.0003767287013807182,
          "r2": 0.20843961081352072,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->ILCD": {
          "cf": -0.003913126355008493,
          "r2": 0.18298230550531305,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->IMPACT2002+": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->ReCiPe-H": {
          "cf": -1.502670156028697e-05,
          "r2": 0.25144925567167387,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "IMPACT2002+->TRACI": {
          "cf": -0.0038777762774180697,
          "r2": 0.18223468917850869,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->CML": {
          "cf": 18.317750305835204,
          "r2": 0.9240769792162118,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ReCiPe-H->EDIP": {
          "cf": 46719.50743816912,
          "r2": 0.9770288189588243,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->EF": {
          "cf": 19.710338637216065,
          "r2": 0.5123750527762108,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->ILCD": {
          "cf": 298.79969389065013,
          "r2": 0.9580730337638044,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->IMPACT2002+": {
          "cf": -16733.496347342883,
          "r2": 0.25144925567167387,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "ReCiPe-H->ReCiPe-H": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->TRACI": {
          "cf": 296.5967189798473,
          "r2": 0.957359837280865,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->CML": {
          "cf": 0.062126458025075215,
          "r2": 0.9767300529923537,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->EDIP": {
          "cf": 154.38341609060905,
          "r2": 0.980324004376037,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->EF": {
          "cf": 0.07085617596835492,
          "r2": 0.6084329221272405,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->ILCD": {
          "cf": 1.0070489029160477,
          "r2": 0.9999929130030392,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->IMPACT2002+": {
          "cf": -46.99463716866243,
          "r2": 0.1822346891785087,
          "datasetVersion": "original",
          "status": "not_recommended"
        },
        "TRACI->ReCiPe-H": {
          "cf": 0.0032278166817681967,
          "r2": 0.957359837280865,
          "datasetVersion": "original",
          "status": "usable"
        },
        "TRACI->TRACI": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        }
      }
    },
    {
      "name": "Land Use",
      "methods": [
        "CML",
        "EDIP",
        "EF",
        "EPD",
        "ILCD",
        "IMPACT2002+",
        "ReCiPe-H",
        "TRACI"
      ],
      "adjustmentNote": "Land use: No adjustment",
      "hasAdjusted": false,
      "conversions": {
        "EF->ILCD": {
          "cf": 0.041780000985591904,
          "r2": 0.9578180638184363,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->IMPACT2002+": {
          "cf": 0.0014434086935902228,
          "r2": 0.9122934086617175,
          "datasetVersion": "original",
          "status": "caution"
        },
        "EF->ReCiPe-H": {
          "cf": 0.0038907693109634938,
          "r2": 0.9756587003045772,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->EF": {
          "cf": 22.92527623799592,
          "r2": 0.9578180638184363,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->ILCD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->IMPACT2002+": {
          "cf": 0.03510960611666118,
          "r2": 0.9836977696914011,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->ReCiPe-H": {
          "cf": 0.09186621271182757,
          "r2": 0.9912711160816459,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->EF": {
          "cf": 632.0409546602838,
          "r2": 0.9122934086617176,
          "datasetVersion": "original",
          "status": "caution"
        },
        "IMPACT2002+->ILCD": {
          "cf": 28.017909583570905,
          "r2": 0.9836977696914012,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->IMPACT2002+": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->ReCiPe-H": {
          "cf": 2.5789513437290164,
          "r2": 0.9789428792672662,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->EF": {
          "cf": 250.76241286147322,
          "r2": 0.9756587003045772,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->ILCD": {
          "cf": 10.790377515519612,
          "r2": 0.9912711160816459,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->IMPACT2002+": {
          "cf": 0.37958951092569687,
          "r2": 0.9789428792672662,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ReCiPe-H->ReCiPe-H": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        }
      }
    },
    {
      "name": "Ionizing Radiation",
      "methods": [
        "CML",
        "EDIP",
        "EF",
        "EPD",
        "ILCD",
        "IMPACT2002+",
        "ReCiPe-H",
        "TRACI"
      ],
      "adjustmentNote": "Ionizing radiation: No adjustment",
      "hasAdjusted": false,
      "conversions": {
        "EF->EF": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->ILCD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->IMPACT2002+": {
          "cf": 101.49764357950932,
          "r2": 0.9999771946297623,
          "datasetVersion": "original",
          "status": "usable"
        },
        "EF->ReCiPe-H": {
          "cf": 0.7784195869396894,
          "r2": 0.926514812299807,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ILCD->EF": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->ILCD": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->IMPACT2002+": {
          "cf": 101.49764357950932,
          "r2": 0.9999771946297623,
          "datasetVersion": "original",
          "status": "usable"
        },
        "ILCD->ReCiPe-H": {
          "cf": 0.7784195869396894,
          "r2": 0.926514812299807,
          "datasetVersion": "original",
          "status": "caution"
        },
        "IMPACT2002+->EF": {
          "cf": 0.009852220794135176,
          "r2": 0.9999771946297623,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->ILCD": {
          "cf": 0.009852220794135176,
          "r2": 0.9999771946297623,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->IMPACT2002+": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        },
        "IMPACT2002+->ReCiPe-H": {
          "cf": 0.007679338377971141,
          "r2": 0.9289541703159232,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ReCiPe-H->EF": {
          "cf": 1.1902511548332757,
          "r2": 0.9265148122998069,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ReCiPe-H->ILCD": {
          "cf": 1.1902511548332757,
          "r2": 0.9265148122998069,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ReCiPe-H->IMPACT2002+": {
          "cf": 120.96799549564189,
          "r2": 0.9289541703159231,
          "datasetVersion": "original",
          "status": "caution"
        },
        "ReCiPe-H->ReCiPe-H": {
          "cf": 1.0,
          "r2": 1.0,
          "datasetVersion": "original",
          "status": "usable"
        }
      }
    }
  ]
};