const categoryButtons=document.getElementsByClassName("category")
const container=document.getElementById("card-container")
const cart=document.getElementById("cart")

function display(posts){
    container.innerHTML="";
    for(let post of posts){
        const card=document.createElement("div")
        card.innerHTML=` <div class="cardMade bg-white h-[410px] w-[300px] border-2 border-purple-800 rounded-[8px] flex flex-col gap-2 ">
                    <div class="img mt-2 ml-4 mr-4 w-auto h-[178px] bg-cover bg-[url(${post.image})]"></div>
                    <div class="ml-4"><h1 class=" font-semibold name">${post.name}</h1></div>
                    <div class="ml-4 "><p class=" text-[14px]">${post.description}</p></div>
                    <div class=" flex justify-between ml-4 mr-4">
                        <div class=" w-auto p-2 h-[28px] bg-[#DCFCE7] flex justify-center items-center text-[#15803D] rounded-[40px]">${post.category}</div>
                        <div class="price">${post.price}</div>
                    </div>
                    <div class=" w-full pl-4 pr-4"><button class="cardBtn cursor-pointer bg-[#15803D] text-white w-full h-[35px] rounded-[35px] border-none font-bold">Add to Cart</button></div>
                </div>`
                container.appendChild(card)

                const cardBtn = card.querySelector(".cardBtn");
                cardBtn.addEventListener('click', function(){
                    let parent=this.closest(".cardMade")
                    let name=parent.querySelector(".name")
                    let price=parent.querySelector(".price")
                    const bar=document.createElement("div")
                    bar.innerHTML=` <div class="cartList h-[64px] bg-[#F0FDF4] w-auto rounded-[10px] flex justify-between">
                    <div class=" flex flex-col gap-1 ml-1">
                        <h3 class=" font-semibold">${name.textContent}</h3>
                        <p id="amount">${price.textContent}</p>
                    </div>

                    <div class=" mt-4 mr-3">
                        <i class="fa-solid fa-xmark cursor-pointer"></i>
                    </div>
                </div>
            </div>`
            cart.appendChild(bar)
            cart.insertBefore(bar, document.querySelector("#totalBox"));

            let total = document.getElementById("totalAmount");
            let current = parseInt(total.textContent);
            let itemPrice = parseInt(bar.querySelector("#amount").textContent);
            current+=itemPrice
            total.textContent = current;         
            
            
        })
    }
}



for(const btn of categoryButtons){
    
    btn.addEventListener('click', ()=>{
        if(btn.textContent==="All Trees"){
            const url="https://openapi.programming-hero.com/api/plants"
            fetch(url).then(res=>res.json())
            .then(json=>display(json.plants))
        }

        else{
            const url="https://openapi.programming-hero.com/api/plants"
            const clickedCategory=btn.textContent

            fetch(url).then(res=>res.json())
            .then(data=>{
                const filteredData=data.plants.filter(post=>post.category.toLowerCase()===clickedCategory.toLowerCase())
                display(filteredData)
            })
        }
    })
}






