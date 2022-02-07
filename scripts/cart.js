showData();

function showData() {
    let cart = document.getElementById('cart');
    cart.innerHTML = '';
    let data = JSON.parse(localStorage.getItem('cart'));
    let totalPrice = 0;
    for (let i = 0; i < data.length; i++) {
        let meal = data[i];
        let div = document.createElement('div');
        div.className = 'meal';
        let name = document.createElement('h3');
        name.innerText = meal.name;
        let price = document.createElement('p');
        price.innerText = '₹  ' + meal.price;
        let img = document.createElement('img');
        img.src = meal.img;
        let btn = document.createElement('button');
        btn.innerText = 'Remove';
        btn.id = 'remove';
        btn.setAttribute('onclick', `remove(${i})`);
        div.append(name, img, price, btn);
        cart.append(div);
        totalPrice+= Number(meal.price);
    }
    document.getElementById('total').innerText = 'Total Bill :  ₹  ' + totalPrice;
}

function remove(i) {
    let meals = document.getElementsByClassName('meal');
    let cartData = JSON.parse(localStorage.getItem('cart'));
    for (let j = 0; j < cartData.length; j++) {
        if (meals[i].children[0].innerText == cartData[j].name) {
            cartData.splice(j,1)
            break;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cartData));
    showData();
}