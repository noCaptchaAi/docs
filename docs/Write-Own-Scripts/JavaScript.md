---
sidebar_position: 2
---
## Build your own scripts

### javaScript Example with `axios` and `fetch`

```
// if you wanna use axios, get from CDN from unpkg or jsdeliver, eg. unpkg: https://unpkg.com/axios@1.0.0-alpha.1/dist/axios.min.js
// you need uid and apikey, get free here https://nocaptchaai.com

const uid = ''
const apikey = '' 

var base64_json = {
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

//  axios
var res = await axios({
  method: "post",
  url: "https://free.nocaptchaai.com/api/solve",
  headers: {
    "Content-type": "application/json",
    uid: uid,
    apikey: apikey,
  },
  data: base64_json,
});

// fetch api
async function solve(images, target) {
  const request = await fetch("https://free.nocaptchaai.com/api/solve", {
    method: "post",
    headers: {
      "Content-type": "application/json",
      uid: uid,
      apikey: apikey,
    },
    body: JSON.stringify(base64_json),
  }).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
  });
}
```

## How to use API? How a solve works?

## 1) Send JSON `post` request to Api point

```
 https://free.nocaptchaai.com/api/solve
```
Convert images to Base64, JSON like below or [this.JSON](https://raw.githubusercontent.com/shimuldn/hCaptchaSolverApi/main/usage_examples/base64-body-format.json)

```
{
  "images": {
    "0": "1st base64 image hash",
    "1": "if another base64 hash",
    "2": "if another base64 hash",
    "3": "if another base64 hash",
    "4": "if another base64 hash",
    "5": "if another base64 hash",
    "6": "if another base64 hash",
    "7": "if another base64 hash",
    "8": "if another base64 hash",
    "9": "if another base64 hash",
    "10": "if another base64 hash",
    "11": "if another base64 hash",
    "12": "if another base64 hash",
    "13": "if another base64 hash",
    "14": "if another base64 hash",
    "15": "if another base64 hash",
    "16": "if another base64 hash",
    "17": "if another base64 hash",
    "18": "max 18 base64 hash"
  },
  "target": "Please click each image containing an airplane",
  "method": "hcaptcha_base64",
  "sitekey": "sitekey",
  "site": "site"
}
```

## 2) GET Solved


a) response:
```
{
    "createdat": 1662353086,
    "id": "h-q7FBc9fXJ0V69ox4",
    "status": "new",
    "target": "airplane",
    "url": "https://free.nocaptchaai.com/api/status?id=h-q7FBc9fXJ0V69ox4"
}
```

Send a GET request to url your received, can be used as to check status for tasks not insatntly solved.
```
https://free.nocaptchaai.com/api/status?id=h-q7FBc9fXJ0V69ox4
```
b) Instant solved status (Paid user only!):

```
{
    "processing_time": "0.05s",
    "solution": [
        1,
        3,
        4,
        6
    ],
    "status": "solved"
}
```

Glossary:

   * `target` = the text you see on hcaptcha popup describing the challenge
   * `method` = our internal param so keep as it is
   * `site` = your target domain
   * `sitekey` = find the sitekey on your target html page: ``` <div class="h-captcha" data-sitekey="your_site_key"></div>```
   * note: sitekey and site info collected to improve accuracy. we respect privacy.
   
