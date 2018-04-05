export function findNutrient(nutrientArray, nutrientID) {
	return nutrientArray.find(function(nutrient) {
	  return nutrient.nutrient_id == nutrientID;
	})
}