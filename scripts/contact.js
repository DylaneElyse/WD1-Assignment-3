// when the "submit-button" is clicked, the contents of the contact-page are
// replaced with a single <p> element that reads "Thank you for your message"
// in size 24 font.

let content = document.getElementById("contact-page");
let button = document.getElementById("submit-button");

button.addEventListener("click", contactMessage);

function contactMessage() {
  let message = document.createElement("p");
  message.innerHTML = "Thank you for your message!";
  message.style.fontSize = "24px";

  content.innerHTML = "";
  content.append(message);

  // content.innerHTML = "Thank you for your message";
  // content.style.fontSize = "24px";
}
// hint: you can change the style of an element by modifying the value of that
// element's .style.fontSize, or by updating its .classList.
