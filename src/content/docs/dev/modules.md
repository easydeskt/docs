---
title: Модули бекенда
description: Описание 15 Gradle-модулей и их зон ответственности
---

# Модули бекенда

:::note[Раздел в разработке]
Подробное описание каждого модуля с примерами кода готовится.
:::

Бекенд разбит на 15 Gradle-модулей в директории `backend/modules/`. Gradle автоматически обнаруживает модули через convention-плагин.

| Модуль | Зона ответственности |
|--------|---------------------|
| `core` | Доменные модели, EventBus (SharedFlow), базовые абстракции |
| `api` | REST-эндпоинты (Ktor), конфигурация аутентификации |
| `app` | Точка входа, сборка Ktor, Koin DI, запуск Flyway |
| `channel/api` | Контракт канального коннектора (интерфейсы + модели) |
| `channel/telegram` | Telegram Bot API (Long Poll + Webhook, failover) |
| `channel/email` | IMAP polling + SMTP-треды (Jakarta Mail) |
| `channel/vkontakte` | VK API (Callback API + Long Poll, Ktorfit SDK) |
| `service/agents` | CRUD агентов, роли, привязки к Telegram-аккаунтам |
| `service/audit` | Журнал событий — персистентность + трансляция |
| `service/channels` | Реестр каналов, реестр conversations, ConversationFactory |
| `service/storage` | Хранение вложений (локальная ФС; абстракция готова под S3) |
| `service/templates` | Рендеринг шаблонов с подстановкой плейсхолдеров |
| `service/tickets` | Тикет-операции: создание, назначение, мерж, смена статуса |
| `supervisor/api` | Контракт интерфейса администратора |
| `supervisor/telegram` | Бот в суперагруппе + интеграция Mini App |
