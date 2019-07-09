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
      setTimeout(function () {
        aboutMe.style.opacity = '1';
      }, 200);
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
var recentWorkImgDivHtwoAnim = document.getElementsByClassName('recentWorkImgDivHtwoAnim');

// recentWorkImgDiv[0].addEventListener('mouseenter',()=>{
//   recentWorkImgDivHtwo[0].style.backgroundPosition = '0%';
// });
function recentWorkText() {
  if(window.innerHeight / 100 * 80 >= recentWorkImgDivHtwo[0].getBoundingClientRect().bottom){
    recentWorkImgDivHtwoAnim[0].style.left = '100%';
    setTimeout(function () {
      recentWorkImgDiv[0].style.marginTop = '18.789vw';
      recentWorkImgDivHtwo[0].style.opacity = '0.5';
    }, 500);
  }
}



// davidOmid Italy Fun
var recentImgItaly = document.getElementsByClassName('recentImgItaly');
var recentImgItalyContainer = document.getElementsByClassName('recentImgItalyContainer');


function davidOmidFire() {
  if(window.innerHeight / 100 * 78 >= recentImgItaly[0].getBoundingClientRect().bottom){
    recentImgItalyContainer[0].style.width = '33vw';
  }
}


// picture hover layerinside rnd
var rnd = document.getElementsByClassName('rnd');
var rndInside = document.getElementsByClassName('rndInside');
var rndTextBox = document.getElementsByClassName('rndTextBox');
var rndInsideContent = document.getElementsByClassName('rndInsideContent');
var rndTwoTextBox = document.getElementsByClassName('rndTwoTextBox');
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

// davidOmid TEXT
var sideImgText = document.getElementsByClassName('sideImgText');
var rndTwo = document.getElementsByClassName('rndTwo');


function davidOmid() {
  if(window.innerHeight / 100 * 15 < rnd[0].getBoundingClientRect().top){
    sideImgText[0].style.right = '12vw';
  }
  if(window.innerHeight / 100 * 25 > rnd[0].getBoundingClientRect().top){
    sideImgText[0].style.right = '27vw';
    console.log('rnd');
  }
  if(window.innerHeight / 100 * 80 > rnd[0].getBoundingClientRect().bottom){
    rndTextBox[0].style.left = '0';
    console.log('rnd');
  }
  if(window.innerHeight / 100 * 25 > rndTwo[0].getBoundingClientRect().top){
    sideImgText[0].style.right = '12vw';
    console.log('rnd');
  }
  if(window.innerHeight / 100 * 80 > rndTwo[0].getBoundingClientRect().bottom){
    rndTwoTextBox[0].style.left = '0';
  }
}

// carContainer
var carContainer = document.getElementsByClassName('carContainer');
var carMoving = document.getElementsByClassName('carMoving');
var leftCarArrowBox = document.getElementsByClassName('leftCarArrowBox');
var rightCarArrowBox = document.getElementsByClassName('rightCarArrowBox');


var carPosition = 0 ;

function carleft() {
  if(carPosition > -150){
    carPosition -= 33.3333;
  }
  carMoving[0].style.left = carPosition + 'vw';
}

function carRight() {
  if(carPosition < 1){
    carPosition += 33.3333;
  }
  carMoving[0].style.left = carPosition + 'vw';
}

leftCarArrowBox[0].addEventListener('click',()=>{
  carRight()
});

rightCarArrowBox[0].addEventListener('click',()=>{
  carleft()
});


// instagram anims
var instagramSection = document.getElementsByClassName('instagramSection');
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
      instagramSection[0].style.borderBottom = '0vw solid black';
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
var normalCarSectionYellowAnim = document.getElementsByClassName('normalCarSectionYellowAnim');


function portfolioRun() {
  if(window.innerHeight / 100 * 80 > carContainerNorm[0].getBoundingClientRect().top){
    normalCarSectionYellowAnim[0].style.left = '100%';
    setTimeout(function () {
      normalCarSection[0].style.paddingTop = '0';
      normalCarSectionHTWO[0].style.opacity = '0.5';
    }, 500);
  }
}

// services text anim
var threeImageContent = document.getElementsByClassName('threeImageContent');
var main = document.getElementsByClassName('main');
var topServicesHeading = document.getElementsByClassName('topServicesHeading');
var topServiceHeadingSpan = document.getElementsByClassName('topServiceHeadingSpan');
var bottomServicesAnimGrad = document.getElementsByClassName('bottomServicesAnimGrad');

function serviceRun() {
  if(window.innerHeight / 100 * 80 > threeImageContent[0].getBoundingClientRect().top){
    bottomServicesAnimGrad[0].style.left = '100%';

    setTimeout(function () {
      topServicesHeading[0].style.opacity = '0.5';
      main[0].style.paddingBottom = '0';
    }, 500);
  }
}



// testimonial Animation
var sectionCar = document.getElementsByClassName('sectionCar');
var normalCarSectionHTwoCarTwo = document.getElementsByClassName('normalCarSectionHTwoCarTwo');
var testiSpan = document.getElementsByClassName('testiSpan');
var testAnimHolderYellowAnim = document.getElementsByClassName('testAnimHolderYellowAnim');
var testimonials = document.getElementsByClassName('testimonialsSection');


function testimonialRun() {
  if(window.innerHeight / 100 * 80 > sectionCar[0].getBoundingClientRect().top){
    testAnimHolderYellowAnim[0].style.left = '100%';
    setTimeout(function () {
      testimonials[0].style.borderTop = '0vw solid #3c4145';
      normalCarSectionHTwoCarTwo[0].style.opacity = '0.5';
    }, 500);
  }
}


window.addEventListener("scroll",()=>{
  recentWorkText();
  portfolioRun();
  serviceRun();
  testimonialRun();
  instaTextAnimFire();
  instaAnimTwo();
  // workTextFixScroll();
  davidOmidFire();
  davidOmid();
  // cheapFun();
});
