document.addEventListener("DOMContentLoaded", function () {
  const starsContainer = document.createElement("div");
  starsContainer.className = "stars";

  for (let i = 0; i < 150; i++) {
    const star = document.createElement("span");
    star.style.width = Math.random() * 3 + "px";
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 2 + "s";
    starsContainer.appendChild(star);
  }

  document.body.prepend(starsContainer);
});
