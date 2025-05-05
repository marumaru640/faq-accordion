const accordionButtons = document.querySelectorAll(".accordion_question");

const handelClickButton = (e) => {
  const target = e.currentTarget;
  const expanded = target.getAttribute("aria-expanded") === true;
  target.setAttribute("aria-expanded", !expanded);
  target.parentElement.classList.toggle("is-open");
};

accordionButtons.forEach((button) => {
  button.addEventListener("click", handelClickButton);
});
