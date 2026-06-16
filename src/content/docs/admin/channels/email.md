---
title: Email (IMAP/SMTP)
description: Подключение почтового ящика для приёма и отправки писем
---

EasyDesk опрашивает ящик по IMAP через заданный интервал. Каждое новое письмо создаёт тикет или добавляет сообщение в существующий, если письмо пришло в том же треде.

Ответы оператора отправляются через SMTP в том же треде — с заголовками `In-Reply-To` и `References` по RFC 5322. Почтовый клиент клиента видит цельную цепочку.

## Переменные в .env

```env
# IMAP (приём почты)
CHANNEL_EMAIL_IMAP_HOST=imap.example.com
CHANNEL_EMAIL_IMAP_USERNAME=support@example.com
CHANNEL_EMAIL_IMAP_PASSWORD=пароль-или-пароль-приложения

# SMTP (отправка почты)
CHANNEL_EMAIL_SMTP_HOST=smtp.example.com
CHANNEL_EMAIL_SMTP_USERNAME=support@example.com
CHANNEL_EMAIL_SMTP_PASSWORD=пароль-или-пароль-приложения
```

## Настройка для популярных провайдеров

**Gmail**

У аккаунтов с двухфакторной аутентификацией (а это все корпоративные Google Workspace) вместо основного пароля нужен пароль приложения. Создаётся в настройках Google-аккаунта → Безопасность → Пароли приложений.

```env
CHANNEL_EMAIL_IMAP_HOST=imap.gmail.com
CHANNEL_EMAIL_SMTP_HOST=smtp.gmail.com
```

**Яндекс Почта**

В настройках ящика включить доступ по IMAP. Для аккаунтов с двухфакторкой — пароль приложения из настроек безопасности Яндекс ID.

```env
CHANNEL_EMAIL_IMAP_HOST=imap.yandex.ru
CHANNEL_EMAIL_SMTP_HOST=smtp.yandex.ru
```

**Mail.ru**

В настройках ящика включить доступ по IMAP/SMTP. Пароль приложения — в Настройки → Безопасность.

```env
CHANNEL_EMAIL_IMAP_HOST=imap.mail.ru
CHANNEL_EMAIL_SMTP_HOST=smtp.mail.ru
```

## Поддерживаемые вложения

Изображения, документы, PDF — всё, что может содержать письмо. Вложения клиента отображаются в топике супергруппы как файлы.
