let listProdect = document.querySelectorAll(`.listProdect`)
let listProdects = document.querySelector(`.listProdects`)
let listCard = document.querySelector(`.listCard`)
let iconShowNm = document.getElementById(`iconShowNm`);
let Cancel = document.getElementById(`Cancel`);
let boxProdect = document.querySelector(`.boxProdect`);
let itemProdect = document.querySelector('.itemProdect');
let Available = document.getElementById(`Available`)

// ======================
// List Icons  
// ======================

let listIcon = document.getElementById(`listIcon`),
    first = document.getElementById(`first`),
    nth = document.getElementById(`nth`),
    last = document.getElementById(`last`),
    NavList = document.querySelector(`.NavList`)

listIcon.addEventListener(`click`, () => {
    first.classList.toggle(`show`)
    nth.classList.toggle(`show`)
    last.classList.toggle(`show`)
    NavList.classList.toggle(`show`)
})


// ======================
// icon Scroll Up
// ======================

let iconScroll = document.querySelector(`.iconScroll`);

window.onscroll = function () {
    if (this.scrollY >= 500) {
        iconScroll.classList.add(`show`)
    } else {
        iconScroll.classList.remove(`show`)
    }
};
iconScroll.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};



// ======================
// slider header
// ======================

const swipers = new Swiper('.swiperhead', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delete: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});



