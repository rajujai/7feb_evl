showData();
updateCartTotal();
async function showData() {
    let data = await getData();
    let menu = document.getElementById('menu');
    menu.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
        let meal = data[i];
        let div = document.createElement('div');
        div.className = 'meal';
        let name = document.createElement('h3');
        name.innerText = meal.strMeal;
        let price = document.createElement('p');
        price.innerText = '₹  '+Math.floor(Math.random() * 500);
        let img = document.createElement('img');
        img.src = meal.strMealThumb;
        let btn = document.createElement('button');
        btn.innerText = 'Add to Cart';
        btn.id = 'addtocart';
        btn.setAttribute('onclick', `addToCart(${i})`);
        div.append(name, img, price, btn);
        menu.append(div);
    }
}



async function getData() {
    let res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian');
    let data = await res.json();
    return data.meals;
}

function addToCart(i) {
    let meals = document.getElementsByClassName('meal');
    let cartData = JSON.parse(localStorage.getItem('cart'));
    if (!cartData)
        cartData = [];
    else {
        for(let j=0;j<cartData.length;j++){
            if (meals[i].children[0].innerText == cartData[j].name){
                alert("Item is already in cart")
                return;
            }
        }
    }
    let price = meals[i].children[2].innerText;
    let newPrice = price.split('');
    newPrice.splice(0,2);
    price = newPrice.join("");
    console.log(price);
    cartData.push({ 'name': meals[i].children[0].innerText, 'img': meals[i].children[1].src, price});
    localStorage.setItem('cart', JSON.stringify(cartData));
    updateCartTotal();
}

function updateCartTotal() {
    let cartData = JSON.parse(localStorage.getItem('cart'));
    if (!cartData)
        cartData = [];
    document.getElementById('count').innerText = cartData.length;
}