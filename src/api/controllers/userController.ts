import dotenv from 'dotenv';
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  const { name, email, password, lastName, telefone } = req.body;

  try {
    if (!name || !email || !password || !lastName || !telefone) {
      return res.status(400).json({ error: 'Campos ausentes' });
    }

    const hashed = await bcrypt.hash(password, 10);

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'E-mail já cadastrado.' });
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
        lastName,
        telefone,
      },
    });

    const token = jwt.sign(
      { userId: user.id },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    return res.status(201).json({ user, token });

  } catch (error: any) {
    console.log("====== PRISMA ERROR ======");
    console.error(error);
    console.log("MESSAGE:", error.message);
    console.log("CODE:", error.code);
    console.log("META:", error.meta);
    console.log("=========================");

    return res.status(500).json({
      error: "Erro ao criar usuário",
      message: error.message,
      code: error.code,
      meta: error.meta,
    });
  }
};



export const addAddressToUser = async (req: Request, res: Response): Promise<Response> => {
    const { userId } = req.params;
    const addressData = req.body;

    addressData.numero = parseFloat(addressData.numero)

    try {

        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: { address: true },
        });

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        if (user.address) {
            return res.status(400).json({ error: 'Usuário já possui um endereço' });
        }

        const address = await prisma.address.create({
            data: addressData
        });

        await prisma.user.update({
            where: { id: userId },
            data: {
                address: {
                    connect: { id: address.id } 
                }
            }
        });

        return res.status(201).json({ message: 'Endereço adicionado com sucesso' });

    } catch (error) {
        console.error(error);
        return res.status(400).json({ error: 'Erro ao adicionar endereço' });
    }
};


export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao buscar usuários' });
    }
};

export const loginUser = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(401).json({ error: 'Usuário não encontrado' });
        }

        const passwordCorrect = await bcrypt.compare(password, user.password);

        if (!passwordCorrect) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).json({ message: 'Bem-vindo', token, user });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: 'Erro no login' });
    }
};
