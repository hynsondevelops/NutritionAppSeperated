export function findNutrient(nutrientArray, nutrientID) {
	const nutrientObj = nutrientArray.find(function(nutrient) {
	  return nutrient.nutrient_id == nutrientID;
	})
	console.log(nutrientObj)
	if (nutrientObj == undefined) {
		return {value: 0}
	}
	else {
		return nutrientObj
	}
}