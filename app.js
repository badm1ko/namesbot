let tg = window.Telegram.WebApp; // Инициализация Telegram WebApp
tg.expand(); // Расширение веб-приложения на весь экран
tg.MainButton.textColor = "#FFFFFF"; // Цвет текста главной кнопки
tg.MainButton.color = "#2cab37"; // Цвет фона главной кнопки

let item = ""; // Переменная для хранения выбранного ID имени

// Функция для обработки нажатий на кнопки
function handleButtonClick(id, text) {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide(); // Скрыть главную кнопку, если она уже видна
    } else {
        tg.MainButton.setText(text); // Устанавливаем текст для главной кнопки
        item = id; // Устанавливаем ID имени для отправки
        tg.MainButton.show(); // Показываем главную кнопку
    }
}

// Привязка событий к кнопкам
document.getElementById("btn1").addEventListener("click", function () {
    handleButtonClick("1", "Вывести информацию по Александру");
});
document.getElementById("btn2").addEventListener("click", function () {
    handleButtonClick("2", "Вывести информацию по Екатерине");
});
document.getElementById("btn3").addEventListener("click", function () {
    handleButtonClick("3", "Вывести информацию по Ивану");
});
document.getElementById("btn4").addEventListener("click", function () {
    handleButtonClick("4", "Вывести информацию по Марии");
});
document.getElementById("btn5").addEventListener("click", function () {
    handleButtonClick("5", "Вывести информацию по Дмитрию");
});
document.getElementById("btn6").addEventListener("click", function () {
    handleButtonClick("6", "Вывести информацию по Анне");
});
document.getElementById("btn7").addEventListener("click", function () {
    handleButtonClick("7", "Вывести информацию по Сергею");
});
document.getElementById("btn8").addEventListener("click", function () {
    handleButtonClick("8", "Вывести информацию по Ольге");
});
document.getElementById("btn9").addEventListener("click", function () {
    handleButtonClick("9", "Вывести информацию по Николаю");
});
document.getElementById("btn10").addEventListener("click", function () {
    handleButtonClick("10", "Вывести информацию по Татьяне");
});

// Обработчик события клика по главной кнопке
Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item); // Отправляем выбранный ID имени в бота
});
