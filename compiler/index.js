"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express")); //importing express
var app = express_1.default(); //making instance of app using express
var port = process.env.PORT || 3000; //inilizing port number
//making api end point
app.get("/", function (req, res) {
    res.send('Congratualtion your first Nodejs project working with typescript');
});
//listening our app
app.listen(port, function () {
    console.log("App listen on PORT:" + port);
});
