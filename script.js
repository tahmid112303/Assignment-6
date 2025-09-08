const categoryButtons=document.getElementsByClassName("category")

for(const btn of categoryButtons){
    btn.addEventListener('click', ()=>{
        const url="https://openapi.programming-hero.com/api/plants";
        fetch(url).then(res=>res.json()).then(data=>display(data)) 
    })
}



function display(posts){
    posts.forEach(post => {
        console.log(post);
    });
}

