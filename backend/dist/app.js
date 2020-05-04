"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor(appInit) {
        this.app = express();
        this.port = appInit.port;
        this.routes(appInit.controllers);
        this.middlewares(appInit.middleWares);
    }
    routes(controllers) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router);
        });
    }
    middlewares(middleWares) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare);
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map