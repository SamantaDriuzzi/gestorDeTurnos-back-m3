"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appointmentsController_1 = require("../controllers/appointmentsController");
const appointmentsRouter = express_1.default.Router();
// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
appointmentsRouter.get("/allAppointments", appointmentsController_1.allAppointmentsController);
// GET /appointment => Obtener el detalle de un turno específico.
appointmentsRouter.get("/appointment/:id", appointmentsController_1.appointmentByIdController);
// POST /appointment/schedule => Agendar un nuevo turno.
appointmentsRouter.post("/schedule", appointmentsController_1.newAppointmentController);
// PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
appointmentsRouter.put("/cancel/:id", appointmentsController_1.cancelAppointmentController);
exports.default = appointmentsRouter;
