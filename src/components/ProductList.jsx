import PropTypes from 'prop-types';

export default function ProductList({ title, items, image }) {
	return (
		<div className='flex justify-center items-center p-5'>
			<div className='bg-white shadow-md rounded-lg overflow-hidden p-4 md:p-6 lg:p-8 w-full h-full border-[2px] border-black'>
				<div className='flex items-center justify-center space-x-4 pb-4'>
					{image && (
						<img src={image} alt={title} className='w-20 h-20 rounded-full object-cover'/>
					)}
					<h2 className='text-2xl font-bold text-[#413f91]'> {title} </h2>
				</div>
				<div className='flex flex-wrap gap-2 justify-center text-lg'>
					{items.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</div>
			</div>
		</div>
	)
}

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  image: PropTypes.string
};
