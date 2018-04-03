import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import FoodSelector from './components/FoodSelector'
import DailyFoods from './components/DailyFoods'


let sampleProps = {
  "searchedFood": {
    "ndbno": "45174798",
    "name": "A CHRISTMAS TRADITION MUG SET, UPC: 041376400094",
    "ds": "LI",
    "manu": "THE ELF ON THE SHELF",
    "ru": "g",
    "ing": {
      "desc": "COCOA INGREDIENTS: SUGAR, CORN SYRUP SOLIDS, DAIRY PRODUCT SOLIDS (FROM MILK), VEGETABLE OIL (PARTIALLY HYDROGENATED COCONUT OR PALM KERNEL AND HYDROGENATED SOYBEAN), MARSHMALLOWS (SUGAR, CORN SYRUP, DEXTROSE, MODIFIED CORN STARCH, GELATIN, ARTIFICIAL AND NATURAL FLAVOR), COCOA PROCESSED WITH ALKALI, AND LESS THAN 2% OF SALT, CELLULOSE GUM, SODIUM CASEINATE, DIPOTASSIUM PHOSPHATE, SODIUM ALUMINOSILICATE, MONO- AND DIGLYCERIDES, GUAR GUM, ARTIFICIAL FLAVOR, SUCRALOSE., MARSHMALLOW INGREDIENTS: CORN SYRUP, SUGAR, SORBITOL, GELATIN, MODIFIED CORN STARCH, ARTIFICIAL FLAVOR, CITRIC ACID.",
      "upd": "07/14/2017"
    },
    "nutrients": [
      {
        "nutrient_id": "208",
        "name": "Energy",
        "derivation": "LCCS",
        "group": "Proximates",
        "unit": "kcal",
        "value": "400",
        "measures": [
          {
            "label": "PACKAGE",
            "eqv": 20,
            "eunit": "g",
            "qty": 1,
            "value": "80"
          }
        ]
      },
      {
        "nutrient_id": "203",
        "name": "Protein",
        "derivation": "LCSL",
        "group": "Proximates",
        "unit": "g",
        "value": "5.00",
        "measures": [
          {
            "label": "PACKAGE",
            "eqv": 20,
            "eunit": "g",
            "qty": 1,
            "value": "1.00"
          }
        ]
      },
      {
        "nutrient_id": "204",
        "name": "Total lipid (fat)",
        "derivation": "LCCS",
        "group": "Proximates",
        "unit": "g",
        "value": "10.00",
        "measures": [
          {
            "label": "PACKAGE",
            "eqv": 20,
            "eunit": "g",
            "qty": 1,
            "value": "2.00"
          }
        ]
      },
      {
        "nutrient_id": "205",
        "name": "Carbohydrate, by difference",
        "derivation": "LCCS",
        "group": "Proximates",
        "unit": "g",
        "value": "80.00",
        "measures": [
          {
            "label": "PACKAGE",
            "eqv": 20,
            "eunit": "g",
            "qty": 1,
            "value": "16.00"
          }
        ]
      },
      {
        "nutrient_id": "291",
        "name": "Fiber, total dietary",
        "derivation": "LCSL",
        "group": "Proximates",
        "unit": "g",
        "value": "5.0",
        "measures": [
          {
            "label": "PACKAGE",
            "eqv": 20,
            "eunit": "g",
            "qty": 1,
            "value": "1.0"
          }
        ]
      },
      {
        "nutrient_id": "269",
        "name": "Sugars, total",
        "derivation": "LCCS",
        "group": "Proximates",
        "unit": "g",
        "value": "60.00",
        "measures": [
          {
            "label": "PACKAGE",
            "eqv": 20,
            "eunit": "g",
            "qty": 1,
            "value": "12.00"
          }
        ]
      },
      {
        "nutrient_id": "301",
        "name": "Calcium, Ca",
        "derivation": "LCCD",
        "group": "Minerals",
        "unit": "mg",
        "value": "0",
        "measures": [
          {
            "label": "PACKAGE",
            "eqv": 20,
            "eunit": "g",
            "qty": 1,
            "value": "0"
          }
        ]
      },
      {
        "nutrient_id": "303",
        "name": "Iron, Fe",
        "derivation": "LCCD",
        "group": "Minerals",
        "unit": "mg",
        "value": "0.00",
        "measures": [
          {
            "label": "PACKAGE",
            "eqv": 20,
            "eunit": "g",
            "qty": 1,
            "value": "0.00"
          }
        ]
      },
      {
        "nutrient_id": "307",
        "name": "Sodium, Na",
        "derivation": "LCCS",
        "group": "Minerals",
        "unit": "mg",
        "value": "850",
        "measures": [
          {
            "label": "PACKAGE",
            "eqv": 20,
            "eunit": "g",
            "qty": 1,
            "value": "170"
          }
        ]
      },
      {
        "nutrient_id": "401",
        "name": "Vitamin C, total ascorbic acid",
        "derivation": "LCCD",
        "group": "Vitamins",
        "unit": "mg",
        "value": "0.0",
        "measures": [
          {
            "label": "PACKAGE",
            "eqv": 20,
            "eunit": "g",
            "qty": 1,
            "value": "0.0"
          }
        ]
      },
      {
        "nutrient_id": "318",
        "name": "Vitamin A, IU",
        "derivation": "LCCD",
        "group": "Vitamins",
        "unit": "IU",
        "value": "0",
        "measures": [
          {
            "label": "PACKAGE",
            "eqv": 20,
            "eunit": "g",
            "qty": 1,
            "value": "0"
          }
        ]
      },
      {
        "nutrient_id": "606",
        "name": "Fatty acids, total saturated",
        "derivation": "LCCS",
        "group": "Lipids",
        "unit": "g",
        "value": "10.000",
        "measures": [
          {
            "label": "PACKAGE",
            "eqv": 20,
            "eunit": "g",
            "qty": 1,
            "value": "2.000"
          }
        ]
      },
      {
        "nutrient_id": "605",
        "name": "Fatty acids, total trans",
        "derivation": "LCCS",
        "group": "Lipids",
        "unit": "g",
        "value": "0.000",
        "measures": [
          {
            "label": "PACKAGE",
            "eqv": 20,
            "eunit": "g",
            "qty": 1,
            "value": "0.000"
          }
        ]
      },
      {
        "nutrient_id": "601",
        "name": "Cholesterol",
        "derivation": "LCCS",
        "group": "Lipids",
        "unit": "mg",
        "value": "0",
        "measures": [
          {
            "label": "PACKAGE",
            "eqv": 20,
            "eunit": "g",
            "qty": 1,
            "value": "0"
          }
        ]
      }
    ]
  },
  "searchOrDaily": true,
  "day": "March 15, 2018"
}

ReactDOM.render(<DailyFoods />, document.getElementById('root'));
registerServiceWorker();
