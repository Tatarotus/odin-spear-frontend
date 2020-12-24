import { useState } from 'preact/hooks';

export default function Login() {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');

	function handleLoginForm(e) {
		e.preventDefault();
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
				<input
					id="user"
					onChange={(e) => setUser(e.target.value)}
					class="px-1"
					type="text"
				/>
				<label class="text-white font-bold mt-4" for="password">
					Password:
				</label>
				<input
					id="password"
					onChange={(e) => setPassword(e.target.value)}
					class="px-1"
					type="password"
				/>
				<button class=" w-20 self-end mt-4 bg-white hover:bg-blue text-blue-dark font-semibold hover:text-white hover:bg-gray-400 py-1 border border-blue hover:border-transparent rounded">
					Login!
				</button>
			</form>
		</div>
	);
}
