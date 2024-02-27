import express, { Application } from "express";
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleController";
import { createUsers, getUsers, updateUsers, deleteUsers } from "./controllers/userController";
import { getServices, createServices, updateServices, deleteServices } from "./controllers/serviceController";
import { getAppointments, createAppointments, updateAppointments, deleteAppointments } from "./controllers/appointmentController"


export const app: Application = express();

app.use(express.json());

//roles routes
app.get('/roles', getRoles)
app.post('/roles', createRoles)
app.put('/roles/:id', updateRoles)
app.delete('/roles/:id', deleteRoles)

//user routes
app.get('/user', getUsers)
app.post('user', createUsers)
app.put('/user/:id', updateUsers)
app.delete('/user/:id', deleteUsers)

//service routes

app.get('/services', getServices)
app.post('/services', createServices)
app.put('/services/:id', updateServices)
app.delete('/services/:id', deleteServices)

//appointment routes

app.get('/appointments', getAppointments)
app.post('/appointments', createAppointments)
app.put('/appointments/:id', updateAppointments)
app.delete('/appointments/:id', deleteAppointments)