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
  if(carPosition > carMoving[0].children.length * -33 + (3 *33)){
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



window.addEventListener("scroll",()=>{
  instaTextAnimFire();
  instaAnimTwo()
  // cheapFun();
});
