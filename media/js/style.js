// Value of the line-height CSS property for the textarea.
var TEXTAREA_LINE_HEIGHT = 13;

function grow(event) {
    var textarea = event.target;
    var newHeight = textarea.scrollHeight;
    var currentHeight = textarea.clientHeight;

    if (newHeight > currentHeight) {
        textarea.style.height = newHeight + 5 * TEXTAREA_LINE_HEIGHT + 'px';
    }
}

//Do not open Safari when clicking links
var iWebkit;if(!iWebkit){iWebkit=window.onload=function(){function fullscreen(){var a=document.getElementsByTagName("a");for(var i=0;i<a.length;i++){if(a[i].className.match("noeffect")){}else{a[i].onclick=function(){window.location=this.getAttribute("href");return false}}}}function hideURLbar(){window.scrollTo(0,0.9)}iWebkit.init=function(){fullscreen();hideURLbar()};iWebkit.init()}}
