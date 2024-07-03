import { AppDataSource, CredentialModel } from "../config/data-source";
import ICredentialsDato from "../dto/user/ICredencialsDato";
import { Credential } from "../entities/Credential";
import ICredential from "../interfaces/ICredential";

let credentials: ICredential[] = [];
let credentialsId: number = 1;

export const credentialsService = async (
  params: ICredentialsDato
): Promise<Credential> => {
  const newCredential: Credential = new Credential();
  newCredential.password = params.password;
  newCredential.username = params.username;
  AppDataSource.manager.save(newCredential);
  return newCredential;
};

export const validateCredentialService = async (
  params: ICredentialsDato
): Promise<Credential> => {
  const { username, password } = params;
  const credentail: Credential | null = await CredentialModel.findOneBy({
    username,
  });
  if (!credentail) {
    throw Error("Credenciales incorrectas");
  }
  if (credentail.password !== password) {
    throw Error("Credenciales incorrectas");
  }
  return credentail;
};
