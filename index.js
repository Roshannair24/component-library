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
