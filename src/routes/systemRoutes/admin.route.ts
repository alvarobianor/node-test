import { Router } from 'express';
import User from '../../models/User';
import mongoose, { Query } from 'mongoose';
// initial of a route

const adminRouter = Router();

interface IUser extends mongoose.Document {
	name: string;
	url?: string;
}

// ROUTES

adminRouter.post('/', async (req, res) => {
	try {
		const { name } = req.body;

		const exists: IUser = (await User.findOne({ name })) as IUser;

		if (exists) {
			return res.status(400).json({ message: 'name already exists' });
		}

		const user = await User.create({ name });
		await user.save();

		return res.status(201).json({ message: 'created', data: user });
	} catch (error) {
		console.log(error);
	}
});

export default adminRouter;
