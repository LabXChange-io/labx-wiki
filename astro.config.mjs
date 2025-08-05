// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: ' Help Center',
			favicon: '/LXLogo.png', // Path to your favicon file
			components: {
				// Override the default `PageTitle` component.
				PageTitle: './src/components/PageTitle.astro',
				// Override the default `Social icons` component.
				SocialIcons: './src/components/SocialIcons.astro',
			},
			logo: {
				src: '/src/assets/LabXChangeLogo.png',
				alt: 'LabXChange Help Center',
			},
			social: [
				{ icon: 'facebook', label: 'Follow us on FaceBook', href: 'https://www.facebook.com/profile.php?id=61577097410007' },
				{ icon: 'instagram', label: 'Follow us on Instagram', href: 'https://www.instagram.com/labxchange.us' },
				{ icon: 'x.com', label: 'Follow us on X.com', href: 'https://x.com/LabxchangeUs' },
				{ icon: 'linkedin', label: 'Join us on Linked In', href: 'https://www.linkedin.com/company/labxchange-us' },
				{ icon: 'laptop', label: 'Visit our corporate site', href: 'https://www.labxchange.us/' },
			],
			sidebar: [
				{
					label: 'LabXChange',
					collapsed: true,
					items: [
						{ label: 'Help Center Home', slug: '' },
						{ label: 'Open LabXChange Portal', link: 'https://order.labxchange.io/auth', attrs: { target: '_blank' } },
						{ label: 'Logging In', slug: 'logging_in' },
						{ label: 'Your Dashboard', slug: 'dashboard' },
						{ label: 'Your Account', slug: 'account' },
						{ label: 'Contact Us', slug: 'contact' },									
					],
				},
				{
					label: 'Resources',
					collapsed: true,
					items: [
						{ label: 'Resources Help', slug: 'resources' },
						{ label: 'Quick Start Guide', slug: 'resources/quickstart' },
						{ label: 'Ordering Walk Through', slug: 'resources/walkthrough' },
						{ label: 'Acronym List', slug: 'resources/acronyms' },
						{ label: 'Dictionary of Terms', slug: 'resources/dictionary' },
						{ label: 'FAQ', slug: 'resources/faq' },
						{ label: 'Trouble Shooting', slug: 'resources/troubleshooting' },
						{ label: 'Lab News', slug: 'resources/news' },
					],
				},
				{
					label: 'Patients',
					collapsed: true,
					items: [
						{ label: 'Patient Help', slug: 'patients' },
						{ label: 'Patient Search', slug: 'patients/search' },
						{ label: 'Patient Details', slug: 'patients/details' },
						{ label: 'Patient Add/Edit', slug: 'patients/add_edit' },
						{ label: 'Patient Import', slug: 'patients/import' },
						{ label: 'Patient FAQ', slug: 'patients/faq' },
					],
				},
				{
					label: 'Orders',
					collapsed: true,
					items: [
						{ label: 'Orders Help', slug: 'orders' },
						{ label: 'Orders Search', slug: 'orders/search' },
						{ label: 'Orders Details', slug: 'orders/details' },
						{ label: 'Orders Add/Edit', slug: 'orders/add_edit' },
						{ label: 'Printing Orders', slug: 'orders/printoptions' },
						{ label: 'Rapid Test', slug: 'orders/rapidtest' },
						{ label: 'Orders FAQ', slug: 'patients/faq' },						
					],
				},
				{
					label: 'Results',
					collapsed: true,
					items: [
						{ label: 'Results Help', slug: 'results' },
						{ label: 'Results Search', slug: 'results/search' },
						{ label: 'Results Details', slug: 'results/details' },
						{ label: 'Results FAQ', slug: 'patients/faq' },
					],
				},
				{
					label: 'Appointments',
					collapsed: true,
					items: [
						{ label: 'Appointments Help', slug: 'appointments' },
						{ label: 'Appointments Search', slug: 'appointments/search' },
						{ label: 'Appointment Check In', slug: 'appointments/checkin' },
						{ label: 'Appointments Details', slug: 'appointments/details' },
						{ label: 'Appointments Add/Edit', slug: 'appointments/add_edit' },
						{ label: 'Appointments FAQ', slug: 'appointments/faq' },
					],
				},
				{
					label: 'Biometrics',
					collapsed: true,
					items: [
						{ label: 'Biometrics Help', slug: 'biometrics' },
						{ label: 'Biometrics Search', slug: 'biometrics/search' },
						{ label: 'Biometrics Details', slug: 'biometrics/details' },
						{ label: 'Biometrics Add/Edit', slug: 'biometrics/add_edit' },
						{ label: 'Biometrics FAQ', slug: 'biometrics/faq' },
					],
				},
				{
					label: 'Providers Only',
					collapsed: true,
					items: [
						{ label: 'Sign Orders', slug: 'signorders' },
					],
				},
				{
					label: 'Billing Only',
					collapsed: true,
					items: [
						{ label: 'Document Manager', slug: 'documents/documentmanager' },
					],
				},
				{
					label: 'Admin',
					collapsed: true,
					items: [
						{ label: 'Admin Help', slug: 'admin' },
						{ label: 'Organizations', slug: 'admin/organizations' },
						{ label: 'Locations', slug: 'admin/locations' },
						{ label: 'Schedules', slug: 'admin/schedules' },
						{ label: 'Providers', slug: 'admin/providers' },
						{ label: 'Diagnosis Codes', slug: 'admin/diagnosis-codes' },
						{ label: 'Tests', slug: 'admin/tests' },
						{ label: 'Insurances', slug: 'admin/insurances' },
						{ label: 'Medications', slug: 'admin/medications' },
						{ label: 'AOEs', slug: 'admin/aoes' },
						{ label: 'User Management', slug: 'admin/user-management' },
						{ label: 'Notifications', slug: 'admin/notifications' },
						{ label: 'Custom Forms', slug: 'admin/customforms' },
						{ label: 'Banners', slug: 'admin/banners' },
						{ label: 'Admin FAQ', slug: 'admin/faq' },
					],
				},
			],
		}),
	],
});
