export type Work = {
	title: string;
	description: string;
	libraries: string[];
	repository: `${string}/${string}`;
	url: `https://${string}.${string}`;
};

export const works: Work[] = [
	{
		title: 'Astraea',
		description: 'Svelte(TypeScript)で作成したNostr Webクライアント',
		libraries: ['Svelte', 'TypeScript', 'Tailwind CSS'],
		repository: 'mouse484/Astraea',
		url: 'https://astraea.mouse484.dev'
	},
	{
		title: 'Ecstar',
		description: '簡単に作れるを目指して開発していたDiscord.jsのフレームワーク、現在開発停止中。',
		libraries: ['TypeScript', 'Discord', 'Node.js'],
		repository: 'Ecstarjs/Ecstar',
		url: 'https://ecstar.js.org'
	}
];
