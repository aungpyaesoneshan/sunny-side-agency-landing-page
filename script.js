const hamburgerMenu = document.querySelector(".hamburger-menu");
const dropDown = document.querySelector(".drop-down");
let int = 0;
hamburgerMenu.addEventListener("click", () => {
  if (int === 0) {
    dropDown.style.display = "block";
    int += 1;
    return;
  }
  dropDown.style.display = "none";
  int = 0;
});
