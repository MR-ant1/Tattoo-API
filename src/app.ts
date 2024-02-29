import express, { Application } from "express";
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleController";
import { createUsers, getUsers, updateUsers, deleteUsers, getUserById } from "./controllers/userController";
import { getServices, createServices, updateServices, deleteServices } from "./controllers/serviceController";
import { getAppointments, createAppointments, updateAppointments, deleteAppointments } from "./controllers/appointmentController"
import { login, registerUser } from "./controllers/authController";
import { auth } from "./middlewares/auth";


export const app: Application = express();

app.use(express.json());

//roles routes
app.get('/api/roles', getRoles)
app.post('/api/roles', createRoles)
app.put('/api/roles/:id', updateRoles)
app.delete('/api/roles/:id', deleteRoles)

//user routes
app.get('/api/users', getUsers)
app.get("/api/users/:id", getUserById)
app.post('api/users', createUsers)
app.put('/api/users/:id', updateUsers)
app.delete('/api/users/:id', deleteUsers)

//service routes

app.get('/api/services', getServices)
app.post('/api/services', createServices)
app.put('/api/services/:id', updateServices)
app.delete('/api/services/:id', deleteServices)

//appointment routes

app.get('/api/appointments', getAppointments)
app.post('/api/appointments', createAppointments)
app.put('/api/appointments/:id', updateAppointments)
app.delete('/api/appointments/:id', deleteAppointments)

//auth routes
app.post('/api/auth/register', registerUser) 
app.post('/api/auth/login', auth, login)