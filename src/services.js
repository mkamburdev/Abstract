import account from './assets/images/account.png'
import auth from './assets/images/auth.png'
import billing from './assets/images/billing.png'
import comment from './assets/images/comment.png'
import organizations from './assets/images/organizations.png'
import versions from './assets/images/versions.png'

const services = [
	{
		id: 0,
		title: 'Using Abstract',
		body: 'Abstract lets you manage, version, and document your designs in one place.',
		img: versions
	},
	{
		id: 1,
		title: 'Manage your account',
		body: 'Configure your account settings, such as your email, profile details, and password.',
		img: account
	},
	{
		id: 2,
		title: 'Manage organizations, teams, and projects',
		body: 'Use Abstract organizations, teams, and projects to organize your people and your work.',
		img: organizations
	},
	{
		id: 3,
		title: 'Manage billing',
		body: 'Change subscriptions and payment details.',
		img: billing
	},
	{
		id: 4,
		title: 'Authenticate to Abstract',
		body: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.',
		img: auth
	},
	{
		id: 5,
		title: 'Abstract support',
		body: 'Get in touch with a human.',
		img: comment
	}
]

export default services
