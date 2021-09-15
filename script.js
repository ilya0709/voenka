const form = document.querySelector('#answer');
const questionInput = document.querySelector('#autoComplete');
const answerText = document.querySelector('#answer-text');

form.addEventListener('submit', findAnswer);

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function findAnswer(e) {
  e.preventDefault();
  answerText.textContent = '';

  let question = questionInput.value; 
  answerText.textContent = `${getKeyByValue(answersList, answersList[question])} - ${answersList[question]}` || 'Нет ответа';
};

const answersList = {
  "1.  Для чого призначені автомобільні підрозділи батальйонів (рот, взводів) матеріального забезпечення?":
    "- приймання і утримання бригадних, полкових, батальйонних запасів матеріальних засобів - підвезення (відправлення, відпускання) їх частинам і підрозділам - перевезення особового складу, евакуації несправних та непотрібних для бою озброєння, техніки і майна- автомобільні відділення взводів матеріального забезпечення (взводів забезпечення) батальйонів і дивізіонів - також для заправлення техніки пальним.",
};
