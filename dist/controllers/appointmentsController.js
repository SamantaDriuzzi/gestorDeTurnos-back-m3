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
exports.cancelAppointmentController = exports.newAppointmentController = exports.appointmentByIdController = exports.allAppointmentsController = void 0;
const appointmentsService_1 = require("../services/appointmentsService");
// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
const allAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield (0, appointmentsService_1.allAppointmentsService)();
    res.status(200).json(appointments);
});
exports.allAppointmentsController = allAppointmentsController;
// GET /appointment => Obtener el detalle de un turno específico.
const appointmentByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const appointmaint = yield (0, appointmentsService_1.appointmentByIdService)(parseInt(id));
    res.status(200).json(appointmaint);
});
exports.appointmentByIdController = appointmentByIdController;
// POST /appointment/schedule => Agendar un nuevo turno.
const newAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, time, userId } = req.body;
    try {
        const newAppointment = yield (0, appointmentsService_1.createAppointmentService)({
            date,
            time,
            userId,
        });
        res.status(201).json(newAppointment);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.newAppointmentController = newAppointmentController;
// PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
const cancelAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const cancelledAppointment = yield (0, appointmentsService_1.cancelAppointmentService)(Number(id));
        return res.status(200).json(cancelledAppointment);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.cancelAppointmentController = cancelAppointmentController;
