---
title: Интеграция по API
---

## Подготовка до и интеграция

Прежде чем начать использовать API, вам необходимо создать магазин в учетной записи мерчанта и получить токен API

![api token](../assets/images/api-token.png)

Этот токен должен быть установлен для всех запросов в заголовках x-api-key

Созданный нами X-Api-ключ нужен для аутентификации магазина в учетной записи мерчанта.

## Конечные точки

### Создание адресов для плательщика

Если плательщик еще не создан, то мы создадим его, если он уже создан, то возьмем
Существующего и вернем платежные адреса для всех блокчейнов. Мы настоятельно рекомендуем использовать этот метод для простой
интеграции и постоянного получения адресов

`[POST] /payer/addresses`

Тело запроса json

```json
{
  "storeUserId": "string",
  "email": "string",
  "ip": "string"
}
```
пример ответа

```

  "result": [
    {
      "blockchain": "bitcoin",
      "currency": "BTC.Bitcoin",
      "address": "bc1qwzefc7fp8tdlnv0es3pk6snad22hhet528d50e86",
      "rate": "26568.16995000",
      "payer": {
        "id": "de95717c-9814-4887-ba6b-94fc31eb6973",
        "storeUserId": "1232143",
        "payerUrl": "https://dv.net/invoices/payer/de95717c-9814-4887-ba6b-94fc31eb6973"
      }
    },
    {
      "blockchain": "tron",
      "currency": "USDT.Tron",
      "address": "TKn5GuNb62KgQh7SLXznUrP33Nae28d50e86",
      "rate": "1",
      "payer": {
        "id": "de95717c-9814-4887-ba6b-94fc31eb6973",
        "storeUserId": "1232143",
        "payerUrl": "https://dv.net/invoices/payer/de95717c-9814-4887-ba6b-94fc31eb6973"
      }
    }
  ],
  "errors": []
}
```

### Создать плательщика

Создаем плательщика, если создан пользователь с таким идентификатором, то будут возвращены данные из базы данных


`[POST] /payer/create/`

тело запроса json
```json
{
  storeUserId: "string"
}
```

storeUserId уникальный идентификатор плательщика в магазине

пример ответа

```json
{
  "result": {
    "id": "9ff39a38-71e1-4a27-83f6-65312691e28e",
    "store_id": "9fe169fc-638c-4387-8477-8bf0e9268248",
    "store_user_id": "1",
    "payerUrl": "https://dv.net/invoices/payer/9ff39a38-71e1-4a27-83f6-65312691e28e",
    "store": {
      "id": "9fe169fc-638c-4387-8477-8bf0e9268248",
      "name": "3321",
      "status": 1,
      "staticAddress": 1,
      "storeCurrencyCode": "USD"
    },
    "address": [
      {
        "blockchain": "bitcoin",
        "currency": "BTC.Bitcoin",
        "address": "bc1qwzefc7fp8tdlnv0es3pk6snad22hhet56c300461",
        "payer": {
          "id": "9ff39a38-71e1-4a27-83f6-65312691e28e",
          "storeUserId": "1",
          "payerUrl": "https://dv.net/invoices/payer/9ff39a38-71e1-4a27-83f6-65312691e28e"
        }
      }
    ]
  },
  "errors": []
}
```

Стоит отметить, что строку адреса следует отметить пустой, если мы только что создали плательщика

### Запрос адресов плательщика для определенной валюте

Возможно, вы не хотите принимать платежи только в определенной валюте, тогда эта конечная точка будет вам полезна
`[GET]/address/{payer}/{currency}`

Где payer - идентификатор плательщика, который был получен при создании соответствующего запроса, а currency – валюта
BTC.Bitcoin, USDT.tron пример запроса

`[GET]/address/9ff39a38-71e1-4a27-83f6-65312691e28e/BTC.Bitcoin`

пример ответа
```
{
  "result": {
    "blockchain": "bitcoin",
    "currency": "BTC.Bitcoin",
    "address": "bc1qwzefc7fp8tdlnv0es3pk6snad22hhet56c300461",
    "payer": {
      "id": "9ff39a38-71e1-4a27-83f6-65312691e28e",
      "storeUserId": "1"
    }
  },
  "errors": []
}
```

### Запрос курса валюты магазина
`[GET] /v2/stores/currencies/rate`

Валюта передается в параметре запроса

пример запроса
`[GET] /v2/stores/currencies/rate?currency=BTC.Bitcoin`

пример ответа

```json
{
  "result": {
    "rateSource": "Binance",
    "rate": "1714.99000000",
    "lastUpdate": {
      "date": "2023-08-31 11:55:57.062434",
      "timezone_type": 3,
      "timezone": "UTC"
    }
  },
  "errors": []
}
```


