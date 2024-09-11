/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = Math.floor(Math.random() * 20);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Marco",
  surname: "Cipolletta",
  age: 25
};

const me2 = structuredClone(me); //mi serve per l' ESERCIZIO 11

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["HTML", "JavaScript", "CSS"];

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("Java");

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

const dice = () => Math.ceil(Math.random() * 6);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

const whoIsBigger = (a, b) => {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return "sono uguali";
  }
};
console.log(" il maggiore è => ", whoIsBigger(7, 4));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = (str) => {
  const arr = str.split(" ");
  return arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
};
console.log('da "ciao come stai" a =>', splitMe("ciao come stai"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = (str, boolean) => {
  if (boolean) {
    const arr = str.split("");
    arr.shift();
    return arr.join("");
  } else {
    const arr = str.split("");
    arr.pop();
    return arr.join("");
  }
};

console.log("il cielo è blu , true =>", deleteOne("il cielo è blu", true));
console.log("il cielo è blu , false =>", deleteOne("il cielo è blu", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = (str) => {
  const arr = str.split("");

  const newArr = arr.filter((str) => isNaN(parseInt(str)));
  return newArr.join("");
};
console.log('Prima è "ciao ho 3 gatti" poi =>', onlyLetters("ciao ho 3 gatti"));
// console.log( parseInt(""));
// console.log( isNaN(parseInt("s")));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = (str) => {
  const atIndex = str.indexOf("@");
  const dotIndex = str.indexOf(".", atIndex);

  return (
    atIndex > 0 /* verifico che ci siano dei caratteri prima della @ */ &&
    dotIndex > atIndex + 1 /*deve esserci un . almeno dopo un carattere dopo la @*/ &&
    dotIndex < str.length - 1 /*il . non deve essere l'ultimo carattere della stringa */
  );
};
console.log("marco@cipo.it è un emali =>", isThisAnEmail("marco@cipo.it"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

// const whatDayIsIt = () => {
//   const date = new Date();
//   return date.getDate();
// };
// console.log(whatDayIsIt());

//sono le 17 di sabato 31 agosto e mi è venuto il flash che avevo sbagliato questo esercizio 😅

const dayOfWeek = ["domenica", "lunedi", "martedì", "mercoledi", "giovedi", "venerdi", "sabato"];

const whatDayIsIt = () => {
  const date = new Date();
  return dayOfWeek[date.getDay()];
};
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (num) => {
  let sum = 0;
  const sumAndNumbers = {
    sum: 0,
    values: []
  };
  for (let i = 0; i < num; i++) {
    const drawnNumber = dice();
    sum += drawnNumber;
    sumAndNumbers.sum = sum;
    sumAndNumbers.values.push(drawnNumber);
  }
  return sumAndNumbers;
};
console.log("tira 4 dadi => ", rollTheDices(4));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = (inputDate) => {
  const pastDate = new Date(inputDate);
  const today = new Date();

  const timeDifference = today - pastDate;

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  return daysDifference;
};

console.log("quanti giorni sono passati dal 23 agosto 2024 =>", howManyDays("08-23-24"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = (myBirthday) => {
  const now = new Date();
  const getMonth = now.getMonth() + 1;
  const getDay = now.getDate();
  const Month = getMonth.toString().padStart(2, "0");
  const Day = getDay.toString().padStart(2, "0");
  const today = `${Month}-${Day}`;
  return today === myBirthday;
};

console.log(isTodayMyBirthday("11-08"));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = (obj, str) => {
  delete obj[str];
  return obj;
};

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = (arr) => {
  let year = -Infinity;
  let film = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Year > year) {
      year = arr[i].Year;
      film = arr[i].Title;
    }
  }
  return film;
};

/* ESERCIZIO 13
Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const countMovies = (arr) => arr.length;

/* ESERCIZIO 14
Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = (arr) => arr.map((obj) => obj.Year);

/* ESERCIZIO 15
Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotti nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = (arr) => arr.filter((obj) => obj.Year < 2000);

/* ESERCIZIO 16
Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = (arr) => {
  const arrOfNumb = arr.map((str) => parseInt(str));
  console.log(arrOfNumb);
  return arrOfNumb.reduce((acc, total) => acc + total, 0);
};

/* ESERCIZIO 17
Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (str) => {
  return movies.filter((obj) => obj.Title.includes(str));
};

/* ESERCIZIO 18
Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
"match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (str) => {
  let films = {
    match: [],
    unmatch: []
  };
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(str)) {
      films.match.push(movies[i]);
    } else {
      films.unmatch.push(movies[i]);
    }
  }
  return films;
};

/* ESERCIZIO 19
Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (n) => {
  if (n < movies.length) {
    movies.splice(n, 1);
    return movies;
  } else {
    alert("il numero inserito non è valido");
  }
};

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const getContainerElement = () => {
  const container = document.getElementById("container");
  return container;
};
const containerElement = getContainerElement();

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const getTdElement = () => {
  const allTd = document.querySelectorAll("td");
  return allTd;
};

const tdElements = getTdElement();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

const printTdContent = () => {
  tdElements.forEach((element) => console.log("Questo è il contenuto di un <td> =>        ", element.innerText));
};
printTdContent();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const addBckgrToA = () => {
  const allA = document.querySelectorAll("a");
  allA.forEach((a) => (a.style.backgroundColor = "#99ff66"));
};

addBckgrToA();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const addLi = () => {
  const ul = document.getElementById("myList");
  const li = document.createElement("li");
  li.innerText = "questo l'ho aggiunto con javascript";
  ul.appendChild(li);
};
addLi();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const emptyUl = () => {
  const ul = document.getElementById("myList");
  ul.innerHTML = "";
};

// scrivere in console "emptyUl()" in modo da vedere il funzionamento in tempo reale

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClassToTr = () => {
  const allTr = document.querySelectorAll("tr");
  allTr.forEach((tag) => tag.classList.add("test"));
};
addClassToTr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
const halfTree = (n) => {
  let star = "*";
  let tree = "";
  for (let i = 0; i < n; i++) {
    tree += star;
    console.log(tree);
  }
};

halfTree(5);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

const tree = (n) => {
  for (let i = 0; i < n; i++) {
    let stars = "";
    let spaces = "";
    let tree = "";

    for (let j = 0; j < n - i - 1; j++) {
      spaces += " ";
    }

    for (let k = 0; k < 2 * i + 1; k++) {
      stars += "*";
    }
    tree = spaces + stars;
    console.log(tree);
  }
};

tree(5);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

const isItPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i < n / 2; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
console.log("97 è un numero primo? ", isItPrime(97));

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

//12)___________________

console.log("Il film più nuovo è => ", newestMovie(movies));

//13)___________________

console.log("Ci sono =>", countMovies(movies), "film");

//14)___________________

const allTheYears = onlyTheYears(movies);
console.log("somma degli anni dei film", allTheYears);

//15)___________________

console.log(onlyInLastMillennium(movies));

//16)___________________

console.log(sumAllTheYears(allTheYears));

//17)___________________

console.log(searchByTitle("Lord"));

//18)___________________

console.log(searchAndDivide("Avengers"));

//19)___________________

console.log(removeIndex(7));
