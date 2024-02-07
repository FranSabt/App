export class ICreateUser {
  email: string | null;
  username: string;
  password: string;
  first_name: string;
  second_name: string | null;
  last_name: string;
  celphone: string | null;
  is_admin: boolean;

  constructor(email: string | null, username: string, password: string, first_name: string, second_name: string | null, last_name: string, celphone: string | null, is_admin: boolean) {
    
    if (!email || !username || !password || !first_name || !last_name || email === '' || username === '' || password === '' || first_name === '' || last_name === '') {
      throw new Error('Faltan campos necesarios para construir la clase ICreateUser');
    }

    this.email = email ? email : 'No email';
    this.username = username;
    this.password = password;
    this.first_name = first_name;
    this.second_name = second_name ? second_name : 'No segundo nombre';
    this.last_name = last_name;
    this.celphone = celphone ? celphone : 'No n° de celular';
    this.is_admin = is_admin ? is_admin : false;
  }
}
