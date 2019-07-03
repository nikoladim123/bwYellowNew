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
  if(window.innerHeight / 100 * 80 > aboutMe.getBoundingClientRect().top && i!==1){
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



// cheap
var mainBottomBg = document.getElementsByClassName('mainBottomBg');
function cheapFun() {
  if(window.innerHeight / 100 * 50 > mainBottomBg[0].getBoundingClientRect().top){
    mainBottomBg[0].style.background = '#e2cf31';
  }else{
    mainBottomBg[0].style.background = '#fcf4ef';
  }
}

// work text
var recentWorkImgDivHtwo = document.getElementsByClassName('recentWorkImgDivHtwo');
var recentWorkImgDiv = document.getElementsByClassName('recentWorkImgDiv');


var workIterate = 0;
var workIterateTwo = 0;
var showTxt;
var hideTxt;

function bla(){
  showTxt =
    setInterval(function () {
      recentWorkImgDivHtwo[0].style.background = `-webkit-linear-gradient(360deg, rgba(255,255,255,${workIterate}), rgba(255,255,255,${workIterateTwo}))`;
      if (workIterateTwo <= 1) {
        workIterate+=0.1;
      }
      if (workIterateTwo <= 1) {
        setTimeout(function () {
          workIterateTwo+=0.1;
        }, 300);
      }
      if (workIterateTwo >= 0.8) {
        clearInterval(showTxt);
      }
      console.log(workIterateTwo);
    }, 20);
};

function ble(){
  hideTxt =
    setInterval(function () {
      recentWorkImgDivHtwo[0].style.background = `-webkit-linear-gradient(360deg, rgba(255,255,255,${workIterate}), rgba(255,255,255,${workIterateTwo}))`;
      if (workIterateTwo >= 0) {
        workIterate-=0.1;
      }
      if (workIterateTwo >= 0) {
        setTimeout(function () {
          workIterateTwo-=0.1;
        }, 300);
      }
      if (workIterateTwo <= 0) {
        clearInterval(hideTxt);
      }
      console.log(workIterateTwo);
    }, 20);
};


recentWorkImgDiv[0].addEventListener('mouseenter',()=>{
  clearInterval(hideTxt);
  clearInterval(showTxt);
  // callWorkShow();
  bla();
  console.log(1);
});

recentWorkImgDiv[0].addEventListener('mouseleave',()=>{
  clearInterval(hideTxt);
  clearInterval(showTxt);
  // callWorkHide();
  // ble();
  setTimeout(function () {
    ble();
  }, 100);
  console.log(2);
});


// picture hover layerinside rnd
var rnd = document.getElementsByClassName('rnd');
var rndInside = document.getElementsByClassName('rndInside');
var rndInsideContent = document.getElementsByClassName('rndInsideContent');

rnd[0].addEventListener('mouseenter',()=>{
  rndInside[0].style.opacity = '1';
  rndInsideContent[0].style.width = '80%';
  rndInsideContent[0].style.height = '85%';
});

rnd[0].addEventListener('mouseleave',()=>{
  rndInsideContent[0].style.width = '0%';
  rndInsideContent[0].style.height = '0%';
  rndInside[0].style.opacity = '0';
})

// rnd cursor
// var cursor = document.getElementsByClassName('cursor')[0];
//
// rnd[0].addEventListener('mousemove',rndCursor)
//
// function rndCursor(e) {
//   // e = Mouse click event.
//   var rect = e.target.getBoundingClientRect();
//   var x = e.layerX ; //x position within the element.
//   var y = e.layerY ;  //y position within the element.
//   if (x > 7 && y >7) {
//     cursor.style.left = x + 'px';
//     cursor.style.top = y + 'px';
//   }
//
//   console.log(e);
// }
//
// let screenLog = document.querySelector('#screen-log');
// rnd[0].addEventListener('mousemove', logKey);
//
// function logKey(e) {
//   console.log(e.offsetX ,e.offsetY);
//   // screenLog.innerText = `
//   //   Screen X/Y: ${e.screenX}, ${e.screenY}
//   //   Client X/Y: ${e.clientX}, ${e.clientY}`;
// }



window.addEventListener("scroll",()=>{
  cheapFun();
});
