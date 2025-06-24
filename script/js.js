const body = document.querySelector("body");
const btnToTop = document.createElement("button");
body.appendChild(btnToTop);
btnToTop.innerHTML = `<i id="to-top" class="far fa-caret-square-up"></i>`;
btnToTop.classList.add("btn-to-top");
btnToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});

const btn1 = document.createElement("button");
body.appendChild(btn1);
btn1.innerHTML = `<i id="plus" class="far fa-plus-square"></i>`;
btn1.classList.add("btn-plus");

const btn2 = document.createElement("button");
body.appendChild(btn2);
btn2.innerHTML = `<i id="calendar" class="far fa-calendar-alt"></i>`;
btn2.classList.add("btn-calendar");
