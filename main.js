// Elements
const progress = document.querySelectorAll(".progress__questionParent");
const inputs = document.querySelectorAll(".content__list__radio");
const quizzBoddy = document.querySelector(".content");
const summaryBtns = document.querySelectorAll(
  ".explanation__vertical__buttons__button"
);
const summaryBoard = document.querySelector(".results");

// Questions
const questions = {
  one: {
    0: "Ile istnieje wysp Jońskich ?",
    1: "7 głownych i wiele pomniejszych",
    2: "4 główne reszta została przydzielona Karaibom",
    3: "Tylko i wyłącznie 8 wysp z czego jedna to Korfu",
    4: "7 głównych reszta została przydzielona Karaibom",
    5: "images/Island-rafiki.png",
    6: "https://fajnepodroze.pl/100-ciekawostek-ze-swiata/",
    7: "Nazwa ta nawiązuje do siedmiu dużych wysp: Korfu, Paxi, Levkada, Itaka, Kefalonia, Zakinthos i Kythira. Chociaż ta ostatnia również zaliczana jest do Wysp Jońskich, to geograficznie i administracyjnie nie podlega temu regionowi.",
  },
  two: {
    0: "Jaki język urzędowy jest w Stanach Zjednoczonych?",
    1: "Angielski (Brytyjski)",
    2: "Angielski (Amerykański)",
    3: "Nie posiadają języka urzędowego ",
    4: "Posiadają więcej niż 1 w tym (Francuski, Hiszpański etc.)",
    5: "images/People talking-bro.png",
    6: "https://fajnepodroze.pl/100-ciekawostek-ze-swiata/",
    7: "Języki urzędowe: Stany Zjednoczone nie mają oficjalnego języka urzędowego na poziomie federalnym, jednakże język angielski jest de facto językiem narodowym.",
  },
  three: {
    0: "Który język ma najwięcej rodzimych użytkowników",
    1: "Angielski (Amerykański)",
    2: "Mandaryński",
    3: "Hindi  ",
    4: "Hiszpański",
    5: "images/Building-cuate.png",
    6: "https://fajnepodroze.pl/100-ciekawostek-ze-swiata/",
    7: " Rodzimi użytkownicy języka: 918 milionów Nierodzimi użytkownicy języka: 199 milionów. Po zsumowaniu rodzimych i nierodzimych użytkowników języka, mandaryński jest drugim najczęściej używanym językiem na świecie. Jeśli jednak weźmie się pod uwagę tylko rodzimych użytkowników, to zajmuje on pierwsze miejsce. ",
  },
  four: {
    0: "Od czego pochodzi nazwa Wysp Kanaryjskich",
    1: "Ptaków",
    2: "Kotów",
    3: "Nie wiadomo",
    4: "Psów",
    5: "images/Island-pana.png",
    6: "https://fajnepodroze.pl/100-ciekawostek-ze-swiata/",
    7: "Co ciekawe na wyspach nie spotkamy kanarków. Skąd więc pochodzi nazwa Wyspy Kanaryjskie? Tak naprawdę to od łacińskiego słowa canis, czyli… pies! Legenda mówi, że jedna z wysp, Gran Canaria, została tak nazwana przez króla Mauretanii, który po zejściu na ląd spotkał właśnie psy.",
  },
  five: {
    0: "Który z tych 4 kraji nie wykorzystuje systemu metrycznego (mm ,cm ,m)",
    1: "Lizbona",
    2: "Markopulos",
    3: "Uganda",
    4: "Liberia",
    5: "images/Circles-bro.png",
    6: "https://fajnepodroze.pl/100-ciekawostek-ze-swiata/",
    7: " Są tylko trzy kraje na świecie, które nie korzystają z systemu metrycznego. Dla uproszczenia większość z ponad 200 krajów na świecie używa systemu metrycznego przy opisywaniu rzeczy takich jak długość czy masa. Jednak wyróżniają się trzy kraje: Liberia, Birma i Stany Zjednoczone.",
  },
  six: {
    0: "Co znajduje się w centrum drogi mlecznej?",
    1: "Gwiazda",
    2: "Meteoryty",
    3: "Czarna Dziura",
    4: "Pustka",
    5: "images/Alien science-bro.png",
    6: "https://paczka-wiedzy.pl/10-niesamowitych-ciekawostek-o-kosmosie/",
    7: "W centrum Drogi Mlecznej znajduje się czarna dziura. Szacuje się, że ma ona masę 4 miliony razy większą od Słońca. Robi wrażenie, jednak, czy w skali wszechświata jest to dużo? Otóż nie. Największa znana czarna dziura ma masę ponad 17 miliardów razy większą od masy Słońca.",
  },
  seven: {
    0: "Gdzie znajduje się Jezioro Asfaltowe?",
    1: "Na Andorze",
    2: "Na Trynidadzie",
    3: "Na Malcie",
    4: "Na Tuwalu",
    5: "images/Sunny day-pana.png",
    6: "https://globalquiz.org/pl/ciekawostki-geologia/",
    7: "Na Trynidadzie. Jezioro Asfaltowe w Trynidadzie, to zdecydowanie jedno z dziwniejszych miejsc na Ziemi. Składa się z mieszaniny wody, bituminów i gazów, w formie półpłynnej emulsji.",
  },
  eight: {
    0: "Jakie zwierzęta zwiastują dobry omen na Kefaloni (Markopoulos)?",
    1: "Węże",
    2: "Jaszczurki",
    3: "Kozy z żółtymi zębami",
    4: "Traszki",
    5: "images/Wishes-bro.png",
    6: "http://prawoslawnikatolicy.pl/kefalonia-doroczny-cud-swieto-bogarodzicy/",
    7: "Otóż, co roku w miejscowości Markopoulos w kościele pod wezwaniem Bogurodzicy Lakouvaras/ Παναγίας της Λαγκουβάρας (ή Λαγκουβάρδας) w dniach od 6 do 15 sierpnia pojawiają się małe węże, które oplatają Cudowny Obraz.",
  },
  nine: {
    0: `"Licho nie śpi". Kim lub czym było licho ?`,
    1: "Potomkiem Południcy",
    2: "Skrzatem",
    3: "Rodzajem Rusałki",
    4: "Demonem",
    5: "images/Moral-bro.png",
    6: "https://www.ofeminin.pl/lifestyle/testy-i-quizy/quiz-jak-dobrze-znasz-slowianskie-wierzenia-sprobuj-zdobyc-wiecej-niz-410/85y9c43",
    7: "Licho – postać z wierzeń dawnych Słowian, zły demon personifikujący nieszczęście, zły los i choroby.",
  },
  ten: {
    0: "Kim była Amaltea, która według mitologi Greckiej wychowywała Zeusa",
    1: "Ptakmie",
    2: "Kozą",
    3: "Łasicą",
    4: "Wilczycą",
    5: "images/Koalas in trees-rafiki.png",
    6: "https://www.olimpus.edu.pl/attachments/Mitologia_Poziom1_2020_klucz.pdf",
    7: "Amalteja – w mitologii greckiej jedna z nimf; opiekunka Zeusa w dzieciństwie. Uchodziła za córkę króla Krety. Opiekowała się Zeusem w czasie jego ukrycia w grocie na Krecie. Według innej wersji była to koza, która karmiła Zeusa, a jej złamany róg miał moc ciągłego napełniania się jedzeniem.",
  },
};

