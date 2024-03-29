let id = new URLSearchParams(window.location.search).get("id");

let Form = document.querySelector("#form");
let Name = document.querySelector("#name");
let Des = document.querySelector("#des");
let imgDiv = document.querySelector("#imgdiv");
let fileImg = document.querySelector("#file");
let Submit = document.querySelector("#submit");

axios("http://localhost:3000/Lendo/" + id)
    .then((res) => {
        let data = res.data;
        Name.value = data.name,
            Des.value = data.des,
            imgDiv.src = data.image
    })

fileImg.addEventListener("input", (e) => {
    let file = e.target.files[0]
    if (file) {
        let reader = new FileReader;
        reader.readAsDataURL(file)
        reader.onload = function () {
            imgDiv.src = reader.result
        }
    }
})

Form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!id) {
        axios.post("http://localhost:3000/Lendo", {
            name: Name.value,
            des: Des.value,
            image: imgDiv.src
        }).then(res => window.location = "./index.html")
    } else {
        axios.patch("http://localhost:3000/Lendo/" + id, {
            name: Name.value,
            des: Des.value,
            image: imgDiv.src
        }).then(res => window.location = "./index.html")
    }
})
