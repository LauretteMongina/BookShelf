
// ======-----checkout script starts------======//
// $("button.proceed").click(function() {
//     $("button.proceed").hide();
//     $("#information").hide();
//     $("div.choice").slideDown(2000);
// });

// var price, definitive_price, topping_price;
// let total = 0;

// function Getbook(book, genre, definitive, total) {
//     this.book = book;
//     this.genre = genre;
//     this.definitive = definitive;
//     this.total = total;
// }


// proceed button
// $(document).ready(function() {
//     $("button.proceed").click(function() {
//         $("button.proceed").hide();
//         $("#information").hide();
//         $("div.choice").slideDown(2000);
//     });
    // $("button.proceed").click(function(event) {
    //     let pbook = $(".book option:selected").val();
    //     let pgenre = $("#genre option:selected").val();
    //     let pdefinitive = $("#definitive option:selected").val();
    //     $.each($("input[book='toppings']:checked"), function() {
    //         ptopping.push($(this).val());
    //     });
    //     console.log(ptopping.join(", "));

    //     switch (pgenre) {
    //         case "0":
    //             price = 0;
    //             break;
    //         case "large":
    //             price = 1200;
    //             console.log(price);
    //             break;
    //         case "medium":
    //             price = 850;
    //             console.log("The price is " + price);
    //             break;
    //         case "small":
    //             price = 600;
    //             console.log(price);
    //         default:
    //             console.log("error");
    //     }
    //     switch (pdefinitive) {
    //         case "0":
    //             definitive_price = 0;
    //             break;
    //         case "Crispy":
    //             definitive_price = 200;
    //             break;
    //         case "Stuffed":
    //             definitive_price = 250;
    //             break;
    //         case "Gluten-free":
    //             definitive_price = 180;
    //             break;
    //         default:
    //             console.log("No price");
    //     }
//         let topping_value = ptopping.length * 50;
//         console.log("toppins value" + topping_value);

//         if ((pgenre == "0") && (pdefinitive == "0")) {
//             console.log("nothing selected");
//             $("button.proceed").show();
//             $("#information").show();
//             $("div.choise").hide();
//             alert("Please select pizza genre and definitive");
//         } else {
//             $("button.proceed").hide();
//             $("#information").hide();
//             $("div.choise").slideDown(1000);
//         }

//         total = price + definitive_price + topping_value;
//         console.log(total);
//         let checkoutTotal = 0;
//         checkoutTotal = checkoutTotal + total;

//         $("#pizzabook").html($(".book option:selected").val());
//         $("#pizzagenre").html($("#genre option:selected").val());
//         $("#pizzadefinitive").html($("#definitive option:selected").val());
//         $("#pizzatopping").html(ptopping.join(", "));
//         $("#totals").html(total);

//         // Add pizza button
//         $("button.addPizza").click(function() {
//             let pbook = $(".book option:selected").val();
//             let pgenre = $("#genre option:selected").val();
//             let pdefinitive = $("#definitive option:selected").val();
//             let ptopping = [];
//             $.each($("input[book='toppings']:checked"), function() {
//                 ptopping.push($(this).val());
//             });
//             console.log(ptopping.join(", "));
//             switch (pgenre) {
//                 case "0":
//                     price = 0;
//                     break;
//                 case "large":
//                     price = 1200;
//                     console.log(price);
//                     break;
//                 case "medium":
//                     price = 850;
//                     console.log("The price is " + price);
//                     break;
//                 case "small":
//                     price = 600;
//                     console.log(price);
//                 default:
//                     console.log("error");
//             }
//             switch (pdefinitive) {
//                 case "0":
//                     definitive_price = 0;
//                     break;
//                 case "Crispy":
//                     definitive_price = 200;
//                     break;
//                 case "Stuffed":
//                     definitive_price = 150;
//                     break;
//                 case "Gluten-free":
//                     definitive_price = 180;
//                     break;
//                 default:
//                     console.log("No price");
//             }
//             let topping_value = ptopping.length * 50;
//             console.log("toppins value" + topping_value);
//             total = price + definitive_price + topping_value;
//             console.log(total);

//             checkoutTotal = checkoutTotal + total;
//             console.log(checkoutTotal);
//             // constractor function
//             var newOrder = new Getpizza(pbook, pgenre, pdefinitive, ptopping, total);

