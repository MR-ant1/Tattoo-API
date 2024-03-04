"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Access denied"
            });
        }
        //comparamos token recibido con la palabra secreta para confirmar la identidad del usuario. la función verify verifica y ademas devuelve los datos del usuario asociado al token
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.tokenData = decoded;
        //mediante next, pasamos en la ruta a la ejecución del siguiente middleware o endpoint
        next();
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be logged",
            error: error
        });
    }
};
exports.auth = auth;
