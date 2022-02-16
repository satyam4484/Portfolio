AOS.init();

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".my-active li");
window.onscroll = () => {
  var current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 40) {
      current = section.getAttribute("id"); 
    }

  });
  navLi.forEach((li) => {
      
    li.classList.remove("active");
    if (li.children[0].hash.slice(1) === current) {
      li.classList.add("active");
    }
  });
};