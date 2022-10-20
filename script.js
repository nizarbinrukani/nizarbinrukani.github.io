const scriptURL = "https://script.google.com/macros/s/AKfycbzbfivZ3pB022Qh-v05EESV7_ShtKK3EqlO2euaWeDJdm4i5J5oi38MomRXo_zNU3qZkA/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
