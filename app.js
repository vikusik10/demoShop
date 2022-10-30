let productsCount = document.getElementById("products-count");

let addToCartBtns = document.querySelectorAll(".product-button-add");
console.log(productsCount);
console.log(addToCartBtns);

// addToCartBtns.forEach((item) => {
//     item.addEventListener("click", function () {
//       console.log("clicked");
//     });
//   });
for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener("click", function () {
      let prevProductsCount = productsCount.textContent;
      productsCount.textContent = +prevProductsCount + 1;
    });
  }

let likeBtns = document.querySelectorAll(".like");
likeBtns.forEach((item) => {
    item.addEventListener("click", function () {
        // if (item.classList.contains("liked")) {
        //     item.classList.remove("liked");
        // } else {
        //     item.classList.add("liked")
        // }
        item.classList.toggle("liked")
    })
})

let moreDetailsBtns = document.querySelectorAll(".product-button-more");
let closeBtn = document.querySelector(".btn-close");
let modal = document.querySelector(".modal");


// moreDetailsBtns.forEach((item) => {
//     item.addEventListener("click", function () {
//         modal.classList.add("show");
//     })
// }) 

//     closeBtn.addEventListener("click", function () {
//         modal.classList.add("hide");
//         modal.classList.remove("show");
//     })

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}
function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
  }
  
  moreDetailsBtns.forEach((item) => {
    item.addEventListener("click", openModal);
  });
  
  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", function (e) {
    console.log(e);
     console.log(e.target);
    if(e.target === modal) {
        closeModal();
    }

  })
  
$(".slider").slick({
  dots: true
})

//   Show modal by scroll
function showModalByScroll() {
    if (window.pageYOffset > document.body.scrollHeight / 2) {
        openModal();
      }
    }
    
    window.addEventListener("scroll", showModalByScroll);
    

// change quantity

// function Car(model, year, color) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     console.log("this", this)
// }

// let audi = new Car("A8", 2012, "black");
// let bmw = new Car("328", 2021, "blue");
// console.log(audi)
let incrementBtns = document.querySelectorAll(".increment")
let decrementBtns = document.querySelectorAll(".decrement")
let productQuantity = document.querySelectorAll(".product-quantity input");

function Counter(incrementButton, decrementButton, inputField, minCount=1, maxCount=5) {
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField,
    };
    this.toggleButtonState = function () {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementButton.disabled = count <= minCount;
        this.domRefs.incrementButton.disabled = count >= maxCount;
    };
     this.toggleButtonState();

    this.increment = function () {
      console.log("increment")
      this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
      this.toggleButtonState();
    }
    this.decrement = function () {
      console.log("decrement")
      this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
      this.toggleButtonState();
    }
    this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this));
    this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this));
}
    
 let counters = [];
 productQuantity.forEach((item,i) => (
   counters[i] = new Counter(incrementBtns[i], decrementBtns[i], item)
 ))