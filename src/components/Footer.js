import { pageLinks, socialLinks } from '../data';
import SocialLink from './SocialLink';
import PageLink from './PageLink';

const Footer = () => {
	return (
		<footer className='section footer'>
			<ul className='footer-links'>
				{pageLinks.map((link) => {
					return (
						<PageLink
							key={link.id}
							{...link}
							itemClass='footer-link'
						></PageLink>
					);
				})}
			</ul>

			<ul className='footer-icons'>
				{socialLinks.map((link) => {
					return (
						<SocialLink
							key={link.id}
							{...link}
							itemClass='footer-icon'
						></SocialLink>
					);
				})}
			</ul>

			<p className='copyright'>
				copyright &copy; Backroads travel tours company
				<span id='date'>{new Date().getFullYear()}</span> all rights reserved
			</p>
		</footer>
	);
};
export default Footer;
