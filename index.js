// let num=parseInt($(".num").text(), 10);

// function check(num, cartBtnElement, itemPicElement){
//   const borderstyle="2px solid hsl(15, 87%, 42%)";

//   if(num>0){
//     cartBtnElement.addClass("active");
//     itemPicElement.css("border",borderstyle);
//     cartBtnElement.css("border",borderstyle);
//   }
//   else{
//     cartBtnElement.removeClass("active");
//     itemPicElement.css("border","none");
//     cartBtnElement.css("border","solid 2px hsl(5, 7%, 66%)");
//   }
// };





const vm=Vue.createApp({
  data(){
    return {
      foods: [
        {
           "image": {
                "thumbnail": "./product-list-with-cart-main/assets/images/image-waffle-thumbnail.jpg",
                "mobile": "./product-list-with-cart-main/assets/images/image-waffle-mobile.jpg",
                "tablet": "./product-list-with-cart-main/assets/images/image-waffle-tablet.jpg",
                "desktop": "/product-list-with-cart-main/assets/images/image-waffle-desktop.jpg"
           },
           "name": "Waffle with Berries",
           "category": "Waffle",
           "price": 6.50
        },
        {
            "image": {
                "thumbnail": "./product-list-with-cart-main/assets/images/image-creme-brulee-thumbnail.jpg",
                "mobile": "./product-list-with-cart-main/assets/images/image-creme-brulee-mobile.jpg",
                "tablet": "./product-list-with-cart-main/assets/images/image-creme-brulee-tablet.jpg",
                "desktop": "/product-list-with-cart-main/assets/images/image-creme-brulee-desktop.jpg"
            },
            "name": "Vanilla Bean Crème Brûlée",
            "category": "Crème Brûlée",
            "price": 7.00
         },
         {
            "image": {
                "thumbnail": "./product-list-with-cart-main/assets/images/image-macaron-thumbnail.jpg",
                "mobile": "./product-list-with-cart-main/assets/images/image-macaron-mobile.jpg",
                "tablet": "./product-list-with-cart-main/assets/images/image-macaron-tablet.jpg",
                "desktop": "/product-list-with-cart-main/assets/images/image-macaron-desktop.jpg"
            },
            "name": "Macaron Mix of Five",
            "category": "Macaron",
            "price": 8.00
         },
         {
            "image": {
                "thumbnail": "./product-list-with-cart-main/assets/images/image-tiramisu-thumbnail.jpg",
                "mobile": "./product-list-with-cart-main/assets/images/image-tiramisu-mobile.jpg",
                "tablet": "./product-list-with-cart-main/assets/images/image-tiramisu-tablet.jpg",
                "desktop": "/product-list-with-cart-main/assets/images/image-tiramisu-desktop.jpg"
            },
            "name": "Classic Tiramisu",
            "category": "Tiramisu",
            "price": 5.50
         },
         {
            "image": {
                "thumbnail": "./product-list-with-cart-main/assets/images/image-baklava-thumbnail.jpg",
                "mobile": "./product-list-with-cart-main/assets/images/image-baklava-mobile.jpg",
                "tablet": "./product-list-with-cart-main/assets/images/image-baklava-tablet.jpg",
                "desktop": "/product-list-with-cart-main/assets/images/image-baklava-desktop.jpg"
            },
            "name": "Pistachio Baklava",
            "category": "Baklava",
            "price": 4.00
         },
         {
            "image": {
                "thumbnail": "./product-list-with-cart-main/assets/images/image-meringue-thumbnail.jpg",
                "mobile": "./product-list-with-cart-main/assets/images/image-meringue-mobile.jpg",
                "tablet": "./product-list-with-cart-main/assets/images/image-meringue-tablet.jpg",
                "desktop": "/product-list-with-cart-main/assets/images/image-meringue-desktop.jpg"
            },
            "name": "Lemon Meringue Pie",
            "category": "Pie",
            "price": 5.00
         },
         {
            "image": {
                "thumbnail": "./product-list-with-cart-main/assets/images/image-cake-thumbnail.jpg",
                "mobile": "./product-list-with-cart-main/assets/images/image-cake-mobile.jpg",
                "tablet": "./product-list-with-cart-main/assets/images/image-cake-tablet.jpg",
                "desktop": "/product-list-with-cart-main/assets/images/image-cake-desktop.jpg"
            },
            "name": "Red Velvet Cake",
            "category": "Cake",
            "price": 4.50
         },
         {
            "image": {
                "thumbnail": "./product-list-with-cart-main/assets/images/image-brownie-thumbnail.jpg",
                "mobile": "./product-list-with-cart-main/assets/images/image-brownie-mobile.jpg",
                "tablet": "./product-list-with-cart-main/assets/images/image-brownie-tablet.jpg",
                "desktop": "/product-list-with-cart-main/assets/images/image-brownie-desktop.jpg"
            },
            "name": "Salted Caramel Brownie",
            "category": "Brownie",
            "price": 4.50
         },
         {
            "image": {
                "thumbnail": "./product-list-with-cart-main/assets/images/image-panna-cotta-thumbnail.jpg",
                "mobile": "./product-list-with-cart-main/assets/images/image-panna-cotta-mobile.jpg",
                "tablet": "./product-list-with-cart-main/assets/images/image-panna-cotta-tablet.jpg",
                "desktop": "/product-list-with-cart-main/assets/images/image-panna-cotta-desktop.jpg"
            },
            "name": "Vanilla Panna Cotta",
            "category": "Panna Cotta",
            "price": 6.50
         }
    ],
    }
  }
});
vm.mount("#app");

