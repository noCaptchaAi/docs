---
sidebar_position: 3
---

base: `https://{plan}.nocaptchaai.com/api`

### `base + /account/balance`

```
{
    "plan id": "paid-1m-xxxxxxxxxx",
    "plan type": "paid",
    "planlimit": 1000000,
    "status": "active",
    "used": 689797
}
```

#### Pro Plan
---

```
https://pro.nocaptchaai.com/api/account/balance
```

#### Free Plan
---

```
https://free.nocaptchaai.com/api/account/balance
```

```py

# python requests
import requests
balance = requests.get('https://codeproxy.shimul.me/api/account/balance', headers={'uid': '', 'apikey': ''})

print(balance.json())

```

```js
//  axios
const  res = await axios({
  method: "get",
  url: "https://pro.nocaptchaai.com/api/account/balance",
  headers: {
    "Content-type": "application/json",
    uid: uid,
    apikey: apikey,
  }
});

```