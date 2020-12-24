import api from '../api';

export default function SignUp({ display }) {
	async function handleSignUpForm(e) {
		e.preventDefault();
		const user = document.getElementById('user').value;
		const password = document.getElementById('password').value;
		const passwordRepeat = document.getElementById('password-repeat').value;

		if (password === passwordRepeat) {
			try {
				await api.post('signup', { username: user, password });
				/* eslint-disable no-alert */
				alert('success!');
				display('login');
				/* eslint-disable brace-style */
			} catch (err) {
				Error(err.message);
			}
		}
	}
	return (
		<div class="w-screen h-screen flex justify-center items-center bg-gray-200">
			<form
				autoComplete="off"
				class="flex flex-col w-4/12 bg-black px-14 py-11"
				onSubmit={handleSignUpForm}
			>
				<label class="text-white font-bold " for="user">
					User:
				</label>
				<input id="user" class="px-1" type="text" />
				<label class="text-white font-bold mt-4" for="password">
					Password:
				</label>
				<input id="password" class="px-1" type="password" />
				<label class="text-white font-bold mt-4" for="password">
					Repeat Password:
				</label>
				<input id="password-repeat" class="px-1" type="password" />
				<button class=" w-20 self-end mt-4 bg-white hover:bg-blue text-blue-dark font-semibold hover:text-white hover:bg-gray-400 py-1 border border-blue hover:border-transparent rounded">
					Login
				</button>
			</form>
		</div>
	);
}
