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
  function startVideo(videoId) {
    const video = document.getElementById(videoId);
    video.play();
  }
  function stopVideo(videoId) {
    const video = document.getElementById(videoId);
    video.pause();
  }
  
 /*mobile parallax effect*/ 
  var bgParallax = document.getElementById('parallax');
      window.addEventListener('scroll', function(){
      var scrollPosition = window.pageYOffset;
      var limit = bgParallax.offsetTop + bgParallax.offsetHeight;  
      if (scrollPosition > bgParallax.offsetTop && scrollPosition <= limit){
      bgParallax.style.backgroundPositionY = (50 - 90 * scrollPosition/limit) + '%';    
      }else{
      bgParallax.style.backgroundPositionY = '50%';    
  }
}); 
 


/*canvas*/
function $i(t) {
  return document.getElementById(t);
}

function $h(t) {
  return ("0" + Math.max(0, Math.min(255, Math.round(t))).toString(16)).slice(
    -2
  );
}
function _i(t, r) {
  $t("div")[t].innerHTML += r;
}
function _h(t) {
  return hires ? Math.round(t / 2) : t;
}
function get_screen_size() {
  var t = document.documentElement.clientWidth,
    r = document.documentElement.clientHeight;
  return Array(t, r);
}

function init() {
  for (var t = 0; n > t; t++)
    (star[t] = new Array(5)),
      (star[t][0] = Math.random() * w * 2 - 2 * x),
      (star[t][1] = Math.random() * h * 2 - 2 * y),
      (star[t][2] = Math.round(Math.random() * z)),
      (star[t][3] = 0),
      (star[t][4] = 0);
  var r = $i("starfield");
  (r.style.position = "absolute"),
    (r.width = w),
    (r.height = h),
    (context = r.getContext("2d")),
    (context.strokeStyle = "rgba(191, 114, 59, 1)");
}
function anim() {
  (mouse_x = cursor_x - x),
    (mouse_y = cursor_y - y),
    context.fillRect(0, 0, w, h);
  if (bgImage) {
      context.drawImage(bgImage,0, 0,w,h); 
  }
  for (var t = 0; n > t; t++)
    (test = !0),
      (star_x_save = star[t][3]),
      (star_y_save = star[t][4]),
      (star[t][0] += mouse_x >> 4),
      star[t][0] > x << 1 && ((star[t][0] -= w << 1), (test = !1)),
      star[t][0] < -x << 1 && ((star[t][0] += w << 1), (test = !1)),
      (star[t][1] += mouse_y >> 4),
      star[t][1] > y << 1 && ((star[t][1] -= h << 1), (test = !1)),
      star[t][1] < -y << 1 && ((star[t][1] += h << 1), (test = !1)),
      (star[t][2] -= star_speed),
      star[t][2] > z && ((star[t][2] -= z), (test = !1)),
      star[t][2] < 0 && ((star[t][2] += z), (test = !1)),
      (star[t][3] = x + (star[t][0] / star[t][2]) * star_ratio),
      (star[t][4] = y + (star[t][1] / star[t][2]) * star_ratio),
      star_x_save > 0 &&
        w > star_x_save &&
        star_y_save > 0 &&
        h > star_y_save &&
        test &&
        ((context.lineWidth = 2 * (1 - star_color_ratio * star[t][2])),
        context.beginPath(),
        context.moveTo(star_x_save, star_y_save),
        context.lineTo(star[t][3], star[t][4]),
        context.stroke(),
        context.closePath());
  timeout = setTimeout("anim()", fps);
}
let bgImage;
function startCanvas() {
  resize(), anim();
    const  bgImageLoading = new Image();
  bgImageLoading.src = './images/headerBackground.jpg';
  bgImageLoading.onload = function(){
    bgImage = bgImageLoading
  }
}
function resize() {
  (w = parseInt(
    -1 != url.indexOf("w=")
      ? url.substring(
          url.indexOf("w=") + 2,
          -1 != url.substring(url.indexOf("w=") + 2, url.length).indexOf("&")
            ? url.indexOf("w=") +
                2 +
                url.substring(url.indexOf("w=") + 2, url.length).indexOf("&")
            : url.length
        )
      : get_screen_size()[0]
  )),
    (h = parseInt(
      -1 != url.indexOf("h=")
        ? url.substring(
            url.indexOf("h=") + 2,
            -1 != url.substring(url.indexOf("h=") + 2, url.length).indexOf("&")
              ? url.indexOf("h=") +
                  2 +
                  url.substring(url.indexOf("h=") + 2, url.length).indexOf("&")
              : url.length
          )
        : get_screen_size()[1]
    )),
    (x = Math.round(w / 2)),
    (y = Math.round(h / 2)),
    (z = (w + h) / 2),
    (star_color_ratio = 1 / z),
    (cursor_x = x),
    (cursor_y = y),
    init();
}
var url = document.location.href,
  flag = !0,
  test = !0,
  n = parseInt(
    -1 != url.indexOf("n=")
      ? url.substring(
          url.indexOf("n=") + 2,
          -1 != url.substring(url.indexOf("n=") + 2, url.length).indexOf("&")
            ? url.indexOf("n=") +
                2 +
                url.substring(url.indexOf("n=") + 2, url.length).indexOf("&")
            : url.length
        )
      : 3000
  ),
  star_ratio = 100,
  star_speed = 0.5,
  star_speed_save = 0,
  star = new Array(n),
  fps = 30;
startCanvas();
