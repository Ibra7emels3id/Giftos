// user info
let useracunt = document.getElementById(`useracunt`),
    account   = document.getElementById(`account`),
    logintex  = document.querySelector(`.logintex`)
    let user = localStorage.getItem("username") ;
    let logoutNo = document.getElementById(`logoutNo`);
    
    function showAcount(){
        if(user){
            logintex.remove()
            account.style.display = `block`
            
        }else{
            logintex.style.display = `block`
            account.remove()
        }
    }
    showAcount()

    // logout usar

    function logout(){
        localStorage.removeItem("username");
        location.reload()
    }
    function checklogout(){
        if(user){
            logoutNo.style.display = `block`
        }else{
            logoutNo.style.display = `none`
        }
    }
    checklogout()


// icon list

let listIcon = document.getElementById(`listIcon`),
    first = document.getElementById(`first`),
    nth = document.getElementById(`nth`),
    last = document.getElementById(`last`),
    NavList = document.querySelector(`.NavList`)

listIcon.addEventListener(`click` , ()=>{
    first.classList.toggle(`show`)
    nth.classList.toggle(`show`)
    last.classList.toggle(`show`)
    NavList.classList.toggle(`show`)
})

// icon Scroll Up

let iconScroll = document.querySelector(`.iconScroll`);

window.onscroll = function(){
    if(this.scrollY >= 500 ){
        iconScroll.classList.add(`show`)
    }else{
        iconScroll.classList.remove(`show`)
    }
};
iconScroll.onclick = function(){
    window.scrollTo({
        top: 0 ,
        behavior : "smooth"
    })
};



// slider header

const swipers = new Swiper('.swiperhead', {
    loop: true,
    slidesPerView: 1,

    autoplay:{
        delete:3000,
    },
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});



// WHY SHOP WITH US
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 60,
    loop: true,
    centerSlide: true,
    pagination: true,
    autoTimeout: 1000,
    autoplay:{
        delete:3000,
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,

        },
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

