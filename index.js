function shout(string) {
  return string.toUpperCase();
}

function  whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!"
<<<<<<< HEAD
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return `I love you, too.`;
=======
>>>>>>> 1be6ae34cdc66721aa9bad9dd0d0f8b5aa7c060e
  }
}