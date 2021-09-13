let recipe = {
    recipeTitle: "Chocolate Brownies",
    servings: 16,
    ingredients: ["185g unsalted butter", "185g best dark chocolate", "85g plain flour", "40g cocoa powder", "50g white chocolate", "50g milk chocolate", "3 large eggs", "275g golden caster sugar"], 
    directions: "Mix everything together and heat it up!",
}

function showRecipe(){
    alert("We are going to cook... " + recipe.recipeTitle);
    alert("This recipe will serve... " + recipe.servings + " servings.")
}

function showIngredients(){
    for (let i = 0; i < recipe.ingredients.length; i++){
        alert("The ingredients is... " + recipe.ingredients[i] );

    }
}

function showDirections(){
    alert("The simple directions are... " + recipe.directions)
}

function letsCook(){
    document.getElementById("letsCook").innerHTML = "I'm hungry! Let's cook... " + recipe.recipeTitle; 
}