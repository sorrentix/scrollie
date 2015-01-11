# Scrollie
Scrollie is an attempt to rethink the scroll to top animation and *most of all* an exercise to me. When I'm on a page where I have scrolled a lot, and if I'm on a computer whith low performance configuration, what I see with the typical animation effect is a buggy effect. This is an attempt to solve that problem. 
As pointed out by someone this can be confusing for the users as they don't see a real scroll effect. I'm working on a new version which merge the fade and the scroll to top effect.

You can find the demos here:

<a href="http://www.sorrentix.com/scrollie/demo/demo_no_options.html">demo default option</a>

<a href="http://www.sorrentix.com/scrollie/demo/demo_options.html">demo custom option</a>


## How to use
* Include this script element in your html
```html
<script src="js/scrollie.js"></script>
```
* Call the init method

#### Basic use
```javascript
scrollie.init({
	scrollButton: "js-scroll-button",  //mandatory
});
```
#### Custom use
```javascript
scrollie.init({
	scrollButton: "js-scroll-button",  //mandatory
	targetElement: "js-target-scroll", //optional
    animTime: 1000,                    //optional
    animFunction: "linear",            //optional
    fadeColor: '#777777',              //optional
    scrollButtonPosition: 300	       //optional
});
```
## Options
### scrollButton
```
scrollButton: "js-scroll-button" 
```
the **id** of the button to use, it's the only mandatory parameter.

### targetElement
```
targetElement: "js-target-scroll"
```
the **id** of the element to reach. Default value is top of the page

### animTime
```
animTime: 1000
```
the **time** of the fade animation in millisecond. Default value is *2000*

### animFunction
```
animFunction: "linear"
```
the **animation-timing-function** of the fade animation. Default value is *ease-in-out*. You can follow CSS specs here.

### fadeColor
```
fadeColor: '#777777'
```
the **color** of the fade animation. Default value is *#ffffff*


### scrollButtonPosition
```
scrollButtonPosition: 300
```
the **vertical position** in which the scrollButton has to appear. Default value is *400*
