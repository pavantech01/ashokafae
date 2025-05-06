const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('./middleware/error.middleware');
const authRoutes = require('./routes/auth.routes');
const eventRoutes = require('./routes/event.routes');
const paymentRoutes = require('./routes/payment.routes');
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');

const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contact.routes');
const connectDB = require('./config/db.config');



const app = express();

// Middleware
// app.use(cors());
// const allowedOrigins = ['http://ashokafae.onrender.com']; 
const allowedOrigins = ['http://localhost:3000', 'https://ashokafae.onrender.com']; 


app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // if your frontend sends cookies or Authorization headers
}));

app.options('*', cors()); // Handle preflight requests

app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());


// API Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Ashoka fae platform we are glad you ae here'); // You can customize this message
});
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/contact', contactRoutes);


// Global Error Handling Middleware
app.use(errorHandler);

module.exports = app;
