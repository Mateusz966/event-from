import App from './app'
import * as bodyParser from 'body-parser'
import EventController from './controllers/Event.controller';

export const app = new App({
    port: 8000,
    controllers: [
        new EventController(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
    ]
})

app.listen();