// Variables
let i = 0;
let userPercentage;
let userAnswers = [];
let numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "result",
];
let letters = ["A", "B", "C", "D"];
let wrongAnswer = [];
const answers = [1, 3, 2, 4, 4, 3, 2, 1, 4, 2];
// Functions

const settingQuestions = () => {
  if (numbers[i] == "one") {
    questionField.innerText = questions.one[0];
    label1.innerText = questions.one[1];
    label2.innerText = questions.one[2];
    label3.innerText = questions.one[3];
    label4.innerText = questions.one[4];
    img.src = questions.one[5];
  } else if (numbers[i] == "two") {
    questionField.innerText = questions.two[0];
    label1.innerText = questions.two[1];
    label2.innerText = questions.two[2];
    label3.innerText = questions.two[3];
    label4.innerText = questions.two[4];
    img.src = questions.two[5];
  } else if (numbers[i] == "three") {
    questionField.innerText = questions.three[0];
    label1.innerText = questions.three[1];
    label2.innerText = questions.three[2];
    label3.innerText = questions.three[3];
    label4.innerText = questions.three[4];
    img.src = questions.three[5];
  } else if (numbers[i] == "four") {
    questionField.innerText = questions.four[0];
    label1.innerText = questions.four[1];
    label2.innerText = questions.four[2];
    label3.innerText = questions.four[3];
    label4.innerText = questions.four[4];
    img.src = questions.four[5];
  } else if (numbers[i] == "five") {
    questionField.innerText = questions.five[0];
    label1.innerText = questions.five[1];
    label2.innerText = questions.five[2];
    label3.innerText = questions.five[3];
    label4.innerText = questions.five[4];
    img.src = questions.five[5];
  } else if (numbers[i] == "six") {
    questionField.innerText = questions.six[0];
    label1.innerText = questions.six[1];
    label2.innerText = questions.six[2];
    label3.innerText = questions.six[3];
    label4.innerText = questions.six[4];
    img.src = questions.six[5];
  } else if (numbers[i] == "seven") {
    questionField.innerText = questions.seven[0];
    label1.innerText = questions.seven[1];
    label2.innerText = questions.seven[2];
    label3.innerText = questions.seven[3];
    label4.innerText = questions.seven[4];
    img.src = questions.seven[5];
  } else if (numbers[i] == "eight") {
    questionField.innerText = questions.eight[0];
    label1.innerText = questions.eight[1];
    label2.innerText = questions.eight[2];
    label3.innerText = questions.eight[3];
    label4.innerText = questions.eight[4];
    img.src = questions.eight[5];
  } else if (numbers[i] == "nine") {
    questionField.innerText = questions.nine[0];
    label1.innerText = questions.nine[1];
    label2.innerText = questions.nine[2];
    label3.innerText = questions.nine[3];
    label4.innerText = questions.nine[4];
    img.src = questions.nine[5];
  } else if (numbers[i] == "ten") {
    questionField.innerText = questions.ten[0];
    label1.innerText = questions.ten[1];
    label2.innerText = questions.ten[2];
    label3.innerText = questions.ten[3];
    label4.innerText = questions.ten[4];
    img.src = questions.ten[5];
  } else if (numbers[i] == "result") {
    summaryBoard.classList.add("results__active");
    quizzBoddy.remove();
    countingPercentage();
    showingInformations();
  }
};

