$('.video').magnificPopup({
  type: 'iframe',
  mainClass: 'mfp-with-zoom', 
 
  iframe: {
    patterns: {
      dailymotion: {
       
        index: 'dailymotion.com',
        
        id: function(url) {        
            var m = url.match(/^.+europe.spdrs.com\/holidaygame/);
            if (m !== null) {
                if(m[4] !== undefined) {
                  
                    return m[4];
                }
                return m[2];
            }
            return null;
        },
        
        src: 'https://europe.spdrs.com/holidaygame'
        
      }
    }
  }, 
  callbacks: {
    beforeOpen: function() {
       this.st.iframe.markup = this.st.iframe.markup.replace('mfp-figure', 'mfp-figure animated ' + this.st.el.attr('data-effect'));
    }
  }
});


$('.video').on('click touchstart', function () {
        $('iframe').addClass('animated zoomIn');
    })

$('.icon ').on('click touchstart', function () {
        $('.logo-main').addClass('zoomIn');
    })


