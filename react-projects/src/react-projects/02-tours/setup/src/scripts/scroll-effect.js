//add this in css 
//.scroll-effect {
//  transform: translateY(100%);
//  opacity: 0;
//}

const handleScroll = (function() {
  let isActive = false;
  const items = document.getElementsByClassName("scroll-effect")
  const height = document.documentElement.clientHeight
  return function() {
    if (!isActive) {
      isActive = true;
      setTimeout(() => {
        isActive = false;
      }, 100)
      //code goes here
      for (let i = 0; i < items.length; i++) {
        if (items[i].getBoundingClientRect().y >= 0 && (items[i].getBoundingClientRect().y - items[i].getBoundingClientRect().height) <= height) {
          if (!items[i].classList.contains("scroll-effect-animate")) {
            items[i].classList.add("scroll-effect-animate")
            items[i].style.transform = "translateY(0px)";
            items[i].style.opacity = "1";
            items[i].style.transition = "0.5s ease-out";
          }
        }
      }
    }
  }
})()

document.addEventListener("scroll", handleScroll)

