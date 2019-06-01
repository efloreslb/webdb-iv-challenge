const db = require('./data/dbConfig.js');

module.exports = {
   getDishes,
   addDish,
   getDish,
   getRecipes,
   addRecipe,
   getRecipe
}

// Dishes
const getDishes = () => {
   return db('dishes');
}

const addDish = (dish) => {
   return db('dishes').insert(dish).then(ids => {
      return getDish(ids[0]);
   })
}

const getDish = (id) => {
   return db('dishes').where({ id }).first().join('recipes', 'dishes.id', '=', 'recipes.dish_id').select('recipes_id', 'recipes_name', 'dishes.id', 'dishes.name');
}


// Recipes
const getRecipes = () => {
   return db('recipes');
}

const addRecipe = (recipe) => {
   return db('dishes').insert(recipe).then(ids => {
      return getRecipe(ids[0]);
   })
}

const getRecipe = (id) => {
   return db('recipes').where({ id }).first();
}