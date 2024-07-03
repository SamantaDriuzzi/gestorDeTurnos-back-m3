import { Request, Response } from "express";
import {
  allAppointmentsService,
  appointmentByIdService,
  cancelAppointmentService,
  createAppointmentService,
} from "../services/appointmentsService";
import { Appointment } from "../entities/Appointment";

// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
export const allAppointmentsController = async (
  req: Request,
  res: Response
) => {
  const appointments: Appointment[] = await allAppointmentsService();
  res.status(200).json(appointments);
};

// GET /appointment => Obtener el detalle de un turno específico.
export const appointmentByIdController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const appointmaint: Appointment = await appointmentByIdService(parseInt(id));
  res.status(200).json(appointmaint);
};

// POST /appointment/schedule => Agendar un nuevo turno.
export const newAppointmentController = async (req: Request, res: Response) => {
  const { date, time, userId } = req.body;
  try {
    const newAppointment = await createAppointmentService({
      date,
      time,
      userId,
    });
    res.status(201).json(newAppointment);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
export const cancelAppointmentController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const cancelledAppointment = await cancelAppointmentService(Number(id));
    return res.status(200).json(cancelledAppointment);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
