import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams,
	type WhoamiPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Slick template with Svelte';

export const NavBar = {
	whoami: 'About Me',
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'JOÃO (AJ)',
	lastName: 'MATOS',
	description:
		'Enthusiastic Junior Developer with years of contributions to the Open Source community. Startup co-founder at age 19, team leader, head developer and programming content writer.',
	links: [
		{ 
			platform: Platform.GitHub, 
			link: 'https://github.com/JoaoAJMatos' 
		},
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/joaoajmatos'
		},
		{
			platform: Platform.Email,
			link: 'joaoajmatos@proton.me'
		},
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};

export const WHOAMI: WhoamiPageParams = {
	title: 'Who am I?',
	item: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
};