const resetingValues = () => {
  if (userAnswers[i] == null) {
    inputs.forEach((input) => {
      input.checked = false;
    });
  } else {
    inputs.forEach((input) => {
      if (+input.value == userAnswers[i]) {
        input.checked = true;
      }
    });
  }
};

const gettingChosedValue = (CODE) => {
  let answered = false;
  let index = i - 1;
  if (CODE == "PREVIOUS") {
    index = i + 1;
  }
  inputs.forEach((input) => {
    if (input.checked == true) {
      userAnswers[index] = +input.value;
      answered = true;
    }
  });

  if (answered == false) {
    userAnswers[index] = null;
  }

  answered = false;
};

const showingPreviousValues = () => {
  inputs.forEach((input) => {
    if (+input.value == userAnswers[i]) {
      input.checked = true;
    }
  });
};

const countingPercentage = () => {
  let count = 0;
  let index = 0;

  answers.forEach((answer) => {
    if (answers[index] === userAnswers[index]) {
      summaryBtns[index].classList.add(
        "explanation__vertical__buttons__button--correct"
      );
      count++;
    } else {
      summaryBtns[index].classList.add(
        "explanation__vertical__buttons__button--wrong"
      );
    }

    index++;
  });
  showResult.innerText = (count * 100) / answers.length + "%";
};

