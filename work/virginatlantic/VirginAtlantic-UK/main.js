var body;

var container;
var content;
var slider;
var videoContainer;
var video;

var video_host;

var slider;
var videoContainer;
var virgin_top_link;
var virgin_bottom_link;

var virgin_home;
var virgin_limo;
var virgin_suite;
var virgin_clubhouse;

var virgin_limo_link;
var virgin_clubhouse_link;
var virgin_suite_link;

var virgin_limo_more_link;
var virgin_clubhouse_more_link;
var virgin_suite_more_link;

var virgin_exploremorelink;

var virgin_plane_marker;

var virgin_nav;
var virgin_nav_home_highlight;
var virgin_nav_limo_highlight;
var virgin_nav_clubhouse_highlight;
var virgin_nav_suite_highlight;

var virgin_nav_home_arrow;
var virgin_nav_limo_arrow;
var virgin_nav_clubhouse_arrow;
var virgin_nav_suite_arrow;

var overlay;

var virgin_share;

var loopVideo = function (poster, mask, src, containerClass, trackingKey) {
/*
	videoContainer.style.opacity = 0;
	videoContainer.style.display = 'none';
	video.pause();
	video.src = '';
*/
	var pattern = /../i;  // local
	console.log('match='+src.match(pattern));
	if(navigator.onLine || src.match(pattern) ) {
		console.log('match='+src.match(pattern));
		
		track(trackingKey);
		video.style.webkitMaskImage = 'url(' + mask + ')';
		video.poster = poster;
		video.src= src;
		video.load();
		$m.bind(video, 'click', function () { 
					video.play();
					console.log(video.src);
/*
					$m.bind(slider, 'webkitTransitionBegin', function () { videoContainer.className = containerClass;
	console.log(videoContainer.className);
 } );
*/

setTimeout(function () { videoContainer.className = containerClass; 
	console.log(videoContainer.className); }, 1500);
			});

		video.addEventListener('ended', function() { 
							   video.play();
							   }, false);
		
		setTimeout(function() { $m.trigger(video, 'click');}, 0);
	}  
};

var ImageDiv = function (url,w,h,container) {
	this.element = document.createElement('div');
	this.element.id = url;
	
	this.element.style.left = '0px';
	this.element.style.top = '0px';
	
	this.element.style.width = w + 'px';
	this.element.style.height = h + 'px';
	
	this.element.style.backgroundImage= 'url(' + url + ')';
	this.element.style.backgroundRepeat = 'no-repeat';
	this.element.style.opacity = '0';
	container.appendChild(this.element);
};


ImageDiv.prototype.position = function (x, y,z) {
	this.element.style.position = 'absolute';
	this.element.style.left = x + 'px';
	this.element.style.top = y + 'px';
	this.element.style.zIndex = z;
};

ImageDiv.prototype.scale = function (s) {
	this.element.style.webkitTransform = 'scale('+ s + ')';
};

ImageDiv.prototype.move = function (x, y, delay, duration) {
	this.element.style.webkitTransitionProperty = '-webkit-transform';
	this.element.style.webkitTransitionDelay = delay + 'ms';
	this.element.style.webkitTransitionDuration = duration + 'ms';
	this.element.style.webkitTransform = 'translate3d(' + x + 'px,' + y + 'px,0)';
};

ImageDiv.prototype.moveBg = function (x, y) {
	this.element.style.backgroundPosition =  x + 'px ' + y + 'px';
};

ImageDiv.prototype.show = function (opacity, delay, duration) {
	this.element.style.webkitTransitionProperty = 'opacity';
	this.element.style.webkitTransitionDelay = delay + 'ms';
	this.element.style.webkitTransitionDuration = duration + 'ms';
	this.element.style.opacity = opacity;
};


ImageDiv.prototype.repeatX = function () {
	this.element.style.backgroundRepeat = 'repeat-x';
};

ImageDiv.prototype.red = function () {
	this.element.style.backgroundColor = 'rgba(255, 0,0,0.5)';
};

ImageDiv.prototype.center = function () {
	this.element.style.backgroundPosition = '50% 50%';
};


