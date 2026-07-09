/* ==========================
   HANDMADE HAVEN JAVASCRIPT
========================== */


/* CART SYSTEM */

let cart = JSON.parse(localStorage.getItem("cart")) || [];


// Select buttons

let cartButtons = document.querySelectorAll(".cart-btn");

let cartCount = document.getElementById("cart-count");


// Add to cart

cartButtons.forEach((button)=>{

    button.addEventListener("click",()=>{


        let product = button.parentElement;


        let productName = product.querySelector("h3").innerText;

        let productPrice = product.querySelector(".price").innerText;

        let productImage = product.querySelector("img").src;



        let item = {

            name: productName,

            price: productPrice,

            image: productImage

        };


        cart.push(item);


        localStorage.setItem("cart",JSON.stringify(cart));


        updateCart();


        alert(productName + " added to cart 🛒");


    });

});



// Update Cart Count

function updateCart(){

    if(cartCount){

        cartCount.innerHTML = cart.length;

    }

}

updateCart();





/* BUY NOW BUTTON */


// BUY NOW BUTTON

let buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach((button) => {

    button.addEventListener("click", () => {

        window.location.href = "custom-order.html";

    });

});





/* PRODUCT SEARCH */

let searchInput = document.querySelector(".search-box input");

if(searchInput){

    searchInput.addEventListener("keyup",()=>{

        let value = searchInput.value.toLowerCase();

        let products = document.querySelectorAll(".product-card");

        products.forEach(product=>{

            let name = product.querySelector("h3").innerText.toLowerCase();

            if(name.includes(value)){
                product.style.display="block";
            }else{
                product.style.display="none";
            }

        });

    });

}



// WISHLIST SYSTEM


let wishlist =

JSON.parse(localStorage.getItem("wishlist")) || [];




function addWishlist(index){


let product = productsData[index];



wishlist.push(product);



localStorage.setItem(

"wishlist",

JSON.stringify(wishlist)

);



alert(

product.name +

" added to wishlist ❤️"

);


}



    





/* NEWSLETTER */




    let subscribeButton = document.querySelector(".newsletter button");

if(subscribeButton){

subscribeButton.addEventListener("click",()=>{

let email=document.querySelector(".newsletter input").value;

if(email==""){

alert("Please enter your email");

}else{

alert("Thank you for subscribing ❤️");

document.querySelector(".newsletter input").value="";

}

});

}


/* SHOP BUTTON */


let shopButton = document.querySelector(".shop-btn");

if (shopButton) {

    shopButton.addEventListener("click", () => {

        document.querySelector(".products").scrollIntoView({
            behavior: "smooth"
        });

    });

}

function openProduct(){

window.location.href="product.html";

}
const productsData = [

{
name:"Small things",
price:"₹199",
image:"product3.jpeg",
description:"Beautiful handmade craft made with premium paper."
},

{
name:"Quilling art",
price:"₹299",
image:"product7.jpeg",
description:"Creative quilling art made with premium paper."
},

{
name:"Wallmate",
price:"₹299",
image:"product6.jpeg",
description:"beautiful wall mate for decorations."
},

{
name:"Paper Flower Craft",
price:"₹99",
image:"product4.jpeg",
description:"Handmade decorative paper flowers."
},

{
name:"wall mate",
price:"₹199",
image:"product5.jpeg",
description:"Premium handmade wall mate."
},

{
name:"Paper flower craft",
price:"₹299",
image:"product2.jpeg",
description:"Special handmade craft."
},

{
name:"Wall decorate",
price:"₹249",
image:"product1.jpeg",
description:"use for fastivals."
},

{
name:"Creativity",
price:"₹149",
image:"product8.jpeg",
description:"new craft make by everyday."
},

{
name:"Birthday Card",
price:"₹249",
image:"product10.jpeg",
description:"special birthday handmade card."
},

{
name:"Handmade Greeting Card",
price:"₹249",
image:"product9.jpeg",
description:"Creative greeting card."
},

{
name:"Festival Greeting Card",
price:"₹249",
image:"product11.jpeg",
description:"Festival special handmade card."
},

{
name:"Custom Handmade Craft",
price:"₹239",
image:"product12.jpeg",
description:"Customized craft made specially for you."
}

];
function viewProduct(index){

localStorage.setItem(
"selectedProduct",
JSON.stringify(productsData[index])
);


window.location.href="product.html";


}
// CATEGORY FILTER


function filterProducts(category){


let products = 
document.querySelectorAll(".product-card");



products.forEach(product=>{


let productCategory =
product.getAttribute("data-category");



if(category==="all" || productCategory===category){


product.style.display="block";


}

else{


product.style.display="none";


}


});


}

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

let savedUser = JSON.parse(localStorage.getItem("userAccount"));

let email = document.getElementById("loginEmail").value;

let password = document.getElementById("loginPassword").value;

if(savedUser &&
email===savedUser.email &&
password===savedUser.password){

localStorage.setItem("login","true");

alert("Welcome "+savedUser.name+" ❤️");

window.location.href="profile.html";

}else{

alert("Invalid email or password");

}

});

}












// PAGE LOADER


window.addEventListener("load",()=>{


let loader=document.getElementById("loader");


if(loader){


loader.style.display="none";


}


});
function openMenu(){

let menu=document.querySelector("nav ul");

menu.classList.toggle("active");

}
function applyCoupon(){


let code=document.getElementById("coupon").value;



if(code==="WELCOME10"){


alert("10% Discount Applied 🎉");


}

else{


alert("Invalid Coupon");


}


}
function closeOffer(){

document.getElementById("offerPopup")
.style.display="none";

}



function openOffer(){

document.querySelector(".products")
.scrollIntoView({

behavior:"smooth"

});

}
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});