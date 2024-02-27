import express, { Application } from "express";
import { createRoles, deleteRoles, getRoles, updateRoles } from "./controllers/roleController";
import { getUser, createUser, updateUser, deleteUser } from "./controllers/userController";
import { getServices, createServices, updateServices, deleteServices } from "./controllers/serviceController";
import { getAppointment, createAppointment, updateAppointment, deleteAppointment } from "./controllers/appointmentController"


export const app: Application = express();

app.use(express.json());

//roles routes
app.get('/roles', getRoles)
app.post('/roles', createRoles)
app.put('/roles/:id', updateRoles)
app.delete('/roles/:id', deleteRoles)

//user routes
app.get('/user', getUser)
app.post('user', createUser)
app.put('/user/:id', updateUser)
app.delete('/user/:id', deleteUser)

//service routes

app.get('/services', getServices)
app.post('/services', createServices)
app.put('/services/:id', updateServices)
app.delete('/services/:id', deleteServices)

//appointment routes

app.get('/appointments', getAppointment)
app.post('/appointments', createAppointment)
app.put('/appointments/:id', updateAppointment)
app.delete('/appointments/:id', deleteAppointment)