/* eslint-disable no-console */
function getRandomElementFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

window.onload = function() {
  //write your code here
  const suites = ["♦", "♥", "♠", "♣"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const randomSuite = getRandomElementFromArray(suites);
  const randomValue = getRandomElementFromArray(values);
  console.log(randomSuite, randomValue);

  // Assigning random card value to the HTML element 1:
  document.getElementById("card-value").innerHTML = randomValue;
  // Assigning random card value to the HTML element 2:
  //const cardValueElement = document.querySelector("#card-value");
  //cardValueElement.innerHTML = randomValue;

  // Assigning random Suite value to the HTML element:

  // This does not work because we select a HTMLCollection with multple elements that all need to be assigned a value
  //document.getElementsByClassName("card-suite").innerHTML = randomSuite;

  // This selects a HTMLCollection
  const cardSuiteQuestionM = document.getElementsByClassName("card-suite");
  console.log(cardSuiteQuestionM);

  // This selects a HTMLCollection
  const cardSuiteElementsT = document.getElementsByClassName("card-suite");
  console.log(cardSuiteElementsT);

  // This selects a NodeList
  const cardSuiteElements = document.querySelectorAll(".card-suite");
  console.log(cardSuiteElements);

  // This selects the First element of the Node List
  const cardSuiteElementOne = document.querySelector(".card-suite");
  console.log(cardSuiteElementOne);

  // Use the element of type Nodelist + Assign classes to the element + Assign the random suite vale to the ?
  cardSuiteElements.forEach(function(item) {
    if (randomSuite === "♦") {
      item.classList.add("diamonds");
    } else if (randomSuite === "♥") {
      item.classList.add("hearts");
    } else if (randomSuite === "♠") {
      item.classList.add("spade");
    } else {
      item.classList.add("clubs");
    }
    item.innerHTML = randomSuite;
  });

  // cardSuiteElements.forEach(e => {
  //   if (randomSuite === "♦") {
  //     e.classList.add("diamonds");
  //   } else if (randomSuite === "♥") {
  //     e.classList.add("hearts");
  //   } else if (randomSuite === "♠") {
  //     e.classList.add("spade");
  //   } else {
  //     e.classList.add("clubs");
  //   }
  //   e.innerHTML = randomSuite;
  // });
};
