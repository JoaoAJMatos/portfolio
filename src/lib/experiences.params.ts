import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'hackathon-winner',
		company: 'Geekathon 2023',
		description: "Me and my team won the prize for audience favorite at the 2023's Geekathon, with our project, Stest.",
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Leiria, Portugal',
		period: { from: new Date(2023, 11, 19), to: new Date(2023, 11, 22) },
		skills: getSkills('python'),
		name: 'Hackathon Winner',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'programming-content-writer',
		company: 'Self-employed',
		description: "This year I started writing programming content for my LinkedIn where I share my journey as a developer, as well as tutorials and guides on how to use certain technologies, including my own libraries and services.",
		contract: ContractType.Freelance,
		type: 'Blog',
		location: 'Home',
		period: { from: new Date(2023, 5, 19) },
		skills: getSkills(''),
		name: 'Programming Content Writer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'co-founder',
		company: 'Avantage',
		description: 'I am the co-founder of Avantage, a startup aiming to streamline HR processes for small and medium sized businesses using AI and NLP.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2023, 5, 1) },
		skills: getSkills('ts', 'js'),
		name: 'Startup Cofounder',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'head-of-development',
		company: 'Skynet Core',
		description: 'I am the head of development of Skynet Core, an open-source blockchain development organization in charge of the development decisions of the Skynet Blockchain.',
		contract: ContractType.SelfEmployed,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2023, 1, 1) },
		skills: getSkills('cpp', 'c', 'go'),
		name: 'Head of Development',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Since 2023, I have been working as a freelance software developer, developing custom software solutions for clients.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2023, 0, 1)},
		skills: getSkills('python', 'cpp', 'c', 'go', 'js'),
		name: 'Freelancer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'internship',
		company: 'Techframe SA',
		description: 'I performed studies on how to implement realistic procedural generated game worlds using noise functions, and helped develop a fully functioning newtonian physics system for in-game interactions.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Abrantes, Portugal',
		period: { from: new Date(2022, 1, 1), to: new Date(2022, 3, 30) },
		skills: getSkills('cpp', 'python'),
		name: 'Software Developer Intern',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
	{
		slug: 'open-sourcer',
		company: 'Self-employed',
		description: 'I have been an active member of the open source community for many years. My projects and the countless lines of documentation and articles I have written have helped many developers grasp complex concepts.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2020, 6, 19), to: new Date() },
		skills: getSkills('js', 'cpp', 'csharp', 'python', 'go'),
		name: 'Open Source Developer',
		color: '#ffffff',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
