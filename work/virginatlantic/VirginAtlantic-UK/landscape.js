var autoOrient = function () {
	body.className = 'landscape-left';
	var autoOrient = new $m.autoOrientation({
											$target : body,
											format : 'interstitial', 
											orientation : 'landscape', 
											delay : 50,
											ignoreFirst : true,
											viewport : {
											portrait : { h : 768, w: 968 },
											landscape : { w: 1024, h: 712 }
											}
											});
};
