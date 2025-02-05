const switcher = document.querySelector(".switch input");
const switchPrice = document.querySelector(".switch-price");
const switchMode = document.querySelector(".switch-mode");
if (switcher) {
  switcher.addEventListener("change", (e) => {
    console.log(e.target.checked, "privet");

    if (e.target.checked) {
      switchPrice.innerHTML = "990₽";
      switchMode.innerHTML = '<span class="unlimited-symb">∞</span> на месяц';
    } else {
      switchPrice.innerHTML = "490₽";
      switchMode.innerHTML = "200 постов";
    }
  });
}

const appearanceEls = Array.from(
  document.querySelectorAll(".appearance-animation")
).map((el) => ({ el, className: "appearance" }));
const fadeInEls = Array.from(
  document.querySelectorAll(".fade-in-animation")
).map((el) => ({ el, className: "fade-in" }));
const fadeInXEls = Array.from(
  document.querySelectorAll(".fade-in-x-animation")
).map((el) => ({ el, className: "fade-in-x" }));

const sectionContents = [...appearanceEls, ...fadeInEls, ...fadeInXEls];
if (sectionContents.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = sectionContents.find((s) => s.el === entry.target);
          console.log(section);
          if (section) {
            entry.target.classList.add(section.className);
            observer.unobserve(entry.target);
          }
        }
      });
    },
    { threshold: 0.2 }
  );
  sectionContents.forEach((section) => observer.observe(section.el));
}
