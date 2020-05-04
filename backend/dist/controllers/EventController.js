"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class EventController {
    constructor() {
        this.path = '/event';
        this.router = express.Router();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getSignedUpUsers);
        this.router.post(this.path, this.signUp);
    }
    getSignedUpUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'lista';
        });
    }
    signUp() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'zapisani';
        });
    }
}
exports.default = EventController;
//# sourceMappingURL=EventController.js.map