# Scrollie
Scrollie is an attempt to rethink the scroll to top animation. When you are on a page where have scrolled a lot, you don't want to see that *"matrix like"* effect to go bak on top. This is my solution to the problem.

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
