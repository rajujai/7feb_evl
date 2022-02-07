function completeOrder(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let address = document.getElementById('address').value;
    if(!name || !number || !address){
        alert('Please enter your details!');
    }
    sendAlerts();
}

function sendAlerts(){
    alert('Your order is accepted');
    setTimeout(()=>{
        alert('Your order is being cooked');
    },3000)
    setTimeout(()=>{
        alert('Your order is ready');
    },8000)
    setTimeout(()=>{
        alert('Order out for delivery');
    },10000)
    setTimeout(()=>{
        alert('Order delivered');
    },12000)
}