var initNav = function () {
	virgin_nav = new ImageDiv('Virgin_Nav.png',700, 80,content);
	virgin_nav.position(164, 650,10);
	virgin_nav.show(1,1,1);
	
	virgin_nav_home_highlight = new ImageDiv('Virgin_Nav_Highlight.png', 50, 20, content);
	virgin_nav_limo_highlight = new ImageDiv('Virgin_Nav_Highlight.png', 100, 20, content);
	virgin_nav_clubhouse_highlight = new ImageDiv('Virgin_Nav_Highlight.png', 150, 20, content);
	virgin_nav_suite_highlight = new ImageDiv('Virgin_Nav_Highlight.png', 130, 20, content);
	
	virgin_nav_home_highlight.repeatX();
	virgin_nav_limo_highlight.repeatX();
	virgin_nav_clubhouse_highlight.repeatX();
	virgin_nav_suite_highlight.repeatX();
	
	virgin_nav_home_highlight.position(263, 672, 5);
	virgin_nav_limo_highlight.position(328, 672, 5);
	virgin_nav_clubhouse_highlight.position(438, 672, 5);
	virgin_nav_suite_highlight.position(600, 672, 5);
	
	virgin_plane_marker = new ImageDiv('Virgin_Plane_Marker.png', 35, 35, virgin_nav.element);
	virgin_plane_marker.position(107, 45);
	
	virgin_nav_home_arrow = new ImageDiv('Virgin_Nav_Arrow.png', 70, 70, virgin_nav.element);
	virgin_nav_home_arrow.center();
	virgin_nav_home_arrow.position(90, 10,300);
	virgin_nav_home_arrow.show(1,1,1);
	virgin_nav_home_arrow.onclick(home, homeNavTracking);
	
	virgin_nav_limo_arrow = new ImageDiv('Virgin_Nav_Arrow.png', 100, 70, virgin_nav.element);
	virgin_nav_limo_arrow.center();
	virgin_nav_limo_arrow.position(163, 10,300);
	virgin_nav_limo_arrow.show(1,1,1);
	virgin_nav_limo_arrow.onclick(limo, limoNavTracking);
	
	virgin_nav_clubhouse_arrow = new ImageDiv('Virgin_Nav_Arrow.png', 155, 70, virgin_nav.element);
	virgin_nav_clubhouse_arrow.center();
	virgin_nav_clubhouse_arrow.position(271, 10, 300);
	virgin_nav_clubhouse_arrow.show(1,1,1);
	virgin_nav_clubhouse_arrow.onclick(clubhouse, clubhouseNavTracking);
	
	virgin_nav_suite_arrow = new ImageDiv('Virgin_Nav_Arrow.png', 138, 70, virgin_nav.element);
	virgin_nav_suite_arrow.center();
	virgin_nav_suite_arrow.position(432, 10, 300);
	virgin_nav_suite_arrow.show(1,1,1);
	virgin_nav_suite_arrow.onclick(suite, suiteNavTracking);
};


var initLinks = function () {
	
	overlay = new ImageDiv('Virgin_Overlay.jpg', 1024, 1004, content);
	overlay.position(0,0,500);
	overlay.move(1200,0,0,0);
	overlay.show(1,0,0);
	
	var resetOverlay = function () {
		overlay.move(1200,0,0,0);
	}; 
	
	var dismissOverlay = function () {
		overlay.move(-1200, 0, 0, 1000);
		setTimeout(resetOverlay,2000);
	};
	
	overlay.onclick(dismissOverlay, overlayDismissTracking);
	
	virgin_top_link = new ImageDiv('Virgin_TopLink.png',158, 19,content);
	virgin_top_link.position(163, 160);
	virgin_top_link.center();
	virgin_top_link.show(1,1,1);
	virgin_top_link.onclick(virginCTA);
	
	virgin_bottom_link = new ImageDiv('',234, 60, content);
	virgin_bottom_link.position(625,790,300);
	virgin_bottom_link.show(1,1,1);
	virgin_bottom_link.onclick(virginCTA);
	
	virgin_limo_link = new ImageDiv('Virgin_Limo_Link.png',188, 167, content);
	
	virgin_clubhouse_link = new ImageDiv('Virgin_Club_Link.png',356, 235, content);
	
	virgin_suite_link = new ImageDiv('Virgin_Suite_Link.png', 319, 158, content);
	
	
	virgin_limo_more_link = new ImageDiv('', 360, 200, content);
	virgin_clubhouse_more_link = new ImageDiv('', 360, 200, content);
	virgin_suite_more_link = new ImageDiv('', 360, 200, content);
	
	virgin_limo_more_link.position(0,-2000,1);
	virgin_clubhouse_more_link.position(0,-2000,1);
	virgin_suite_more_link.position(0,-2000,1);
	
	
	virgin_limo_more_link.show(1,1,1);
	virgin_clubhouse_more_link.show(1,1,1);
	virgin_suite_more_link.show(1,1,1);
	
	virgin_exploremorelink = new ImageDiv('', 127, 15, content);
	virgin_exploremorelink.position(748,652,300);
	virgin_exploremorelink.show(1,1,1);
	
	virgin_exploremorelink.onclick(moreCTA);
	
	virgin_privatelink = new ImageDiv('', 127, 15, content);
  virgin_privatelink.position(748,672,300);
  virgin_privatelink.show(1,1,1);
  
  virgin_privatelink.onclick(privateCTA);
  
  virgin_onboardlink = new ImageDiv('', 127, 15, content);
  virgin_onboardlink.position(748,712,300);
  virgin_onboardlink.show(1,1,1);
  
  virgin_onboardlink.onclick(onboardCTA);
  
  
  virgin_revivallink = new ImageDiv('', 127, 15, content);
  virgin_revivallink.position(748,692,300);
  virgin_revivallink.show(1,1,1);
  
  virgin_revivallink.onclick(revivalCTA);
  
   virgin_upper_link = new ImageDiv('',434, 60, content);
  virgin_upper_link.position(160,790,300);
  virgin_upper_link.show(1,1,1);
  virgin_upper_link.onclick(logoUpperCTA);

	virgin_share = new ImageDiv('Virgin_Share.png', 110, 24, content);
	virgin_share.position(735,728);
	virgin_share.center();
	virgin_share.show(1,0,0);
	virgin_share.onclick(shareCTA);
	
	
	virgin_limo_link.position(180, 267, 300);
	virgin_limo_link.moveBg(0, 90);
	
	virgin_clubhouse_link.position(484, 202, 300);
	virgin_clubhouse_link.moveBg(0, 30);
	
	virgin_suite_link.position(238, 486, 300);
	virgin_suite_link.moveBg(158, 104);
	
	virgin_limo_link.onclick(limo, limoLinkTracking);
	virgin_clubhouse_link.onclick(clubhouse, clubhouseLinkTracking);
	virgin_suite_link.onclick(suite, suiteLinkTracking);
}