let cart={};

$("i.b").on('click',
  function(){
    // num=num+1;
    // $(".num").text(num);
    // check();
    let numElement=$(this).siblings(".num");
    let num=parseInt(numElement.text(), 10)+1;
    // num=num+1;
    numElement.text(num);

    check(num, $(this).closest(".cartbtn"), $(this).closest(".top").find(".itempic"));

    const productName= $(this).closest(".item").find(".bottom .name").text();
    const productPrice= $(this).closest(".item").find(".bottom .price").text();
    const productCategory= $(this).closest(".item").find(".bottom .category").text();


    if(cart[productName]) {
        cart[productName].quantity =num;
      } else{
        cart[productName]={
          price: productPrice,
          quantity: num,
          category: productCategory,
        };
      }

   updateCart();

   
    

  }
);

$("i.c").on('click',
  function(){
    // num=num-1;
    // $(".num").text(num);
    // check();
    let numElement=$(this).siblings(".num");
    let num=parseInt(numElement.text(), 10);

    if(num>0){
      num=num-1;
    }
    
    numElement.text(num);

    check(num, $(this).closest(".cartbtn"), $(this).closest(".top").find(".itempic"));

    const productName= $(this).closest(".item").find(".bottom .name").text();
    const productPrice= $(this).closest(".item").find(".bottom .price").text();

    

    if(cart[productName]) {
        cart[productName].quantity =num;
        if (cart[productName].quantity === 0){
          delete cart[productName];
        }
      } 

   updateCart();

  }
);

function check(num, cartBtnElement, itemPicElement){
  const borderstyle="2px solid hsl(15, 87%, 42%)";

  if(num>0){
    cartBtnElement.addClass("active");
    itemPicElement.css("border",borderstyle);
    cartBtnElement.css("border",borderstyle);
  }
  else{
    cartBtnElement.removeClass("active");
    itemPicElement.css("border","none");
    cartBtnElement.css("border","solid 2px hsl(5, 7%, 66%)");
  }
};

function updateCart() {
  const $cartItemContainer = $("#cart-items");
  const $orderContainer= $("#orderContainer");
  $cartItemContainer.empty();
  $orderContainer.empty();

  let totalPrice = 0;
  let totalItems = 0;
  let totalQuantity = 0;

  $.each(cart, function(productName, item) {
    
    // totalPrice += parseFloat(item.price) * parseInt(item.quantity,10);

    const price = parseFloat(item.price.replace("$","")); // 確保 price 是數字
    const quantity = parseInt(item.quantity, 10); // 確保 quantity 是數字
    

    // 如果 price 是 NaN，跳過這個產品（防止壞數據）
    if (!isNaN(price) && !isNaN(quantity)) {
      totalPrice += price * quantity;
      totalItems += quantity;
    }

    const $cartItem = $(`
        <div class="cart-item">
            <div class=name>${productName}</div> 
            <br> <span style="color:hsl(12, 45%, 49%); font-weight: 700;">${item.quantity}x </span>
            <span style="color:hsl(19, 8%, 51%);">&nbsp; @${item.price} </span>
            <span style="color:hsl(217, 2%, 5%); font-weight:700;">&nbsp; $${parseInt(item.quantity, 10) * parseFloat(item.price.replace("$",""))} </span>
            <div class=deletion>
              <i class="fa-solid fa-trash removeFromCart" data-name="${productName}"></i>
            </div>
            <hr>
            
            
        </div>
    `);

  $cartItemContainer.append($cartItem);

  const $orderItems = $(`
        <div class="cart-item">
            <div class=orderInfo>
            <div class=name>${productName}</div> 
            <br> <span style="color:hsl(12, 45%, 49%); font-weight: 700;">${item.quantity}x </span>
            <span style="color:hsl(19, 8%, 51%);">&nbsp; @${item.price} </span>
            </div>
            
            <span class=totalPrice style="color:hsl(217, 2%, 5%); font-weight:700;">&nbsp; $${parseInt(item.quantity, 10) * parseFloat(item.price.replace("$",""))} </span>

        </div>
        <hr>
        
            
            
        
    `);
    
    
    $orderContainer.append($orderItems);

  
});
  $('#total-price').text(`$${totalPrice}`);
  $('#total-price-order').text(`$${totalPrice}`);
  $('.cart_title').text(`Your cart (${totalItems})`);

  if (totalItems > 0) {
    $("#yourcart").hide();
    $("#yourcart2").show();
    $("#yourcart2").addClass("show");
  } else {
    $("#yourcart").show();
    $("#yourcart2").hide();
    $("#yourcart2").removeClass("show");
  }
}

$(document).on('click', 'i.removeFromCart',function(){
  const productName=$(this).data('name');

  if(cart[productName]) {
    cart[productName].quantity -=1;

    const numElement = $(`.item:has(.name:contains("${productName}")) .num`);
    numElement.text(cart[productName].quantity);
    
    if(cart[productName].quantity === 0){
      delete cart[productName];
    }
  }
  updateCart();


});

$(".orderbtn").on("click",function(){
  $(".modal").addClass("show");
});

$(window).on("click",function(event){
  if($(event.target).is("#modal")){
    $("#modal").removeClass("show");
  }
});




// <button class="remove-from-cart" data-name="${productName}">移除</button>
