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
   "...": "...", // send totatl 18 images max;
   "18": "base64 hash from image",
  },
  target: "Please click each image containing an airplane",
  method: "hcaptcha_base64",
  sitekey: "sitekey",
  site: "website",
  ln: "en", // language eg "cn" = chinese
  softid:"script or repo name, applies only if you're a developer"
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
