"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var typeorm_1 = require("typeorm");
var user_routes_1 = __importDefault(require("./routes/user.routes"));
var app = express_1.default();
typeorm_1.createConnection();
//middlewares
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
//routes
app.use(user_routes_1.default);
app.listen(3000);
console.log('Server on port', 3000);
