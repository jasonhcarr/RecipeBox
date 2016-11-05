RecipeBox.factory('Recipe', function () {
  return function Recipe(info) {
    this.name = info.name;
    this.userId = info.userId;
    this.ingredients = {
      name: info.ingredients.name,
      quantity: info.ingredients.quantity,
      measure: info.ingredients.measure,
    };
    this.yield = info.yield;
    this.instructions = info.instructions;
    this.parent = info.parent;
    this.children = info.children;
  };
});
