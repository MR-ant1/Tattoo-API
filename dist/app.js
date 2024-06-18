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
const cors_1 = __importDefault(require("cors"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
//roles routes
exports.app.get('/api/roles', auth_1.auth, isSuperAdmin_1.isSuperAdmin, roleController_1.getRoles);
exports.app.post('/api/roles', auth_1.auth, isSuperAdmin_1.isSuperAdmin, roleController_1.createRoles);
//user routes
exports.app.get('/api/users', auth_1.auth, isSuperAdmin_1.isSuperAdmin, userController_1.getUsers);
exports.app.delete("/api/users/:id", auth_1.auth, isSuperAdmin_1.isSuperAdmin, userController_1.deleteUserById);
exports.app.get("/api/users/profile", auth_1.auth, userController_1.getProfile);
exports.app.put("/api/users/profile", auth_1.auth, userController_1.updateProfile);
exports.app.get("/api/users/:id", auth_1.auth, isSuperAdmin_1.isSuperAdmin, userController_1.getUserById);
//service routes
exports.app.get('/api/services', serviceController_1.getServices);
exports.app.post('/api/services', auth_1.auth, isSuperAdmin_1.isSuperAdmin, serviceController_1.createServices);
//appointment routes
exports.app.get('/api/appointments', auth_1.auth, appointmentController_1.getMyAppointments);
exports.app.post('/api/appointments', auth_1.auth, appointmentController_1.createAppointments);
exports.app.put('/api/appointments', auth_1.auth, appointmentController_1.updateAppointment);
exports.app.get("/api/appointments/:id", auth_1.auth, appointmentController_1.getAnAppointment);
exports.app.delete("/api/appointments/:id", auth_1.auth, appointmentController_1.deleteMyAppointment);
//auth routes
exports.app.post('/api/auth/register', authController_1.registerUser);
exports.app.post('/api/auth/login', authController_1.login);
