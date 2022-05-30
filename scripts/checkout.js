
document.getElementById("confirm")

function orderalert(el){
    el.preventDefault()

    setTimeout(function(){
        alert("Your order is accepted")
        alert("Your order is being Prepared")
        alert("Your order is being packed")
        alert("Your order is out for delivery")
        alert("Order delivered")
    },000)
}