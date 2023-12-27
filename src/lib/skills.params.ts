import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'js',
		color: 'yellow',
		description:
			"I have been using Javascript on and off since I started programming. I've used it for web development, as well as backend development with Node.js.",
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'c',
		color: 'blue',
		description:
			'I have used C for many years, it has become one of my main languages and I have extensive experience with it.',
		logo: Assets.C,
		name: 'C'
	}),
	s({
		slug: 'cpp',
		color: 'blue',
		description:
			'C++ is my go-to language when it comes to complex and performance-critical applications. I have used it for many years and I am extremely comfortable with it, having developed many complex projects.',
		logo: Assets.Cpp,
		name: 'C++'
	}),
	s({
		slug: 'csharp',
		color: 'blue',
		description:
			"I've used C# to develop desktop applications, as well as games with Unity. I have a good understanding of the language and I am comfortable with it, having used it for developing one of my most famous libraries, ProtoIP.",
		logo: Assets.Csharp,
		name: 'C#'
	}),
	s({
		slug: 'python',
		color: 'blue',
		description:
			"Python was my first programming language, and I've used it for many years. I mainly use it for scripting and small hacking-related projects.",
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'rust',
		color: 'orange',
		description:
			"I have been using Rust for some time now, and I've developed a love-hate relationship with it. I have used it to develop many command line tools as well as recreational malware development.",
		logo: Assets.Rust,
		name: 'Rust'
	}),
	s({
		slug: 'go',
		color: 'blue',
		description:
			"Golang is my go-to when it comes to backend development and microservices. I've used it extensively for developing auxiliary services for my projects.",
		logo: Assets.Go,
		name: 'Golang'
	}),
	s({
		slug: 'lua',
		color: 'blue',
		description:
			'I have used Lua to configure and develop many plugins for my text editor (Neovim). I am comfortable with scripting in Lua.',
		logo: Assets.Lua,
		name: 'Lua'
	}),
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
