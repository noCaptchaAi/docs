# API 3rd Party Integration

## OpenBullet 2

## Setup

- Go to RL Settings > Captchas

- Captcha service = CustomTwoCaptcha
  
- Api key = Your nocaptchaai apikey\
  
- Domain = https://token.nocaptchaai.com/
  
- Port = 443
  
- Uncheck Override the Host header with 2captcha.com
  
- Click check balance to check f its working.

- Click Save


<img width="700" alt="image" src="https://github.com/noCaptchaAi/docs/assets/120220796/4c6a8df1-f177-490a-a6a0-5c1ffd6df784">


```loli  
BLOCK:SolveHCaptcha
siteKey = "a5f74b19-9e45-40e0-b45d-47ff91b7a6c2"
siteUrl = "https://accounts.hcaptcha.com"
=> VAR @solveHCaptchaOutput
ENDBLOCK
```
  
  
<img width="700" alt="image" src="https://github.com/noCaptchaAi/docs/assets/120220796/580c6261-0cab-4724-89ab-d020501da1c4">


## BrowserAutomationStudio (by bablosoft)

You can use this endpoints with BAS software and their modules which supports `in.php` and `out.php` 2Captcha like api.

Just replace the endpoint with the above endpoints and you are good to go.
