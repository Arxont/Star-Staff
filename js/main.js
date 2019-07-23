/*slick */
$(document).on("ready", function() {
    $(".slider").slick({
      dots: true,
      adaptiveHeight: true
    });
  });

 /*mobile popup nav*/
  const showDialog = () => {
    document.getElementById("dialog").classList.add("show");
    const scrollY = document.documentElement.style.getPropertyValue(
      "--scroll-y"
    );
    const body = document.body;
    body.style.height = "100vh";
    body.style.overflowY = "hidden";
  };
  const closeDialog = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    body.style.height = "";
    body.style.overflowY = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    document.getElementById("dialog").classList.remove("show");
  };
  window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty(
      "--scroll-y",
      `${window.scrollY}px`
    );
  });


/*play on hover for video*/
  function start(videoId) {
    const video = document.getElementById(videoId);
    video.play();
  }
  function stop(videoId) {
    const video = document.getElementById(videoId);
    video.pause();
  }
  
 /*mobile parallax effect*/ 
  var bgParallax = document.getElementById('parallax');
      window.addEventListener('scroll', function(){
      var scrollPosition = window.pageYOffset;
      var limit = bgParallax.offsetTop + bgParallax.offsetHeight;  
      if (scrollPosition > bgParallax.offsetTop && scrollPosition <= limit){
      bgParallax.style.backgroundPositionY = (50 - 40 * scrollPosition/limit) + '%';    
      }else{
      bgParallax.style.backgroundPositionY = '50%';    
  }
}); 