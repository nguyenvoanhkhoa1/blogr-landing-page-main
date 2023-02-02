const header = document.getElementById("header");

header.style.background = "transparent";

window.addEventListener(
  "scroll",
  () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      header.style.background =
        "linear-gradient(135deg, #ff8f71 0%, #ff3e55 100%)";
    } else {
      header.style.background = "transparent";
    }
  },
  { passive: true }
);
