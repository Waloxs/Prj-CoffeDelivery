import express from 'express';
import { createUser, getUsers, loginUser, addAddressToUser } from '../controllers/userController';

const router = express.Router();

router.use(express.json());

router.post('/users', async (req, res) => {
    try {
        await createUser(req, res); 
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor' });
    }
});

router.get('/users', getUsers);
router.post('/login', loginUser);

router.post('/users/:userId/adress', async(req, res) => {
    try {
        await addAddressToUser(req, res); 
    } catch (error) {
        res.status(500).json({ error: 'Erro no servidor' });
    }
});


export default router;
