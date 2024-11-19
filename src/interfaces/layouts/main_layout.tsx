import { Navbar } from '../components/ui/Navbar';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};
