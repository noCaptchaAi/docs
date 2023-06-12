# 2captcha api

Currently supported hCaptcha enterprise token

Endpoints:

`https://token.nocaptchaai.com/in.php`

`https://token.nocaptchaai.com/res.php`


## in.php example

```php
<?php
function sendPostRequest($url, $formData) {
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $formData);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
}
$url = "https://token.nocaptchaai.com/in.php";
$formData = array(
    "key" => "apikey",
    "method" => "hcaptcha",
    "sitekey" => "a5f74b19-9e45-40e0-b45d-47ff91b7a6c2",
    "pageurl" => "https://accounts.hcaptcha.com"
);

$response = sendPostRequest($url, $formData);

echo $response;
?>
```
Response `OK|9935302373`

## res.php

```php
<?php
$url = "https://token.nocaptchaai.com/res.php?key=apikey&action=get&id=9935302373";

$response = "";
while (!preg_match('/^(OK|ERROR)/', $response)) {
    $response = file_get_contents($url);
    echo $response . PHP_EOL;
    usleep(500000);  // Pause for 500 milliseconds (0.5 seconds)
}
?>
```

# Response

`CAPCHA_NOT_READY`

`OK|P1_eyJ0eXAiOi.....`


## We do not provide ip address of our server if you want to use ip address you can run the python script and use `127.0.0.1` and port `8080`

```py
#pip install flask requests
from flask import Flask, request
import requests
app = Flask(__name__)

api_url = "https://token.nocaptchaai.com"

@app.route('/in.php', methods=['POST', 'GET'])
def handle_request():
    try:
        apikey = request.form.get('key')
        sitekey = request.form.get('sitekey')
        pageurl = request.form.get('pageurl')
        method = request.form.get('method')
        soft_id = request.form.get('soft_id')
        proxy = request.form.get('proxy')
        proxytype = request.form.get('proxytype')
        useragent = request.form.get('useragent')
        res = requests.post(api_url+'/in.php', data={"key": apikey, "pageurl": pageurl, "sitekey": sitekey,
                            "method": method, "soft_id": soft_id, "proxy": proxy,
                            "proxytype": proxytype, "useragent": useragent}, headers={"apikey": apikey})
        if res.status_code == 200:
            return res.text
        else:
            print(res.text)
            return "ERROR_SOMETHING_WENT_WRONG", 500
    except Exception as e:
        print(f"error in.php {e}")
        return "ERROR_SOMETHING_WENT_WRONG", 500


@app.route('/res.php', methods=['GET'])
def res():
    """Check task status"""
    try:
        id = request.args.get('id')
        apikey = request.args.get('key')
        action = request.args.get('action')
        json = request.args.get('json')
        if action == 'getbalance':
            bal = requests.get(f'{api_url}/res.php?key={apikey}&action=getbalance&json={json}').text
            print(bal)
            return bal
        tok = requests.get(f'{api_url}/res.php?key={apikey}&action=get&id={id}')
        if tok.status_code == 200:
            return tok.text
        else:
            return "ERROR_CAPTCHA_UNSOLVABLE"
    except Exception as _e:
        print(f"Something wrong {_e}")
        return "ERROR_SOMETHING_WRONG", 200

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080)
```


# Browser Automation Studio (BAS) Endpoints

---

free : `free.nocaptchaai.com/in.php`

free : `free.nocaptchaai.com/res.php`

---

Paid : `pro.nocaptchaai.com/in.php`

Paid : `pro.nocaptchaai.com/res.php`

---

## Current Support:

BrowserAutomationStudio (by bablosoft)

You can use this endpoints with BAS software and their modules which supports `in.php` and `res.php` 2Captcha like api.

Just replace the endpoint with the above endpoints and you are good to go.
