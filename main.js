const hiddenContent = document.querySelector(".hidden-content");
const revealButton = document.querySelector(".reveal-btn");
const button = document.getElementById("button");
const toggleContent = document.getElementById("toggle-content");

function revealContent() {
  // if (hiddenContent) {
  //   hiddenContent.classList.contains("show");
  // }
  hiddenContent.classList.toggle("show");
  if (hiddenContent.classList.toggle("hidden-content")) {
  }
}

// revealButton.addEventListener("click", revealContent);
revealButton.addEventListener("click", () => {
  revealContent();
  if (revealButton.classList.toggle("show")) {
    revealButton.textContent = "Read Less";
  } else {
    revealButton.textContent = "Read More";
  }
});

// button.addEventListener("click", () => {
//   if (toggleContent.classList.toggle("dark-moon")) {
//     button.textContent = "Toggle to white";
//   } else {
//     button.textContent = "Toggle to black";
//   }
// });
