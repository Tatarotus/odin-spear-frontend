import './styles';

import officialIcon from '../../assets/icons/navbar/official.svg';
import manualIcon from '../../assets/icons/navbar/manual.svg';
import bankIcon from '../../assets/icons/navbar/bank.svg';
import logoutIcon from '../../assets/icons/navbar/logout.svg';

export default function Dashboard() {
	return (
		<div>
			<nav class="navbar">
				<ul class="navbar-nav">
					<li class="nav-item">
						<img class="nav-link" src={officialIcon} />
						<u class="link-text">Official</u>
					</li>
					<li class="nav-item">
						<img class="nav-link" src={manualIcon} />
						<u class="link-text">Manual</u>
					</li>
					<li class="nav-item">
						<img class="nav-link" src={bankIcon} />
						<u class="link-text">Bank</u>
					</li>
					<li class="nav-item">
						<img class="nav-link" src={logoutIcon} />
						<u class="link-text">Bank</u>
					</li>
				</ul>
			</nav>
			<main>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat
				euismod accumsan. Donec ut nisi vel neque venenatis venenatis. Sed quis nunc
				lacinia nisl gravida ultricies. Nam ac est ullamcorper, fringilla ex a,
				placerat neque. Nullam nec mauris odio. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Nunc massa lectus, tempor sed ullamcorper at,
				aliquam ut diam. Vivamus non ex laoreet, gravida tortor fringilla, placerat
				felis. Donec vitae elementum justo. Fusce vel nulla porttitor, tempor nulla
				ac, vestibulum enim. Suspendisse pretium fringilla nunc sed aliquet.
				Pellentesque eu leo malesuada, porta ex in, efficitur lacus. In hac
				habitasse platea dictumst. Quisque justo massa, facilisis at viverra id,
				suscipit at nunc. Nullam eget ullamcorper magna. Proin id aliquet quam. Sed
				volutpat justo arcu, sed porta ipsum ornare in. Ut nec nisl ipsum. Duis
				iaculis posuere scelerisque. Donec velit elit, finibus porta vulputate id,
				dignissim ut sapien. Sed et nisl ultrices, eleifend nulla et, pellentesque
				augue. Duis lacinia metus libero, lobortis efficitur risus sagittis ut.
				Phasellus non lacus nibh. Quisque pretium tristique enim ac consequat. Donec
				consequat arcu a ligula mattis, et tempor felis laoreet. Mauris eget ipsum
				ac quam efficitur varius eu sed turpis. Fusce quis commodo odio. Proin
				sollicitudin laoreet semper. Etiam ut lectus eget dolor dapibus suscipit.
				Aliquam at porta erat, ut dictum urna. Donec rhoncus urna vel accumsan
				sagittis. Sed a laoreet massa, ut facilisis purus. Duis feugiat nisi at enim
				viverra, ut faucibus magna cursus. Suspendisse ac arcu at felis interdum
				pellentesque et eu magna. Integer volutpat dui non mi sagittis pretium.
				Aliquam accumsan metus et lorem fringilla, sed consequat sapien iaculis.
				Maecenas mollis, tellus nec commodo cursus, ligula libero blandit augue, sit
				amet aliquet lacus orci quis velit. Sed auctor augue ac neque luctus
				elementum. Sed laoreet dui ex, a bibendum ante porta eu. Curabitur et leo
				posuere, feugiat neque quis, euismod enim. Suspendisse fringilla viverra
				mollis. Nam efficitur lacus vitae arcu rutrum, a ultrices urna laoreet.
				Vestibulum nec lorem nulla. Nulla facilisi. Cras dolor enim, tempor et metus
				eget, laoreet mattis ante. In vitae volutpat odio, non rutrum lorem.
				Curabitur a odio quis purus egestas pretium. Mauris placerat pellentesque
				risus et mattis. Cras et mollis urna. Phasellus elementum massa purus, et
				imperdiet lorem ullamcorper semper. Donec mollis sit amet augue in sagittis.
				Mauris facilisis iaculis nunc at luctus. Aliquam tempus nec leo ac maximus.
				Duis et metus vitae erat volutpat dignissim a et sem. In ex tortor,
				pellentesque non arcu et, hendrerit vulputate orci. Sed est augue, porta vel
				ante sed, commodo fringilla dolor.
			</main>
		</div>
	);
}
