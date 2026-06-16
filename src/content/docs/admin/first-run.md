---
title: Первый запуск
description: Начальная настройка EasyDesk — создание первого администратора через bootstrap
---

## Что потребуется до запуска

Перед первым стартом нужно создать два Telegram-бота и одну супергруппу:

1. **Бот для клиентов** — его будут писать клиенты через Telegram. Создаётся через [@BotFather](https://t.me/BotFather). Токен → `CHANNEL_TELEGRAM_BOT_TOKEN`.
2. **Бот-супервизор** — управляет топиками в супергруппе (создаёт темы, публикует сообщения). Отдельный бот, отдельный токен → `TELEGRAM_SUPERVISOR_BOT_TOKEN`.
3. **Супергруппа с топиками** — Telegram-группа с включёнными темами. Добавьте туда бота-супервизора как администратора с правами на управление темами. ID группы → `TELEGRAM_SUPERVISOR_GROUP_ID`.

Для Email и VK каналы настраиваются отдельно — см. соответствующие разделы. Для первого запуска достаточно только Telegram.

## Bootstrap-администратор

При первом старте система создаёт учётную запись суперадминистратора автоматически. Для этого в `.env` нужно указать ваш Telegram User ID:

```
TELEGRAM_SUPERVISOR_SUPERADMIN_ID=123456789
```

:::tip
Узнать свой Telegram User ID можно через бота [@userinfobot](https://t.me/userinfobot).
:::

## Пример .env для первого запуска

```env
# Домен (для Caddy + Let's Encrypt)
DOMAIN=easydesk.example.com

# Имя рабочего пространства (отображается в Mini App)
WORKSPACE_NAME=EasyDesk

# База данных
DATABASE_USERNAME=easydesk
DATABASE_PASSWORD=change-me

# Supervisor (супергруппа)
TELEGRAM_SUPERVISOR_BOT_TOKEN=токен-бота-супервизора
TELEGRAM_SUPERVISOR_GROUP_ID=-1001234567890
TELEGRAM_SUPERVISOR_SUPERADMIN_ID=ваш-telegram-user-id

# Канал Telegram (клиентский бот)
CHANNEL_TELEGRAM_BOT_TOKEN=токен-клиентского-бота
CHANNEL_TELEGRAM_WEBHOOK_SECRET=случайная-строка-для-webhook
```

## Шаги запуска

```bash
# 1. Скопировать и заполнить .env
cp .env.example .env

# 2. Запустить стек
docker compose up -d

# 3. Flyway применит миграции автоматически при старте
```

После запуска откройте Mini App через кнопку бота-супервизора в супергруппе и войдите под своим Telegram-аккаунтом. Вы увидите раздел администратора — можно добавлять агентов, настраивать теги и шаблоны.

:::caution
`TELEGRAM_SUPERVISOR_SUPERADMIN_ID` задаётся один раз. Если вы измените это значение после первого запуска, система не создаст нового суперадмина автоматически — изменения в базе данных не произойдёт.
:::
