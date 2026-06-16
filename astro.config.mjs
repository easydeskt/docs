// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://easydeskt.github.io',
	base: '/docs',
	integrations: [
		starlight({
			title: 'EasyDesk',
			logo: {
				light: './src/assets/logo-cyan.svg',
				dark: './src/assets/logo-white.svg',
				alt: 'EasyDesk',
				replacesTitle: false,
			},
			defaultLocale: 'root',
			locales: {
				root: { label: 'Русский', lang: 'ru' },
			},
			customCss: [
				'@fontsource/poppins/400.css',
				'@fontsource/poppins/600.css',
				'@fontsource/jetbrains-mono/400.css',
				'@fontsource/jetbrains-mono/600.css',
				'./src/styles/custom.css',
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/easydeskt/docs' },
			],
			sidebar: [
				{
					label: 'Для операторов',
					items: [
						{ label: 'Обзор рабочего процесса', slug: 'operators/overview' },
						{ label: 'Команды бота', slug: 'operators/bot-commands' },
						{ label: 'Жизненный цикл тикета', slug: 'operators/ticket-lifecycle' },
						{ label: 'Приоритеты и теги', slug: 'operators/priorities-tags' },
						{ label: 'Шаблоны быстрых ответов', slug: 'operators/templates' },
						{ label: 'Mini App', slug: 'operators/mini-app' },
					],
				},
				{
					label: 'Для администраторов',
					items: [
						{ label: 'Первый запуск', slug: 'admin/first-run' },
						{ label: 'Управление агентами', slug: 'admin/agents' },
						{
							label: 'Подключение каналов',
							items: [
								{ label: 'Telegram', slug: 'admin/channels/telegram' },
								{ label: 'Email (IMAP/SMTP)', slug: 'admin/channels/email' },
								{ label: 'ВКонтакте', slug: 'admin/channels/vkontakte' },
							],
						},
						{ label: 'Теги и цвета', slug: 'admin/tags' },
						{ label: 'Шаблоны с вложениями', slug: 'admin/templates' },
					],
				},
				{
					label: 'Для разработчиков',
					items: [
						{ label: 'Архитектура системы', slug: 'dev/architecture' },
						{ label: 'Модули бекенда', slug: 'dev/modules' },
						{ label: 'Канальная абстракция', slug: 'dev/channel-abstraction' },
						{ label: 'Модель данных', slug: 'dev/data-model' },
						{ label: 'REST API', slug: 'dev/api' },
						{ label: 'Деплой', slug: 'dev/deployment' },
						{ label: 'Окружение разработки', slug: 'dev/setup' },
					],
				},
			],
		}),
	],
});
