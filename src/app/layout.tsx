import type { Metadata } from 'next';
import '../styles/globals.css';
import { Poppins } from 'next/font/google';
import { MainLayout } from '@/interfaces/layouts/main_layout';
import { ThemeProvider } from 'next-themes';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: {
		default: 'GitHub Roasting | Analyze Your GitHub Profile',
		template: '%s | GitHub Roasting - Enhance Your GitHub Profile',
	},
	description:
		'Get insightful analysis and feedback on your GitHub profile. Improve your coding portfolio, repositories, and developer presence with AI-powered suggestions.',
	twitter: {
		card: 'summary_large_image',
		title: 'GitHub Roasting | Smart GitHub Profile Analysis',
		description:
			'Enhance your GitHub profile with detailed analysis and actionable improvement suggestions powered by AI.',
	},
	keywords: [
		'GitHub analysis',
		'GitHub profile review',
		'developer portfolio',
		'code repository analysis',
		'GitHub improvements',
		'coding portfolio feedback',
		'repository optimization',
		'GitHub presence',
	],
	robots: 'index, follow',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning>
			<body className={`${poppins.variable} font-sans antialiased`}>
				<ThemeProvider attribute='class'>
					<MainLayout>{children}</MainLayout>
				</ThemeProvider>
			</body>
		</html>
	);
}
