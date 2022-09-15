---
sidebar_position: 3
---

base: `https://{plan}.nocaptchaai.com/api`

### `base + /account/balance`

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

solve = requests.post(self.shimul["solver"], json={
        "images": i,
        "target": g,
        "data_type": "url",
        "site": self.href,
        "site_key": self.sitekey
    }, headers={
        "Content-type": "application/json",
        "uid": self.shimul["uid"],
        "apikey": self.shimul["key"]
    }).text;

```

```js
//  axios
var res = await axios({
  method: "post",
  url: "https://{plan}.nocaptchaai.com/api/solve",
  headers: {
    "Content-type": "application/json",
    uid: uid,
    apikey: apikey,
  },
  data: base64_json,
});

```