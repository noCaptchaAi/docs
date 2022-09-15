---
sidebar_position: 1
---

base: `https://pro.nocaptchaai.com/api`

### `base + /solve`

#### Pro User
```
https://pro.nocaptchaai.com/api/solve
```

#### Free User
```
https://free.nocaptchaai.com/api/solve
```

###  `post` Solve Requests

```js
let base64_json = {
   images: {
   "0": "base64 hash from image",
   "1": "base64 hash from image",
   "2": "base64 hash from image",
   "3": "base64 hash from image",
   "4": "base64 hash from image",
   "5": "base64 hash from image",
   "6": "base64 hash from image",
   "7": "base64 hash from image",
   "8": "base64 hash from image",
   "9": "base64 hash from image",
   "10": "base64 hash from image",
   "11": "base64 hash from image",
   "12": "base64 hash from image",
   "13": "base64 hash from image",
   "14": "base64 hash from image",
   "15": "base64 hash from image",
   "16": "base64 hash from image",
   "17": "base64 hash from image",
   "18": "base64 hash from image",
  },
  target: "Please click each image containing an airplane",
  method: "hcaptcha_base64",
  sitekey: "sitekey",
  site: "site"
};

({
  method: "post",
  url: "https://free.nocaptchaai.com/api/solve",

  headers: {
    "Content-type": "application/json",
    uid: uid,
    apikey: apikey,
  },
  data: base64_json,
});

```