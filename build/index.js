"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const photos_1 = __importDefault(require("./routes/photos"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// add configuration to environment port
const PORT = (_a = process.env.ENVIRONMENT_PORT) !== null && _a !== void 0 ? _a : 3000;
app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!!');
    res.send('pong');
});
app.use('/api/photos', photos_1.default);
// app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
