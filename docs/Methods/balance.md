---
sidebar_position: 3
---


#### Pro Plan
---

```
https://manage.nocaptchaai.com/balance
```

#### Free Plan
---

```
https://free.nocaptchaai.com/balance
```

```py

# python requests
import requests
balance = requests.get('https://manage.nocaptchaai.com/balance', headers={'apikey': ''})

print(balance.json())

```

```js
//  Javascript example with axios
const  res = await axios({
  method: "get",
  url: "https://manage.nocaptchaai.com/balance",
  headers: {
    "Content-type": "application/json",
    apikey: apikey,
  }
});

```
