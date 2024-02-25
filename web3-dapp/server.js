const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const path = require('path'); // добавляем модуль path

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Serve static files
app.use(express.static('public'));

// Маршрут для главной страницы
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));