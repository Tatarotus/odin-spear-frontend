import api from '../api';

export default function Login({ display }) {
	async function handleLoginForm(e) {
		e.preventDefault();
		const user = document.getElementById('user').value;
		const password = document.getElementById('password').value;

		try {
			const { data } = await api.post('login', { username: user, password });
			const { accessToken } = data;
			localStorage.setItem('x-access-token', accessToken);
			display('dashboard');
			/* eslint-disable brace-style */
		} catch (err) {
			Error(err);
		}
	}

	function goSignUp() {
		display('signup');
	}

	return (
		<div class="w-screen h-screen flex justify-center items-center bg-gray-200">
			<form
				autoComplete="off"
				class="flex flex-col w-4/12 bg-black px-14 py-11"
				onSubmit={handleLoginForm}
			>
				<label class="text-white font-bold " for="user">
					User:
				</label>
				<input id="user" class="px-1" type="text" />
				<label class="text-white font-bold mt-4" for="password">
					Password:
				</label>
				<input id="password" class="px-1" type="password" />
				<u onClick={goSignUp} class="text-white mt-2 self-end cursor-pointer">
					Register an user here
				</u>
				<button class=" w-20 self-end mt-4 bg-white hover:bg-blue text-blue-dark font-semibold hover:text-white hover:bg-gray-400 py-1 border border-blue hover:border-transparent rounded">
					Login
				</button>
			</form>
		</div>
	);
}
