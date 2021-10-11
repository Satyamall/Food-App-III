
const loadRecepie = async ()=>{
    try{

        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        const data = await res.json();
        console.log(data);
        showData(data);
    }
    catch(err)
    {

    }
}

function showData(data){
    const result = document.getElementById("result");
    result.innerHTML = "";
        result.innerHTML = data.meals.map((food)=>{
            return `
            <div class="latest-item">
            <h2>Meal Category: ${food.strCategory}</h2>
            <h2>Country Food: ${food.strArea}</h2>
            <img src="${food.strMealThumb}" alt="${food.strMeal}">
            <h3 class="food-name">${food.strMeal}</h3>
            <p>${food.strIngredient1}</p>
            <p>${food.strIngredient2}</p>
            <p>${food.strIngredient3}</p>
            <p>${food.strIngredient4}</p>
            <p>${food.strIngredient5}</p>
            <p>${food.strIngredient6}</p>
            <p>${food.strIngredient7}</p>
            <p>${food.strIngredient8}</p>
            <p>${food.strIngredient9}</p>
            <p>${food.strIngredient11}</p>
            <p>${food.strIngredient12}</p>
            <p>${food.strIngredient13}</p>
            <p>${food.strIngredient14}</p>
            <p>${food.strIngredient15}</p>
            </div>`
        })

 }

loadRecepie();