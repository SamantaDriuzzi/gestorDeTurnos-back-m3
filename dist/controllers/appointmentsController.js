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
exports.cancelAppointmentController = exports.newAppointmentController = exports.appointmentController = exports.allAppointmentsController = void 0;
// controladores para estas rutas:
// GET /appointments => Obtener el listado de todos los turnos de todos los usuarios.
//
// GET /appointment => Obtener el detalle de un turno específico.
//
// POST /appointment/schedule => Agendar un nuevo turno.
//
// PUT /appointment/cancel => Cambiar el estatus de un turno a “cancelled”.
const allAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Todos los turnos listados");
});
exports.allAppointmentsController = allAppointmentsController;
const appointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Detalle del turno");
});
exports.appointmentController = appointmentController;
const newAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("nuevo turno agendado");
});
exports.newAppointmentController = newAppointmentController;
const cancelAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Turno cancelado");
});
exports.cancelAppointmentController = cancelAppointmentController;
