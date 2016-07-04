var total_items = 0;
$(document).ready(function() {
  
  function Box(inElement)
    {
      var self = this;
     
      this.element = inElement;
      this.position = '0,0';
//      this.element.addEventListener('touchstart', function(e) { return self.onTouchStart(e) }, false); ** commented because it thows an error in the browser
    }
    
    Box.prototype = {
    
      get position()
      {
        return this._position;
      },
      
      
      // position strings are "x,y" with no units
      set position(pos)
      {
        this._position = pos;
       
        var components = pos.split(',')
        var x = components[0];
        var y = components[1];
       
        const kUseTransform = true;
        if (kUseTransform) {
//          this.element.style.webkitTransform = 'translate(' + x + 'px, ' + y + 'px)'; ** commented because it thows an error in the browser
        }
        else {
          this.element.style.left = x + 'px';
          this.element.style.top = y + 'px';
        }
      },
      
      // position strings are "x,y" with no units
      get x()
      {
        return parseInt(this._position.split(',')[0]);
      },
       
      set x(inX)
      {
        var comps = this._position.split(',');
        comps[0] = inX;
        this.position = comps.join(',');
      },
       
      get y()
      {
        return parseInt(this._position.split(',')[1]);
      },
       
      set y(inY)
      {
        var comps = this._position.split(',');
        comps[1] = inY;
        this.position = comps.join(',');
      },
    
    
        onTouchStart: function(e) {
        // Start tracking when the first finger comes down in this element
        if (e.targetTouches.length != 1)
          return false;
       
        this.startX = e.targetTouches[0].clientX;
        this.startY = e.targetTouches[0].clientY;
       
        var self = this;
        this.element.addEventListener('touchmove', function(e) { return self.onTouchMove(e) }, false);
        this.element.addEventListener('touchend', function(e) { return self.onTouchEnd(e) }, false);
       
        return false;
      },
      
      onTouchMove: function(e) {
        // Prevent the browser from doing its default thing (scroll, zoom)
        e.preventDefault();
       
        // Don't track motion when multiple touches are down in this element (that's a gesture)
        if (e.targetTouches.length != 1)
          return false;
       
        var leftDelta = e.targetTouches[0].clientX - this.startX;
        var topDelta = e.targetTouches[0].clientY - this.startY;
       
        var newLeft = (this.x) + leftDelta;
        var newTop = (this.y) + topDelta;
       
        this.position = newLeft + ',' + newTop;
       
        this.startX = e.targetTouches[0].clientX;
        this.startY = e.targetTouches[0].clientY;
       
        return false;
      },    
      
      
    onTouchEnd: function(e) {
    // Prevent the browser from doing its default thing (scroll, zoom)
    e.preventDefault();
 
    // Stop tracking when the last finger is removed from this element
    if (e.targetTouches.length > 0)
        return false;
 
    this.element.removeEventListener('touchmove', function(e) { return self.onTouchMove(e) }, false);
    this.element.removeEventListener('touchend', function(e) { return self.onTouchEnd(e) }, false);
 
    return false;
  },
    
    }
    
    function loaded()
    {
	document.getElementById('audio').pause();
      new Box(document.getElementById('main-box'));
    }
	function unloaded(){
		//alert('unload');
		document.getElementById('audio').pause(); 				  
	}
    
    window.addEventListener('load', loaded, true);
	
	window.addEventListener('unload', unloaded, true);
    
   // my code 
  
    $(".item").draggable({
        revert: true            
    });
    
    $("#records").droppable({
        accept: ".item",
        activeClass: "drop-active",
        hoverClass: "drop-hover",
        drop: function(event, ui) {  
			//alert('hi');     
            var item = ui.draggable.html();
            var itemid = ui.draggable.attr("id");
            var html = '<div class="item">'; // item stays in player
            html = html + '<div class="playing">';
           //html = html + '<audio src="music/'+itemid+'.m4a" id="audio"></audio>'
            html = html + '<a onclick="remove(this)" class="remove '+itemid+'">&nbsp;</a>'; 
            html = html + '<img src="img/'+itemid+'.png" id="tape" />';
            html = html + '<div/>'+item+'</div>';
            $("#records").append(html);
            $(".playing .title").remove();
            $(".playing img.tape").addClass('hide');
            $(".playing .trackList").removeClass('hide');
           
            // REMOVE TAPE WHEN ANOTHER DRAGGED
            if ($('audio').size() > 1) {
               $('#records .item').eq(0).remove();
               // when a new tape is dragged send the latest playing tape back and stop music
               $('.visibility').eq(0).removeClass('visibility');
            }
			//set audio src:
			document.getElementById('audio').src = 'music/'+itemid+'.mp4';
            // Play music
            if ($('#audio').length > 0) {
               document.getElementById('audio').play();      
            }
            // Play music
            if ($('#audio').length < 0) {
               document.getElementById('audio').pause();      
            }
            // add class to main tape with visibility hidden when dragged
            $("#" + itemid).addClass('visibility');
          }   
      });
  });
 
  function remove(el) {
    $(el).hide();
    $(el).parent().parent().effect("highlight", {color: "#transparent"}, 200);
    $(el).parent().parent().fadeOut('2500');
    
    setTimeout(function() {
        $(el).parent().parent().remove();
        $(".item.ui-draggable").eq(0).removeClass('visibility');
       
    }, 1100);
  }

  /* Audio */ 
 $('.remove').live('click', function(){
    document.getElementById("audio").pause();
               $('.visibility').eq(0).removeClass('visibility');

 });
