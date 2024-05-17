function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Hello World",
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#search-form");
poemFormElement.addEventListener("submit", generatePoem);
