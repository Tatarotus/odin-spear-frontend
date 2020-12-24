import { useState } from 'preact/hooks';

import Login from './components/Login';
import Dashboard from './components/dashboard';
import SignUp from './components/SignUp';
import './style';

//TODO - Switch between screens - Login => Dashboard => Login

function App() {
	const [display, setDisplay] = useState('');
	function handleDisplay(val) {
		setDisplay(val);
	}
	// switch (display) {
	// 	case 'login':
	// 		return <Login display={handleDisplay} />;
	// 	case 'dashboard':
	// 		return <Dashboard display={handleDisplay} />;
	// 	case 'signup':
	// 		return <SignUp display={handleDisplay} />;
	// 	default:
	// 		return <Login display={handleDisplay} />;
	// }
	return <Dashboard display={handleDisplay} />;
}

export default App;
