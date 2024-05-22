function displayPoem(response) {
  console.log("Generating poem");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let topic = document.querySelector("#poem-topic");
  let apiKey = `dc6760cf7088c245e5a42a646bco203t`;
  let context = `You are an intelligent AI assistant that has access to a full dictionary or rhyming words and poem examples, which allows you to come up with many creative poem ideas`;
  let prompt = `Write me a short poem about ${topic.value},that is 2-4 lines long. The poem must be provided in the following HTML format: <div>Poem line 1<br>Poem line 2</div>`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#search-form");
poemFormElement.addEventListener("submit", generatePoem);
