"use strict";
// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
//
// GET /appointment => Obtener el detalle de un turno específico.
//
// POST /appointment/schedule => Agendar un nuevo turno.
//
// PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appointmentsController_1 = require("../controllers/appointmentsController");
const appointmentsRouter = express_1.default.Router();
appointmentsRouter.get("/appointments", appointmentsController_1.allAppointmentsController);
appointmentsRouter.get("/appointments/:id", appointmentsController_1.appointmentController);
appointmentsRouter.post("/appointments/schedule", appointmentsController_1.newAppointmentController);
appointmentsRouter.put("/appointments/cancel", appointmentsController_1.cancelAppointmentController);
exports.default = appointmentsRouter;
