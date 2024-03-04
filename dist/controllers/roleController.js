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
exports.deleteRoles = exports.updateRoles = exports.createRoles = exports.getRoles = void 0;
const Role_1 = require("../models/Role");
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield Role_1.Role.find({
            select: {
                id: true,
                name: true
            }
        });
        res.status(200).json({
            success: true,
            message: 'Roles retrieved succesfully',
            data: roles
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "can't retrieve roles",
            error: error
        });
    }
});
exports.getRoles = getRoles;
const createRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.body.name;
        if (name.length > 40) {
            return res.status(400).json({
                success: false,
                message: "Role name must be under 40 characters"
            });
        }
        const newRole = yield Role_1.Role.create({
            name: name
        }).save();
        res.status(200).json({
            success: true,
            message: 'Roles Created succesfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "can't create roles",
            error: error
        });
    }
});
exports.createRoles = createRoles;
const updateRoles = (req, res) => {
    try {
        req.params.id;
        console.log(req.params.id);
        res.status(200).json({
            success: true,
            message: 'roles Updated succesfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "can't update roles",
            error: error
        });
    }
};
exports.updateRoles = updateRoles;
const deleteRoles = (req, res) => {
    try {
        req.params.id;
        console.log(req.params.id);
        res.status(200).json({
            success: true,
            message: 'roles deleted succesfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "can't delete roles",
            error: error
        });
    }
};
exports.deleteRoles = deleteRoles;
