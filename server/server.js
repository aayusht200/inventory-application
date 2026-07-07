import express from 'express';
import cors from 'cors';
import { router as productRouter } from './routes/products.route.js';
import { router as userRouter } from './routes/users.route.js';
import { router as categoryRouter } from './routes/category.route.js';
process.loadEnvFile();
const app = express();
const port = process.env.PORT || 3000;
const clientOrigin = process.env.CLIENT_ORIGIN || 'http://localhost:5173';
app.use(express.static('public'));
app.use(express.json());
app.use(
    cors({
        origin: clientOrigin, // Cors setup for api calls
        credentials: true,
    })
);

app.use('/api/products', productRouter); //products route
app.use('/api/users', userRouter); //user route
app.use('/api/category', categoryRouter); //category route
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found',
    });
});
app.listen(port, () => {
    console.log(`Server listing to http://localhost/${port}`);
});
