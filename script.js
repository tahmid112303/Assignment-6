const categoryButtons=document.getElementsByClassName("category")
const container=document.getElementById("card-container")

function display(posts){
    container.innerHTML="";
    for(let post of posts){
        console.log(post);
        const card=document.createElement("div")
        card.innerHTML=` <div class="card bg-white h-[410px] w-[300px] border-2 border-purple-800 rounded-[8px] flex flex-col gap-2 ">
                    <div class="img mt-2 ml-4 mr-4 w-auto h-[178px] bg-cover bg-[url(${post.image})]"></div>
                    <div class="ml-4"><h1 class=" font-semibold">${post.name}</h1></div>
                    <div class="ml-4 "><p class=" text-[14px]">${post.description}</p></div>
                    <div class=" flex justify-between ml-4 mr-4">
                        <div class=" w-auto p-2 h-[28px] bg-[#DCFCE7] flex justify-center items-center text-[#15803D] rounded-[40px]">${post.category}</div>
                        <div>${post.price}</div>
                    </div>
                    <div class=" w-full pl-4 pr-4"><button class="btn bg-[#15803D] text-white w-full h-[35px] rounded-[35px] border-none font-bold">Add to Cart</button></div>
                </div>`
                container.appendChild(card)
    }
}

for(const btn of categoryButtons){
    
    btn.addEventListener('click', ()=>{
        const url="https://openapi.programming-hero.com/api/plants"
fetch(url).then(res=>res.json())
.then(json=>display(json.plants))
    })
}




