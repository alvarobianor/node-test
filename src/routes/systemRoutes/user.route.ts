import { Router } from 'express';
import User from '../../models/User';
import mongoose from 'mongoose';
// initial of a route

interface IUser extends mongoose.Document {
	name: string;
	url?: string;
}

const usersRouter = Router();

// ROUTES

usersRouter.get('/:name', async (req, res) => {
	try {
		const { name } = req.params;

		const user: IUser = (await User.findOne({ name })) as IUser;

		if (!user) {
			return res.status(400).json({ message: `User don't exists` });
		}

		return res.status(200).json({ message: 'Ok', user });
	} catch (error) {
		console.log(error);
	}
});

export default usersRouter;
