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
exports.roleSeedDataBase = void 0;
const db_1 = require("../db");
const Role_1 = require("../../models/Role");
const roleSeedDataBase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.AppDataSource.initialize();
        const roleUser = new Role_1.Role();
        roleUser.name = "user";
        yield roleUser.save();
        const roleAdmin = new Role_1.Role();
        roleAdmin.name = "admin";
        yield roleAdmin.save();
        const roleSuperAdmin = new Role_1.Role();
        roleSuperAdmin.name = "super_admin";
        yield roleSuperAdmin.save();
    }
    catch (error) {
        console.log(error);
    }
    finally {
        yield db_1.AppDataSource.destroy();
    }
});
exports.roleSeedDataBase = roleSeedDataBase;
