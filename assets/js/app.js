var imgHolder = document.getElementsByClassName('imgHolder');
var yellowOverlay = document.getElementsByClassName('yellowOverlay');


for (var i = 0; i < imgHolder.length; i++) {
  imgHolder[i].addEventListener('mouseenter',(e)=>{
    e.target.children[1].style.top = '-1.034vw';
    e.target.children[1].style.marginLeft = '1.034vw';
    e.target.children[1].style.zIndex = '0';
  });
  imgHolder[i].addEventListener('mouseleave',(e)=>{
    e.target.children[1].style.top = '0px';
    e.target.children[1].style.marginLeft = '0px';
    e.target.children[1].style.zIndex = '1';
  })
}
// bw
var AboutMeWhiteAnimDiv = document.getElementsByClassName('AboutMeWhiteAnimDiv')[0];
var AboutMeBlackAnimDiv = document.getElementsByClassName('AboutMeBlackAnimDiv')[0];
var aboutMe = document.getElementsByClassName('aboutMe')[0];

var i=0;
window.addEventListener("scroll", function(evt) {
  if((window.innerWidth /100)* 86.7  < window.scrollY + window.innerHeight && i!==1){
    i=1;
    console.log(window.innerWidth /100 *120);
    console.log(window.scrollY);
    AboutMeWhiteAnimDiv.className += ' animateWhiteClass';
    myFunction()
    console.log('scroled');
  }
});

function myFunction() {
  setTimeout(function(){
      aboutMe.style.visibility = 'visible';
      AboutMeBlackAnimDiv.className += ' animateBlackClass';;
   }, 440);
}
