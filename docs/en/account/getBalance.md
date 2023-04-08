---
title: Get Balance Info
lang: en-US
---

# Get Balance Info `GET`

This method returns the balance of the account.

pro = `https://manage.nocaptchaai.com/balance`

free = `https://free.nocaptchaai.com/balance`

::: tip
// currently optional

apikey: "yourid-76575-577e-5ab2-e811-726221f22af1"
:::

---

# `get` balance

::: code-group

```py
import requests
import json
proapi = "https://manage.nocaptchaai.com/balance"
freeapi = "https://free.nocaptchaai.com/balance"

balance = requests.get(
    proapi, headers={'apikey': 'yourid-76575-577e-5ab2-e811-726221f22af1'})
print(json.dumps(balance.json(), indent=4))

```

```js
const proapi = "https://manage.nocaptchaai.com/balance";
const freeapi = "https://free.nocaptchaai.com/balance";
const headers = {
  "Content-type": "application/json",
  apikey: "yourid-76575-577e-5ab2-e811-726221f22af1",
};

fetch(proapi, { headers })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

:::

# Received response

---

```json
{
  "Balance": 5.19,
  "Currency": "USD",
  "Subscription": {
    "dailyLimit": 20000,
    "expire": "88 Days 20 Hours 40 Minutes",
    "id": "daily-j7rl-sope",
    "minLimit": 200,
    "nextReset": "23 Hours 2 Minutes",
    "plan": "daily",
    "planName": "Daily 20k for 90 days",
    "planlimit": null,
    "remaining": 19997,
    "rpm": 0,
    "status": "active",
    "used": 3
  },
  "user_id": "yourid",
  "wallet_rpm": 14,
  "wallet_usages": "0 of 7000"
}
```
