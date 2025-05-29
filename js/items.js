document.getElementById('search-button').addEventListener('click', function () {
    const input = document.getElementById('search-input');
    const inputText = input.value
    // console.log(inputText);

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
        .then(res => res.json())
        .then(data => displaydata(data.meals))

    input.value = "";

})

const displaydata = (foods) => {
    const uiDiv = document.getElementById('foods');
    uiDiv.innerHTML = ``;
    const singleFood = document.getElementById('single-food');
    singleFood.textContent = ''




    // console.log(foods);
    foods.forEach(food => {
        // console.log(food);

        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
          <div onclick="loadSingleFood(${food.idMeal})" class="card-main">
           <img src="${food.strMealThumb}" alt="">
            <div class="card-body">
               <h4>Name: ${food.strMeal}</h4>
               <p>Details: ${food.strInstructions.slice(0, 250)}</p>
            </div> 
            <button class="food-button">Order Now</button> 
          </div>
            `
        uiDiv.appendChild(div)
    });


}

const loadSingleFood = (id) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)

        .then(res => res.json())
        .then(data => displaySingleFood(data.meals[0]))

}

const displaySingleFood = (food) => {
    window.scrollTo(0, 0)

    const singleFood = document.getElementById('single-food');

    singleFood.innerHTML = ` 
    <div class="card-Big">
           <img src="${food.strMealThumb}" alt="">
            <div class="card-body">
               <h4>Name: ${food.strMeal}</h4>
               <p>Category: ${food.strCategory}</p>
               <p>Details: ${food.strInstructions}</p>
            </div> 
          
          </div>

    `


}