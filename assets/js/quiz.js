var ul = document.getElementById("ul");
var ulHigh = document.getElementById("ul-high");
var nextButton = document.getElementById("btnNext");
var quizbox = document.getElementById("questionBox");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var timer = document.getElementById("timer");
var gametime = 75;
var timerId;
timerId = setInterval(countDown, 1000);

function countDown() {
  gametime--;
  timer.textContent = gametime;
  if (gametime <= 0) {
    window.alert("Time is Up.");
    clearInterval(timerId);
  }
}
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
      answer: 3,
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
  index: 0,
  //Load a question using the index
  load: function () {
    if (this.index <= this.questions.length - 1) {
      quizbox.innerHTML = this.index + 1 + ". " + this.questions[this.index].q;
      opt1.innerHTML = this.questions[this.index].options[0];
      opt2.innerHTML = this.questions[this.index].options[1];
      opt3.innerHTML = this.questions[this.index].options[2];
      opt4.innerHTML = this.questions[this.index].options[3];
    } else {
      //Show the end screen
      quizbox.innerHTML = "Quiz Completed!";
      ul.style.display = "none";
      nextButton.style.display = "none";
    }
  },
  next: function () {
    this.index++;
    this.load();
  },
  //Check if answer is correct or not
  check: function (ele) {
    var id = ele.id.split("");
    if (id[id.length - 1] == this.questions[this.index].answer) {
      this.score++;
      ele.className = "correct";
      this.scoreCard();
    } else {
      ele.className = "wrong";
      gametime = gametime - 5;
    }
  },
  //disable options once user selects on option
  preventClick: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "none";
    }
  },
  allowClick: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "auto";
      ul.children[i].className = "";
    }
  },
  score: 0,
  scoreCard: function () {
    scoreCard.innerHTML = this.questions.length + "/" + this.score;
  },
};

window.load = app.load();

function button(ele) {
  app.check(ele);
  app.preventClick();
}

function next() {
  app.next();
  app.allowClick();
}

function endQuiz() {
  clearInterval(timerId);
}
