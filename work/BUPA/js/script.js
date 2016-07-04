$(document).ready(function() {

    var accordion = $('.accordion li');
    $('.accordion li').children('a.openclose').on('click', function(e) {
    
        var thisNew = $(this).parent();
        if (!$('.accordion-body', thisNew).is(':visible')) {
            $('.accordion-body:visible').slideUp(400);
            $('.accordion > li > a').removeClass('active');
            $(this).addClass('active');
            $('.accordion-body', thisNew).slideDown(400);
        } else {
            $('.accordion-body:visible').slideUp(400);
            $('.accordion > li > a').removeClass('active');
        }
        return false;
    });
    

 // need help
  $('.help').click(function() {
    $('.help-body').slideToggle(400);
    return false;
  });
console.log(accordion);
  
    
});