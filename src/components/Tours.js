import Title from './Title';
import Tour from './Tour';
import { tours } from '../data';

const Tours = () => {
	return (
		<section className='section' id='tours'>
			<Title title='featured' subTitle='tours'></Title>
			<div className='section-center featured-center'>
				{tours.map((tour) => {
					return <Tour key={tour.id} {...tour}></Tour>;
				})}
			</div>
		</section>
	);
};
export default Tours;
