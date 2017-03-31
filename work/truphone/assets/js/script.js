$(document).ready(function () {
    var remove = $('.want.remove').length;

    $('.want').click(function () {
        var dataId = $(this).attr("val")
        var addText = $(this).attr("data-add");
        var removeText = $(this).attr("data-remove");
        var dataId = $(this).attr("data-id");
        //find the related hidden
        var hiddenId = $(':hidden#' + dataId);

        if (hiddenId != null)
        {
            if(hiddenId.val() == "False")
            {
                $(this).val("Remove");
                hiddenId.val("True")
                $(this).attr('value', removeText);
            }
            else
            {
                $(this).val("I WANT IT");
                hiddenId.val("False")
                $(this).attr('value', addText);
            }
        }
        
       $(this).toggleClass("remove");
     //   $('.next').toggleClass('show');
        if ($('.remove').length > 0) {
                $('input[type="submit"].next').addClass('show');
            }
            else { 
                $('input[type="submit"].next').removeClass('show'); 
            }
        return false;  
    });
    // Contact button // NEW ADDITION
    $('.contact').click(function(){
        $('.col-md-3.col-sm-3.col-xs-12.social').animate({opacity:'0.2'},"slow");
        $('.col-md-3.col-sm-3.col-xs-12.social').animate({opacity:'1'},"slow");
    });
    // change value of flags depending on user input
    $(".country").click('click', function () {
        $(this).toggleClass('blue');
        var dataId = $(this).attr("data-name");
        var hiddenId = $(':hidden#' + dataId);

        if (hiddenId != null) {
            if (hiddenId.val() == "True") hiddenId.val("False")
            else hiddenId.val("True")
        }

    });

    $('.addons label').click(function () {
        $(this).toggleClass("blue");
        $('.next').addClass('show');
        return false;
    });

    $('.btn-more-info').click(function(){
        var $this = $(this);
        var moreInfo = $this.attr("data-more");
        var lessInfo = $this.attr("data-less");

        $this.toggleClass('btn-less-info');
        if($this.hasClass('btn-less-info')){
            //$this.text('Less info');
            $this.text(lessInfo);
        } else {
            //$this.text('More info');
            $this.text(moreInfo);
        }
    });
    $('.btn-more-info.fewer').click(function(){
        var $this = $(this);
        var moreInfo = $this.attr("data-more");
        var lessInfo = $this.attr("data-less");

        $this.toggleClass('btn-fewe-options');
        if($this.hasClass('btn-fewe-options')){
            //$this.text('Show me fewer options');
            $this.text(lessInfo).addClass('btn-less-info');
        } else {
            //$this.text('Show me more options');
            $this.text(moreInfo);
        }
    });
});