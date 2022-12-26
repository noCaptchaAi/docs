---
sidebar_position: 1
---

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
  ln: "en", // (Optional) language eg "ru" = Russain
  softid:"softid assigned by noCaptchaAi" // (Optional) Please contact us for softid to get 5% usages fee from paid user.
};

({
  method: "post",
  url: "https://free.nocaptchaai.com/api/solve",

  headers: {
    "Content-type": "application/json",
    apikey: apikey,
  },
  data: base64_json,
});

```


# Supported Languages

```js
ln = "en" // for Russian "ru" / For Chinese "zh" / For brazilian "pt" / For arabic "ar"
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
