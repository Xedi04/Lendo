let divAll=document.querySelector(".s-2");

fetch("http://localhost:3000/Lendo")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        divAll.innerHTML+=`
        <div class="div4">
        <div class="img">
            <img src="${element.image}" alt="">
        </div>
        <div class="text">
            <h4>${element.name}</h4>
            <p>${element.des}</p>
            <div class="btn">
            <button onclick="Delete(${element.id})">Delete</button>
            <button>Update</button>
            <button onclick="Details(${element.id})">Details</button>
            <button>Fav</button>
        </div>
        </div>
    </div>
        `
    });
})

function Delete (id){
    axios.delete("http://localhost:3000/Lendo/"+id)
}

function Details(id){
    window.location=`details.html?id=${id}`
}