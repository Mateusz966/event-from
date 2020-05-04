"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const bodyParser = require("body-parser");
const EventController_1 = require("controllers/EventController");
exports.app = new app_1.default({
    port: 8000,
    controllers: [
        new EventController_1.default(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
    ]
});
exports.app.listen();
//# sourceMappingURL=server.js.map