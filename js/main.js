
  new Glider(document.querySelector('.glider'), {
    dots: '#dots',
    slidesToShow: 1,
    draggable: false,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });
  document.addEventListener('glider-loaded', hideFFScrollBars);
  document.addEventListener('glider-refresh', hideFFScrollBars);
  function hideFFScrollBars(e){
    var scrollbarHeight = 17; // Currently 17, may change with updates
    if(/firefox/i.test(navigator.userAgent)){
      // We only need to appy to desktop. Firefox for mobile uses
      // a different rendering engine (WebKit)
      if (window.innerWidth > 575){
        e.target.parentNode.style.height = (e.target.offsetHeight - scrollbarHeight) + 'px'
      }
    }
  }




 /*mobile popup nav*/
  const showPopUp = () => {
    document.getElementById("popUp_screen").classList.add("show");
    const scrollY = document.documentElement.style.getPropertyValue(
      "--scroll-y"
    );
    const body = document.body;
    body.style.height = "100vh";
    body.style.overflowY = "hidden";
  };
  const closePopUp = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    body.style.height = "";
    body.style.overflowY = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
    document.getElementById("popUp_screen").classList.remove("show");
  };
  window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty(
      "--scroll-y",
      `${window.scrollY}px`
    );
  });


/*play on hover for video*/
  function startVideo(videoId) {
    const video = document.getElementById(videoId);
    video.play();
  }
  function stopVideo(videoId) {
    const video = document.getElementById(videoId);
    video.pause();
  }
  
 

  