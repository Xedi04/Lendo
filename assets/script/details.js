let divAll=document.querySelector(".s-2");
let id=new URLSearchParams(window.location.search).get("id");

fetch("http://localhost:3000/Lendo/"+id)
.then(res=>res.json())
.then(data=>{
        divAll.innerHTML+=`
        <div class="div4">
        <div class="img">
            <img src="${data.image}" alt="">
        </div>
        <div class="text">
            <h4>${data.name}</h4>
            <p>${data.des}</p>
            <div class="btn">
            <button onclick="Delete(${data.id})">Delete</button>
            <button>Update</button>
            <button>Details</button>
            <button>Fav</button>
        </div>
        </div>
    </div>
        `
})