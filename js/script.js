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

