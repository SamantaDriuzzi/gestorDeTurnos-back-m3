// id: ID numérico que identifica al par de credenciales.
//
// username:username del usuario que posee las credenciales.
//
// password: password del usuario que posee las credenciales.

export default interface ICredential {
  id: number;
  username: string;
  password: string;
}
