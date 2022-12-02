// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}

function calculate() {
  let inputedAge = document.getElementById("age").value
  let inputedDay = document.getElementById("day").value

  if (
    inputedDay == "Tuesday" ||
    inputedDay == "Thursday" ||
    (inputedAge > 12 && inputedAge < 21)
  ) {
    document.getElementById("answer").innerHTML =
      "You're able to get the discount! :)"
  } else {
    document.getElementById("answer").innerHTML =
      "Sorry, you must pay for regular pricing. :("
  }
}
