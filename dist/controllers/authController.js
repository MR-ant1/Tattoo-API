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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.registerUser = void 0;
const User_1 = require("../models/User");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;
        if (password.length < 8 || password.length > 20) {
            return res.status(400).json({
                success: false,
                message: "Password must contain between 6 and 10 characters"
            });
        }
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json({
                success: false,
                message: "format email invalid"
            });
        }
        const passwordEncrypted = bcrypt_1.default.hashSync(password, 5);
        console.log(passwordEncrypted);
        const newUser = yield User_1.User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: passwordEncrypted,
            role: { id: 1 }
        }).save();
        res.status(201).json({
            success: true,
            message: "User registered succesfully",
            data: newUser
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be registered",
            error: error
        });
    }
});
exports.registerUser = registerUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const password = req.body.password;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "email and password are mandatories"
            });
        }
        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Email format is not valid"
            });
        }
        //   |  DE MANERA TEMPORAL SE INCLUYE ANY AL NO PODER DELCARARSE USER EN LA VERIFICACION DE CONTRASEÑA
        const user = yield User_1.User.findOne({
            where: {
                email: email
            },
            relations: {
                role: true
            },
            select: {
                id: true,
                password: true,
                email: true,
                role: {
                    id: true,
                    name: true
                }
            }
        });
        if (!user) {
            res.status(400).json({
                success: false,
                message: "Email or password invalid"
            });
        }
        const isValidPassword = bcrypt_1.default.compareSync(password, user.password);
        if (!isValidPassword) {
            return res.status(400).json({
                success: false,
                message: "Email or password invalid"
            });
        }
        const token = jsonwebtoken_1.default.sign({
            userId: user.id,
            roleName: user.role.name
        }, process.env.JWT_SECRET, {
            expiresIn: "2h"
        });
        res.status(200).json({
            success: true,
            message: "User logged succesfully",
            token: token //MOSTRAMOS EL TOKEN DE MANERA TEMPORAL PARA PODER PROBAR CON ÉL OTRA FUNCIONALIDADES
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be logged",
            error: error
        });
    }
});
exports.login = login;
