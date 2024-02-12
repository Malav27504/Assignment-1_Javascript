var noun1, verb, adjective, noun2, place, speakButton, textToSpeak;

var nouns1 = ["the turkey", "mom", "dad", "the dog", "the cat"];
var verbs = ["sat on", "ate", "danced with", "saw", "kissed"];
var adjectives = ["a funny", "a scary", "a barking", "a fat", "slow"];
var nouns2 = ["goat", "monkey", "fish", "crow", "frog"];
var places = ["on the moon", "on the chair", "in my soup", "on the grass", "in my shoes"];

speakButton = document.getElementById("speak");
synth = window.speechSynthesis;

function pickRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function updateSentence(buttonId) {
  switch (buttonId) {
    case "noun1":
      noun1 = pickRandomWord(nouns1);
      textToSpeak = textToSpeak + noun1 + " ";
      break;
    case "verb":
      verb = pickRandomWord(verbs);
      textToSpeak = textToSpeak + verb + " ";
      break;
    case "adjective":
      adjective = pickRandomWord(adjectives);
      textToSpeak = textToSpeak + adjective + " ";
      break;
    case "noun2":
      noun2 = pickRandomWord(nouns2);
      textToSpeak = textToSpeak + noun2 + " ";
      break;
    case "place":
      place = pickRandomWord(places);
      textToSpeak = textToSpeak + place + ".";
      break;
  }
  console.log("Current sentence:", textToSpeak);
}


speakButton.addEventListener("click", function() {
  if (textToSpeak) {
    speakNow(textToSpeak);
  } else {
    alert("Please build a sentence first!");
  }
});


textToSpeak = "";

document.getElementById("reset").addEventListener("click", function() {
  noun1 = verb = adjective = noun2 = place = textToSpeak = "";
  console.log("Sentence reset!");
});



function speakNow(string) {
  var utterThis = new SpeechSynthesisUtterance(string);
  synth.speak(utterThis);
}

document.getElementById("noun1").addEventListener("click", function() { updateSentence("noun1"); });
document.getElementById("verb").addEventListener("click", function() { updateSentence("verb"); });
document.getElementById("adjective").addEventListener("click", function() { updateSentence("adjective"); });
document.getElementById("noun2").addEventListener("click", function() { updateSentence("noun2"); });
document.getElementById("place").addEventListener("click", function() { updateSentence("place"); });