var getDOM = function () {
	body = document.body;
	container = $m('container');
	content = $m('content');
	slider = $m('slider');
	videoContainer = $m('videoContainer');
	video = $m('video');
};

var init = function () {
	getDOM();
    
	initNav();
	initLinks();
	
	virgin_top_link.show(1,0,1); 
    
	virgin_plane_marker.show(1,0,1); 
	virgin_limo_link.show(1,0,1); 
	virgin_clubhouse_link.show(1,0,1); 
	virgin_suite_link.show(1,0,1); 
	
	virgin_share.show(1,0,1); 
	virgin_revivallink.show(1,0,1);
	virgin_upper_link.show(1,0,1);
	
	virgin_plane_marker.move(0,0,10,0);
	virgin_nav_home_highlight.show(1,1,1);
	virgin_nav_limo_highlight.show(0,1,1);
	virgin_nav_clubhouse_highlight.show(0,1,1);
	virgin_nav_suite_highlight.show(0,1,1); 
	
};


var offline = function () {
	track(overlayDisplayTracking);
	overlay.move(0,0,1000,1000);
};

var urlCTA = function (url) {
	if(navigator.onLine) {
		document.location = url;
	}
	else {
		offline();
	};
};

var track = function (trackingKey) {
	if(trackingKey && trackingKey.length > 0) {
		try {
			MMBridge.trackingEvent.incrementKey(trackingKey);
		}
		catch (err) {
			console.log(trackingKey);
		}
	}
};

ImageDiv.prototype.onclick = function (callback, trackingKey) {
	this.element.addEventListener('click', function () {
								  track(trackingKey);
								  callback();
								  }, false);
	
};


var showHomeLinks = function () {
	
	virgin_limo_link.position(180, 260, 300);
	virgin_clubhouse_link.position(484, 193, 300);
	virgin_suite_link.position(240, 477, 300);
	
	virgin_limo_link.show(1,2000,1000);
	virgin_clubhouse_link.show(1,2000,1000);
	virgin_suite_link.show(1,2000,1000);
};


var hideLinks = function () {
	virgin_limo_link.position(0, -2000, 1);
	virgin_clubhouse_link.position(0,-2000,1);
	virgin_suite_link.position(0,-2000,1);
	virgin_limo_link.show(0,100,1000);
	virgin_clubhouse_link.show(0,100,1000);
	virgin_suite_link.show(0,100,1000);
	
	virgin_limo_more_link.position(0,-2000,1);
	virgin_clubhouse_more_link.position(0,-2000,1);
	virgin_suite_more_link.position(0,-2000,1);
	virgin_limo_more_link.position(0, -2000, 1);
};

var hideArrow = function (arrow) {
	arrow.show(0, 1000, 1000);
	arrow.element.style.display = 'none';
};

var hideAllArrows = function () {
	hideArrow(virgin_nav_home_arrow);
	hideArrow(virgin_nav_limo_arrow);
	hideArrow(virgin_nav_clubhouse_arrow);
	hideArrow(virgin_nav_suite_arrow);  
};

var showArrow = function (arrow) {
	arrow.show(1, 2000, 1000);
	arrow.element.style.display = 'block';
};

var showHighlight = function (highlight) {
	highlight.show(1, 1000, 1000);
};

var hideHighlight = function (highlight) {
	highlight.show(0, 100, 1000);
};

