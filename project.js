const api = "0zDJv_JrV3BXkow5UK0A5CbVHg5I-s_SSX1PDMn3m04";

const formele = document.querySelector("form")
const inputele = document.getElementById("input")
const outer = document.querySelector(".outer")

const showmore = document.getElementById("showmore")


let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputele.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${api}`

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results;
    if (page === 1) {
        outer.innerHTML = "";

    }
    results.map((result) => {
        //creating a template like an html block having image and des.
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("inner");

        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;


        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.textContent = result.alt_description;


        imagelink.appendChild(image);
        imageWrapper.appendChild(imagelink);
        outer.appendChild(imageWrapper);

    }
    );
    page++;
    

}

formele.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();

})

showmore.addEventListener("submit", () => {

    searchImages();

})




