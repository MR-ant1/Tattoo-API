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
exports.deleteUsers = exports.updateProfile = exports.getProfile = exports.getUserById = exports.getUsers = void 0;
const User_1 = require("../models/User");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const limit = Number(req.query.limit) || 10;
        const page = Number(req.query.page) || 1;
        const skip = (page - 1) * limit;
        if (limit > 25) {
            res.status(401).json({
                success: false,
                message: "you exceed the users limit"
            });
        }
        const users = yield User_1.User.find({
            select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true
            },
            take: limit,
            skip: skip
        });
        if (!users) {
            return res.status(404).json({
                success: false,
                message: "There is no Users!",
            });
        }
        res.status(200).json({
            success: true,
            message: 'Users retrieved succesfully',
            data: users
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Couldnt get User',
            error: error
        });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const user = yield User_1.User.findOneBy({
            id: parseInt(userId)
        });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "user retrieved",
            data: user
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "user cant be retrieved",
            error: error
        });
    }
});
exports.getUserById = getUserById;
const getProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.tokenData.userId;
        if (req.tokenData.userId !== (userId)) {
            res.status(400).json({
                success: false,
                message: "profile couldnt retrieve"
            });
        }
        const user = yield User_1.User.findOneBy({ id: (userId) });
        res.status(200).json({
            success: true,
            message: "Profile retrieved succesfully",
            data: user
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Profile cant be retrieved",
            error: error
        });
    }
});
exports.getProfile = getProfile;
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.tokenData.userId;
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        if (!firstName || !lastName || !email) {
            res.status(400).json({
                success: false,
                message: "first Name, lastName and email are needed"
            });
        }
        const userUpdated = User_1.User.update({ id: userId }, { firstName: firstName,
            lastName: lastName,
            email: email
        });
        res.status(200).json({
            success: true,
            message: "user updated",
            data: userUpdated
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "can't update user",
            error: error
        });
    }
});
exports.updateProfile = updateProfile;
const deleteUsers = (req, res) => {
    try {
        req.params.id;
        res.status(200).json({
            success: true,
            message: "User deleted succesfully"
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt delete User",
            error: error
        });
    }
};
exports.deleteUsers = deleteUsers;
