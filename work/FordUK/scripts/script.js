// JavaScript Document
$(document).ready(function() {
	
	//alert("hello");
	
	setTimeout('$("#hotspots").addClass("display")', 3000);
     // call to start hotspots
     hotspots();
      // power button
			setInterval(function(){
				// Selecting only the visible layers:
				var versions = $('.power:visible');

				if(versions.length<2){
					// If only one layer is visible, show the other
					$('.power').fadeIn(1000);
				}
				else{
					// Hide the upper layer
					versions.eq(0).fadeOut(1000);
				}
			},800);

     // hotspots
      function hotspots(){
         hotspot = $(".hotspots li");
         message = $(".message");  
         // hotspotLink = $(".hotspots li a:active");
         
         hotspot.click(function(){
            // Remove message if they click more than one button and the first one hasn't faded
            $(".message").remove();
            $("li.show").remove();
            // append message
            $(this).append($("<span class='message'> </span>")).stop();
            $('.message').fadeIn('600', function() {
                $(".message").fadeIn(600);
              });
           
            $(this).append($("<li class='show'> &nbsp; </li>")).stop();
            $(".hotspots li a").addClass('hide');
            
             //show the popup message, hide with fading effect and remove
            $('li.show').show().stop(function() { 
          //     $('.message, li.show').show(function(){ 
               $('li.show').remove(); 
               $(".hotspots li a").removeClass('hide').addClass('show');  
             //  
             // $("").remove;
            }) 
           
            // Add class to dynamically change message image
           //$(this).addClass(function() { return $(this).attr('title'); });
              return false;       
                  
         });
         // close message
         $(".close").click(function(){
            $(".message, li.show").remove().stop();
            $(".hotspots li a").removeClass('hide').addClass('show');
         })
      } 

  
      }); // end document.ready
  
  