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
		links: [{ to: 'https://github.com/JoaoAJMatos/skynet', label: 'GitHub' }],
		logo: Assets.Skynet,
		name: 'Skynet',
		period: {
			from: new Date(2023, 1),
		},
		skills: getSkills('cpp', 'go', 'c'),
		type: 'Blockchain'
	},
	{
		slug: 'stest',
		color: '#0af5f5',
		description:
			"Stest is an AI Powered Universal Unit Testing Generation Tool. It uses a combination of static analysis and machine learning to generate unit tests for your code.",
		shortDescription:
			'AI Powered Universal Unit Testing Generation Tool',
		links: [{ to: 'https://github.com/HSTB-Org/Stest-Core', label: 'GitHub' }],
		logo: Assets.Stest,
		name: 'Stest',
		period: {
			from: new Date(2023, 9)
		},
		skills: getSkills('go', 'ts', 'tailwind', 'sass'),
		type: 'Developer Utility',
	},
	{
		slug: 'protoip',
		color: '#32a852',
		description: "ProtoIP is an open source alternative to ProtocolSI, offering a simple and up-to-date interface for introducing students to network programming and cryptography essentials in C#. Provides protocol definitions and a high level boilerplate codebase for school projects.",
		shortDescription:
			'Network protocol definitions and boilerplate codebase for introducing students to Network Programming.',
		links: [{ to: 'https://github.com/JoaoAJMatos/ProtoIP', label: 'GitHub' }],
		logo: Assets.ProtoIP,
		name: 'ProtoIP',
		period: {
			from: new Date(2023, 1),
			to: new Date(2023, 6)
		},
		skills: getSkills('csharp'),
		type: 'Software Library'
	},
	{
		slug: 'jsonrpcxx',
		color: '#5e95e3',
		description: "Cross platform single header JSON-RPC 2.0 compliant framework for C++ with transport agnostic interfaces, compile time mapping and runtime checking.",
		shortDescription:
			'Single header JSON-RPC 2.0 compliant framework for C++.',
		links: [{ to: 'https://github.com/JoaoAJMatos/jsonrpcxx', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'jsonrpcxx',
		period: {
			from: new Date(2023, 11, 1),
			to: new Date(2023, 11, 10)
		},
		skills: getSkills('cpp'),
		type: 'Software Library'
	},
	{
		slug: 'smemory',
		color: '#5e95e3',
		description: "Smart memory management library in C. Contains implementations for smart pointers and memory pools.",
		shortDescription:
			'Smart memory management library in C.',
		links: [{ to: 'https://github.com/JoaoAJMatos/smemory', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Smemory',
		period: {
			from: new Date(2023, 11, 1),
			to: new Date(2023, 11, 10)
		},
		skills: getSkills('c'),
		type: 'Software Library'
	},
	{
		slug: 'unipp',
		color: '#7b4fff',
		description: "Unipp is a simple, self-contained, single header testing framework for unit testing in C++. Providing unit testing and benchmarking capabilities in a single header file.",
		shortDescription:
			'Simple, self-contained, single header testing framework for unit testing in C++',
		links: [{ to: 'https://github.com/JoaoAJMatos/unipp', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Unipp',
		period: {
			from: new Date(2023, 11, 1),
			to: new Date(2023, 11, 20)
		},
		skills: getSkills('cpp'),
		type: 'Software Library'
	},
	{
		slug: 'iplchat',
		color: '#5e95e3',
		description: "IPLChat is an encrypted TCP client-server chat application written in C# using the ProtoIP library.",
		shortDescription:
			'Encrypted TCP client-server chat application written in C#.',
		links: [{ to: 'https://github.com/JoaoAJMatos/TSProject', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'IPL Chat',
		period: {
			from: new Date(2023, 10, 1),
			to: new Date(2023, 12, 10)
		},
		skills: getSkills('csharp'),
		type: 'Desktop Application'
	},
	{
		slug: 'dynamo',
		color: '#5e95e3',
		description: "Dynamo was my first Blockchain implementation in C++. It was made for my final high school project, where I received a 20/20 grade.",
		shortDescription:
			'An even simpler blockchain implementation in C++ I made for my final high school project.',
		links: [{ to: 'https://github.com/JoaoAJMatos/Dynamo-dev', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Dynamo',
		period: {
			from: new Date(2021, 4),
			to: new Date(2021, 7)
		},
		skills: getSkills('cpp'),
		type: 'Blockchain'
	},
	{
		slug: 'weather-now',
		color: '#5e95e3',
		description: "Weather Now is a simple weather website for checking the weather anywhere in the world using the OpenWeatherMap API. This was my final project for the Web Programming course at my university.",
		shortDescription:
			'Simple weather website for checking the weather anywhere in the world.',
		links: [{ to: 'https://github.com/JoaoAJMatos/ProjetoPWC', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Weather Now',
		period: {
			from: new Date(2022, 3, 10),
			to: new Date(2022, 4)
		},
		skills: getSkills('html', 'css', 'js', 'bootstrap'),
		type: 'Website'
	},
];

export default MY_PROJECTS;
