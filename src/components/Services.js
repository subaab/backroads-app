import Service from './Service';
import Title from './Title';
import { services } from '../data';

const Services = () => {
	return (
		<section className='section services' id='services'>
			<Title title='our' subTitle='services'></Title>
			<div className='section-center services-center'>
				{services.map((service) => {
					return <Service key={service.id} {...service}></Service>;
				})}
			</div>
		</section>
	);
};
export default Services;
