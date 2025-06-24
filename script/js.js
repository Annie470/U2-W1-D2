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
