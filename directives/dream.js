 
       $( document ).ready(function() {
 			var $skills = $("#skills"),
            mySplitText = new SplitText($skills, {type:"words, lines"}),
            tl = new TimelineLite();

            mySplitText.split({type:"chars, words"}); 
            tl.staggerFrom(mySplitText.chars, 0.6, {scale:4, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50%", ease:Back.easeOut}, 0.02);
            alert('hello');
        });