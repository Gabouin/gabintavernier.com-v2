document.querySelectorAll(".grid-container .box-3, .grid-container .box-4").forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("is-active");
  });
});
