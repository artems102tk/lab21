const express = require('express');
const app = express();
const port = 3000;

// Middleware для обробки JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Віддаємо статичні файли з папки 'public'
app.use(express.static('public'));

// Маршрут для обчислення квадрата числа
app.post('/calculate-square', (req, res) => {
    const number = req.body.number;
    if (isNaN(number)) {
        res.json({ error: 'Введено не число' });
    } else {
        const square = number * number;
        res.json({ square });
    }
});

app.listen(port, () => {
    console.log(`Сервер запущено на порту ${port}`);
});
