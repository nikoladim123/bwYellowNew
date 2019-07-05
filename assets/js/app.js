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
      aboutMe.style.opacity = '1';
      AboutMeBlackAnimDiv.className += ' animateBlackClass';;
   }, 440);
}



// cheap
// var mainBottomBg = document.getElementsByClassName('mainBottomBg');
// function cheapFun() {
//   if(window.innerHeight / 100 * 50 > mainBottomBg[0].getBoundingClientRect().top){
//     mainBottomBg[0].style.background = '#e2cf31';
//   }else{
//     mainBottomBg[0].style.background = '#fcf4ef';
//   }
// }

// work text
var recentWorkImgDivHtwo = document.getElementsByClassName('recentWorkImgDivHtwo');
var recentWorkImgDiv = document.getElementsByClassName('recentWorkImgDiv');

recentWorkImgDiv[0].addEventListener('mouseenter',()=>{
  recentWorkImgDivHtwo[0].style.backgroundPosition = '0%';
});
recentWorkImgDiv[0].addEventListener('mouseleave',()=>{
  recentWorkImgDivHtwo[0].style.backgroundPosition = '200%';
});

function workTextFixScroll() {
  if(window.innerHeight / 100 * 80 >= recentWorkImgDiv[0].getBoundingClientRect().bottom){
    // recentWorkImgDivHtwo[0].style.position = 'absolute';
    // recentWorkImgDivHtwo[0].style.top = '-8.8vw';
    console.log(123);
  }
  else{
    recentWorkImgDivHtwo[0].style.position = 'fixed';
    recentWorkImgDivHtwo[0].style.top = '20vh';
  }
}

// davidOmid Italy Fun
var recentImgItaly = document.getElementsByClassName('recentImgItaly');
var recentImgItalyContainer = document.getElementsByClassName('recentImgItalyContainer');


function davidOmidFire() {
  if(window.innerHeight / 100 * 78 >= recentImgItaly[0].getBoundingClientRect().bottom){
    recentImgItalyContainer[0].style.width = '19vw';
  }
}


// picture hover layerinside rnd
var rnd = document.getElementsByClassName('rnd');
var rndInside = document.getElementsByClassName('rndInside');
var rndInsideContent = document.getElementsByClassName('rndInsideContent');
  // rnd1
rnd[0].addEventListener('mouseenter',()=>{
  rndInside[0].style.opacity = '1';
  rndInsideContent[0].style.width = '80%';
  rndInsideContent[0].style.height = '85%';
});

rnd[0].addEventListener('mouseleave',()=>{
  rndInsideContent[0].style.width = '0%';
  rndInsideContent[0].style.height = '0%';
  rndInside[0].style.opacity = '0';
});

  // rnd2
rnd[1].addEventListener('mouseenter',()=>{
  rndInside[1].style.opacity = '1';
  rndInsideContent[1].style.width = '81%';
  rndInsideContent[1].style.height = '85%';
});

rnd[1].addEventListener('mouseleave',()=>{
  rndInsideContent[1].style.width = '0%';
  rndInsideContent[1].style.height = '0%';
  rndInside[1].style.opacity = '0';
});


// carContainer
var carContainer = document.getElementsByClassName('carContainer');
var carMoving = document.getElementsByClassName('carMoving');
var leftCarArrowBox = document.getElementsByClassName('leftCarArrowBox');
var rightCarArrowBox = document.getElementsByClassName('rightCarArrowBox');


var carPosition = 0 ;

function carleft() {
  if(carPosition > -263.333){
    carPosition -= 33.3333;
  }
  carMoving[0].style.left = carPosition + '%';
}

function carRight() {
  if(carPosition < 0){
    carPosition += 33.3333;
  }
  carMoving[0].style.left = carPosition + '%';
}

leftCarArrowBox[0].addEventListener('click',()=>{
  carRight()
});

rightCarArrowBox[0].addEventListener('click',()=>{
  carleft()
});


// instagram anims
var instagramSectionHTWO = document.getElementsByClassName('instagramSectionHTWO');
var instagramTwoHtwo = document.getElementsByClassName('instagramTwoHtwo');
var yellowInstagramBnd = document.getElementsByClassName('yellowInstagramBnd');
var gridBoxSpecial = document.getElementsByClassName('gridBoxSpecial');

