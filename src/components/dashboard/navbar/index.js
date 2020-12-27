import './styles';

import logo from '../../../assets/icons/spear.svg';

import officialIcon from '../../../assets/icons/navbar/official.svg';
import manualIcon from '../../../assets/icons/navbar/manual.svg';
import bankIcon from '../../../assets/icons/navbar/bank.svg';
import logoutIcon from '../../../assets/icons/navbar/logout.svg';

export default function Dashboard() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<img src={logo} />
						<span>Gungnir</span>
					</li>
					<li>
						<img src={officialIcon} />
						<span>Official</span>
					</li>
					<li>
						<img src={manualIcon} />
						<span>Manual</span>
					</li>
					<li>
						<img src={bankIcon} />
						<span>Bank</span>
					</li>
					<li>
						<img src={logoutIcon} />
						<span>Logout</span>
					</li>
				</ul>
			</nav>
		</div>
	);
}
