var autoOrient = function () {
  body.className = 'portrait';
  var autoOrient = new $m.autoOrientation({
                                          $target : body,
                                          format : 'interstitial', 
                                          orientation : 'portrait', 
                                          delay : 50,
                                          ignoreFirst : true,
                                          viewport : {
                                          portrait : { h : 768, w: 968 },
                                          landscape : { w: 1024, h: 712 }
                                          }
                                          });
};
