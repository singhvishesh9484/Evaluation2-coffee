// On clicking remove button the item should be removed from DOM as well as localstorage.

let bucketData=JSON.parse(localStorage.getItem("coffee"))

bucketData.map(function(el,index){

    let box=document.createElement("div")

    let image=document.createElement("img")
    image.src=el.image

    let type=document.createElement("p")
    type.innerText=el.title

    let price=document.createElement("p")
    price.innerText=el.price

    let btn=document.createElement("button")
    btn.innerText="Remove to Bucket"
    btn.setAttribute("id","remove_coffee")

    btn.addEventListener("click",function(){
        removetoBucket(el,index)
    })

    box.append(image,type,price,btn)
    document.getElementById("bucket").append(box)
})

    function removetoBucket(el,index){
        bucketData.splice(index,1)
        localStorage.setItem("coffee",JSON.stringify(bucketData))
        window.location.reload()
    }
