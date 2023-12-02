import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'skynet',
		color: '#5e95e3',
		description:
			"Skynet is an educational Proof-of-Work based Blockchain implementation written from scratch in C++ with minimal third party dependencies. Providing a clean and well structured codebase for students and enthusiastic developers who wish to understand the inner workings of Blockchain at a smaller scale." +
			"\n\n" +
			"Skynet is not a fork of any existing Blockchain implementation, it is a clean implementation written from scratch designed to be as simple as possible, but with all the core features of a real-world Blockchain." +
			"\n\n" +
			"Skynet Core Organization, which I am the leader of, is the entity behind the development and implementation decisions of Skynet Core.",
		shortDescription:
			'An educational blockchain implementation written from scratch in C++.',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Skynet',
		period: {
			from: new Date(2023, 1),
		},
		skills: getSkills('cpp', 'ts', 'tailwind'),
		type: 'Blockchain'
	},
	{
		slug: 'stest',
		color: '#ff3e00',
		description:
			"Stest is an AI Powered Universal Unit Testing Generation Tool. It uses a combination of static analysis and machine learning to generate unit tests for your code.",
		shortDescription:
			'AI Powered Universal Unit Testing Generation Tool',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Svelte,
		name: 'Stest',
		period: {
			from: new Date(2023, 9)
		},
		skills: getSkills('go', 'ts', 'tailwind', 'sass'),
		type: 'Developer Utility',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '2',
				src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '3',
				src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '4',
				src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '5',
				src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			},
			{
				label: '6',
				src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
			}
		]
	}
];

export default MY_PROJECTS;
