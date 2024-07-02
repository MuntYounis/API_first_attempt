async function getPizza(){

    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const data = await response.json();
    const recipes = data.recipes;


    const display = recipes.map(function(ele){

        return `
        <div class = 'recipe'>
            <h2>${ele.title}</h2>
            <img src='${ele.image_url}'>
        </div>
        `;
    }).join('');
    console.log(recipes);
    document.querySelector(".pizza").innerHTML = display;
}
getPizza();