const showingInformations = () => {
  if (
    summaryBtns[0].classList.contains(
      "explanation__vertical__buttons__button--wrong"
    )
  ) {
    userAnswer.style.color = "#bc4141";
  } else if (
    summaryBtns[0].classList.contains(
      "explanation__vertical__buttons__button--correct"
    )
  ) {
    userAnswer.style.color = "#41bc5c";
  }
  correctAnswer.innerText = letters[answers[0] - 1];
  if (userAnswers[0] != null) {
    userAnswer.innerText = letters[userAnswers[0] - 1];
  } else {
    userAnswer.innerText = "Nie udzielono odpowiedzi";
  }
  questionSource.href = questions.one[6];
  questionValue.innerText = questions.one[0];
  questionMeaning.innerText = questions.one[7];

  summaryBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let pressedQuestion = numbers[+btn.innerText - 1];

      if (pressedQuestion == "one") {
        correctAnswer.innerText = letters[answers[+btn.innerText - 1] - 1];
        if (userAnswers[+btn.innerText - 1] != null) {
          userAnswer.innerText = letters[userAnswers[+btn.innerText - 1] - 1];
        } else {
          userAnswer.innerText = "Nie udzielono odpowiedzi";
        }
        questionSource.href = questions.one[6];
        questionValue.innerText = questions.one[0];
        questionMeaning.innerText = questions.one[7];
      } else if (pressedQuestion == "two") {
        correctAnswer.innerText = letters[answers[+btn.innerText - 1] - 1];
        if (userAnswers[+btn.innerText - 1] != null) {
          userAnswer.innerText = letters[userAnswers[+btn.innerText - 1] - 1];
        } else {
          userAnswer.innerText = "Nie udzielono odpowiedzi";
        }
        questionSource.href = questions.two[6];
        questionValue.innerText = questions.two[0];
        questionMeaning.innerText = questions.two[7];
      } else if (pressedQuestion == "three") {
        correctAnswer.innerText = letters[answers[+btn.innerText - 1] - 1];
        if (userAnswers[+btn.innerText - 1] != null) {
          userAnswer.innerText = letters[userAnswers[+btn.innerText - 1] - 1];
        } else {
          userAnswer.innerText = "Nie udzielono odpowiedzi";
        }
        questionSource.href = questions.three[6];
        questionValue.innerText = questions.three[0];
        questionMeaning.innerText = questions.three[7];
      } else if (pressedQuestion == "four") {
        correctAnswer.innerText = letters[answers[+btn.innerText - 1] - 1];
        if (userAnswers[+btn.innerText - 1] != null) {
          userAnswer.innerText = letters[userAnswers[+btn.innerText - 1] - 1];
        } else {
          userAnswer.innerText = "Nie udzielono odpowiedzi";
        }
        questionSource.href = questions.four[6];
        questionValue.innerText = questions.four[0];
        questionMeaning.innerText = questions.four[7];
      } else if (pressedQuestion == "five") {
        correctAnswer.innerText = letters[answers[+btn.innerText - 1] - 1];
        if (userAnswers[+btn.innerText - 1] != null) {
          userAnswer.innerText = letters[userAnswers[+btn.innerText - 1] - 1];
        } else {
          userAnswer.innerText = "Nie udzielono odpowiedzi";
        }
        questionSource.href = questions.five[6];
        questionValue.innerText = questions.five[0];
        questionMeaning.innerText = questions.five[7];
      } else if (pressedQuestion == "six") {
        correctAnswer.innerText = letters[answers[+btn.innerText - 1] - 1];
        if (userAnswers[+btn.innerText - 1] != null) {
          userAnswer.innerText = letters[userAnswers[+btn.innerText - 1] - 1];
        } else {
          userAnswer.innerText = "Nie udzielono odpowiedzi";
        }
        questionSource.href = questions.six[6];
        questionValue.innerText = questions.six[0];
        questionMeaning.innerText = questions.six[7];
      } else if (pressedQuestion == "seven") {
        correctAnswer.innerText = letters[answers[+btn.innerText - 1] - 1];
        if (userAnswers[+btn.innerText - 1] != null) {
          userAnswer.innerText = letters[userAnswers[+btn.innerText - 1] - 1];
        } else {
          userAnswer.innerText = "Nie udzielono odpowiedzi";
        }
        questionSource.href = questions.seven[6];
        questionValue.innerText = questions.seven[0];
        questionMeaning.innerText = questions.seven[7];
      } else if (pressedQuestion == "eight") {
        correctAnswer.innerText = letters[answers[+btn.innerText - 1] - 1];
        if (userAnswers[+btn.innerText - 1] != null) {
          userAnswer.innerText = letters[userAnswers[+btn.innerText - 1] - 1];
        } else {
          userAnswer.innerText = "Nie udzielono odpowiedzi";
        }
        questionSource.href = questions.eight[6];
        questionValue.innerText = questions.eight[0];
        questionMeaning.innerText = questions.eight[7];
      } else if (pressedQuestion == "nine") {
        correctAnswer.innerText = letters[answers[+btn.innerText - 1] - 1];
        if (userAnswers[+btn.innerText - 1] != null) {
          userAnswer.innerText = letters[userAnswers[+btn.innerText - 1] - 1];
        } else {
          userAnswer.innerText = "Nie udzielono odpowiedzi";
        }
        questionSource.href = questions.nine[6];
        questionValue.innerText = questions.nine[0];
        questionMeaning.innerText = questions.nine[7];
      } else if (pressedQuestion == "ten") {
        correctAnswer.innerText = letters[answers[+btn.innerText - 1] - 1];
        if (userAnswers[+btn.innerText - 1] != null) {
          userAnswer.innerText = letters[userAnswers[+btn.innerText - 1] - 1];
        } else {
          userAnswer.innerText = "Nie udzielono odpowiedzi";
        }
        questionSource.href = questions.ten[6];
        questionValue.innerText = questions.ten[0];
        questionMeaning.innerText = questions.ten[7];
      }

      if (
        btn.classList.contains("explanation__vertical__buttons__button--wrong")
      ) {
        userAnswer.style.color = "#bc4141";
      } else if (
        btn.classList.contains(
          "explanation__vertical__buttons__button--correct"
        )
      ) {
        userAnswer.style.color = "#41bc5c";
      }
    });
  });
};

