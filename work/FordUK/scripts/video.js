 /*
File: events.js

Abstract: HTML5 Video Element Event Flow

Version: 1.0

Disclaimer: IMPORTANT:  This Apple software is supplied to you by 
Apple Inc. ("Apple") in consideration of your agreement to the
following terms, and your use, installation, modification or
redistribution of this Apple software constitutes acceptance of these
terms.  If you do not agree with these terms, please do not use,
install, modify or redistribute this Apple software.

In consideration of your agreement to abide by the following terms, and
subject to these terms, Apple grants you a personal, non-exclusive
license, under Apple's copyrights in this original Apple software (the
"Apple Software"), to use, reproduce, modify and redistribute the Apple
Software, with or without modifications, in source and/or binary forms;
provided that if you redistribute the Apple Software in its entirety and
without modifications, you must retain this notice and the following
text and disclaimers in all such redistributions of the Apple Software. 
Neither the name, trademarks, service marks or logos of Apple Inc. 
may be used to endorse or promote products derived from the Apple
Software without specific prior written permission from Apple.  Except
as expressly stated in this notice, no other rights or licenses, express
or implied, are granted by Apple herein, including but not limited to
any patent rights that may be infringed by your derivative works or by
other works in which the Apple Software may be incorporated.

The Apple Software is provided by Apple on an "AS IS" basis.  APPLE
MAKES NO WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION
THE IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS
FOR A PARTICULAR PURPOSE, REGARDING THE APPLE SOFTWARE OR ITS USE AND
OPERATION ALONE OR IN COMBINATION WITH YOUR PRODUCTS.

IN NO EVENT SHALL APPLE BE LIABLE FOR ANY SPECIAL, INDIRECT, INCIDENTAL
OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) ARISING IN ANY WAY OUT OF THE USE, REPRODUCTION,
MODIFICATION AND/OR DISTRIBUTION OF THE APPLE SOFTWARE, HOWEVER CAUSED
AND WHETHER UNDER THEORY OF CONTRACT, TORT (INCLUDING NEGLIGENCE),
STRICT LIABILITY OR OTHERWISE, EVEN IF APPLE HAS BEEN ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.

Copyright (C) 2010 Apple Inc. All Rights Reserved.
*/

function toggleNotes() 
{
    var notes = document.getElementsByClassName('note');
    var isShowing = parseInt(window.getComputedStyle(notes[0],null).getPropertyValue("opacity"));
  
    for (var i = 0; i < notes.length; i++) {
        notes[i].style.opacity = isShowing ? 0 : 1;      
    }
    // toggle text to "Show Notes" or "Hide Notes"
    document.getElementById('notes').className = isShowing ? 'off' : 'on';
}

function addListeners(vid) 
{

    /* add all event listeners for HTML5 media element events */  
    vid.addEventListener('loadstart', function(evt) { logEvent(evt,'#000099'); }, false);  
    vid.addEventListener('canplaythrough',function(evt) {  logEvent(evt,'#66CC33'); }, false);
    vid.addEventListener('canplay', function(evt) { logEvent(evt,'#66CC33'); }, false);
    vid.addEventListener('loadeddata', function(evt) { logEvent(evt,'#00CCCC'); }, false); 
    vid.addEventListener('loadedmetadata', function(evt) { logEvent(evt,'#00CCCC'); }, false);
          
    vid.addEventListener('abort', function(evt) { logEvent(evt,'red'); }, false);
    vid.addEventListener('emptied', function(evt) { logEvent(evt,'red'); }, false);
    vid.addEventListener('error', function(evt) { logEvent(evt,'red'); }, false);
    vid.addEventListener('stalled', function(evt) { logEvent(evt,'red'); }, false);
    vid.addEventListener('suspend', function(evt) { logEvent(evt,'red'); }, false);
    vid.addEventListener('waiting', function(evt) { logEvent(evt,'red'); }, false);

    vid.addEventListener('pause', function(evt) { logEvent(evt,'orange'); }, false);
    vid.addEventListener('play', function(evt) { logEvent(evt,'orange'); }, false);
    vid.addEventListener('volumechange', function(evt) { logEvent(evt,'orange'); }, false);

    vid.addEventListener('playing', function(evt) { logEvent(evt,'purple'); }, false);

    vid.addEventListener('seeked', function(evt) { logEvent(evt,'teal'); }, false);    
    vid.addEventListener('seeking', function(evt) { logEvent(evt,'teal'); }, false);    

    vid.addEventListener('durationchange', function(evt) { logEvent(evt,'#cc0066'); }, false);
    vid.addEventListener('progress', function(evt) { logEvent(evt,'#cc0066'); }, false);   
    vid.addEventListener('ratechange', function(evt) { logEvent(evt,'#cc0066'); }, false);   

    vid.addEventListener('timeupdate', function(evt) { logEvent(evt,'gray'); }, false);

    vid.addEventListener('ended', function(evt) { logEvent(evt,'#000099'); }, false); 
}


function logEvent(evt, color) 
{
    var log = document.createElement("div");
    log.innerHTML = evt.type;
    log.style.color = color;

    var note = document.createElement("span");
    note.setAttribute('class', 'note');
    /* set the opacity of the note on the fly, based on whether notes are currently toggled on or off */
    note.style.opacity = document.getElementById('notes').className == 'on' ? '1' : '0';

    /* add a note describing what each event does */
    switch (evt.type) {
        case 'loadstart' :
            note.innerHTML = "begin loading media data";
            break;
        case 'progress':
            note.innerHTML = "fetching media...";
            break;
        case 'canplay':
            note.innerHTML = "can play, but will eventually have to buffer";
            break;
        case 'canplaythrough':
            note.innerHTML = "can play, won't have to buffer anymore";
            break;
        case 'loadeddata':
            note.innerHTML = "can render media data at current playback position";
            break;
        case 'loadedmetadata':
            note.innerHTML = "now we know duration, height, width, and more";
            break;
       case 'timeupdate':
           log.innerHTML += " " + evt.target.currentTime.toFixed(0);
           
            //document.location = "hotspots.html"; 
            if (evt.target.currentTime.toFixed(0) == 13){
              $("#hotspots").addClass("show");
			  
              $(".video").addClass("hide");
           }
    
           
           break;
        case 'durationchange':
            note.innerHTML = "new info about the duration";
            break;
        case 'volumechange':
            note.innerHTML = "volume or muted property has changed";
            break;
        case 'play':
            note.innerHTML = "just returned from the play function";
            break;
        case 'playing':
            note.innerHTML = "playback has started";
            break;
        case 'pause':
            note.innerHTML = "just returned from the pause function";
            break;
        case 'suspend':
            note.innerHTML = "loading has stopped, but not all of the media has downloaded";
            break;
        case 'waiting':
            note.innerHTML = "stopped playback because we're waiting for the next frame";
            break;
        case 'stalled':
            note.innerHTML = "fetching media data, but none is arriving";
            break;
    }

    /* create the log message and append it to the events log */
    log.appendChild(note);
    var eventslog = document.getElementById('eventslog');
    eventslog.insertBefore(log, eventslog.firstChild);
}