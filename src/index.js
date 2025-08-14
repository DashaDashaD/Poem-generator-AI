function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Some say the world will end in fire, Some say in ice",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);