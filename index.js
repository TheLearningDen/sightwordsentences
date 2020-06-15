// jshint esversion: 6

/* Copyright (c) 2020 The Learning Den */

// variables
var sightWords = ['dog', 'car', 'fish', 'ball', 'cat', 'plane', 'books'];
var currentWordIndex = sightWords.length - 1;

// set initial sight word and play audio
document.querySelector('.sightWord').innerHTML = `${sightWords[currentWordIndex]}.`;

setTimeout(function () {
  playSound('iLikeMy');
}, 300);

setTimeout(function () {
  playSound(sightWords[currentWordIndex]);
}, 1850);

// on each click of prev, display previous word
document.querySelector('#prev').addEventListener('click', function () {

  // decrement current word index
  currentWordIndex--;

  // if index has gone out of scope, reset to last index
  if (currentWordIndex < 0) {
    currentWordIndex = sightWords.length - 1;
  }

  // display new sight word on screen
  document.querySelector('.sightWord').innerHTML = `${sightWords[currentWordIndex]}.`;

  // read full sentence; "I like my...[NEW WORD]"
  setTimeout(function () {
    playSound('iLikeMy');
  }, 250);

  setTimeout(function () {
    playSound(sightWords[currentWordIndex]);
  }, 1800);
});

// on each click of next, display next word
document.querySelector('#next').addEventListener('click', function () {

  // increment current word index
  currentWordIndex++;

  // if index has gone out of scope, reset to first index
  if (currentWordIndex >= sightWords.length) {
    currentWordIndex = 0;
  }

  // display new sight word on screen
  document.querySelector('.sightWord').innerHTML = `${sightWords[currentWordIndex]}.`;

  // read full sentence; "I like my...[NEW WORD]"
  setTimeout(function () {
    playSound('iLikeMy');
  }, 250);

  setTimeout(function () {
    playSound(sightWords[currentWordIndex]);
  }, 1800);
});

// on each click of sight word, repeat word audio
document.querySelector('.sightWord').addEventListener('click', function () {
  playSound(sightWords[currentWordIndex]);
});

function playSound(word) {
  let audio = new Audio(`audio/${word}.mp3`);
  audio.play();
}

// prevents highlighting of sight word if user clicks quickly (double-clicks)
document.querySelector('.sightWord').addEventListener('mousedown', function (event) {
  if (event.detail > 1) {
    event.preventDefault();
  }
}, false);
