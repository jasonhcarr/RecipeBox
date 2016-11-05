RecipeBox.factory('Recipe', function () {
  return function Recipe(info) {
    this.name = info.name;
    this.userId = info.userId;
    this.ingredients = info.ingredients;
    this.yield = info.yield;
    this.instructions = info.instructions;
    this.parent = info.parent;
    this.children = info.children;
  };
});
