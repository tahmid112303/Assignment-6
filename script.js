const categoryButtons=document.getElementsByClassName("category")

function display(posts){
    for(let post in posts){
        console.log(posts[post]);
    }
}

for(const btn of categoryButtons){
    btn.addEventListener('click', ()=>{
        const url="https://openapi.programming-hero.com/api/plants"
fetch(url).then(res=>res.json())
.then(data=>display(data))
    })
}




