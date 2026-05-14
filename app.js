let vocab = [];

let current = 0;

let showMeaning = false;

const select =
  document.getElementById(
    "lessonSelect"
  );

for (let lessonName in lessons){

  const option =
    document.createElement(
      "option"
    );

  option.value =
    lessonName;

  option.textContent =
    lessonName;

  select.appendChild(option);

}

function changeLesson(){

  const lessonName =
    select.value;

  vocab =
    lessons[lessonName];

  current = 0;

  showMeaning = false;

  render();

}

function render(){

  const word =
    vocab[current];

  document.getElementById(
    "hanzi"
  ).innerText =
    word.hanzi;

  document.getElementById(
    "pinyin"
  ).innerText =
    word.pinyin;

  document.getElementById(
    "meaning"
  ).innerText =
    showMeaning
      ? word.meaning
      : "";

}

function toggleMeaning(){

  showMeaning =
    !showMeaning;

  render();

}

function nextWord(){

  current =
    Math.floor(
      Math.random()
      * vocab.length
    );

  showMeaning = false;

  render();

  speak();

}

changeLesson();