// Listeners

window.addEventListener("DOMContentLoaded", () => {
  settingQuestions();
});

previous.addEventListener("click", () => {
  progress.forEach((point) => {
    if (point.classList.contains(`progress__${numbers[i]}`)) {
      point.classList.remove("progress__questionParent__active");
      console.log("adding class answered");
      point.classList.add("progress__questionParent__answered");
    }
  });

  if (i > 0 && i < 11) {
    i--;
  }

  progress.forEach((point) => {
    if (point.classList.contains(`progress__${numbers[i]}`)) {
      console.log(point);
      point.classList.add("progress__questionParent__active");
    }
  });

  gettingChosedValue("PREVIOUS");
  showingPreviousValues();
  settingQuestions();
});

next.addEventListener("click", () => {
  progress.forEach((point) => {
    if (point.classList.contains(`progress__${numbers[i]}`)) {
      point.classList.remove("progress__questionParent__active");
      point.classList.add("progress__questionParent__answered");
    }
  });

  if (i > -1 && i < 11) {
    i++;
  }

  progress.forEach((point) => {
    if (point.classList.contains(`progress__${numbers[i]}`)) {
      point.classList.add("progress__questionParent__active");
    }
  });

  gettingChosedValue();
  resetingValues();
  settingQuestions();
});
