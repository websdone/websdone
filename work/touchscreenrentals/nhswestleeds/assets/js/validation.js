
// Validation settings

$(function() {
  $("form[name='quiz']").validate({
    rules: {
      name: {
        required: false,
       // minlength: 5
      },
      mobile: {
        required: false,
        number: false,
        minlength: 0
      },
      email: {
        required: false,
        email: false
      },
      address: {
        required: false,
        minlength: 0
      }
    },
    // Specify validation error messages
    messages: {
      name: {
        required: "Please provide your name"
      //  minlength: "Your name must be at least 2 characters long"
      },
      mobile: {
        required: "Please provide your mobile",
        minlength: "Your mobile number must be at least 11 numbers long"
      },
       address: {
        required: "Please provide your address",
        minlength: "Your adress must be at least 15 characters long"
      },
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
           
      $.ajax({
        type: 'post',
        url: location.pathname,
        data: $(form).serialize(),
        success: function () {
          window.setTimeout(function() { 
             window.location='https://www.nhs.uk/oneyou/how-are-you/'
          }, 1000);
        }
      });
       
      $('fieldset span, fieldset legend, .submit').css('display', 'none');
      $('span.confirmation').css('display', 'block');
    }
  });
});

