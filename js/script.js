// Copyright (c) 2022 Brennan Lee All rights reserved
//
// Created by: Brennan Lee
// Created on: dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-5-04/sw.js", {
    scope: "/ICS2O-5-04/",
  })
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
