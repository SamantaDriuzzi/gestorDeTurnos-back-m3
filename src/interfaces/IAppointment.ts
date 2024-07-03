export default interface IAppointment {
  id: number;
  date: Date;
  time: string;
  userId: number;
  status: "active" | "cancelled";
}
