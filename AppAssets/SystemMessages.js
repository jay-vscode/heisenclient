const UserData = require('./UserPatch.js');
module.exports = [
	// MessageData
	{
		id: '1088473079824523405',
		type: 0,
		channel_id: '1088473833264128040', // If you want to use it, must set ChannelId to 1000000000000000000
		author: UserData['1088473079824523405'], // Custom User Data here
		attachments: [],
		content: null,
		embeds: [
			{
				type: 'rich',
				description: `Thanks for downloading my client <:ruchanie_w_morde:1130206062520303817>
This is **NOT** my client its just **FORK** of [This Repository](https://github.com/aiko-chan-ai/DiscordBotClient)
I want to warn you using **UNOFFICIAL** discord clients is against [**TOS**](https://discord.com/tos/)`,
				color: 0xffffff,
				timestamp: '2023-17-07T17:00:00+00:00',
				thumbnail: {
					url: 'https://cdn.discordapp.com/avatars/1088473079824523405/bfd99a5fe1c4267529aff9b68f23c9a5.png?size=1024',
					proxy_url:
						'https://cdn.discordapp.com/avatars/1088473079824523405/bfd99a5fe1c4267529aff9b68f23c9a5.png?size=1024',
					width: 128,
					height: 128,
				},
				footer: {
					text: 'jay',
				},
			},
		], // Custom Embed Data here
		mentions: [],
		mention_roles: [],
		pinned: false,
		mention_everyone: false,
		tts: false,
		timestamp: '2023-01-01T12:00:00.000000+00:00',
		edited_timestamp: null,
		flags: 22,
		components: [
			{
				type: 1,
				components: [
					{
						type: 2,
						style: 5,
						label: 'Github',
						emoji: {
							name: 'github',
							id: '889092230063734795',
						},
						url: 'https://github.com/aiko-chan-ai/DiscordBotClient',
					},
					{
						type: 2,
						style: 5,
						label: 'Download App',
						emoji: {
							name: 'taive',
							id: '863716659159891998',
						},
						url: 'https://github.com/aiko-chan-ai/DiscordBotClient/releases',
					},
					{
						type: 2,
						style: 5,
						label: 'Bugs',
						emoji: {
							name: 'BugHunter_lvl1',
							id: '873790531887579187',
						},
						url: 'https://github.com/aiko-chan-ai/DiscordBotClient/issues',
					},
				],
			},
		], // Custom Msg Components Data here
	},
];