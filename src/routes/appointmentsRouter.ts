import express from "express";
import {
  appointmentByIdController,
  allAppointmentsController,
  newAppointmentController,
  cancelAppointmentController,
} from "../controllers/appointmentsController";

const appointmentsRouter = express.Router();

// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
appointmentsRouter.get("/allAppointments", allAppointmentsController);

// GET /appointment => Obtener el detalle de un turno específico.
appointmentsRouter.get("/appointment/:id", appointmentByIdController);

// POST /appointment/schedule => Agendar un nuevo turno.
appointmentsRouter.post("/schedule", newAppointmentController);

// PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
appointmentsRouter.put("/cancel/:id", cancelAppointmentController);

export default appointmentsRouter;
