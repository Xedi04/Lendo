let divAll=document.querySelector(".s-2");

let sorted="as";
let filterArr=[];
let sortBtn=document.querySelector("#sort");

function Show(){
fetch("http://localhost:3000/Lendo")
.then(res=>res.json())
.then(data=>{
    divAll.innerHTML=""
    filterArr=filterArr.length?filterArr:data;
    filterArr.forEach(element => {
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
            <button onclick="Update(${element.id})">Update</button>
            <button onclick="Details(${element.id})">Details</button>
            <button onclick="Fav(${element.id})">Fav</button>
        </div>
        </div>
    </div>
        `
    });
})
}
Show();

sortBtn.addEventListener("click", ()=>{
    if(sorted==="as"){
        filterArr.sort((a, b) => a.name.localeCompare(b.name));
        sorted="des"
        sortBtn.innerHTML="Sort ASC"
    }else if(sorted==="des"){
        filterArr.sort((a, b) => b.name.localeCompare(a.name));
        sorted="def"
        sortBtn.innerHTML="Sort DSC"
    }else{
        filterArr=[]
        sorted="as"
        sortBtn.innerHTML="SORT"
    }
Show();
})

function Delete (id){
    axios.delete("http://localhost:3000/Lendo/"+id)
}

function Details(id){
    window.location=`details.html?id=${id}`
}

function Fav(id){
    axios.get("http://localhost:3000/Lendo/"+id)
    .then(res=>{
        axios.post("http://localhost:3000/Fav", res.data)
        window.location="./fav.html"
    })
}

function Update(id){
    window.location=`./update.html?id=${id}`
}