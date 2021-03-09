






const hi = document.querySelector("#hi");
const webdev = document.querySelector("#webdev");
const picture = document.querySelector("#picture");
const letter1 = document.querySelector("#letter1");
const letter2 = document.querySelector("#letter2");
const letter3 = document.querySelector("#letter3");
const letter4 = document.querySelector("#letter4");
const navbar = document.querySelector("#navbar");


const tl = new TimelineMax();


tl.fromTo(hi, 3, {x:"-400%"}, {x:"0%" ,ease:Power2.easeInOut})
tl.fromTo(webdev, 1.5, {x:"300%"}, {x:"0%" ,ease:"elastic"},1)
tl.fromTo(picture, 3, {y:"-500%"}, {y:"0%" ,ease:Bounce.easeOut},2)
tl.fromTo(letter1, 1.5, {opacity:"0"}, {opacity:"1" ,ease:Power2.easeInOut},2)
tl.fromTo(letter2, 1.5, {opacity:"0"}, {opacity:"1" ,ease:Power2.easeInOut},2)
tl.fromTo(letter3, 1.5, {opacity:"0"}, {opacity:"1" ,ease:Power2.easeInOut},2)
tl.fromTo(letter4, 1.5, {blinking:"0"}, {blinking:"10" ,ease:Power2.easeInOut},2)
tl.fromTo(navbar, 1, {opacity:"0"}, {opacity:"1" ,ease:Power2.easeInOut},2)

