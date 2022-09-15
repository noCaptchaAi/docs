---
sidebar_position: 6
id: build_own_script
hide_title: true
---



## Build your own Scripts

### We have two api endpoint

For free user:

### `free`: for anyone

```
https://free.nocaptchaai.com/api/solve
```

### `pro`: paid

```
https://pro.nocaptchaai.com/api/solve

```

Send `post` request endpoint with `uid` and `apikey` in header

```
'uid': {your uid}, 'apikey': {your api key}
```

In body please send bellow required data as json.

Filed Type Description Example

target string What AI need to find on the images Please click each image containing an airplane.

sitekey string sitekey for the target website. 0eeb15dc-a802-43b1-9a2a-1f2c03e0102d

site url as string format website.com/signup

method allowed string hcaptcha_base64

Please check this json

```
https://raw.githubusercontent.com/shimuldn/hCaptchaSolverApi/main/usage_examples/base64-body-format.json

```

<!-- {"images": {"0": "base64 of the image", "1": "base64 of the image", "3":"base64 of the image", ....},
"target": "Please click each image containing a bird.", "method": "hcaptcha_base64", "sitekey": "sitekey", "site": "site"} -->

### API response

API will send your bellow response

If successful and order in queue

```
{
    "createdat": 1662353086,
    "id": "h-q7FBc9fXJ0V69ox4",
    "status": "new",
    "target": "airplane",
    "url": "https://free.nocaptchaai.com/api/status?id=h-q7FBc9fXJ0V69ox4"
}
```

If successful and order processed (Only avaiable to pro user).

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

If error you will received error releted message like bellow

```
{
    "message": "Invalid APIKEY",
    "status": "Unauthorized"
}
```

### Get solved result

If successful

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

If error you will received error releted message like bellow

```
{
    "message": "Error message",
    "status": "error"
}
```