//             $("#ordersmade").append('<tr><td id="pizzabook">' + newOrder.book + '</td><td id="pizzagenre">' + newOrder.genre + '</td><td id="pizzadefinitive">' + newOrder.definitive + '</td><td id="pizzatopping">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');
//             console.log(newOrder);



//         });
//         // Checkout button
//         $("button#checkout").click(function() {
//             $("button#checkout").hide();
//             $("button.addPizza").hide();
//             $("button.deliver").slideDown(1000);
//             $("#addedprice").slideDown(1000);
//             console.log("Your total bills is sh. " + checkoutTotal);
//             $("#pizzatotal").append("Your bill is sh. " + checkoutTotal);
//         });

//         // home delivery button
//         $("button.deliver").click(function() {
//             $(".pizzatable").hide();
//             $(".choise h2").hide();
//             $(".delivery").slideDown(1000);
//             $("#addedprice").hide();
//             $("button.deliver").hide();
//             $("#pizzatotal").hide();
//             let deliceryamount = checkoutTotal + 150;
//             console.log("You will pay sh. " + deliceryamount + " on delivery");
//             $("#totalbill").append("Your bill plus delivery fee is: " + deliceryamount);
//         });

//         // when one clicks place order button
//         $("button#final-order").click(function(event) {
//             event.preventDefault();

//             $("#pizzatotal").hide();
//             $(".delivery").hide();
//             $("button#final-order").hide();
//             let deliceryamount = checkoutTotal + 150;
//             console.log("Final Bill is: " + deliceryamount);
//             let person = $("input#book").val();
//             let phone = $("input#phone").val();
//             let location = $("input#location").val();

//             if ($("input#book").val() && $("input#phone").val() && $("input#location").val() != "") {

//                 $("#finallmessage").append(person + ", We have recieved your order and it will be delivered to you at " + location + ". Prepare sh. " + deliceryamount);
//                 $("#totalbill").hide();
//                 $("#finallmessage").slideDown(1200);
//             } else {
//                 alert("Please fill in the details for delivery!");
//                 $(".delivery").show();
//                 $("button#final-order").show();
//             }
//         });
//         event.preventDefault();
//     });
// });
// gallery starts
$("#book1").click(function(){
  $('.show1').show();
  $('#book1').hide();
});
$(".show1").click(function(){
  $('#book1').show();
  $('.show1').hide();
});
$("#book2").click(function(){
  $('.show2').show();
  $('#book2').hide();
});
$(".show2").click(function(){
  $('#book2').show();
  $('.show2').hide();
});
$("#book3").click(function(){
  $('.show3').show();
  $('#book3').hide();
});
$(".show3").click(function(){
  $('#book3').show();
  $('.show3').hide();
});
$("#book4").click(function(){
  $('.show4').show();
  $('#book4').hide();
});
$(".show4").click(function(){
  $('#book4').show();
  $('.show4').hide();
});
$("#book5").click(function(){
  $('.show5').show();
  $('#book5').hide();
});
$(".show5").click(function(){
  $('#book5').show();
  $('.show5').hide();
});
$("#book6").click(function(){
  $('.show6').show();
  $('#book6').hide();
});
$(".show6").click(function(){
  $('#book6').show();
  $('.show6').hide();
});
$("#book7").click(function(){
  $('.show7').show();
  $('#book7').hide();
});
$(".show7").click(function(){
  $('#book7').show();
  $('.show7').hide();
});
$("#book8").click(function(){
  $('.show8').show();
  $('#book8').hide();
});
$(".show8").click(function(){
  $('#book8').show();
  $('.show8').hide();
});
$("#book9").click(function(){
  $('.show9').show();
  $('#book9').hide();
});
$(".show9").click(function(){
  $('#book9').show();
  $('.show9').hide();
});
$("#book10").click(function(){
  $('.show10').show();
  $('#book10').hide();
});
$(".show10").click(function(){
  $('#book10').show();
  $('.show10').hide();
});
$("#book11").click(function(){
  $('.show11').show();
  $('#book11').hide();
});
$(".show11").click(function(){
  $('#book11').show();
  $('.show11').hide();
});
// gallery ends