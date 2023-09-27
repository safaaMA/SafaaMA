function listicon() {
    var ul = document.getElementById('uiid');
    if (ul.style.left === "827px" || ul.style.left === "") {
        ul.style.left = "-2px";
    } else {
        ul.style.left = "827px";
    }
}

function serice() {
    var ulser = document.getElementById('ulSer');
    if (ulser.style.height === "0px" || ulser.style.height === " " || ulser.style.display === "none" || ulser.style.display === "") {
        ulser.style.height = "184px";
        ulser.style.display = "flex";
    } else {
        ulser.style.height = "0px";
    }
}
const one = document.getElementById("one");
const tow = document.getElementById("tow");
const three = document.getElementById("three");
three.style.display = "none";
tow.style.display = "none";

function towfun() {
    tow.style.display = "block";
    tow.classList.add("typing-demo");
}
function threfun() {
    three.style.display = "block";
    three.classList.add("typing-demo");
}

setInterval(towfun, 2000);
setInterval(threfun, 4000);

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    reveals.forEach((reveal) => {
      var windowHeight = window.innerHeight;
      var elementTop = reveal.getBoundingClientRect().top;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("active");
      } else {
        reveal.classList.remove("active");
      }
    });
  }
  
  window?.addEventListener("scroll", reveal);
  