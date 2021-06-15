const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function() {
    const inputText = document.getElementById('input').value;
    const resultArea = document.getElementById('result-area')

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.meals[0])
            const result = `
                <div class="food-box">
                    <img src="${data.meals[0].strMealThumb}" alt="" />
                    <h3>${data.meals[0].strIngredient1}</h3>
                </div>
                `
            resultArea.innerHTML = result;
        })
})