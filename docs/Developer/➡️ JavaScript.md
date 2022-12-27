---
sidebar_position: 2
---



### Prepare Header Data

```js
// assuming you have apikey from https://nocaptchaai.com

const apikey = "";

let base64_json = {
  images: {
    0: "base64 hash from image",
    1: "base64 hash from image",
    2: "base64 hash from image",
    3: "base64 hash from image",
    4: "base64 hash from image",
    5: "base64 hash from image",
    6: "base64 hash from image",
    7: "base64 hash from image",
    8: "base64 hash from image",
    9: "base64 hash from image",
    10: "base64 hash from image",
    11: "base64 hash from image",
    12: "base64 hash from image",
    13: "base64 hash from image",
    14: "base64 hash from image",
    15: "base64 hash from image",
    16: "base64 hash from image",
    17: "base64 hash from image",
    18: "base64 hash from image",
  },
  target: "Please click each image containing an airplane",
  method: "hcaptcha_base64",
  sitekey: "sitekey",
  site: "site",
};
```

## Send task With Axios

```js
//  axios
let res = await axios({
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

## Send task With Fetch

```js
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
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
```

## 1) Send `post` task

## Free User

```
 https://free.nocaptchaai.com/solve
```

## Pro User

```
 https://pro.nocaptchaai.com/solve
```

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

## 2) `GET` Status

for queued tasks

### a) Instant: status
: Solved/failed

within (0.02s ~ 0.05s)

sample

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

### b) Queued: status

```js
await fetch("https://free.nocaptchaai.com/api/status?id=h-q7FBc9fXJ0V69ox4");
```

Sample

```
{
    "createdat": 1662353086,
    "id": "h-q7FBc9fXJ0V69ox4",
    "status": "new",
    "target": "airplane",
    "url": "https://free.nocaptchaai.com/api/status?id=h-q7FBc9fXJ0V69ox4"
}
```

## 3) Get Balance

### Javascript

```js
//  Javascript example with axios
const res = await axios({
  method: "get",
  url: "https://manage.nocaptchaai.com/balance",
  headers: {
    "Content-type": "application/json",
    apikey: apikey,
  },
});
```

### Python

```py

# python requests
import requests
balance = requests.get('https://manage.nocaptchaai.com/balance', headers={'apikey': ''})

print(balance.json())

```