function instaAnim() {
  yellowInstagramBnd[0].style.left = '100%';
  setTimeout(function () {
    instagramSectionHTWO[0].style.opacity = '1';
    setTimeout(function () {
      gridBoxSpecial[0].style.marginTop = '1.341vw';
    }, 500);
  }, 500);
};

function instaAnimTwo() {
  if(window.innerHeight / 100 * 60 > yellowInstagramBnd[1].getBoundingClientRect().top){
    yellowInstagramBnd[1].style.left = '100%';
    setTimeout(function () {
      instagramTwoHtwo[0].style.opacity = '1';
    }, 500);
  }else{

  }
}

function instaTextAnimFire() {
  if(window.innerHeight / 100 * 60 > yellowInstagramBnd[0].getBoundingClientRect().top){
    instaAnim()
  }else{

  }
  // console.log(instaBG[0].getBoundingClientRect());
}

// portfolio text anim
var carContainerNorm = document.getElementsByClassName('carContainerNorm');
var normalCarSection = document.getElementsByClassName('normalCarSection');
var normalCarSectionHTWO = document.getElementsByClassName('normalCarSectionHTWO');
var hTwoSpamNorm = document.getElementsByClassName('hTwoSpamNorm');



var portFontSize = 8.9;
var portSpanSize = 17.195;
var portTop = -20;
var portOpacity = 0.5;
function portfolioRun() {
  if(window.innerHeight / 100 * 90 > carContainerNorm[0].getBoundingClientRect().top){
    if(portFontSize >= 3.9){
      portFontSize-=0.1;
      normalCarSectionHTWO[0].style.fontSize = portFontSize + 'vw';
    }
    if (portSpanSize >= 12.195) {
      portSpanSize-=0.1;
      hTwoSpamNorm[0].style.fontSize = portSpanSize + 'vw';
    }
    if (portTop <= -9) {
      portOpacity +=0.05;
      portTop+=0.2;
      normalCarSectionHTWO[0].style.top = portTop + 'vw';
    }
  }
  if(window.innerHeight / 100 * 90 > carContainerNorm[0].getBoundingClientRect().top && window.innerHeight / 100 * 50 < carContainerNorm[0].getBoundingClientRect().top){
    normalCarSection[0].style.background = 'white';
    normalCarSectionHTWO[0].style.opacity = portOpacity + '';
  }
  else{
    normalCarSection[0].style.background = 'black';
  }
}



// testimonial Animation
var sectionCar = document.getElementsByClassName('sectionCar');
var normalCarSectionHTwoCarTwo = document.getElementsByClassName('normalCarSectionHTwoCarTwo');
var testiSpan = document.getElementsByClassName('testiSpan');


var testimonialFontSize = 8.9;
var testimonialSpanSize = 17.195;
var testimonialTop = -20;

function testimonialRun() {
  if(window.innerHeight / 100 * 90 > sectionCar[0].getBoundingClientRect().top){
    if(testimonialFontSize >= 3.9){
      testimonialFontSize-=0.1;
      normalCarSectionHTwoCarTwo[0].style.fontSize = testimonialFontSize + 'vw';
    }
    if (testimonialSpanSize >= 12.195) {
      testimonialSpanSize-=0.1;
      testiSpan[0].style.fontSize = testimonialSpanSize + 'vw';
    }
    if (testimonialTop <= -4) {
      testimonialTop+=0.2;
      normalCarSectionHTwoCarTwo[0].style.top = testimonialTop + 'vw';
    }

    if(window.innerHeight / 100 * 90 > sectionCar[0].getBoundingClientRect().top && window.innerHeight / 100 * 50 < sectionCar[0].getBoundingClientRect().top){
      sectionCar[0].style.background = 'white';
    }
    else{
      sectionCar[0].style.background = 'black';
    }

  }
}


window.addEventListener("scroll",()=>{
  portfolioRun();
  testimonialRun();
  instaTextAnimFire();
  instaAnimTwo();
  workTextFixScroll();
  davidOmidFire();
  // cheapFun();
});
