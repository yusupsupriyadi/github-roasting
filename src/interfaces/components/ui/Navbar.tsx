import Link from 'next/link';

export const Navbar = () => {
	return (
		<nav className='w-full py-3 bg-white border-b border-gray-200'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between'>
					<Link
						href='/'
						className='flex items-center gap-2 hover:opacity-80 transition-opacity'
						aria-label='Beranda CVROASTED'>
						<p className='font-bold text-xl'>
							<span className='text-indigo-600'>CV</span>
							<span className='text-purple-600'>ROASTED</span>
						</p>
					</Link>
					<div className='flex items-center space-x-4'>
						<Link
							href='https://sociabuzz.com/yusup-supriyadi/donate'
							target='_blank'
							rel='noopener noreferrer'
							className='text-gray-600 hover:text-indigo-600 transition-colors'>
							<span className='hidden md:inline'>Support Us</span>
						</Link>
						<div className='hidden md:block text-gray-300'>|</div>
						<Link
							href='https://yusupsupriyadi.com'
							target='_blank'
							rel='noopener noreferrer'
							className='px-4 py-2 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md transition-colors'>
							Creator
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
