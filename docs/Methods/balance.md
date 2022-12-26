---
sidebar_position: 3
---


#### Pro Plan
---

```
https://manage.nocaptchaai.com/api/user/get_balance
```

#### Free Plan
---

```
https://free.nocaptchaai.com/api/user/free_balance
```

```py

# python requests
import requests
balance = requests.get('https://manage.nocaptchaai.com/api/user/get_balance', headers={'apikey': ''})

print(balance.json())

```

```js
//  axios
const  res = await axios({
  method: "get",
  url: "https://manage.nocaptchaai.com/api/user/get_balance",
  headers: {
    "Content-type": "application/json",
    apikey: apikey,
  }
});

```
