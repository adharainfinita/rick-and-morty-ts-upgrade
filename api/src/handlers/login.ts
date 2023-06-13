import { RequestHandler } from 'express';
import searchUser from '../controllers/searchUser';

const login: RequestHandler = async (req, res) => {
  try {
    const email = String(req.query.email);
  const password = String(req.query.password);
    if (!email || !password) {
      return res.status(400).json({ error: 'Debes proporcionar el correo electrónico y la contraseña' });
    }

    const user = await searchUser(email, password);
    console.log(user);
    
    if (user && user.email && user.password) {
      return res.status(200).json(user);
    } if (user && !user.email) {
      throw new Error('Contraseña incorrecta');
    } if (user && !user.password) {
      throw new Error('Email incorrecto');
    }
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export default login;