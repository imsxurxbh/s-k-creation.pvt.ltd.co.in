document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const status = document.getElementById("formStatus");
  status.style.color = "gold";
  status.innerText = "Your query is sending, please wait...";

  const formData = {
    NAME: this.name.value,
    EMAIL: this.email.value,
    PHONE_NO: this.phone.value,
    MESSAGE: this.message.value
  };

  fetch("https://sheetdb.io/api/v1/u9cwzq2ig4vgz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => {
    status.innerHTML =
      "<span style='color:gold'>THANK YOU</span><br>" +
      "<span style='color:white;font-weight:bold'>Your message has been received. We will connect shortly.</span>";
    document.getElementById("contactForm").reset();
  })
  .catch(err => {
    status.style.color = "red";
    status.innerText = "Something went wrong. Please try again.";
  });
});

function toggleMenu() {
  const menu = document.getElementById("menu");
  const burger = document.getElementById("hamburger");
  const overlay = document.getElementById("overlay");

  menu.classList.toggle("active");
  overlay.classList.toggle("active");

  if (menu.classList.contains("active")) {
    burger.innerHTML = "✕";
  } else {
    burger.innerHTML = "☰";
  }
}

function closeMenu() {
  document.getElementById("menu").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
  document.getElementById("hamburger").innerHTML = "☰";
}

/* auto close on link click */
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", closeMenu);
});
