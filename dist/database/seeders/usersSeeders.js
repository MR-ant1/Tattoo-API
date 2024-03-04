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
const db_1 = require("../db");
const User_1 = require("../../models/User");
const userSeedDataBase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.AppDataSource.initialize();
        const userFirstName = new User_1.User();
        userFirstName.firstName = "José";
        yield userFirstName.save();
        const userLastName = new User_1.User();
        userLastName.lastName = "martinez";
        yield userLastName.save();
        const userEmail = new User_1.User();
        userEmail.email = "email";
        yield userEmail.save();
        const userPassword = new User_1.User();
        userPassword.password = "password";
        yield userPassword.save();
    }
    catch (error) {
        console.log(error);
    }
    finally {
        yield db_1.AppDataSource.destroy();
    }
});
userSeedDataBase();
