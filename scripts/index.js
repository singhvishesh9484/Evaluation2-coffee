// Add the coffee to local storage with key "coffee"

// https://masai-mock-api.herokuapp.com/coffee/menu

const url= `https://masai-mock-api.herokuapp.com/coffee/menu`



fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        console.log(res)
        appendData(res.menu.data)
    })
    .catch(function(err){
        console.log(err)
    })

    let bucketData=JSON.parse(localStorage.getItem("coffee"))||[]
    let count=document.getElementById("coffee_count")
    count.innerHTML=bucketData.length;

     function appendData(data){
        data.forEach(function(el){
            
            let box=document.createElement("div")

            let image=document.createElement("img")
            image.src=el.image

            let type=document.createElement("p")
            type.innerText=el.title

            let price=document.createElement("p")
            price.innerText=el.price

            let btn=document.createElement("button")
            btn.innerText="Add to Bucket"
            btn.setAttribute("id","add_to_bucket")

            btn.addEventListener("click",function(){
                addtoBucket(el)
            })

            box.append(image,type,price,btn)
            document.getElementById("menu").append(box)

        })
        function addtoBucket(el){
                console.log(el)
                bucketData.push(el)
                alert("item added to bucket")
                localStorage.setItem("coffee",JSON.stringify(bucketData))
                window.location.reload()
        }

    
    }


