---
sidebar_position: 2
---
 
![GitHub Repo stars](https://img.shields.io/github/stars/shimuldn/hCaptchaSolverApi?style=flat-square)

[Free trial credits 🔥 + API key 🔗](https://nocaptchaai.com/register) \
Promo 30000 solve/10$ \
Unlimited plans, Custom api requirements for person/enterprise  href="mailto:ai@nocaptchaai.com">Write Us 📧

  
# noCapcthaAi hCaptcha Solver

Takes ~ 0.04s/solve Blazing fast hCaptcha solver based on NeuralNet image detection AI. noCapcthaAi is scaleable and robust so you can throw any kind of load. It's as simple as send base64 images post request and get solved response. We're adding reCaptcha, geetest etc soon.


![hCaptchaSolverApi_Demo_Selenium](https://user-images.githubusercontent.com/4178343/180646819-324163a8-0c4c-4571-b01c-2f98ab8a1127.gif)



### How the api work to solving captcha?

Currently the api solve captcha images and send correct result to solve the capctah.

### How i can use the api?
You need to get the captcha images url programmatically, convert them to base64 and send them to the api in a specifice format.

### What you'll need

you'll received `apikey` and `uid` on email we sent. if you already signed up check your email inbox/spam. If you didn't get any email

### How to send a solve request
We have two api endpoint.
For free user:


`free`: 

```
https://free.nocaptchaai.com/api/solve
```

`pro`: only available for paid users

```
https://pro.nocaptchaai.com/api/solve

```

Free user is not allowed to send to this endpoint.

In header you need to send uid an apikey. IE:

'uid': {your uid}, 'apikey': {your api key}

In body please send bellow required data as json.

Filed     Type    Description     Example

target    string  What AI need to find on the images  Please click each image containing an airplane.

sitekey   string  sitekey for the target website.  0eeb15dc-a802-43b1-9a2a-1f2c03e0102d 

site      url as string format    website.com/signup

method    allowed string          hcaptcha_base64

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