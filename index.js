window.addEventListener("load", reportWindowSize);
window.addEventListener("resize", reportWindowSize);

function reportWindowSize() {
  if (window.innerWidth <= 500) {
    // document.querySelector("iframe").style.width = "300px";

    document.querySelector("#homepage-iframe").style.width = "300px";

    let allIframes = document.querySelectorAll("iframe");

    allIframes.forEach((currentValue, index, arr) => {
      currentValue.style.width = "300px";
    });
  }
}

let darkBtn = document.querySelector("#nav-dark-mode-btn");

darkBtn.addEventListener("click", () => applyDarkMode);

darkBtn.addEventListener("click", function () {
  applyDarkMode();
});

function applyDarkMode() {
  document.querySelector(".bxs-sun")?.classList.toggle("hide-dark-icon");
  document.querySelector(".bxs-moon")?.classList.toggle("hide-dark-icon");

  document.querySelector(".master")?.classList.toggle("dark-background");
  document.querySelector(".all-content")?.classList.toggle("light-foreground");
  document.querySelector(".k-footer")?.classList.toggle("dark-background");

  document
    .querySelector(".wallpaper-base")
    ?.classList.toggle("dark-background");
  document
    .querySelector(".installation-guide-container")
    ?.classList.toggle("dark-background");

  document
    .querySelector(".installation-guide-text")
    ?.classList.toggle("dark-background");

  // document.querySelector("#list-iframe-v-container-leftside").classList.toggle("light-background");

  let sidebarBtnArr = document.querySelectorAll(".k-link");

  let notifArr = document.querySelectorAll(".list-iframe-v-container-leftside");

  sidebarBtnArr.forEach((currentValue, index, arr) => {
    currentValue.classList.toggle("light-foreground");
  });

  notifArr.forEach((currentValue, index, arr) => {
    currentValue.classList.toggle("light-background");
  });

  // document.querySelectorAll(".k-link").classList.toggle("light-foreground");
}
