import { ICreateUser } from "./Users.interface";

export const GetUsers = async () => {
  const result = await fetch('http://localhost:3001/users');

  return await result.json()
}


export const CreateUserBack = async(newUser: ICreateUser) => {
  const result = await fetch(`http://localhost:3001/users`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          //'X-CSRFToken': csrfToken // Establece el token CSRF en el encabezado de la solicitud
      },
      body: JSON.stringify(newUser),
    //credentials: 'include' // Incluye las cookies en la solicitud
  });

  const data = await result.json();
  return data;
}