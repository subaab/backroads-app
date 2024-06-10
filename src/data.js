import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';

export const pageLinks = [
	{ id: 1, href: '#home', text: 'home' },
	{ id: 2, href: '#about', text: 'about' },
	{ id: 3, href: '#services', text: 'services' },
	{ id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
	{ id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
	{ id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
	{ id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
	{
		id: 1,
		icon: 'fas fa-wallet fa-fw',
		title: 'saving money',
		text: 'Lorem ipsum dolor sit amet consec',
	},
	{
		id: 2,
		icon: 'fas fa-tree fa-fw',
		title: 'endless hiking',
		text: 'Lorem ipsum dolor sit amet consec',
	},
	{
		id: 3,
		icon: 'fas fa-socks fa-fw',
		title: 'amazing comfort',
		text: 'Lorem ipsum dolor sit amet consec',
	},
];

export const tours = [
	{
		id: 1,
		image: tour1,
		date: 'august 26th, 2020',
		title: 'Tibet Adventure',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore vo',
		location: 'china',
		duration: 6,
		cost: 2000,
	},
	{
		id: 2,
		image: tour2,
		date: 'august 26th, 2020',
		title: 'Tibet Adventure',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore vo',
		location: 'china',
		duration: 6,
		cost: 2000,
	},
	{
		id: 3,
		image: tour3,
		date: 'august 26th, 2020',
		title: 'Tibet Adventure',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore vo',
		location: 'china',
		duration: 6,
		cost: 2000,
	},
	{
		id: 4,
		image: tour4,
		date: 'august 26th, 2020',
		title: 'Tibet Adventure',
		info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore vo',
		location: 'china',
		duration: 6,
		cost: 2000,
	},
];
