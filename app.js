const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 199,
        Desc: "Nike Air Force is a range of athletic shoes made by Nike that began with Air Force 1. It was created by designer Bruce Kilgore and was the first basketball shoe to use Nike's Air technology. The shoe is offered in low-, mid- and high-top styles.",
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        Desc: "Air Jordan is a line of basketball shoes produced by Nike, Inc. Related apparel and accessories are marketed under the Jordan Brand. The silhouette of Michael Jordan served as inspiration to create the Jumpman logo.",
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        Desc: "A re-release to recall the slimmer profile of the '77 model, the vintage-treated Nike Blazer boasts a weathered midsole underfoot and deconstructed tongues for an authentically old-school finish. The Nike blazer's outsole and midsole are vulcanised for durability and a crisp look.",
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        Desc: "Unlike traditional shoe construction, the Nike Crater Impact's thoughtful and modern design takes pattern efficiency and waste reduction seriously. Its straight-edged overlays mean no extra scraps. Its Crater foam midsole is made from waste found on the cutting-room floor and adds stability with a unique aesthetic.",
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        Desc: "Nike's Space Hippie sneakers and their packaging are made factory scraps. from rPoly, an amalgam of recycled water bottles, t-shirts, and yarn. Their midsole uses rubber that Nike had used in its redesign of a Miami high school football field amid other foam scraps.",
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    }
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes =document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
  
      //change the choosen product
      choosenProduct = products[index];
  
      //change texts of currentProduct
      currentProductDesc.textContent = choosenProduct.Desc;
      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "$" + choosenProduct.price;
      currentProductImg.src = choosenProduct.colors[0].img;
  
      //assing new colors
      currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      });
    });
  });
  
currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click",() =>{
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor= "white";
            size.style.color= "black";
        });
        size.style.backgroundColor= "black";
        size.style.color= "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display="flex"
});

close.addEventListener("click", ()=>{
    payment.style.display="none"
});