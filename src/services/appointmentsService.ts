import { AppointmentModel, UserModel } from "../config/data-source";
import AppointmentDto from "../dto/appointments/AppointmentDto";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
import IAppointment from "../interfaces/IAppointment";

let appointments: IAppointment[] = [];

// Implementar una función que pueda crear un nuevo turno,
// siempre guardando, además, el ID del usuario que ha creado dicho turno.
//  NO PUEDE HABER UN TURNO SIN ID DE USUARIO.

export const createAppointmentService = async (
  appointmentData: AppointmentDto
): Promise<Appointment> => {
  const { userId } = appointmentData;

  const user: User | null = await UserModel.findOneBy({ id: userId });

  if (!user) {
    throw new Error("User not found");
  }

  const newAppointment = await AppointmentModel.create(appointmentData);
  newAppointment.user = user;

  await AppointmentModel.save(newAppointment);
  return newAppointment;
};

// Implementar una función que pueda retornar el arreglo completo de turnos.
export const allAppointmentsService = async (): Promise<Appointment[]> => {
  const appointments = await AppointmentModel.find();
  return appointments;
};

// Implementar una función que pueda obtener el detalle de un turno por ID.
export const appointmentByIdService = async (
  id: number
): Promise<Appointment> => {
  const appointment = await AppointmentModel.findOneBy({ id });
  if (appointment) {
    return appointment;
  } else {
    throw Error("Appointment not found");
  }
};

// Implementar una función que reciba el id de un turno específico
// y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.
export const cancelAppointmentService = async (
  id: number
): Promise<Appointment> => {
  try {
    const appointment = await appointmentByIdService(id);

    appointment.status = "cancelled";

    return await AppointmentModel.save(appointment);
  } catch (error) {
    throw new Error("Error cancelling appointment");
  }
};
