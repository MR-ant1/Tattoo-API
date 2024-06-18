import express, { Application } from "express";
import { createRoles, getRoles } from "./controllers/roleController";
import { getUsers, getUserById, getProfile, updateProfile, deleteUserById } from "./controllers/userController";
import { getServices, createServices } from "./controllers/serviceController";
import { createAppointments, updateAppointment, getMyAppointments, getAnAppointment, deleteMyAppointment } from "./controllers/appointmentController"
import { login, registerUser } from "./controllers/authController";
import { auth } from "./middlewares/auth";
import { isSuperAdmin } from "./middlewares/isSuperAdmin";
import cors from "cors"


export const app: Application = express();


app.use(express.json());

const corsOptions = {
    origin: 'https://tu-tattoo-front.vercel.app/',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions))

//roles routes
app.get('/api/roles', auth, isSuperAdmin, getRoles)
app.post('/api/roles', auth, isSuperAdmin, createRoles)


//user routes
app.get('/api/users', auth, isSuperAdmin, getUsers)
app.delete("/api/users/:id", auth, isSuperAdmin, deleteUserById)
app.get("/api/users/profile", auth, getProfile)
app.put("/api/users/profile", auth, updateProfile)
app.get("/api/users/:id", auth, isSuperAdmin, getUserById)


//service routes
app.get('/api/services', getServices)
app.post('/api/services', auth, isSuperAdmin, createServices)

//appointment routes
app.get('/api/appointments', auth, getMyAppointments)
app.post('/api/appointments', auth, createAppointments)
app.put('/api/appointments', auth, updateAppointment)
app.get("/api/appointments/:id", auth, getAnAppointment)
app.delete("/api/appointments/:id", auth, deleteMyAppointment)

//auth routes
app.post('/api/auth/register', registerUser)
app.post('/api/auth/login', login)