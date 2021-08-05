// ======-----checkout script starts------======//
var genrePrice ;
var bookPrice = 100;
let total = 0;
function buyBook( name,genre,definitive,total ){
  this.name = name;
  this.genre = genre;
  this.definitive = definitive;
  this.total = total;
}
// submit
$(document).ready(function(){
  $("button.proceed").click(function(event){
   var bookName = $(".name option:selected").val();
   var bookGenre = $("#genre option:selected").val();
   var definitiveGenre = $("#definitive option:selected").val();

   switch(bookGenre){
    case "0":
      bookPrice = 0;
    break;
    case "Undeniable Attraction":
      console.log(bookPrice)
    break;
    case "Wealth of Nations":
      console.log(bookPrice)
    break;
    case "Fifty Shades of Grey":
      console.log(bookPrice)
    break;
    case "To Kill a Mockingbird":
      console.log(bookPrice)
    break;
    case "1984":
      console.log(bookPrice)
    break;
    case "Harry Porter and the Philosopher ":
      console.log(bookPrice)
    break;
    case "The Lord of The Rings":
      console.log(bookPrice)
    break;
    case "The Great Gatsby":
      console.log(bookPrice)
    break;
    case "Pride and Prejudice":
      console.log(bookPrice)
    break;
    case "The Diary of a young Girl":
      console.log(bookPrice)
    break;
    case "The Book Thief":
      console.log(bookPrice)
    break;
    case "Lupin":
      console.log(bookPrice)
    break;
    case "Little Women":
      console.log(bookPrice)
    break;
    case "Farenheit 451":
      console.log(bookPrice)
    break;
    case "Jane Eyre":
      console.log(bookPrice)
    break;
    case "Gone with the Wind":
      console.log(bookPrice)
    break;
    case "Romeo and Juliet":
      console.log(bookPrice)
    break;
    default:
      console.log("No price"); 
  }
   switch(bookGenre){
      case "0":
        genrePrice = 0;
      break;
      case "romance":
        genrePrice = 200;
      break;
      case "history":
        genrePrice = 500;
      break;
      case "fiction":
        genrePrice = 150;
      break;
      case "kids":
        genrePrice = 150;
      break;
      default:
        console.log("No price"); 
    }
    switch(definitiveGenre){
      case "0":
      break;
      case "rom":
      break;
      case "fiction":
      break;
      case "non-fiction":
      break;
      default:
        console.log("No genre")
     }

    if((bookName == "0") && (bookGenre == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("div.choice").show();
      alert("Please select book and genre"); 
    }
    else{
      $("button.proceed").hide();
      $("div.choice").slideDown(1000);
    }

    total = genrePrice + bookPrice;
    console.log(total);
    var checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#bookname").html($(".name option:selected").val());
    $("#bookgenre").html( $("#genre option:selected").val());
    $("#bookdefinitive").html($("#definitive option:selected").val());
    $("#totals").html(total);
    
// Add book backend
    $("button.addBook").click(function(){
      var bookName = $(".name option:selected").val();
      var bookGenre = $("#genre option:selected").val();
      var definitiveGenre = $("#definitive option:selected").val();

      switch(bookGenre){
        case "0":
          bookPrice = 0;
        break;
        case "Undeniable Attraction":
          console.log(bookPrice)
        break;
        case "Wealth of Nations":
          console.log(bookPrice)
        break;
        case "Fifty Shades of Grey":
          console.log(bookPrice)
        break;
        case "To Kill a Mockingbird":
          console.log(bookPrice)
        break;
        case "1984":
          console.log(bookPrice)
        break;
        case "Harry Porter and the Philosopher ":
          console.log(bookPrice)
        break;
        case "The Lord of The Rings":
          console.log(bookPrice)
        break;
        case "The Great Gatsby":
          console.log(bookPrice)
        break;
        case "Pride and Prejudice":
          console.log(bookPrice)
        break;
        case "The Diary of a young Girl":
          console.log(bookPrice)
        break;
        case "The Book Thief":
          console.log(bookPrice)
        break;
        case "Lupin":
          console.log(bookPrice)
        break;
        case "Little Women":
          console.log(bookPrice)
        break;
        case "Farenheit 451":
          console.log(bookPrice)
        break;
        case "Jane Eyre":
          console.log(bookPrice)
        break;
        case "Gone with the Wind":
          console.log(bookPrice)
        break;
        case "Romeo and Juliet":
          console.log(bookPrice)
        break;
        default:
          console.log("No price"); 
      }
      switch(bookGenre){
        case "0":
          genrePrice = 0;
        break;
        case "romance":
          genrePrice = 200;
        break;
        case "history":
          genrePrice = 500;
        break;
        case "fiction":
          genrePrice = 150;
        break;
        case "kids":
          genrePrice = 150;
        break;
        default:
          console.log("No genre"); 
      }
       switch(definitiveGenre){
        case "0":
        break;
        case "rom":
        break;
        case "fiction":
        break;
        case "non-fiction":
        break;
        default:
          console.log("No genre")
       }
        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      var newOrder = new buyBook(bookName, bookGenre, definitiveGenre,total);

      $("#ordersmade").append('<tr><td id="bookname">'+newOrder.name +'</td><td id="bookgenre">' + newOrder.genre + '</td><td id="bookdefinitive">'+newOrder.definitive +'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
});
    // Checkout front-end
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addBook").hide();
      $("button.delivery").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#booktotal").append("Your bill is sh. "+checkoutTotal);
    });
// checkout ends
    // delivery frontend
    $("button.deliver").click(function(){
      $(".booktable").hide();
      $(".delivery").slideDown(1000);
      $("#deliveryprice").hide();
      $("button.deliver").hide();
      $("#booktotal").hide();
      // backend
      var deliveryAmount= 200;
      console.log("You will pay sh. "+deliveryAmount+"");
      $("#totalbill").append("Your delivery fee is: "+deliveryAmount);
    });

    // order button front-end
    $("button#final-order").click(function(event){
      event.preventDefault();
      $("#booktotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      // backend
      var deliveryAmount= 200;
      console.log("Final Bill is: "+deliveryAmount);
      var person = $("input#name").val();
      var phone = $("input#phone").val();
      var location = $("input#location").val();
      var deliveryCash = checkoutTotal + deliveryAmount
      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
        $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Total bill sh. "+deliveryCash);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1000);
      }
      else {
        alert("Fill in the delivery details!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });
});
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
! function(a) {
  function b() {
      g.hasClass(k) ? h.toggleClass(l) : h.toggleClass(m), q && g.one("transitionend", function() {
          q.focus()
      })
  }

  function c() {
      g.hasClass(k) ? h.removeClass(l) : h.removeClass(m)
  }

  function d() {
      g.hasClass(k) ? (h.addClass(l), g.animate({
          left: "0px"
      }, r), i.animate({
          left: s
      }, r), j.animate({
          left: s
      }, r)) : (h.addClass(m), g.animate({
          right: "0px"
      }, r), i.animate({
          right: s
      }, r), j.animate({
          right: s
      }, r)), q && q.focus()
  }

  function e() {
      g.hasClass(k) ? (h.removeClass(l), g.animate({
          left: "-" + s
      }, r), i.animate({
          left: "0px"
      }, r), j.animate({
          left: "0px"
      }, r)) : (h.removeClass(m), g.animate({
          right: "-" + s
      }, r), i.animate({
          right: "0px"
      }, r), j.animate({
          right: "0px"
      }, r))
  }

  function f() {
      a(t).addClass(v), a(t).on("click", function() {
          var b = a(this);
          b.hasClass(v) ? (a(t).addClass(v).removeClass(u), b.removeClass(v).addClass(u)) : b.addClass(v).removeClass(u)
      })
  }
  var g = a(".pushy"),
      h = a("body"),
      i = a("#container"),
      j = a(".push"),
      k = "pushy-left",
      l = "pushy-open-left",
      m = "pushy-open-right",
      n = a(".site-overlay"),
      o = a(".menu-btn, .pushy-link"),
      p = a(".menu-btn"),
      q = a(g.data("focus")),
      r = 200,
      s = g.width() + "px",
      t = ".pushy-submenu",
      u = "pushy-submenu-open",
      v = "pushy-submenu-closed";
  a(t);
  a(document).keyup(function(a) {
      27 == a.keyCode && (h.hasClass(l) || h.hasClass(m)) && (w ? c() : (e(), x = !1), p && p.focus())
  });
  var w = function() {
      var a = document.createElement("p"),
          b = !1,
          c = {
              webkitTransform: "-webkit-transform",
              OTransform: "-o-transform",
              msTransform: "-ms-transform",
              MozTransform: "-moz-transform",
              transform: "transform"
          };
      if (null !== document.body) {
          document.body.insertBefore(a, null);
          for (var d in c) void 0 !== a.style[d] && (a.style[d] = "translate3d(1px,1px,1px)", b = window.getComputedStyle(a).getPropertyValue(c[d]));
          return document.body.removeChild(a), void 0 !== b && b.length > 0 && "none" !== b
      }
      return !1
  }();
  if (w) f(), o.on("click", function() {
      b()
  }), n.on("click", function() {
      b()
  });
  else {
      h.addClass("no-csstransforms3d"), g.hasClass(k) ? g.css({
          left: "-" + s
      }) : g.css({
          right: "-" + s
      }), i.css({
          "overflow-x": "hidden"
      });
      var x = !1;
      f(), o.on("click", function() {
          x ? (e(), x = !1) : (d(), x = !0)
      }), n.on("click", function() {
          x ? (e(), x = !1) : (d(), x = !0)
      })
  }
}(jQuery);

jQuery(document).ready(function() {
  jQuery(".hamburger").click(function() {
      jQuery(this).toggleClass("is-active");
  });
});
