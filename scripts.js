buttonDark = document.getElementById("mode-dark");
buttonDark.addEventListener("click", (event) => {
  document.body.classList.toggle("dark");
});

let timeout;
notification = document.getElementById("notification");
buttonProducts = document.getElementsByClassName("btn-buy");
for (let i = 0; i < buttonProducts.length; i++) {
  buttonProducts[i].addEventListener("click", (event) => {
    notification.classList.remove("close");
    notification.classList.remove("closed");
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      notification.classList.add("close");
    }, 3000);
  });
}
