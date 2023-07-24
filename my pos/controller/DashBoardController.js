// ---------------------------- navigation bar controllers -----------------------------------------------------
//**************************************************************************************************************

let foodImage = document.querySelector(`.option-container>div:nth-child(1)>a>div>img`);
let drinkImage = document.querySelector(`.option-container>div:nth-child(2)>a>div>img`);
let snackImage = document.querySelector(`.option-container>div:nth-child(3)>a>div>img`);
let dessertImage = document.querySelector(`.option-container>div:nth-child(4)>a>div>img`);
let shopManageImage = document.querySelector(`.option-container>div:nth-child(5)>a>div>img`);

let foodBtn = document.querySelector(".option-container>div:nth-child(1)>a>div");
let drinkBtn = document.querySelector(".option-container>div:nth-child(2)>a>div");
let snackBtn = document.querySelector(".option-container>div:nth-child(3)>a>div");
let dessertBtn = document.querySelector(".option-container>div:nth-child(4)>a>div");
let shopManageBtn = document.querySelector(".option-container>div:nth-child(5)>a>div");

let btn;




function setOptionBtnStyle(btn) {
    btn.style.setProperty("background", "linear-gradient(155deg ,#FA8245,#F9794C,#F97451,#F95E62,#F95E62,#FB5964,#FA5A66)");
    btn.style.setProperty("box-shadow", "0 5px 5px rgba(249,121,89,0.1)");
    btn.style.setProperty("color", "white");
}

function defaultBtnStyle(btn) {
    btn.style.setProperty("background", "white");
    btn.style.setProperty("box-shadow", "0 0 0 white");
    btn.style.setProperty("color", "#737373");
}

foodBtn.addEventListener('click', (e) => {

    foodImage.setAttribute("src", "assets/img/food-tray-white.png")
    setOptionBtnStyle(foodBtn);
    e.preventDefault();

    defaultBtnStyle(drinkBtn);
    defaultBtnStyle(snackBtn);
    defaultBtnStyle(dessertBtn);
    defaultBtnStyle(shopManageBtn);
    drinkImage.setAttribute("src", "assets/img/soda-gray.png");
    snackImage.setAttribute("src", "assets/img/snack-gray.png");
    dessertImage.setAttribute("src", "assets/img/cupcake-gray.png");
    shopManageImage.setAttribute("src", "assets/img/market-gray.png");

});


drinkBtn.addEventListener('click', (e) => {
    drinkImage.setAttribute("src", "assets/img/soda-white.png")
    setOptionBtnStyle(drinkBtn);
    e.preventDefault();

    defaultBtnStyle(foodBtn);
    defaultBtnStyle(snackBtn);
    defaultBtnStyle(dessertBtn);
    defaultBtnStyle(shopManageBtn);
    foodImage.setAttribute("src", "assets/img/food-tray%20-%20gray.png");
    snackImage.setAttribute("src", "assets/img/snack-gray.png");
    dessertImage.setAttribute("src", "assets/img/cupcake-gray.png");
    shopManageImage.setAttribute("src", "assets/img/market-gray.png");

});

snackBtn.addEventListener('click', (e) => {
    snackImage.setAttribute("src", "assets/img/snack-white.png")
    setOptionBtnStyle(snackBtn);
    e.preventDefault();

    defaultBtnStyle(foodBtn);
    defaultBtnStyle(drinkBtn);
    defaultBtnStyle(dessertBtn);
    defaultBtnStyle(shopManageBtn);
    foodImage.setAttribute("src", "assets/img/food-tray%20-%20gray.png");
    drinkImage.setAttribute("src", "assets/img/soda-gray.png");
    dessertImage.setAttribute("src", "assets/img/cupcake-gray.png");
    shopManageImage.setAttribute("src", "assets/img/market-gray.png");
});

dessertBtn.addEventListener('click', (e) => {
    dessertImage.setAttribute("src", "assets/img/cupcake-white.png")
    setOptionBtnStyle(dessertBtn);
    e.preventDefault();

    defaultBtnStyle(foodBtn);
    defaultBtnStyle(drinkBtn);
    defaultBtnStyle(snackBtn);
    defaultBtnStyle(shopManageBtn);
    foodImage.setAttribute("src", "assets/img/food-tray%20-%20gray.png");
    drinkImage.setAttribute("src", "assets/img/soda-gray.png");
    snackImage.setAttribute("src", "assets/img/snack-gray.png");
    shopManageImage.setAttribute("src", "assets/img/market-gray.png");
});

shopManageBtn.addEventListener('click', (e) => {
    shopManageImage.setAttribute("src", "assets/img/market-white.png")
    setOptionBtnStyle(shopManageBtn);
    e.preventDefault();

    defaultBtnStyle(foodBtn);
    defaultBtnStyle(drinkBtn);
    defaultBtnStyle(snackBtn);
    defaultBtnStyle(dessertBtn);
    foodImage.setAttribute("src", "assets/img/food-tray%20-%20gray.png");
    drinkImage.setAttribute("src", "assets/img/soda-gray.png");
    snackImage.setAttribute("src", "assets/img/snack-gray.png");
    dessertImage.setAttribute("src", "assets/img/cupcake-gray.png");

});

// ----------------------------------------sub category -------------------------------
//**************************************************************************************

let foodSubChicken = document.querySelector(".foodSubCatContainer>a:nth-child(1)>div");
let seaFood = document.querySelector(".foodSubCatContainer>a:nth-child(2)>div");
let pizza = document.querySelector(".foodSubCatContainer>a:nth-child(3)>div");
let pasta = document.querySelector(".foodSubCatContainer>a:nth-child(4)>div");


window.onload = () => {

    foodSubChicken.style.setProperty("background", "rgba(255,255,255,0.3)");
    foodSubChicken.style.setProperty("opacity", "100%");

    foodImage.setAttribute("src", "assets/img/food-tray-white.png")
    setOptionBtnStyle(foodBtn);
    foodBtn.preventDefault();


}
let subBtn;
function defaultSub(subBtn){
    // subBtn.style.setProperty("opacity", "100%");
    subBtn.style.setProperty("background", "rgba(255,255,255,0)");
    subBtn.style.setProperty("opacity", "45%");
}

foodSubChicken.addEventListener('click', (e) => {

    foodSubChicken.style.setProperty("background", "rgba(255,255,255,0.3)");
    foodSubChicken.style.setProperty("opacity", "100%");

    e.preventDefault();
    defaultSub(seaFood);
    defaultSub(pizza);
    defaultSub(pasta);

});
seaFood.addEventListener('click', (e) => {

    seaFood.style.setProperty("background", "rgba(255,255,255,0.3)");
    seaFood.style.setProperty("opacity", "100%");
    e.preventDefault();

    defaultSub(foodSubChicken);
    defaultSub(pizza);
    defaultSub(pasta);

});

pizza.addEventListener('click', (e) => {

    pizza.style.setProperty("background", "rgba(255,255,255,0.3)");
    pizza.style.setProperty("opacity", "100%");
    e.preventDefault();

    defaultSub(foodSubChicken);
    defaultSub(seaFood);
    defaultSub(pasta);

});

pasta.addEventListener('click', (e) => {

    pasta.style.setProperty("background", "rgba(255,255,255,0.3)");
    pasta.style.setProperty("opacity", "100%");
    e.preventDefault();

    defaultSub(foodSubChicken);
    defaultSub(pizza);
    defaultSub(seaFood);

});
