import express, { Application } from "express";
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleController";
import { getUsers, deleteUsers, getUserById, getProfile, updateProfile } from "./controllers/userController";
import { getServices, createServices, updateServices, deleteServices } from "./controllers/serviceController";
import { getAppointments, createAppointments, deleteAppointments, updateAppointment } from "./controllers/appointmentController"
import { login, registerUser } from "./controllers/authController";
import { auth } from "./middlewares/auth";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";


export const app: Application = express();

app.use(express.json());

//roles routes
app.get('/api/roles', getRoles)
app.post('/api/roles', createRoles)
app.put('/api/roles/:id', updateRoles)
app.delete('/api/roles/:id', deleteRoles)

//user routes
app.get('/api/users', auth, isSuperAdmin, getUsers)
app.get("/api/users/profile", auth, getProfile)
app.get("/api/users/:id", auth, isSuperAdmin, getUserById)
app.post('api/users', auth, isSuperAdmin)
app.put("/api/users/profile", auth, updateProfile)
app.delete('/api/users/:id', deleteUsers)

//service routes
app.get('/api/services', getServices)
app.post('/api/services', auth, isSuperAdmin, createServices)
app.put('/api/services/:id', updateServices)
app.delete('/api/services/:id', deleteServices)

//appointment routes
app.get('/api/appointments', getAppointments)
app.post('/api/appointments', auth, createAppointments)
app.put('/api/appointments/', auth, updateAppointment)
app.delete('/api/appointments/:id', deleteAppointments)

//auth routes
app.post('/api/auth/register', registerUser)
app.post('/api/auth/login', login)