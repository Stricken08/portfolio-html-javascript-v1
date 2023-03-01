const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

// Body color
scroll.on("scroll", () => {
  if (document.querySelector("#color.is-inview")) {
    document.body.style.background = "#000101";
    document.body.style.color = "#fefeff";
  } else {
    document.body.style.background = "#fefeff";
    document.body.style.color = "#000101";
  }
});

//////////////////////////////////////////////////////
window.onload = function(){
	
  console.log('Made by Axel Bacquet ;) - A Passionate Web Developer!');
  
  window.addEventListener("scroll", updateYPosition, false);
  window.addEventListener("resize", updateYPosition, false);
  
  navEffect();
  updateYPosition();
  selectModal(marineButton, marineModal);
  selectModal(aguaButton, aguaModal);
  selectModal(todoButton, todoModal);
  animateHTML().init();
  whenUserScroll().init();
  
};

//VARIABLE CONTAINING ALL ANIMATIONS 
const animateHTML = function() {
  let leftElems;
  let rightElems;
  let botElems;
  let barElems;
  let bar60Elems;
  let bar90Elems;
  let windowHeight;
  
  //USE THIS TO INITIALIZE ALL FUNCTIONS IN THIS SCOPE
  function init() {
    leftElems = document.querySelectorAll('.hidden');
    rightElems = document.querySelectorAll('.hiddenRight');
    botElems = document.querySelectorAll('.hiddenBot');
    barElems = document.querySelectorAll('.fill-80-bar');
    bar60Elems = document.querySelectorAll('.fill-60-bar');
    bar90Elems = document.querySelectorAll('.fill-90-bar');
    windowHeight = window.innerHeight;
    addEventHandlers();
  }
  
  function addEventHandlers() {
    /*ADDING EVENT LISTENER FOR FADE IN ANIMATIONS*/
    window.addEventListener('scroll', function(){ checkAnyPosition(leftElems, 'hidden', 'slideLeft'); });
    window.addEventListener('scroll', function(){ checkAnyPosition(rightElems, 'hiddenRight', 'slideRight'); });
    window.addEventListener('scroll', function(){ checkAnyPosition(botElems, 'hiddenBot', 'slideBot'); });
    /*ADDING EVENT LISTENERS FOR FILLING BAR ANIMATIONS*/
    window.addEventListener('scroll',function(){ fillingAllBars(barElems, '80'); });
    window.addEventListener('scroll',function(){ fillingAllBars(bar60Elems, '60'); });
    window.addEventListener('scroll',function(){ fillingAllBars(bar90Elems, '90'); });
    window.addEventListener('resize', init);
  }
  
  /***********STARTS FADE IN ANIMATIONS******************/	  
  function checkAnyPosition(elem, fromPos, toPos) {
    for (let i = 0; i < elem.length; i++) {
      let positionFromTop = elem[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elem[i].className = elem[i].className.replace(
          fromPos,
          toPos
        );
      }
    }
  }
  
  /**************Starts FILLING BARS SECTION*******************/
  function fillingAllBars(elem, size) {
    for (let i = 0; i < elem.length; i++) {
      let positionFromTop = elem[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elem[i].
className = elem[i].className.replace(
      'fill-'+size+'-bar',
      'filed-'+size+'-bar'
      );
  }
}
}
return {
init: init
};
};


//NAV FADE_TOP_TO_BOTTOM EFFECT
function navEffect() {
      window.addEventListener("scroll", function(){
      var navBar = document.getElementById('navbar');
      var domRect = navBar.getBoundingClientRect();
      var myBackground = document.getElementById('my-background');
      var domBGRect = myBackground.getBoundingClientRect();
      
      if(domRect.y <= -domRect.height){
          navBar.classList.add('fade-in-nav');
      }
      if(-domBGRect.height < domBGRect.top){
          navBar.classList.remove('fade-in-nav');
      }
  });
  
}

function updateYPosition(elem) {
var yScroll = window.pageYOffset;
//console.log(yScroll);

return elem;
}
