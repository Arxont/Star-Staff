/*slider*/
var sliders = document.querySelectorAll('.glide');
  
  for (var i = 0; i < sliders.length; i++) {
    var glide = new Glide(sliders[i], {
      gap: 15,
    });
    
    glide.mount();
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
  
 

 /*show map on scroll */
 let added = false;
window.addEventListener("scroll", function myFunction() {

  if (document.documentElement.scrollTop > 2000 && !added) {
    added = true;
    const fileref = document.createElement("script");
    fileref.async = true; 
    fileref.setAttribute("type", "text/javascript");
    fileref.setAttribute(
      "src",
      "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A534b4bf1169de3e7e8d6cee9dae79779796aa4e4ee3224bba234e17fee7f7252&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true"
    );  
    document.getElementById("hiddenMap").append(fileref)
  }
});

/* webp check*/
async function supportsWebp() {
  if (!self.createImageBitmap) return false;
  
  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  const blob = await fetch(webpData).then(r => r.blob());
  return createImageBitmap(blob).then(() => true, () => false);
}

(async () => {
  if(await supportsWebp()) {
  }
  else {
    window.location = './browser.html'
  }
})();