// ======================
// WHY SHOP WITH US 
// ======================

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 60,
    loop: true,
    centerSlide: true,
    pagination: true,
    autoTimeout: 1000,
    autoplay: {
        delete: 3000,
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



// ======================
// Customer opinions
// ======================

const swiperOpinions = new Swiper('.mySwiperSli', {
    slidesPerView: 1,
    spaceBetween: 60,
    loop: true,
    centerSlide: true,
    pagination: true,
    autoTimeout: 1000,
    autoplay: {
        delete: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



// ======================
// show list Card
// ======================

iconShowNm.addEventListener(`click`, () => boxProdect.classList.add(`show`));
Cancel.addEventListener(`click`, () => boxProdect.classList.remove(`show`));


// ======================
// Array Data  
// ======================

var cards ;
if (localStorage.getItem('CardItem')) {
    cards = JSON.parse(localStorage.getItem('CardItem'))
}else{
    cards = [];
}
var listProdectes = [];
let searchData = [];
let Details = [];
let demo;
let docm;



// =============================
// Filter Data And Add Data html
// =============================

var FilterSelect = 'all';
let selectFilter = document.getElementById(`selectFilter`)
let AllProductsCatgory = listProdectes
selectFilter.addEventListener('change', (e) => {
    FilterSelect = e.target.value
    checkFilterValue()
})

function checkFilterValue() {
    const FilterDAta = listProdectes.filter((it) => {
        return it.category == FilterSelect
    })
    if (FilterSelect == 'all') {
        AllProductsCatgory = listProdectes
    } else {
        AllProductsCatgory = FilterDAta
    }
    AddDatatoHtml()
}

function AddDatatoHtml() {
    listProdects.innerHTML = ``
    listProdect.innerHTML = ''

    if (listProdectes.length > 0) {
        AllProductsCatgory.forEach(prodect => {
            let NewProdect = document.createElement('div')

            NewProdect.classList.add('box', 'col-xl-3', 'col-lg-4', 'col-md-6')
            NewProdect.dataset.id = prodect.id;
            NewProdect.innerHTML = `
                <div class="p-3 bg-white rounded">
                    <div class='imge'>
                        <img src="${prodect.image[0]}" alt="">
                    </div>
                    <div class="text">
                        <h3 class='title fw-bold px-3'><u>${prodect.title.slice(0, 30)}...</u></h3>
                    </div>
                    <div class="numprodc">
                        <span class='d-flex  align-items-center'>Availables :<span class='${prodect.rating.count <= 10 ? 'CountRed' : ''} px-2 Availables' id="Available">${prodect.rating.count}</span></span>
                        <span>prise : $ ${prodect.price}</span>
                    </div>
                    <div class="icon">
                        <span id="New">New</span>
                    </div>
                    <div class="addProdect d-flex align-items-center justify-content-around py-3">
                        <a href='/details.html?id= + ${prodect.id}' class="detalis" id="Detalis"><i class="fa-solid fs-3 fa-eye"></i></a>
                        <button onclick="AddToCard(${prodect.id}) , showAddToCartMessage()" class="addcard btn" id="btnBrodect"><i class="fa-solid fs-3 text-success fa-cart-plus"></i></button>
                    </div>
                </div>
            `;

            listProdects.appendChild(NewProdect)
            listProdect.innerHTML = NewProdect
        })
    }
}


// ========================
// Show Message Add To Card
// ========================

function showAddToCartMessage() {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Add to Card`,
        showConfirmButton: false,
        timer: 1500,
        width: 400
    });
}


// ======================
// Filter Add to Card
// ======================

const AddToCard = (id) => {
    let positionthinprodect = cards.findIndex((value) => value.id == id);
    if (cards.length <= 0) {
        cards.push({
            id: id,
            quantity: 1,
        });
    } else if (positionthinprodect < 0) {
        cards.push({
            id: id,
            quantity: 1,
        });
    } else {
        cards[positionthinprodect].quantity = cards[positionthinprodect].quantity + 1;
    }
    Addcardtohtml()
    AddcardtoMemre()
};



// ======================
// Add product Shop Html 
// ======================

const minusCard = (id) => {
    let positionthinprodect = cards.findIndex((value) => value.id == id);
    if (cards.length <= 0) {
        
    } else if (cards[positionthinprodect].quantity === 1) {
        
    } else {
        cards[positionthinprodect].quantity = cards[positionthinprodect].quantity - 1;
    }
    Addcardtohtml()
    AddcardtoMemre()
};



// ======================
// Add Data To Memre
// ======================

const AddcardtoMemre = () => {
    localStorage.setItem(`CardItem`, JSON.stringify(cards))
}



// ======================
// Add To Card Html 
// ======================

const Addcardtohtml = () => {
    listCard.innerHTML = ``;
    let totalPrice = 0;
    let NumIConShop = 0;
    if (cards.length > 0) {
        cards.forEach(card => {
            NumIConShop = NumIConShop + card.quantity;
            let NewProdect = document.createElement('div')
            NewProdect.classList.add('Cart')
            NewProdect.dataset.id = card.prodectId;
            let positionthinprodect = listProdectes.findIndex((value) => value.id == card.id);
            let info = listProdectes[positionthinprodect]
            let total = info.price * card.quantity;
            totalPrice += total
            NewProdect.innerHTML = `
            <img src="${info.image[0]}" alt="">
            <div class="">
                <h3 class='p-0 m-0 w-0 text-white'>${info.title.slice(0, 12)}...</h3>
            </div>
            <div class="numprodc">
                <span>${Math.round(info.price * card.quantity)}$</span>
            </div>
            <div>
                <i onclick="dellToCard(${info.id})" class="fa-solid fa-trash-can fs-3"></i>
            </div>
            <div class="NumCard d-flex align-items-center">
                <span onclick="minusCard(${info.id})" class="minus fs-3"><</span>
                <span class="quantity">${card.quantity}</span>
                <span onclick="AddToCard(${info.id})" class="plus fs-3 d-flex align-items-center">></span>
            </div>
            `;
            listCard.appendChild(NewProdect);
            document.querySelector('.total').innerHTML = Math.round(totalPrice)
        })
        demo = NumIConShop;
    }
    let ViewProdect = document.getElementById(`ViewProdect`)
    function btnaddprout() {
        if (NumIConShop != 0) {
            ViewProdect.style.display = `block`;
        } else {
            ViewProdect.style.display = `none`
            listCard.innerHTML = `
                <h5>You do not have any products. Click here to add products <br/> <a href="index.html">Add prodect</a></h5>
                `;
        }
        AddDatatoHtml()
    }
    btnaddprout()
    shop.innerHTML = NumIConShop;
    AddDatatoHtml()
}


// ======================
// Delete Priduct 
// ======================

const dellToCard = (id) => {
    const DellProduct = cards.findIndex((it) => it.id == id)
    console.log(DellProduct);
    cards.splice(DellProduct, 1)
    AddcardtoMemre()
    Addcardtohtml()
}


// ======================
// Search Product in Data
// ======================

function searchDate(value) {
    document.querySelector('.Product').innerHTML = '';
    const product = listProdectes.filter((it) => {
        return it.title.toLowerCase().includes(value.toLowerCase())
    })
    product.forEach((item) => {
        let NewProdect = `
        <li class='p-2 fs-3 border-bottom'><a href='/details.html?id= + ${item.id}' class="detalis" id="Detalis">${item.title}</a></li>
            
    `
        document.querySelector('.Product').innerHTML += NewProdect
    })
}


// ======================
// get Data Api
// ======================

let initApp = () => {
    fetch('http://localhost:3000/products')
        .then(Response => Response.json())
        .then(data => {
            listProdectes = data;
            searchData = data;

            AddDatatoHtml()
            checkFilterValue()
            // searchDate()
            // 
            if (localStorage.getItem('CardItem')) {
                Addcardtohtml()
            }
            
        })
}
initApp()


// ======================
// return peage 
// ======================

function ViewProdects() {
    if (demo != 0) {
        if (user) {
            location = `prodects.html`
        } else {
            location = `login.html`
        }

    }
}


// ======================
// Add Loader  
// ======================

let Loaders = document.querySelectorAll('.Loader')
window.addEventListener('load', () => {
    Loaders.forEach((Loader) => {
        Loader.classList.add('show')
        setTimeout(() => {
            document.body.removeChild(Loader)
        }, 2000);
    })
})