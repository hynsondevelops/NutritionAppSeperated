import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import FoodRow from '../src/components/FoodRow.js';

const sampleObject = [
	  {
	    "ndbno": "23115",
	    "name": "Beef, chuck eye roast, boneless, America's Beef Roast, separable lean and fat, trimmed to 0\" fat, select, cooked, roasted",
	    "sd": "BEEF,CHCK EYE RST,BNLS,A BF RST,LN & FAT,0\",SEL,C,RSTD",
	    "fg": "Beef Products",
	    "sn": "",
	    "cn": "URMIS #1095",
	    "manu": "",
	    "nf": "6.25",
	    "cf": "0",
	    "ff": "0",
	    "pf": "0",
	    "r": "7%",
	    "rd": "Connective tissue 7%",
	    "ds": "Standard Reference",
	    "ru": "g",
	    "nutrients": {
	      "0": {
	        "nutrient_id": "255",
	        "name": "Water",
	        "group": "Proximates",
	        "unit": "g",
	        "value": "61.29",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "12",
	        "se": "2.249",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "52.1"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "395.32"
	          }
	        }
	      },
	      "1": {
	        "nutrient_id": "208",
	        "name": "Energy",
	        "group": "Proximates",
	        "unit": "kcal",
	        "value": "229",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NC",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "195"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "1477"
	          }
	        }
	      },
	      "2": {
	        "nutrient_id": "268",
	        "name": "Energy",
	        "group": "Proximates",
	        "unit": "kJ",
	        "value": "959",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NC",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "815"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "6186"
	          }
	        }
	      },
	      "3": {
	        "nutrient_id": "203",
	        "name": "Protein",
	        "group": "Proximates",
	        "unit": "g",
	        "value": "24.86",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "12",
	        "se": "0.515",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "21.13"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "160.35"
	          }
	        }
	      },
	      "4": {
	        "nutrient_id": "204",
	        "name": "Total lipid (fat)",
	        "group": "Proximates",
	        "unit": "g",
	        "value": "14.41",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "12",
	        "se": "1.748",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "12.25"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "92.94"
	          }
	        }
	      },
	      "5": {
	        "nutrient_id": "207",
	        "name": "Ash",
	        "group": "Proximates",
	        "unit": "g",
	        "value": "0.94",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "12",
	        "se": "0.071",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.8"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "6.06"
	          }
	        }
	      },
	      "6": {
	        "nutrient_id": "205",
	        "name": "Carbohydrate, by difference",
	        "group": "Proximates",
	        "unit": "g",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NC",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "7": {
	        "nutrient_id": "291",
	        "name": "Fiber, total dietary",
	        "group": "Proximates",
	        "unit": "g",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "8": {
	        "nutrient_id": "269",
	        "name": "Sugars, total",
	        "group": "Proximates",
	        "unit": "g",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "9": {
	        "nutrient_id": "301",
	        "name": "Calcium, Ca",
	        "group": "Minerals",
	        "unit": "mg",
	        "value": "19",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "16"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "123"
	          }
	        }
	      },
	      "10": {
	        "nutrient_id": "303",
	        "name": "Iron, Fe",
	        "group": "Minerals",
	        "unit": "mg",
	        "value": "2.16",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "1.84"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "13.93"
	          }
	        }
	      },
	      "11": {
	        "nutrient_id": "304",
	        "name": "Magnesium, Mg",
	        "group": "Minerals",
	        "unit": "mg",
	        "value": "20",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "17"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "129"
	          }
	        }
	      },
	      "12": {
	        "nutrient_id": "305",
	        "name": "Phosphorus, P",
	        "group": "Minerals",
	        "unit": "mg",
	        "value": "185",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "157"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "1193"
	          }
	        }
	      },
	      "13": {
	        "nutrient_id": "306",
	        "name": "Potassium, K",
	        "group": "Minerals",
	        "unit": "mg",
	        "value": "312",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "265"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "2012"
	          }
	        }
	      },
	      "14": {
	        "nutrient_id": "307",
	        "name": "Sodium, Na",
	        "group": "Minerals",
	        "unit": "mg",
	        "value": "76",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "65"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "490"
	          }
	        }
	      },
	      "15": {
	        "nutrient_id": "309",
	        "name": "Zinc, Zn",
	        "group": "Minerals",
	        "unit": "mg",
	        "value": "8.24",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "7"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "53.15"
	          }
	        }
	      },
	      "16": {
	        "nutrient_id": "312",
	        "name": "Copper, Cu",
	        "group": "Minerals",
	        "unit": "mg",
	        "value": "0.067",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.057"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.432"
	          }
	        }
	      },
	      "17": {
	        "nutrient_id": "315",
	        "name": "Manganese, Mn",
	        "group": "Minerals",
	        "unit": "mg",
	        "value": "0.012",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.01"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.077"
	          }
	        }
	      },
	      "18": {
	        "nutrient_id": "317",
	        "name": "Selenium, Se",
	        "group": "Minerals",
	        "unit": "µg",
	        "value": "26.3",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "22.4"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "169.6"
	          }
	        }
	      },
	      "19": {
	        "nutrient_id": "401",
	        "name": "Vitamin C, total ascorbic acid",
	        "group": "Vitamins",
	        "unit": "mg",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "20": {
	        "nutrient_id": "404",
	        "name": "Thiamin",
	        "group": "Vitamins",
	        "unit": "mg",
	        "value": "0.067",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.057"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.432"
	          }
	        }
	      },
	      "21": {
	        "nutrient_id": "405",
	        "name": "Riboflavin",
	        "group": "Vitamins",
	        "unit": "mg",
	        "value": "0.174",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.148"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "1.122"
	          }
	        }
	      },
	      "22": {
	        "nutrient_id": "406",
	        "name": "Niacin",
	        "group": "Vitamins",
	        "unit": "mg",
	        "value": "4.314",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "3.667"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "27.825"
	          }
	        }
	      },
	      "23": {
	        "nutrient_id": "410",
	        "name": "Pantothenic acid",
	        "group": "Vitamins",
	        "unit": "mg",
	        "value": "0.663",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.564"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "4.276"
	          }
	        }
	      },
	      "24": {
	        "nutrient_id": "415",
	        "name": "Vitamin B-6",
	        "group": "Vitamins",
	        "unit": "mg",
	        "value": "0.382",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.325"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "2.464"
	          }
	        }
	      },
	      "25": {
	        "nutrient_id": "417",
	        "name": "Folate, total",
	        "group": "Vitamins",
	        "unit": "µg",
	        "value": "6",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "BFPN",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "5"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "39"
	          }
	        }
	      },
	      "26": {
	        "nutrient_id": "431",
	        "name": "Folic acid",
	        "group": "Vitamins",
	        "unit": "µg",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "BFPN",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "27": {
	        "nutrient_id": "432",
	        "name": "Folate, food",
	        "group": "Vitamins",
	        "unit": "µg",
	        "value": "6",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "BFPN",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "5"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "39"
	          }
	        }
	      },
	      "28": {
	        "nutrient_id": "435",
	        "name": "Folate, DFE",
	        "group": "Vitamins",
	        "unit": "µg",
	        "value": "6",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NC",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "5"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "39"
	          }
	        }
	      },
	      "29": {
	        "nutrient_id": "421",
	        "name": "Choline, total",
	        "group": "Vitamins",
	        "unit": "mg",
	        "value": "65",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "55.2"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "419.2"
	          }
	        }
	      },
	      "30": {
	        "nutrient_id": "454",
	        "name": "Betaine",
	        "group": "Vitamins",
	        "unit": "mg",
	        "value": "20.9",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "17.8"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "134.8"
	          }
	        }
	      },
	      "31": {
	        "nutrient_id": "418",
	        "name": "Vitamin B-12",
	        "group": "Vitamins",
	        "unit": "µg",
	        "value": "2.66",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "2.26"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "17.16"
	          }
	        }
	      },
	      "32": {
	        "nutrient_id": "578",
	        "name": "Vitamin B-12, added",
	        "group": "Vitamins",
	        "unit": "µg",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "33": {
	        "nutrient_id": "320",
	        "name": "Vitamin A, RAE",
	        "group": "Vitamins",
	        "unit": "µg",
	        "value": "7",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NC",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "6"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "45"
	          }
	        }
	      },
	      "34": {
	        "nutrient_id": "319",
	        "name": "Retinol",
	        "group": "Vitamins",
	        "unit": "µg",
	        "value": "7",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "BFSN",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "6"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "45"
	          }
	        }
	      },
	      "35": {
	        "nutrient_id": "321",
	        "name": "Carotene, beta",
	        "group": "Vitamins",
	        "unit": "µg",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "36": {
	        "nutrient_id": "322",
	        "name": "Carotene, alpha",
	        "group": "Vitamins",
	        "unit": "µg",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "37": {
	        "nutrient_id": "334",
	        "name": "Cryptoxanthin, beta",
	        "group": "Vitamins",
	        "unit": "µg",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "38": {
	        "nutrient_id": "318",
	        "name": "Vitamin A, IU",
	        "group": "Vitamins",
	        "unit": "IU",
	        "value": "23",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NC",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "20"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "148"
	          }
	        }
	      },
	      "39": {
	        "nutrient_id": "337",
	        "name": "Lycopene",
	        "group": "Vitamins",
	        "unit": "µg",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "40": {
	        "nutrient_id": "338",
	        "name": "Lutein + zeaxanthin",
	        "group": "Vitamins",
	        "unit": "µg",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "41": {
	        "nutrient_id": "323",
	        "name": "Vitamin E (alpha-tocopherol)",
	        "group": "Vitamins",
	        "unit": "mg",
	        "value": "0.07",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "1",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.06"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.45"
	          }
	        }
	      },
	      "42": {
	        "nutrient_id": "573",
	        "name": "Vitamin E, added",
	        "group": "Vitamins",
	        "unit": "mg",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "43": {
	        "nutrient_id": "328",
	        "name": "Vitamin D (D2 + D3)",
	        "group": "Vitamins",
	        "unit": "µg",
	        "value": "0.1",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "AS",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.1"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.6"
	          }
	        }
	      },
	      "44": {
	        "nutrient_id": "326",
	        "name": "Vitamin D3 (cholecalciferol)",
	        "group": "Vitamins",
	        "unit": "µg",
	        "value": "0.1",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "BFSN",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.1"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.6"
	          }
	        }
	      },
	      "45": {
	        "nutrient_id": "324",
	        "name": "Vitamin D",
	        "group": "Vitamins",
	        "unit": "IU",
	        "value": "4",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "BFSN",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "3"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "26"
	          }
	        }
	      },
	      "46": {
	        "nutrient_id": "430",
	        "name": "Vitamin K (phylloquinone)",
	        "group": "Vitamins",
	        "unit": "µg",
	        "value": "1.6",
	        "sourcecode": [
	          "2"
	        ],
	        "dp": "12",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "1.4"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "10.3"
	          }
	        }
	      },
	      "47": {
	        "nutrient_id": "606",
	        "name": "Fatty acids, total saturated",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "6.192",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NC",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "5.263"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "39.938"
	          }
	        }
	      },
	      "48": {
	        "nutrient_id": "607",
	        "name": "4:0",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "49": {
	        "nutrient_id": "608",
	        "name": "6:0",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "50": {
	        "nutrient_id": "609",
	        "name": "8:0",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "51": {
	        "nutrient_id": "610",
	        "name": "10:0",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "52": {
	        "nutrient_id": "611",
	        "name": "12:0",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "53": {
	        "nutrient_id": "612",
	        "name": "14:0",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.414",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.352"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "2.67"
	          }
	        }
	      },
	      "54": {
	        "nutrient_id": "613",
	        "name": "16:0",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "3.327",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "2.828"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "21.459"
	          }
	        }
	      },
	      "55": {
	        "nutrient_id": "653",
	        "name": "17:0",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.182",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.155"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "1.174"
	          }
	        }
	      },
	      "56": {
	        "nutrient_id": "614",
	        "name": "18:0",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "2.25",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "1.913"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "14.512"
	          }
	        }
	      },
	      "57": {
	        "nutrient_id": "615",
	        "name": "20:0",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.008",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.007"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.052"
	          }
	        }
	      },
	      "58": {
	        "nutrient_id": "654",
	        "name": "24:0",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.011",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.009"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.071"
	          }
	        }
	      },
	      "59": {
	        "nutrient_id": "645",
	        "name": "Fatty acids, total monounsaturated",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "6.843",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NC",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "5.817"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "44.137"
	          }
	        }
	      },
	      "60": {
	        "nutrient_id": "625",
	        "name": "14:1",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.076",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.065"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.49"
	          }
	        }
	      },
	      "61": {
	        "nutrient_id": "626",
	        "name": "16:1 undifferentiated",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.408",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AS",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.347"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "2.632"
	          }
	        }
	      },
	      "62": {
	        "nutrient_id": "673",
	        "name": "16:1 c",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.408",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.347"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "2.632"
	          }
	        }
	      },
	      "63": {
	        "nutrient_id": "687",
	        "name": "17:1",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.111",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.094"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.716"
	          }
	        }
	      },
	      "64": {
	        "nutrient_id": "617",
	        "name": "18:1 undifferentiated",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "6.224",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AS",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "5.29"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "40.145"
	          }
	        }
	      },
	      "65": {
	        "nutrient_id": "674",
	        "name": "18:1 c",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "5.328",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "4.529"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "34.366"
	          }
	        }
	      },
	      "66": {
	        "nutrient_id": "663",
	        "name": "18:1 t",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.896",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.762"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "5.779"
	          }
	        }
	      },
	      "67": {
	        "nutrient_id": "628",
	        "name": "20:1",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.024",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.02"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.155"
	          }
	        }
	      },
	      "68": {
	        "nutrient_id": "630",
	        "name": "22:1 undifferentiated",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "69": {
	        "nutrient_id": "646",
	        "name": "Fatty acids, total polyunsaturated",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.679",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NC",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.577"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "4.38"
	          }
	        }
	      },
	      "70": {
	        "nutrient_id": "618",
	        "name": "18:2 undifferentiated",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.594",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AS",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.505"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "3.831"
	          }
	        }
	      },
	      "71": {
	        "nutrient_id": "675",
	        "name": "18:2 n-6 c,c",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.522",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.444"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "3.367"
	          }
	        }
	      },
	      "72": {
	        "nutrient_id": "670",
	        "name": "18:2 CLAs",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.072",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.061"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.464"
	          }
	        }
	      },
	      "73": {
	        "nutrient_id": "619",
	        "name": "18:3 undifferentiated",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.028",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AS",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.024"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.181"
	          }
	        }
	      },
	      "74": {
	        "nutrient_id": "851",
	        "name": "18:3 n-3 c,c,c (ALA)",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.028",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.024"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.181"
	          }
	        }
	      },
	      "75": {
	        "nutrient_id": "627",
	        "name": "18:4",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "76": {
	        "nutrient_id": "672",
	        "name": "20:2 n-6 c,c",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.004",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.003"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.026"
	          }
	        }
	      },
	      "77": {
	        "nutrient_id": "620",
	        "name": "20:4 undifferentiated",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.049",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.042"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.316"
	          }
	        }
	      },
	      "78": {
	        "nutrient_id": "629",
	        "name": "20:5 n-3 (EPA)",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.001",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.001"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.006"
	          }
	        }
	      },
	      "79": {
	        "nutrient_id": "631",
	        "name": "22:5 n-3 (DPA)",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.003",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.003"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0.019"
	          }
	        }
	      },
	      "80": {
	        "nutrient_id": "621",
	        "name": "22:6 n-3 (DHA)",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "81": {
	        "nutrient_id": "605",
	        "name": "Fatty acids, total trans",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.896",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NC",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.762"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "5.779"
	          }
	        }
	      },
	      "82": {
	        "nutrient_id": "693",
	        "name": "Fatty acids, total trans-monoenoic",
	        "group": "Lipids",
	        "unit": "g",
	        "value": "0.896",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NC",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.762"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "5.779"
	          }
	        }
	      },
	      "83": {
	        "nutrient_id": "601",
	        "name": "Cholesterol",
	        "group": "Lipids",
	        "unit": "mg",
	        "value": "81",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "2",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "69"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "522"
	          }
	        }
	      },
	      "84": {
	        "nutrient_id": "501",
	        "name": "Tryptophan",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "0.28",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.238"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "1.806"
	          }
	        }
	      },
	      "85": {
	        "nutrient_id": "502",
	        "name": "Threonine",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "1.094",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.93"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "7.056"
	          }
	        }
	      },
	      "86": {
	        "nutrient_id": "503",
	        "name": "Isoleucine",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "1.057",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.898"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "6.818"
	          }
	        }
	      },
	      "87": {
	        "nutrient_id": "504",
	        "name": "Leucine",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "1.999",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "1.699"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "12.894"
	          }
	        }
	      },
	      "88": {
	        "nutrient_id": "505",
	        "name": "Lysine",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "2.173",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "1.847"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "14.016"
	          }
	        }
	      },
	      "89": {
	        "nutrient_id": "506",
	        "name": "Methionine",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "0.706",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.6"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "4.554"
	          }
	        }
	      },
	      "90": {
	        "nutrient_id": "507",
	        "name": "Cystine",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "0.261",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.222"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "1.683"
	          }
	        }
	      },
	      "91": {
	        "nutrient_id": "508",
	        "name": "Phenylalanine",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "0.946",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.804"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "6.102"
	          }
	        }
	      },
	      "92": {
	        "nutrient_id": "509",
	        "name": "Tyrosine",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "0.857",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.728"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "5.528"
	          }
	        }
	      },
	      "93": {
	        "nutrient_id": "510",
	        "name": "Valine",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "1.123",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.955"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "7.243"
	          }
	        }
	      },
	      "94": {
	        "nutrient_id": "511",
	        "name": "Arginine",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "1.637",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "1.391"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "10.559"
	          }
	        }
	      },
	      "95": {
	        "nutrient_id": "512",
	        "name": "Histidine",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "0.805",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.684"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "5.192"
	          }
	        }
	      },
	      "96": {
	        "nutrient_id": "513",
	        "name": "Alanine",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "1.418",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "1.205"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "9.146"
	          }
	        }
	      },
	      "97": {
	        "nutrient_id": "514",
	        "name": "Aspartic acid",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "2.229",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "1.895"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "14.377"
	          }
	        }
	      },
	      "98": {
	        "nutrient_id": "515",
	        "name": "Glutamic acid",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "3.931",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "3.341"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "25.355"
	          }
	        }
	      },
	      "99": {
	        "nutrient_id": "516",
	        "name": "Glycine",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "1.134",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.964"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "7.314"
	          }
	        }
	      },
	      "100": {
	        "nutrient_id": "517",
	        "name": "Proline",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "1.021",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.868"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "6.585"
	          }
	        }
	      },
	      "101": {
	        "nutrient_id": "518",
	        "name": "Serine",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "0.955",
	        "sourcecode": [
	          "1"
	        ],
	        "dp": "",
	        "se": "",
	        "derivation": "AR",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.812"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "6.16"
	          }
	        }
	      },
	      "102": {
	        "nutrient_id": "521",
	        "name": "Hydroxyproline",
	        "group": "Amino Acids",
	        "unit": "g",
	        "value": "0.17",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "BFPN",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0.145"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "1.097"
	          }
	        }
	      },
	      "103": {
	        "nutrient_id": "221",
	        "name": "Alcohol, ethyl",
	        "group": "Other",
	        "unit": "g",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "104": {
	        "nutrient_id": "262",
	        "name": "Caffeine",
	        "group": "Other",
	        "unit": "mg",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      },
	      "105": {
	        "nutrient_id": "263",
	        "name": "Theobromine",
	        "group": "Other",
	        "unit": "mg",
	        "value": "0",
	        "sourcecode": "",
	        "dp": "",
	        "se": "",
	        "derivation": "NONE",
	        "measures": {
	          "0": {
	            "label": "oz",
	            "eqv": "85",
	            "eunit": "g",
	            "qty": "3",
	            "value": "0"
	          },
	          "1": {
	            "label": "roast",
	            "eqv": "645",
	            "eunit": "g",
	            "qty": "1",
	            "value": "0"
	          }
	        }
	      }
	    },
	    "food_id": 45,
	    "food_portion_id": 14
	  },
	  "1.0"
	]

describe('<FoodRow />', () => {
  it('should have a table row', function () {
      const wrapper = mount(<FoodRow searchedFood={sampleObject}/>);
      expect(wrapper.find('tr')).to.have.length(1);
    });
  it('should have four columns', function() {
  	const wrapper = mount(<FoodRow searchedFood={sampleObject}/>);
  	expect(wrapper.find('th')).to.have.length(1);
  	expect(wrapper.find('td')).to.have.length(3);
  });
});




