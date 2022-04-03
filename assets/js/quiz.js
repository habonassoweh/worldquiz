var ul = document.getElementById("ul");
var nextButton = document.getElementById("btnNext");
var quizbox = document.getElementById("questionBox");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");

var app = {
  questions: [
    {
      q: "What is the capital of Canada",
      options: ["Ottawa", "Toronto", "Montreal", "Calgary"],
      answer: 1,
    },
    {
      q: "What is the capital of Senegal",
      options: ["Touba", "Mogadishu", "Dakar", "Thies"],
      answer: 2,
    },
    {
      q: "What is the capital of Nepal",
      options: ["Lalitpur", "Cairo", "Nepal City", "Kathmandu"],
      answer: 4,
    },
    {
      q: "What is the capital of Malta",
      options: ["Birgu", "Malta City", "Valleta", "Sliema"],
      answer: 3,
    },
    {
      q: "What is the capital of Tasmania ",
      options: ["Hobart", "Launceston", "Burnie", "Basin City"],
      answer: 1,
    },
  ],
};
