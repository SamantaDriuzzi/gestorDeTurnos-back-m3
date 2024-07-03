import { log } from "console";
import { AppDataSource, UserModel } from "../config/data-source";
import { Appointment } from "../entities/Appointment";

const preloadUsers = [
  {
    id: 1,
    name: "samanta",
    email: "samanta@gmail.com",
    birthdate: "1/9/1998",
    nDni: "192837465",
  },
  {
    id: 2,
    name: "samanta2",
    email: "samanta2@gmail.com",
    birthdate: "1/9/1997",
    nDni: "1846538",
  },
];

const preLoadAppointmens = [
  {
    id: 1,
    date: "10/05/24",
    time: "12hs",
    userId: 1,
  },

  {
    id: 2,
    date: "12/12/2024",
    time: "10hs",
    userId: 2,
  },
];

const appointment1 = {
  id: 1,
  date: "22/2/2024",
  time: "15hs",
};

const appoitnment2 = {
  id: 2,
  date: "24/1/2024",
  time: "16hs",
};

export const preLoadData = async () => {
  await AppDataSource.manager.transaction(
    async (transactionalEntityManager) => {
      const usersDB = await UserModel.find();
      if (usersDB.length)
        return console.log("Ya existen usuarios en la base de datos");

      for await (const user of preloadUsers) {
        const newUser = await UserModel.create(user);
        await transactionalEntityManager.save(newUser);
      }

      console.log("Precarga de datos realizada");
    }
  );
};
