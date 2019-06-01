exports.seed = function(knex, Promise) {
  return knex('dishes').truncate()
    .then(function () {
      return knex('dishes').insert([
        {name: 'Pizza'},
        {name: 'Tacos'},
        {name: 'Salad'}
      ]);
    });
};

exports.seed = function(knex, Promise) {
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        {name: 'Pepperoni Pizza', dish_id: 1},
        {name: 'Meat Lovers Pizza', dish_id: 1},
        {name: 'Hawaiian Pizza', dish_id: 1},
        {name: 'Mexican Tacos', dish_id: 2, instructions: "Make the tacos" },
        {name: 'Chef Salad', dish_id: 3, instructions: "Make the salad"}
      ]);
    });
};

exports.seed = function(knex, Promise) {
  return knex('ingredients').truncate()
    .then(function () {
      return knex('ingredients').insert([
        {name: 'Pepperoni'},
        {name: 'Crust'},
        {name: 'Tomato Sauce'},
        {name: 'Tortillas'},
        {name: 'Carne Asada'},
        {name: 'Lettuce'},
        {name: 'Eggs'},
        {name: 'Ranch'},
      ]);
    });
};

exports.seed = function(knex) {
  return knex('recipe_ingredients').truncate()
    .then(function () {
      return knex('recipe_ingredients').insert([
        {ingredient_id: 1, recipe_id: 1, quantity: 12},
        {ingredient_id: 2, recipe_id: 1, quantity: 1},
        {ingredient_id: 3, recipe_id: 1, quantity: 1},
        {ingredient_id: 8, recipe_id: 1, quantity: 1},
        {ingredient_id: 4, recipe_id: 2, quantity: 60},
        {ingredient_id: 5, recipe_id: 2, quantity: 5},
        {ingredient_id: 8, recipe_id: 2, quantity: 1},
      ]);
    });
}