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
  ln: "en", // language eg "ru" = Russain
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


# Languages Supported
```
ln = "ru" = Russian / "zh" = Chinese / "pl" = Polish
```

```
country_codes = [
    "ru",
    "es",
    "pt",
    "uk",
    "vi",
    "fr",
    "id",
    "ar",
    "ja",
    "tr",
    "de",
    "zh",
    "pl",
    "th",
    "it",
    "nl",
    "sk",
    "bg",
    "ro",
    "hu",
    "ko",
    "cs",
    "az",
    "fa",
    "bn",
    "el",
    "lt",
    "lv",
    "sv",
    "hr",
    "he",
    "hi",
    "sl",
    "da",
    "uz",
    "fi",
    "ca",
    "ka",
    "ms",
    "te",
    "et",
    "ml",
    "be",
    "kk",
    "mr",
    "ne",
    "my",
    "bs",
    "hy",
    "mk",
    "pa"
]
```
