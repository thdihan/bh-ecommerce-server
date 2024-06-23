import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/router';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);

app.use(globalErrorHandler);

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API',
        yourIP: req.ip,
    });
});

app.use('*', notFound);

export default app;
