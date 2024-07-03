"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentService = exports.appointmentByIdService = exports.allAppointmentsService = exports.createAppointmentService = void 0;
const data_source_1 = require("../config/data-source");
let appointments = [];
// Implementar una función que pueda crear un nuevo turno,
// siempre guardando, además, el ID del usuario que ha creado dicho turno.
//  NO PUEDE HABER UN TURNO SIN ID DE USUARIO.
const createAppointmentService = (appointmentData) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = appointmentData;
    const user = yield data_source_1.UserModel.findOneBy({ id: userId });
    if (!user) {
        throw new Error("User not found");
    }
    const newAppointment = yield data_source_1.AppointmentModel.create(appointmentData);
    newAppointment.user = user;
    yield data_source_1.AppointmentModel.save(newAppointment);
    return newAppointment;
});
exports.createAppointmentService = createAppointmentService;
// Implementar una función que pueda retornar el arreglo completo de turnos.
const allAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield data_source_1.AppointmentModel.find();
    return appointments;
});
exports.allAppointmentsService = allAppointmentsService;
// Implementar una función que pueda obtener el detalle de un turno por ID.
const appointmentByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield data_source_1.AppointmentModel.findOneBy({ id });
    if (appointment) {
        return appointment;
    }
    else {
        throw Error("Appointment not found");
    }
});
exports.appointmentByIdService = appointmentByIdService;
// Implementar una función que reciba el id de un turno específico
// y una vez identificado el turno correspondiente, cambiar su estado a “cancelled”.
const cancelAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointment = yield (0, exports.appointmentByIdService)(id);
        appointment.status = "cancelled";
        return yield data_source_1.AppointmentModel.save(appointment);
    }
    catch (error) {
        throw new Error("Error cancelling appointment");
    }
});
exports.cancelAppointmentService = cancelAppointmentService;