var home = function () {
	hideLinks();
	hideAllArrows();
	
	showArrow(virgin_nav_limo_arrow);
	showArrow(virgin_nav_clubhouse_arrow);
	showArrow(virgin_nav_suite_arrow);
	
	showHomeLinks();

	setTimeout(function () {
		loopVideo(homeVideoPoster, homeVideoMask, homeVideoSrc, 'home', homeVideoTracking);
	},1500); /* here */
	showHighlight(virgin_nav_home_highlight);
	hideHighlight(virgin_nav_limo_highlight);
	hideHighlight(virgin_nav_clubhouse_highlight);
	hideHighlight(virgin_nav_suite_highlight);
	
	slider.style.webkitTransform = 'translate3d(0, 0, 0)';
	virgin_plane_marker.move(0,0,100,1000);
};


var limo = function () {
	hideLinks();
	
	hideAllArrows();
	showArrow(virgin_nav_home_arrow);
	showArrow(virgin_nav_clubhouse_arrow);
	showArrow(virgin_nav_suite_arrow);
	
	hideHighlight(virgin_nav_home_highlight);
	showHighlight(virgin_nav_limo_highlight);
	hideHighlight(virgin_nav_clubhouse_highlight);
	hideHighlight(virgin_nav_suite_highlight);
	setTimeout(function () {
		loopVideo(limoVideoPoster, limoVideoMask, limoVideoSrc, 'limo', limoVideoTracking);
	}, 1500); /* here */
	slider.style.webkitTransform = 'translate3d(-1024px, 0, 0)';
	
	virgin_plane_marker.move(88,0,100,1000); 
	
	virgin_limo_more_link.position(510, 430, 300);
	virgin_limo_more_link.onclick(limomoreCTA);
};

var clubhouse = function () {
	hideLinks();
	hideAllArrows();
	showArrow(virgin_nav_home_arrow);
	showArrow(virgin_nav_limo_arrow);
	showArrow(virgin_nav_suite_arrow);
	
	hideHighlight(virgin_nav_home_highlight);
	hideHighlight(virgin_nav_limo_highlight);
	showHighlight(virgin_nav_clubhouse_highlight);
	hideHighlight(virgin_nav_suite_highlight);
	setTimeout(function () {
		 loopVideo(clubhouseVideoPoster, clubhouseVideoMask, clubhouseVideoSrc, 'club', clubhouseVideoTracking);
	}, 1500); /* here */
	slider.style.webkitTransform = 'translate3d(-2048px, 0, 0)';
	
	
	virgin_plane_marker.move(223,0,100,1000); 
	
	virgin_clubhouse_more_link.position(480, 195, 300);
	virgin_clubhouse_more_link.onclick(clubhousemoreCTA);
};

var suite = function () {
	hideLinks();
	hideAllArrows();
	
	showArrow(virgin_nav_home_arrow);
	showArrow(virgin_nav_limo_arrow);
	showArrow(virgin_nav_clubhouse_arrow);
	
	hideHighlight(virgin_nav_home_highlight);
	hideHighlight(virgin_nav_limo_highlight);
	hideHighlight(virgin_nav_clubhouse_highlight);
	showHighlight(virgin_nav_suite_highlight);
	
	setTimeout(function () {
	loopVideo(suiteVideoPoster, suiteVideoMask, suiteVideoSrc, 'suite', suiteVideoTracking);
	}, 1500); /* here */
	slider.style.webkitTransform = 'translate3d(-3072px, 0, 0)';
	
	virgin_plane_marker.move(378,0,100,1000); 
	
	virgin_suite_more_link.position(180, 445, 300);
	virgin_suite_more_link.onclick(suitemoreCTA);
	

};


var moreCTA = function () {
	urlCTA(upperClassURL);
};

var limomoreCTA = function () {
	urlCTA(limomoreURL);
}


var logoUpperCTA = function () {
  urlCTA(logoUpperURL);
}


var clubhousemoreCTA = function () {
	urlCTA(clubhousemoreURL);	
};

var privateCTA = function () {
  urlCTA(privateURL);
};

var onboardCTA = function () {
  urlCTA(onboardURL);
};

var revivalCTA = function () {
  urlCTA(revivalURL); 
};

var suitemoreCTA = function () {
	urlCTA(suitemoreURL);
};

var virginCTA = function () {
	urlCTA(virginURL);
};

var shareCTA = function () {
	urlCTA(shareURL);
};

var deviceOfflineTest = function () {
	if(navigator.onLine) return;
	try {
		MMBridge.trackingEvent.setString(offlineTracking, 'true');
	}
	catch (err) {
		console.log(offlineTracking);
	}
};


var load = function () {
	init();
	deviceOfflineTest();
	autoOrient ('landscape');
//	  setTimeout(home, 100);
	home();
};


window.addEventListener('load', load, false);
