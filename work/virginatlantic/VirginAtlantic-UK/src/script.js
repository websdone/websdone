// JavaScript Document

$(document).ready(function() {
     setTimeout(function(){
      //  $('.text2').removeClass('hide');
         $('.text2').animate({opacity: "1"}, 1200);
         $('.move').animate({opacity: "1"}, 1200);
         $('.pulse').animate({opacity: "0.4"}, 1200)
         }, 
    1500); // change text after 4 sec

 var timer;
 setTimeout(function(){
    setInterval(function() {
        $('.pulse').removeClass('hide');
              $('.pulse').animate({opacity: "0.4"}, 1000);
              $('.pulse').animate({opacity: "0"}, 1000);
              }, 200) // speed of the pulse in/out
           },1500); 
           
   $('.move').click(function() {
      // document.location = "768x968.html";
    $('.pulse').remove();
    $('.move').removeClass('hide');       
   // $('.move').animate({width: '415', opacity: '0.2'}, 2700);        
       document.getElementById('video').play();
      
  });    

$('.move').click(function() {   
  $('.move').animate({width: '300',}, 3000, function() { // speed of animation
  //  alert('hello');
    // document.location = "768x968.html"; 
      $('.text2, .pulse').removeClass('');   
      $('.container').addClass('hides');
      $('.hidden').removeClass('hidden').addClass('show');
     });
  });   
}); //end document.ready