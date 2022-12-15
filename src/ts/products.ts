import { loadFromlocalStorage } from "./functions/loadfromlocalstorage";
import { loadToLocalStorage } from "./functions/loadtolocalstorage";
import { Product } from "./models/product";


let productList : Product [] = loadFromlocalStorage();

let productsCenter: HTMLDivElement = document.querySelector(".products_center") as HTMLDivElement;
let filterMobile = document.getElementById("menuMobile") as HTMLUListElement;
let filterTablet = document.getElementById("menuTablet") as HTMLUListElement;
let filterLaptop = document.getElementById("menuLaptop") as HTMLUListElement;

let linkUrlMobile : string = "http://localhost:1234/pages/products.html#mobil";
let linkUrlTablet : string = "http://localhost:1234/pages/products.html#tablet";
let linkUrlLaptop : string = "http://localhost:1234/pages/products.html#Laptop";

if (linkUrlMobile === location.href){
    displayFiltredProducts(productList,"mobile")
}
else if  (linkUrlTablet === location.href){
    displayFiltredProducts(productList,"tablet")
}
else if (linkUrlLaptop === location.href){
    displayFiltredProducts(productList,"laptop")
}
else {
    displayProducts(productList);
}

filterMobile.addEventListener("click", ()=>{
    displayFiltredProducts(productList,"mobile")
})
filterTablet.addEventListener("click", ()=>{
    displayFiltredProducts(productList,"tablet")
})
filterLaptop.addEventListener("click", ()=>{
    displayFiltredProducts(productList,"laptop")
})


function displayProducts(someList: Product []) {
    productsCenter.innerHTML = "";
    for(let i = 0; i < someList.length; i++){
    let productContainer : HTMLDivElement = document.createElement("div");
    productContainer.className = "product";
    productContainer.addEventListener('click', () => {
        console.log("clicked")
    });

	let imgContainer : HTMLDivElement = document.createElement("div");
    imgContainer.className = "img-container";

	let infoContainer : HTMLDivElement = document.createElement("div");
    infoContainer.className = "info-container";
    
    productsCenter.appendChild(productContainer)
	productContainer.appendChild(imgContainer);
    productContainer.appendChild(infoContainer);
	
	let imgProduct: HTMLImageElement = document.createElement("img") as HTMLImageElement;
    imgContainer.appendChild(imgProduct);
	imgProduct.src = someList[i].url;
    imgProduct.addEventListener('click', () => {
        console.log("clicked")
    });
	
	let productTitle: HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
	productTitle.innerHTML = someList[i].title;

    let productColor : HTMLParagraphElement = document.createElement("h4");
    productColor.innerHTML = someList[i].color;

    let productPrice: HTMLHeadingElement = document.createElement("h4") as HTMLHeadingElement;
	productPrice.innerHTML = someList[i].price;
    productPrice.innerHTML += " SEK"
    
    let addToCart: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    addToCart.className = "button"
    addToCart.innerHTML = `<i class="fa-solid fa-bag-shopping"></i>`
    
    addToCart.addEventListener('click', () => {
        someList[i].buyAmount++;
        loadToLocalStorage(someList);
    });
    
    infoContainer.appendChild(productTitle);
    infoContainer.appendChild(productColor);
    infoContainer.appendChild(productPrice);
    infoContainer.appendChild(addToCart);
	
    }
}
function displayFiltredProducts(someList: Product [], itemType:string) {
    productsCenter.innerHTML = "";
    for(let i = 0; i < someList.length; i++){
        if (someList[i].productType === itemType){
            let productContainer : HTMLDivElement = document.createElement("div");
            productContainer.className = "product";
            productContainer.addEventListener('click', () => {
                console.log("clicked")
            });
        
            let imgContainer : HTMLDivElement = document.createElement("div");
            imgContainer.className = "img-container";
        
            let infoContainer : HTMLDivElement = document.createElement("div");
            infoContainer.className = "info-container";
            
            productsCenter.appendChild(productContainer)
            productContainer.appendChild(imgContainer);
            productContainer.appendChild(infoContainer);
            
            let imgProduct: HTMLImageElement = document.createElement("img") as HTMLImageElement;
            imgContainer.appendChild(imgProduct);
            imgProduct.src = someList[i].url;
            imgProduct.addEventListener('click', () => {
                console.log("clicked")
            });
            
            let productTitle: HTMLHeadingElement = document.createElement("h3") as HTMLHeadingElement;
            productTitle.innerHTML = someList[i].title;
        
            let productColor : HTMLParagraphElement = document.createElement("h4");
            productColor.innerHTML = someList[i].color;
        
            let productPrice: HTMLHeadingElement = document.createElement("h4") as HTMLHeadingElement;
            productPrice.innerHTML = someList[i].price;
            productPrice.innerHTML += " SEK"
            
            let addToCart: HTMLDivElement = document.createElement("div") as HTMLDivElement;
            addToCart.className = "button"
            addToCart.innerHTML = `<i class="fa-solid fa-bag-shopping"></i>`
            
            addToCart.addEventListener('click', () => {
                someList[i].buyAmount++;
                loadToLocalStorage(someList);
            });
            
            infoContainer.appendChild(productTitle);
            infoContainer.appendChild(productColor);
            infoContainer.appendChild(productPrice);
            infoContainer.appendChild(addToCart);
            
        }

    }
}