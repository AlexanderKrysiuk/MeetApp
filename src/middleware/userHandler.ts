import { getUser, getUserRole } from './apiHandler';

export const getUserDetails = async () => {
	const token = localStorage.getItem('token');
	if (token) {
		const response = await getUser(token);
		if (response && response.ok) {
			return await response.json();
		} else {
			//throw new Error("Couldn't get user's meetings.");
			console.error("Couldn't get user's details.");
		}
	} else {
		//throw new Error('You are not authorized!');
		console.error('You are not authorized!');
	}
};

export const getRole = async () => {
	const token = localStorage.getItem('token');
	if (token) {
		const response = await getUserRole(token);
		if (response && response.ok) {
			return await response.text();
		} else {
			//throw new Error("Couldn't access user's role.");
			console.error("Couldn't access user's role.");
		}
	} else {
		//throw new Error('You are not authorized!');
		console.error('You are not authorized!');
	}
};