// Customer opinions
const swiperOpinions = new Swiper('.mySwiperSli', {
    slidesPerView: 1,
    spaceBetween: 60,
    loop: true,
    centerSlide: true,
    pagination: true,
    autoTimeout: 1000,
    autoplay:{
        delete:3000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// Add card

// show list Card
let listProdect = document.querySelector(`.listProdect`)
let listCard = document.querySelector(`.listCard`)
let iconShowNm = document.getElementById(`iconShowNm`);
let Cancel = document.getElementById(`Cancel`);
let boxProdect = document.querySelector(`.boxProdect`);
let itemProdect = document.querySelector('.itemProdect');
let Available = document.getElementById(`Available`)

iconShowNm.addEventListener(`click`, () => boxProdect.classList.add(`show`));
Cancel.addEventListener(`click`, () => boxProdect.classList.remove(`show`));


let Num = document.getElementById(`num`);


var listProdectes = [];
let searchData = [];
let cards = [] ;
let Details = [] ;
let demo ;
let docm ;

shop

function AddDatatoHtml(){
    listProdect.innerHTML = ``
    if(listProdectes.length > 0){
        listProdectes.forEach(prodect => {
            let NewProdect = document.createElement('div')
            NewProdect.classList.add('box')
            NewProdect.dataset.id = prodect.id;
            NewProdect.innerHTML = `
            <img src="${prodect.imageUrl}" alt="">
            <div class="text">
                <h3><u>${prodect.title}</u></h3>
            </div>
            <div class="numprodc">
                <span>availables : <span id="Available">${prodect.Available}</span> </span>
                <span>prise : $ ${prodect.price}</span>
            </div>
            <div class="icon">
                <span id="New">New</span>
                <i  onclick="onlive(${prodect.id})" id="like-${prodect.id}" class="fa-solid fa-heart"></i>
                <span id="num">0</span>
            </div>
            <div class="addProdect">
            <button onclick="checkDetails(${prodect.id})" class="detalis" id="Detalis"><i class="fa-solid fa-eye"></i></button>
                <button onclick="checkUserData()" class="addcard" id="btnBrodect">Add brodect</button>
            </div>
            `;

            listProdect.appendChild(NewProdect)
            // docm = prodect.Available ;
            // console.log(docm) 
        })

    }
    
}


listProdect.addEventListener('click', (event) => {
    let addCardButton = event.target.closest('.addcard');
    const productBox = addCardButton.closest('.box');
    const prodectId = productBox.dataset.id;

    AddToCard(prodectId);
});

function checkUserData(){
    if(user){
        
    }else{
        location = `login.html`
    }
    
    showAddToCartMessage()
}


let ShowِAddCardMess = document.querySelector(`.ShowِAddCardMess`)
let ShowِCardMess    = document.querySelector(`.ShowِCardMess`);
let Spanshow = document.getElementById(`Spanshow`)


function showAddToCartMessage() {
    ShowِCardMess.innerHTML = `
        <div class="ShowِAddCardMess">
            <div class="messageBox">
                <h3>added to the cart</h3>
            </div>
            <span id="Spanshow"></span>
        </div>
            
    `;
    
    ShowِCardMess.style.display = `block`;  

    setTimeout(() => {
            ShowِCardMess.style.display = `none`;
        
    }, 2000);
    Spanshow.classList.add('show')  
}


// icon live
var like ;
let grtitmcor = localStorage.getItem('Datalike');

// if (grtitmcor) {
//     like.style.color = grtitmcor
// }else(
//     console.error(`test`)
// )


function onlive(id) {
    
    like = document.getElementById(`like-${id}`);
    let hdil = like.style.color = "#db4566";

    localStorage.setItem(`Datalike` , hdil)
}

console.log(localStorage.getItem(`Datalike`))






const AddToCard = (prodectId) => {
    let positionthinprodect = cards.findIndex((value) => value.prodectId == prodectId);


    console.log(positionthinprodect);

    if (cards.length <= 0) {
        cards.push({
            prodectId: prodectId,
            quantity: 1,

        });
    } else if (positionthinprodect < 0) {
        cards.push({
            prodectId: prodectId,
            quantity: 1,
        });
    } else {
        cards[positionthinprodect].quantity = cards[positionthinprodect].quantity + 1;
    }


    Addcardtohtml()
    AddcardtoMemre()

};

const AddcardtoMemre = () =>{
    localStorage.setItem(`CardItem` , JSON.stringify(cards))
}

//  Add card list

let shop = document.getElementById(`shop`)

const Addcardtohtml = () =>{
    listCard.innerHTML = ``;
    let NumIConShop = 0 ;
            if(cards.length > 0 ){
        cards.forEach(card => {
            
            NumIConShop = NumIConShop + card.quantity ;
            let NewProdect = document.createElement('div')
            NewProdect.classList.add('box')

            NewProdect.dataset.id = card.prodectId;

            let positionthinprodect = listProdectes.findIndex((value) => value.id == card.prodectId);
            let info = listProdectes[positionthinprodect]
            NewProdect.innerHTML = `
            <img src="${info.imageUrl}" alt="">
            <div class="text">
                <h3>${info.title}</h3>
            </div>
            <div class="numprodc">
                <span>prise : $ ${info.price * card.quantity}</span>
            </div>
            <div class="NumCard">
                <span class="minus"><</span>
                <span class="quantity">${card.quantity}</span>
                <span class="plus">></span>
            </div>
            `;

            listCard.appendChild(NewProdect)
        })

        demo = NumIConShop ;
    }

    let ViewProdect = document.getElementById(`ViewProdect`)

        function btnaddprout(){
            if(NumIConShop != 0){
                ViewProdect.style.display = `block`;
                // console.log(`test`)
            }else{
                ViewProdect.style.display = `none`
                listCard.innerHTML = `
                <h5>You do not have any products. Click here to add products <br/> <a href="index.html">Add prodect</a></h5>
                `;
                // console.log(` to test`)
            }
            AddDatatoHtml()
        }
        btnaddprout()


    
    console.log(NumIConShop)
    shop.innerHTML = NumIConShop;
    AddDatatoHtml()
}


listCard.addEventListener('click' , (event) =>{
    let positoniconclik = event.target ;
    if(positoniconclik.classList.contains('minus') || positoniconclik.classList.contains('plus')){
        let prodectIdNum =  positoniconclik.parentElement.parentElement.dataset.id;
        let type = 'minus' ;
        if(positoniconclik.classList.contains('plus')){
            type = 'plus'
        }
        changeQuantity(prodectIdNum , type)
    }
})


const changeQuantity = (prodectIdNum , type) =>{
    let positoniconcard =  cards.findIndex((value) => value.prodectId === prodectIdNum)
    if(positoniconcard >= 0){
        switch(type){
            case 'plus':
                cards[positoniconcard].quantity = cards[positoniconcard].quantity + 1;
                break;

            default:
                let valuecheng = cards[positoniconcard].quantity - 1;
                if(valuecheng > 0 ){
                    cards[positoniconcard].quantity = valuecheng ;
                }else{
                    cards.splice(positoniconcard , 1)
                    // localStorage.CardItem.remove()
                }
                break;
        }
    }
    AddcardtoMemre()
    Addcardtohtml()
    
}



    let initApp = () =>{
        fetch('js/products.json')
        .then(Response => Response.json())
        .then(data => {
            listProdectes = data ;
            searchData = data ;

            


            // console.log(searchData);

            AddDatatoHtml()
            // searchDate();
            // getelementFilter()
            

            // 
            if(localStorage.getItem('CardItem')){
                cards = JSON.parse(localStorage.getItem('CardItem'))
                Addcardtohtml()
            }
        })
    }
    initApp()
// prodect 

function ViewProdects(){
    if(demo != 0){
        if(user){
            location = `prodects.html`
        }else{
            location = `login.html`
        }
        
    }
}

// check Detalis
let DetailsProdect = document.querySelector(`.DetailsProdect`)
let DetailsBox = document.querySelector('.DetailsBox');
let iconClose = document.querySelector(`.iconClose`)



function checkDetails(id){
    DetailsProdect.style.display = `flex` ;
    DetailsBox.style.display = `block` ;
    let DetalisShow = listProdectes.find((prodect) => prodect.id === id);

    
    DetailsBox.innerHTML = `
    
            <img src="${DetalisShow.imageUrl}" alt="">
            <div class="text">
                <h3>${DetalisShow.title}</h3>
            </div>
            <div class="numprodc">
                <span>prise : $ ${DetalisShow.price}</span>
            </div>
            <div class="DetailsDataProdect">
                <p>dolor sit amet consectetur adipisicing elit. Aliquid sequi, consequuntur dolorem amet minima incidunt, deleniti voluptas magnam sunt totam porro veritatis itaque ex delectus. Nihil esse rerum autem molestias.</p>
            </div>
            <button onclick="checkUserData()" class="addcard" id="btnBrodect">Add brodect</button>
    `
}

function showData(){
    DetailsProdect.style.display = `none`
}
showData()
iconClose.addEventListener(`click` , ()=> DetailsProdect.style.display = `none` )


// icon search

function searchDate(value) {
    let NewProdect = `` ;
    
    for(let i = 0 ; i < listProdectes.length ; i++){

        if(listProdectes[i].title.includes(value.toLowerCase())){
            
            NewProdect += `
            <div class="box">
            <img src="${listProdectes[i].imageUrl}" alt="">
            <div class="text">
                <h3><u>${listProdectes[i].title}</u></h3>
            </div>
            <div class="numprodc">
                <span>availables : <span id="Available">${listProdectes[i].Available}</span> </span>
                <span>prise : $ ${listProdectes[i].price}</span>
            </div>
            <div class="icon">
                <span id="New">New</span>
                <i onclick="onlive(${listProdectes[i].id})" id="like-${listProdectes[i].id}" class="fa-solid fa-heart"></i>
                <span id="num">0</span>
            </div>
            <div class="addProdect">
            <button onclick="checkDetails(${listProdectes[i].id})" class="detalis" id="Detalis">Detalis</button>
                <button onclick="checkUserData()" class="addcard" id="btnBrodect">Add brodect</button>
            </div>
            </div>`;

            document.querySelector(`.listProdect`).innerHTML = NewProdect

        }
        
    }
}

// filter select

let selectFilter = document.getElementById(`selectFilter`)


selectFilter.addEventListener(`change` , getelementFilter )


function getelementFilter(e){

    let NewProdect = `` ;

    let vall =  e.target.value ;
    
    for(let i = 0 ; i < listProdectes.length ; i++){

        if(listProdectes[i].title.includes(vall)){
            
            NewProdect += `
            <div class="box">
            <img src="${listProdectes[i].imageUrl}" alt="">
            <div class="text">
                <h3><u>${listProdectes[i].title}</u></h3>
            </div>
            <div class="numprodc">
                <span>availables : <span id="Available">${listProdectes[i].Available}</span> </span>
                <span>prise : $ ${listProdectes[i].price}</span>
            </div>
            <div class="icon">
                <span id="New">New</span>
                <i onclick="onlive(${listProdectes[i].id})" id="like-${listProdectes[i].id}" class="fa-solid fa-heart"></i>
                <span id="num">0</span>
            </div>
            <div class="addProdect">
            <button onclick="checkDetails(${listProdectes[i].id})" class="detalis" id="Detalis">Detalis</button>
                <button onclick="checkUserData()" class="addcard" id="btnBrodect">Add brodect</button>
            </div>
            </div>`;
            document.querySelector(`.listProdect`).innerHTML = NewProdect
        }
        else if(vall === `all`){

            NewProdect += `
            <div class="box">
            <img src="${listProdectes[i].imageUrl}" alt="">
            <div class="text">
                <h3><u>${listProdectes[i].title}</u></h3>
            </div>
            <div class="numprodc">
                <span>availables : <span id="Available">${listProdectes[i].Available}</span> </span>
                <span>prise : $ ${listProdectes[i].price}</span>
            </div>
            <div class="icon">
                <span id="New">New</span>
                <i onclick="onlive(${listProdectes[i].id})" id="like-${listProdectes[i].id}" class="fa-solid fa-heart"></i>
                <span id="num">0</span>
            </div>
            <div class="addProdect">
            <button onclick="checkDetails(${listProdectes[i].id})" class="detalis" id="Detalis">Detalis</button>
                <button onclick="checkUserData()" class="addcard" id="btnBrodect">Add brodect</button>
            </div>
            </div>`;
            document.querySelector(`.listProdect`).innerHTML = NewProdect
            
        }
    }
}




// loder

let looder = document.querySelector(`.loder`)



function loder(){
    looder.classList.add(`loder`)

    let imgLod = document.querySelector(`.imgLod`)

    setTimeout(() => {
        looder.classList.remove(`loder`)
        imgLod.style.display = `none`;
    }, 3000);

}
loder()



// 

// let sr = ScrollReveal ({
//     distance: `40px`,
//     duration: 2400,
//     reset: true
// })

ScrollReveal().reveal(".box" ,{ delay: 2000 });
// sr.reveal(`.main .text .headtitle` , {delay: 2000 , origin: 'top'});
// ScrollReveal().reveal('.box', { delay: 2000 });
// ScrollReveal().reveal('.item', { duration: 500 });
// ScrollReveal().reveal('.item', { delay: 375, reset: true });