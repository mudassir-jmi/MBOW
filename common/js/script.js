// $(document).ready(function () {
//   $(".minussign").click(function () {
//     var $input = $(this).parent().find("input");
//     var count = parseInt($input.val()) - 1;
//     count = count < 1 ? 0 : count;
//     $input.val(count);
//     $input.change();
//     if (count < 1) {
//       $(this).parents(".quantity-btn").find(".position-plus").show();
//       $(this).parents(".quantity-btn").find(".recipe-cost");
//     }
//     return false;
//   });
//   $(".plussign").click(function () {
//     var $input = $(this).parent().find("input");
//     $input.val(parseInt($input.val()) + 1);
//     $input.change();
//     return false;
//   });
// });


//  Js code


let total = document.querySelector('#total-amt');
let tax = document.querySelector('#tax-amt');
let grand_total = document.querySelector('#grand_total');
let discountCode = document.querySelector("#discount_code");
let cartValue = document.querySelector("#cartValue");

const decreaseNumber = (incdec, itemprice) => {
var itemval = document.getElementById(incdec);
console.log(itemval);
var itemprice = document.getElementById(itemprice);

if(itemval.value <= 0){
itemval.value = 0;
alert('Negative quantity not allowed');
}else{
itemval.value = parseInt(itemval.value) - 1;
itemprice.innerHTML  = parseInt(itemprice.innerHTML) - 3000;
total.innerHTML  = parseInt(total.innerHTML) - 3000;
grand_total.innerHTML  = parseInt(total.innerHTML) + parseInt(tax.innerHTML);
cartValue.innerHTML  = parseInt(total.innerHTML) + parseInt(tax.innerHTML);
}
}

const increaseNumber = (incdec, itemprice) => {
var itemval = document.getElementById(incdec);
var itemprice = document.getElementById(itemprice);
// let cost = document.querySelector(".recipe-cost").innerHTML;
// cost = parseInt(cost);
// console.log(cost);
// console.log(itemval.value);
if(itemval.value >= 5){
itemval.value = 5;
}else {
itemval.value = parseInt(itemval.value) + 1;
itemprice.innerHTML  = parseInt(itemprice.innerHTML) + 3000;
total.innerHTML  = parseInt(total.innerHTML) + 3000;
grand_total.innerHTML  = parseInt(total.innerHTML) + parseInt(tax.innerHTML);
cartValue.innerHTML  = parseInt(total.innerHTML) + parseInt(tax.innerHTML);
}
}

// discount coupon
const discount_code = () => {
  let currentAmt = parseInt(grand_total.innerHTML);
  let error = document.querySelector('#error');
  if(discountCode.value === 'v52gs1') {
    let newtotalamt = currentAmt - 20;
    grand_total.innerHTML = newtotalamt;
    error.innerHTML = "Valid Code 😄";
  }else {
      error.innerHTML = "valid code is code10";
  }
} 