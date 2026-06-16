---
title: Окружение разработки
description: Как поднять EasyDesk локально для разработки и отладки
---

:::note[Раздел в разработке]
Полная инструкция по локальной разработке готовится.
:::

## Требования

| Инструмент | Версия |
|------------|--------|
| JDK | 25+ |
| Gradle | управляется wrapper (`./gradlew`) |
| PostgreSQL | 18+ (или Docker) |
| bun | для Mini App |

## Бекенд

```bash
cd backend

# Скопировать и заполнить .env
cp .env.example .env

# Запустить
./gradlew :modules:app:run
```

Бекенд поднимется на `http://localhost:8080`. Flyway применит миграции автоматически.

## Mini App

```bash
cd mini-app
bun install
bun run dev
```

Mini App поднимется на `http://localhost:5173`. Для полноценной работы нужен запущенный бекенд.

:::tip
Для тестирования Telegram Mini App в браузере без Telegram можно временно отключить проверку `initData` через переменную окружения (режим devMode).
:::
