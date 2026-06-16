---
title: Модель данных
description: Схема базы данных — 14 таблиц, 7 enum, связи и индексы
---

:::note[Раздел в разработке]
Полная документация схемы с ER-диаграммой готовится.
:::

PostgreSQL 18. Миграции управляются Flyway. ORM — Exposed DSL (`newSuspendedTransaction`).

## Таблицы

| Таблица | Описание |
|---------|----------|
| `agents` | Операторы поддержки (имя, роль, Telegram binding) |
| `channels` | Подключённые каналы (тип, конфигурация в JSONB) |
| `channel_identities` | Уникальные контакты на каналах (per brand + native_id) |
| `conversations` | Пара (channel, identity); 1:N с тикетами |
| `tickets` | Единица взаимодействия: статус, приоритет, назначение |
| `ticket_messages` | Сообщения в тикете с метаданными |
| `ticket_tags` | Связь тикет ↔ тег (many-to-many) |
| `tags` | Теги с цветом |
| `identity_notes` | Заметки о клиенте — видны во всех его тикетах |
| `reply_templates` | Шаблоны ответов с плейсхолдерами |
| `audit_events` | Журнал значимых действий |

## Enum-типы (7 штук)

`ticket_status` · `message_type` · `attachment_type` · `channel_type` · `priority` · `agent_role` · `audit_event_type`
