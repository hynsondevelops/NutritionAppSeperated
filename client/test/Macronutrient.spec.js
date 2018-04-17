import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect, assert } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import Macronutrient from '../src/components/Macronutrient.js';
import {dailyDietData} from './data/FoodPortion.js';
const foodPortions = JSON.parse(dailyDietData)["food_portions"]
let sampleProps = {
  "dailyDiet": {
    "id": 1,
    "date": "2018-03-29T00:00:00.000Z",
    "admin_user_id": 1,
    "created_at": "2018-04-02T22:51:08.113Z",
    "updated_at": "2018-04-02T22:51:08.113Z",
    "food_portions": [
      {
        "id": 3,
        "daily_diet_id": 1,
        "food_id": 6,
        "quantity": "2.0",
        "created_at": "2018-04-03T06:48:20.453Z",
        "updated_at": "2018-04-03T06:50:01.071Z",
        "food": {
          "id": 6,
          "name": "Chicken, broilers or fryers, back, meat only, cooked, fried",
          "data": {
            "ndbno": "05054",
            "name": "Chicken, broilers or fryers, back, meat only, cooked, fried",
            "sd": "CHICKEN,BROILERS OR FRYERS,BACK,MEAT ONLY,CKD,FRIED",
            "fg": "Poultry Products",
            "sn": "",
            "cn": "",
            "manu": "",
            "nf": 6.25,
            "cf": 3.87,
            "ff": 9.02,
            "pf": 4.27,
            "r": "46%",
            "rd": "33% bone, 13% skin",
            "ds": "Standard Reference",
            "ru": "g",
            "nutrients": [
              {
                "nutrient_id": 255,
                "name": "Water",
                "group": "Proximates",
                "unit": "g",
                "value": 47.87,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 16.75
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 27.76
                  }
                ]
              },
              {
                "nutrient_id": 208,
                "name": "Energy",
                "group": "Proximates",
                "unit": "kcal",
                "value": 288,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NC",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 101
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 167
                  }
                ]
              },
              {
                "nutrient_id": 268,
                "name": "Energy",
                "group": "Proximates",
                "unit": "kJ",
                "value": 1205,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 422
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 699
                  }
                ]
              },
              {
                "nutrient_id": 203,
                "name": "Protein",
                "group": "Proximates",
                "unit": "g",
                "value": 29.99,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 10.5
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 17.39
                  }
                ]
              },
              {
                "nutrient_id": 204,
                "name": "Total lipid (fat)",
                "group": "Proximates",
                "unit": "g",
                "value": 15.32,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 5.36
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 8.89
                  }
                ]
              },
              {
                "nutrient_id": 207,
                "name": "Ash",
                "group": "Proximates",
                "unit": "g",
                "value": 1.15,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.4
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.67
                  }
                ]
              },
              {
                "nutrient_id": 205,
                "name": "Carbohydrate, by difference",
                "group": "Proximates",
                "unit": "g",
                "value": 5.68,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NC",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 1.99
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 3.29
                  }
                ]
              },
              {
                "nutrient_id": 291,
                "name": "Fiber, total dietary",
                "group": "Proximates",
                "unit": "g",
                "value": 0,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0
                  }
                ]
              },
              {
                "nutrient_id": 301,
                "name": "Calcium, Ca",
                "group": "Minerals",
                "unit": "mg",
                "value": 26,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 9
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 15
                  }
                ]
              },
              {
                "nutrient_id": 303,
                "name": "Iron, Fe",
                "group": "Minerals",
                "unit": "mg",
                "value": 1.65,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.58
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.96
                  }
                ]
              },
              {
                "nutrient_id": 304,
                "name": "Magnesium, Mg",
                "group": "Minerals",
                "unit": "mg",
                "value": 25,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 9
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 14
                  }
                ]
              },
              {
                "nutrient_id": 305,
                "name": "Phosphorus, P",
                "group": "Minerals",
                "unit": "mg",
                "value": 176,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 62
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 102
                  }
                ]
              },
              {
                "nutrient_id": 306,
                "name": "Potassium, K",
                "group": "Minerals",
                "unit": "mg",
                "value": 251,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 88
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 146
                  }
                ]
              },
              {
                "nutrient_id": 307,
                "name": "Sodium, Na",
                "group": "Minerals",
                "unit": "mg",
                "value": 99,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 35
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 57
                  }
                ]
              },
              {
                "nutrient_id": 309,
                "name": "Zinc, Zn",
                "group": "Minerals",
                "unit": "mg",
                "value": 2.8,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.98
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 1.62
                  }
                ]
              },
              {
                "nutrient_id": 312,
                "name": "Copper, Cu",
                "group": "Minerals",
                "unit": "mg",
                "value": 0.095,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.033
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.055
                  }
                ]
              },
              {
                "nutrient_id": 315,
                "name": "Manganese, Mn",
                "group": "Minerals",
                "unit": "mg",
                "value": 0.047,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.016
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.027
                  }
                ]
              },
              {
                "nutrient_id": 317,
                "name": "Selenium, Se",
                "group": "Minerals",
                "unit": "µg",
                "value": 19.9,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "BFYN",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 7
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 11.5
                  }
                ]
              },
              {
                "nutrient_id": 401,
                "name": "Vitamin C, total ascorbic acid",
                "group": "Vitamins",
                "unit": "mg",
                "value": 0,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0
                  }
                ]
              },
              {
                "nutrient_id": 404,
                "name": "Thiamin",
                "group": "Vitamins",
                "unit": "mg",
                "value": 0.109,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.038
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.063
                  }
                ]
              },
              {
                "nutrient_id": 405,
                "name": "Riboflavin",
                "group": "Vitamins",
                "unit": "mg",
                "value": 0.253,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.089
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.147
                  }
                ]
              },
              {
                "nutrient_id": 406,
                "name": "Niacin",
                "group": "Vitamins",
                "unit": "mg",
                "value": 7.68,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 2.688
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 4.454
                  }
                ]
              },
              {
                "nutrient_id": 410,
                "name": "Pantothenic acid",
                "group": "Vitamins",
                "unit": "mg",
                "value": 1.198,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.419
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.695
                  }
                ]
              },
              {
                "nutrient_id": 415,
                "name": "Vitamin B-6",
                "group": "Vitamins",
                "unit": "mg",
                "value": 0.35,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.122
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.203
                  }
                ]
              },
              {
                "nutrient_id": 417,
                "name": "Folate, total",
                "group": "Vitamins",
                "unit": "µg",
                "value": 9,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 3
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 5
                  }
                ]
              },
              {
                "nutrient_id": 431,
                "name": "Folic acid",
                "group": "Vitamins",
                "unit": "µg",
                "value": 0,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0
                  }
                ]
              },
              {
                "nutrient_id": 432,
                "name": "Folate, food",
                "group": "Vitamins",
                "unit": "µg",
                "value": 9,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 3
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 5
                  }
                ]
              },
              {
                "nutrient_id": 435,
                "name": "Folate, DFE",
                "group": "Vitamins",
                "unit": "µg",
                "value": 9,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NC",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 3
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 5
                  }
                ]
              },
              {
                "nutrient_id": 418,
                "name": "Vitamin B-12",
                "group": "Vitamins",
                "unit": "µg",
                "value": 0.31,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.11
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.18
                  }
                ]
              },
              {
                "nutrient_id": 320,
                "name": "Vitamin A, RAE",
                "group": "Vitamins",
                "unit": "µg",
                "value": 29,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 10
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 17
                  }
                ]
              },
              {
                "nutrient_id": 319,
                "name": "Retinol",
                "group": "Vitamins",
                "unit": "µg",
                "value": 29,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 10
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 17
                  }
                ]
              },
              {
                "nutrient_id": 318,
                "name": "Vitamin A, IU",
                "group": "Vitamins",
                "unit": "IU",
                "value": 98,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 34
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 57
                  }
                ]
              },
              {
                "nutrient_id": 606,
                "name": "Fatty acids, total saturated",
                "group": "Lipids",
                "unit": "g",
                "value": 4.12,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 1.442
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 2.39
                  }
                ]
              },
              {
                "nutrient_id": 610,
                "name": "10:0",
                "group": "Lipids",
                "unit": "g",
                "value": 0,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0
                  }
                ]
              },
              {
                "nutrient_id": 611,
                "name": "12:0",
                "group": "Lipids",
                "unit": "g",
                "value": 0.04,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.014
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.023
                  }
                ]
              },
              {
                "nutrient_id": 612,
                "name": "14:0",
                "group": "Lipids",
                "unit": "g",
                "value": 0.1,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.035
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.058
                  }
                ]
              },
              {
                "nutrient_id": 613,
                "name": "16:0",
                "group": "Lipids",
                "unit": "g",
                "value": 2.79,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.977
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 1.618
                  }
                ]
              },
              {
                "nutrient_id": 614,
                "name": "18:0",
                "group": "Lipids",
                "unit": "g",
                "value": 1.07,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.375
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.621
                  }
                ]
              },
              {
                "nutrient_id": 645,
                "name": "Fatty acids, total monounsaturated",
                "group": "Lipids",
                "unit": "g",
                "value": 5.73,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 2.006
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 3.323
                  }
                ]
              },
              {
                "nutrient_id": 626,
                "name": "16:1 undifferentiated",
                "group": "Lipids",
                "unit": "g",
                "value": 0.65,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.228
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.377
                  }
                ]
              },
              {
                "nutrient_id": 617,
                "name": "18:1 undifferentiated",
                "group": "Lipids",
                "unit": "g",
                "value": 4.94,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 1.729
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 2.865
                  }
                ]
              },
              {
                "nutrient_id": 628,
                "name": "20:1",
                "group": "Lipids",
                "unit": "g",
                "value": 0.07,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.025
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.041
                  }
                ]
              },
              {
                "nutrient_id": 630,
                "name": "22:1 undifferentiated",
                "group": "Lipids",
                "unit": "g",
                "value": 0,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0
                  }
                ]
              },
              {
                "nutrient_id": 646,
                "name": "Fatty acids, total polyunsaturated",
                "group": "Lipids",
                "unit": "g",
                "value": 3.64,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 1.274
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 2.111
                  }
                ]
              },
              {
                "nutrient_id": 618,
                "name": "18:2 undifferentiated",
                "group": "Lipids",
                "unit": "g",
                "value": 3.08,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 1.078
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 1.786
                  }
                ]
              },
              {
                "nutrient_id": 619,
                "name": "18:3 undifferentiated",
                "group": "Lipids",
                "unit": "g",
                "value": 0.15,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.052
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.087
                  }
                ]
              },
              {
                "nutrient_id": 620,
                "name": "20:4 undifferentiated",
                "group": "Lipids",
                "unit": "g",
                "value": 0.19,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.067
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.11
                  }
                ]
              },
              {
                "nutrient_id": 629,
                "name": "20:5 n-3 (EPA)",
                "group": "Lipids",
                "unit": "g",
                "value": 0.02,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.007
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.012
                  }
                ]
              },
              {
                "nutrient_id": 631,
                "name": "22:5 n-3 (DPA)",
                "group": "Lipids",
                "unit": "g",
                "value": 0.04,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.014
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.023
                  }
                ]
              },
              {
                "nutrient_id": 621,
                "name": "22:6 n-3 (DHA)",
                "group": "Lipids",
                "unit": "g",
                "value": 0.07,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.025
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.041
                  }
                ]
              },
              {
                "nutrient_id": 601,
                "name": "Cholesterol",
                "group": "Lipids",
                "unit": "mg",
                "value": 93,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 33
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 54
                  }
                ]
              },
              {
                "nutrient_id": 501,
                "name": "Tryptophan",
                "group": "Amino Acids",
                "unit": "g",
                "value": 0.352,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.123
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.204
                  }
                ]
              },
              {
                "nutrient_id": 502,
                "name": "Threonine",
                "group": "Amino Acids",
                "unit": "g",
                "value": 1.258,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.44
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.73
                  }
                ]
              },
              {
                "nutrient_id": 503,
                "name": "Isoleucine",
                "group": "Amino Acids",
                "unit": "g",
                "value": 1.577,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.552
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.915
                  }
                ]
              },
              {
                "nutrient_id": 504,
                "name": "Leucine",
                "group": "Amino Acids",
                "unit": "g",
                "value": 2.251,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.788
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 1.306
                  }
                ]
              },
              {
                "nutrient_id": 505,
                "name": "Lysine",
                "group": "Amino Acids",
                "unit": "g",
                "value": 2.5,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.875
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 1.45
                  }
                ]
              },
              {
                "nutrient_id": 506,
                "name": "Methionine",
                "group": "Amino Acids",
                "unit": "g",
                "value": 0.823,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.288
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.477
                  }
                ]
              },
              {
                "nutrient_id": 507,
                "name": "Cystine",
                "group": "Amino Acids",
                "unit": "g",
                "value": 0.392,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.137
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.227
                  }
                ]
              },
              {
                "nutrient_id": 508,
                "name": "Phenylalanine",
                "group": "Amino Acids",
                "unit": "g",
                "value": 1.202,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.421
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.697
                  }
                ]
              },
              {
                "nutrient_id": 509,
                "name": "Tyrosine",
                "group": "Amino Acids",
                "unit": "g",
                "value": 1.01,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.354
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.586
                  }
                ]
              },
              {
                "nutrient_id": 510,
                "name": "Valine",
                "group": "Amino Acids",
                "unit": "g",
                "value": 1.486,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.52
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.862
                  }
                ]
              },
              {
                "nutrient_id": 511,
                "name": "Arginine",
                "group": "Amino Acids",
                "unit": "g",
                "value": 1.793,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.628
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 1.04
                  }
                ]
              },
              {
                "nutrient_id": 512,
                "name": "Histidine",
                "group": "Amino Acids",
                "unit": "g",
                "value": 0.924,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.323
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.536
                  }
                ]
              },
              {
                "nutrient_id": 513,
                "name": "Alanine",
                "group": "Amino Acids",
                "unit": "g",
                "value": 1.62,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.567
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.94
                  }
                ]
              },
              {
                "nutrient_id": 514,
                "name": "Aspartic acid",
                "group": "Amino Acids",
                "unit": "g",
                "value": 2.638,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.923
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 1.53
                  }
                ]
              },
              {
                "nutrient_id": 515,
                "name": "Glutamic acid",
                "group": "Amino Acids",
                "unit": "g",
                "value": 4.672,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 1.635
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 2.71
                  }
                ]
              },
              {
                "nutrient_id": 516,
                "name": "Glycine",
                "group": "Amino Acids",
                "unit": "g",
                "value": 1.464,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.512
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.849
                  }
                ]
              },
              {
                "nutrient_id": 517,
                "name": "Proline",
                "group": "Amino Acids",
                "unit": "g",
                "value": 1.299,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.455
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.753
                  }
                ]
              },
              {
                "nutrient_id": 518,
                "name": "Serine",
                "group": "Amino Acids",
                "unit": "g",
                "value": 1.049,
                "sourcecode": "",
                "dp": "",
                "se": "",
                "derivation": "NONE",
                "measures": [
                  {
                    "label": "unit (yield from 1 lb ready-to-cook chicken)",
                    "eqv": 35,
                    "eunit": "g",
                    "qty": 1,
                    "value": 0.367
                  },
                  {
                    "label": "back, bone and skin removed",
                    "eqv": 58,
                    "eunit": "g",
                    "qty": 0.5,
                    "value": 0.608
                  }
                ]
              }
            ]
          },
          "created_at": "2018-04-03T06:45:26.413Z",
          "updated_at": "2018-04-03T06:45:26.413Z"
        }
      }
    ]
  },
  "searchedFoods": []
}

describe('<Macronutrient />', function() {
  it('should have a calorie total for daily diet', function () {
      const wrapper = mount(<Macronutrient dailyDiet={sampleProps.dailyDiet.food_portions}/>);
      expect(wrapper.find('#calorie_total').text()).to.include("576 kcal");
   });

  it('should have a carbohydrate total for daily diet', function () {
      const wrapper = mount(<Macronutrient dailyDiet={sampleProps.dailyDiet.food_portions}/>);
      expect(wrapper.find('#carbohydrate_total').text()).to.include("11.36 g");
   });

  it('should have a protein total for daily diet', function () {
      const wrapper = mount(<Macronutrient dailyDiet={sampleProps.dailyDiet.food_portions}/>);
      expect(wrapper.find('#protein_total').text()).to.include("59.98 g");
   });

  it('should have a fat total for daily diet', function () {
      const wrapper = mount(<Macronutrient dailyDiet={sampleProps.dailyDiet.food_portions}/>);
      expect(wrapper.find('#fat_total').text()).to.include("30.64 g");
   });


});




