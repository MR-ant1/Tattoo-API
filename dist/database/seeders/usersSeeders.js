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
exports.userSeedDataBase = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const faker_1 = require("@faker-js/faker");
const db_1 = require("../db");
const User_1 = require("../../models/User");
const Role_1 = require("../../models/Role");
const generateFakeUser = () => {
    const userFaker = new User_1.User();
    userFaker.firstName = faker_1.faker.person.firstName();
    userFaker.lastName = faker_1.faker.person.lastName();
    userFaker.email = faker_1.faker.internet.email();
    userFaker.password = bcrypt_1.default.hashSync("aA123456", 5);
    userFaker.role = new Role_1.Role();
    userFaker.role.id = 1;
    return userFaker;
};
const userSeedDataBase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.AppDataSource.initialize();
        const userAdmin = new User_1.User();
        userAdmin.firstName = "admin";
        userAdmin.lastName = "user";
        userAdmin.email = "admin@admin.com";
        userAdmin.password = bcrypt_1.default.hashSync("aA123456", 5);
        userAdmin.role = new Role_1.Role();
        userAdmin.role.id = 2;
        yield userAdmin.save();
        const userSuperAdmin = new User_1.User();
        userSuperAdmin.firstName = "super_admin";
        userSuperAdmin.lastName = "super_admin";
        userSuperAdmin.email = "superadmin@superadmin.com";
        userSuperAdmin.password = bcrypt_1.default.hashSync("aA123456", 5);
        userSuperAdmin.role = new Role_1.Role();
        userSuperAdmin.role.id = 3;
        yield userSuperAdmin.save();
        const fakeUsers = Array.from({ length: 16 }, generateFakeUser);
        yield User_1.User.save(fakeUsers);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        yield db_1.AppDataSource.destroy();
    }
});
exports.userSeedDataBase = userSeedDataBase;
