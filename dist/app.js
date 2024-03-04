"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const roleController_1 = require("./controllers/roleController");
const userController_1 = require("./controllers/userController");
const serviceController_1 = require("./controllers/serviceController");
const appointmentController_1 = require("./controllers/appointmentController");
const authController_1 = require("./controllers/authController");
const auth_1 = require("./middlewares/auth");
const isSuperAdmin_1 = require("./middlewares/isSuperAdmin");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
//roles routes
exports.app.get('/api/roles', roleController_1.getRoles);
exports.app.post('/api/roles', roleController_1.createRoles);
exports.app.put('/api/roles/:id', roleController_1.updateRoles);
exports.app.delete('/api/roles/:id', roleController_1.deleteRoles);
//user routes
exports.app.get('/api/users', auth_1.auth, userController_1.getUsers);
exports.app.get("/api/users/profile", auth_1.auth, userController_1.getProfile);
exports.app.put("/api/users/profile", auth_1.auth, userController_1.updateProfile);
exports.app.get("/api/users/:id", auth_1.auth, isSuperAdmin_1.isSuperAdmin, userController_1.getUserById);
exports.app.delete('/api/users/:id', userController_1.deleteUsers);
//service routes
exports.app.get('/api/services', serviceController_1.getServices);
exports.app.post('/api/services', auth_1.auth, isSuperAdmin_1.isSuperAdmin, serviceController_1.createServices);
exports.app.put('/api/services/:id', serviceController_1.updateServices);
exports.app.delete('/api/services/:id', serviceController_1.deleteServices);
//appointment routes
exports.app.get('/api/appointments', auth_1.auth, appointmentController_1.getMyAppointments);
exports.app.post('/api/appointments', auth_1.auth, appointmentController_1.createAppointments);
exports.app.put('/api/appointments', auth_1.auth, appointmentController_1.updateAppointment);
exports.app.get("/api/appointments/:id", auth_1.auth, appointmentController_1.getAnAppointment);
//auth routes
exports.app.post('/api/auth/register', authController_1.registerUser);
exports.app.post('/api/auth/login', authController_1.login);
