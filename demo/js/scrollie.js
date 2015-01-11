( function( window ) {

    'use strict';


    var settings,scrollButton,over,time,
        targetElem,targetPoint,timing,scrollFlag=false,
        _body = document.body;
        
/**
** UTILITY FUNCTIONS START HERE
**/
    //utility function to extend an object from http://pietschsoft.com/post/2009/07/29/JavaScript-Easily-Extend-an-Object-Element
    function extend(obj, extObj) {
        if (arguments.length > 2) {
            for (var a = 1; a < arguments.length; a++) {
                extend(obj, arguments[a]);
            }
        } else {
            for (var i in extObj) {
                obj[i] = extObj[i];
            }
        }
        return obj;
    }

    // utility from http://javascript.info/tutorial/coordinates
    function getOffsetSum(elem) {
      var top=0, left=0;
      while(elem) {
        top = top + parseInt(elem.offsetTop);
        left = left + parseInt(elem.offsetLeft);
        elem = elem.offsetParent;        
      }
       
      return {top: top, left: left};
    }


    function getOffsetRect(elem) {
        var box = elem.getBoundingClientRect();
        
        var docElem = document.documentElement;
        
        var scrollTop = window.pageYOffset || docElem.scrollTop || _body.scrollTop;
        var scrollLeft = window.pageXOffset || docElem.scrollLeft || _body.scrollLeft;
        
        var clientTop = docElem.clientTop || _body.clientTop || 0;
        var clientLeft = docElem.clientLeft || _body.clientLeft || 0;
        
        var top  = box.top +  scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
        
        return { top: Math.round(top), left: Math.round(left) };
    }


    function getOffset(elem) {
        if (elem.getBoundingClientRect) {
            return getOffsetRect(elem);
        } else {
            return getOffsetSum(elem);
        }
    }

    //throttle function from underscore.js http://documentcloud.github.io/underscore/docs/underscore.html
    function throttle(func, wait, options) {
      var context, args, result;
      var timeout = null;
      var previous = 0;
      options || (options = {});
      var later = function() {
        previous = new Date;
        timeout = null;
        result = func.apply(context, args);
      };
      return function() {
        var now = new Date;
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
          clearTimeout(timeout);
          timeout = null;
          previous = now;
          result = func.apply(context, args);
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
        }
        return result;
      };
    };
/**
** UTILITY FUNCTIONS END HERE
**/

    function scrollFadeIn(){    
      scrollButton.removeEventListener("click",scrollFadeIn,false);
      _body.appendChild(over);      

      over.style.backgroundColor = settings.fadeColor;

      over.style["-webkit-animation-duration"] = time;
      over.style["-moz-animation-duration"] = time;
      over.style["-o-animation-duration"] = time;
      over.style.animationDuration = time;

      over.style["-webkit-animation-timing-function"] = settings.animFunction;
      over.style["-moz-animation-timing-function"] = settings.animFunction;
      over.style["-o-animation-timing-function"] = settings.animFunction;
      over.style["animation-timing-function"] = settings.animFunction;

      over.className = "start-scrollie";
      setTimeout(scrollFadeOut,timing);
    }

    function scrollFadeOut(){
      if(settings.targetElement == null)
        scroll(0,0);
      else
        scroll(0,targetPoint);
      setTimeout(scrollRemove,timing);
    }

    function scrollRemove(){
      _body.removeChild(over);
      scrollButton.addEventListener("click",scrollFadeIn,false);
    }

    function scrollButtonFadeIn(){
        if(!scrollFlag && window.pageYOffset>=settings.scrollButtonPosition){
          scrollButton.style.visibility = "visible"; 
          scrollButton.style["opacity"] = "1"; 
          scrollButton.style["filter"] = "alpha(opacity=100)";
          scrollFlag=true;
        }
        else if(scrollFlag && window.pageYOffset<settings.scrollButtonPosition){
          scrollButton.style.visibility = "hidden"; 
          scrollButton.style["opacity"] = "0"; 
          scrollButton.style["filter"] = "alpha(opacity=0)"; 
          scrollFlag=false;
        }        
    }

    function init(options){
      settings = extend({
            scrollButton: null,
            targetElement: null,
            animTime: 2000,
            animFunction: "ease-in-out",
            fadeColor: '#FFFFFF',
            scrollButtonPosition: 400
          }, options);

        if(settings.scrollButton == null) 
          return;
        scrollButton = document.getElementById(settings.scrollButton);
        over = document.createElement("div");
        time = (settings.animTime/1000).toString()+"s";
        timing = Math.round(settings.animTime/2);
        if(settings.targetElement != null){
          targetElem = document.getElementById(settings.targetElement);
          targetPoint = getOffset(targetElem).top;
        }
        scrollButton.addEventListener("click",scrollFadeIn,false);    
        window.addEventListener("scroll",throttle(scrollButtonFadeIn, 500),false);
    }


    var scrollie = {
      init: init
    };

    // transport
    if ( typeof define === 'function' && define.amd ) {
      // AMD
      define( scrollie );
    } else {
      // browser global
      window.scrollie = scrollie;
    }

})( window );
