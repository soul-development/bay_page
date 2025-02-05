const switcher = document.querySelector(".switch input");
const switchPrice = document.querySelector('.switch-price')
const switchMode = document.querySelector('.switch-mode')
if (switcher) {
  switcher.addEventListener("change", (e) => {
    console.log(e.target.checked, "privet");

    if (e.target.checked) {
      switchPrice.innerHTML = '990₽'
      switchMode.innerHTML = '<span class="unlimited-symb">∞</span> на месяц'
    } else {
      switchPrice.innerHTML = '490₽'
      switchMode.innerHTML = '200 постов'
    }
  });
}
