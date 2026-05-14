function speak() {

  const word = vocab[current];

  const audio =
    new Audio(word.audio);

  audio.play();

}