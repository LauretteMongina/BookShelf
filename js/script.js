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