---
title: Send hCaptcha Token Task
lang: en-US
---

# hCaptcha Token Task `POST`

This method sends a Token task to the api server.

`COST: 5 Requests per Task`

::: tip
Currently supports only normal hCaptcha. Enterprise Support in progress.
:::

## Send Token Task
```
POST => https://token.nocaptchaai.com/token
headers:
 "Content-Type": "application/json",
 "apikey": "apikey"
```


::: code-group

```JavaScript

const searchParams = new URLSearchParams(location.hash);
const apikey = "apikey";
const tokenapi = "https://token.nocaptchaai.com/token";
const payload = {
    url: searchParams.get("host"); // domain.com of target site
    proxy: {
        "ip": "123.45.678.9", // string
        "port": 1234, // int
        "username": "userid", // string
        "password": "pass#=#rd", // string
        "type": "https" // string "http", "socks5", "socks4" 
    },
    rqdata: "eyJ0zI1NiJ9.eyJmIjowLCJ....", // long string
    type: "hcaptcha",
    sitekey: searchParams.get("sitekey"), // eg. b17a7-90bf-4070-9296-62679, use searchparams
    // useragent depending on your use case
    useragent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'; // demo
}

const request = await fetch(tokenapi, {
    method: "post",
    headers,
    body: JSON.stringify(payload),
}).then((response) => {
    const res = response.json();
    console.log(res.status); // processing or failed 
    console.log(res.url); // task status url
});


```

```Python

import requests, time

apikey = "apikey"  # https://dash.nocaptchaai.com
token_api = "https://token.nocaptchaai.com/token"

headers = {"Content-Type": "application/json", "apikey": apikey}
payload = {
    "proxy": {
        "ip": "123.45.678.9",
        "port": 1234,
        "username": "userid",
        "password": "pass#=#rd",
        "type": "https"
    },
    "rqdata": "eyJ0zI1NiJ9.eyJmIjowLCJ....",
    "type": "hcaptcha",
    "url": "accounts.hcaptcha.com",
    "sitekey": "7830874c-13ad-4cfe-98d7-e8b019dc1742",
    "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
}

response = requests.post(token_api, json=payload, headers=headers)
response_json = response.json()
startTime = time.time()

print("task status: ", response_json)
print("waiting 7sec for response...")
time.sleep(7)

while True:
    sts = requests.get(response_json["url"], headers=headers).json()
    if sts["status"] == "processed" or sts["status"] == "failed":
        print(f'time since request:- {int(time.time() - startTime)} seconds')
        print(f'status: {sts["status"]}\n{sts["token"]}')
        break

    print("status: ", sts["status"])
    time.sleep(2)

```

```php
<?php

require 'vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;

$apikey = "apikey";
$token_api = "https://token.nocaptchaai.com/token";

$headers = ['Content-Type' => 'application/json', 'apikey' => $apikey];
$payload = [
    "proxy" => [
        "ip" => "123.45.678.9",
        "port" => 1234,
        "username" => "userid",
        "password" => "pass#=#rd",
        "type" => "https"
    ],
    "rqdata" => "eyJ0zI1NiJ9.eyJmIjowLCJ....",
    "type" => "hcaptcha",
    "url" => "accounts.hcaptcha.com",
    "sitekey" => "7830874c-13ad-4cfe-98d7-e8b019dc1742",
    "useragent" => "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
];

$client = new Client(['headers' => $headers]);

$response = $client->post($token_api, ['json' => $payload]);

$responseJson = json_decode($response->getBody(), true);
$startTime = time();

echo "task status: " . print_r($responseJson, true) . "\n";
echo "waiting 7sec for response...\n";
sleep(7);

while (true) {
    $sts = $client->get($responseJson["url"]);
    $stsJson = json_decode($sts->getBody(), true);

    if ($stsJson["status"] == "processed" || $stsJson["status"] == "failed") {
        echo 'time since request:- ' . (time() - $startTime) . " seconds\n";
        echo 'status: ' . $stsJson["status"] . "\n" . $stsJson["token"] . "\n";
        break;
    }

    echo "status: " . $stsJson["status"] . "\n";
    sleep(2);
}

```


:::




### Get  `rqdata` by reading xhr body


::: code-group
```JavaScript

const open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function () {
        this.addEventListener("readystatechange", onXHR);
        open.apply(this, arguments);
    };

    async function onXHR() {
        if (this.responseType === "" && this.responseText) {
            const responseURL = this.responseURL;
            if (responseURL.startsWith("https://hcaptcha.com/checksiteconfig")) {
                let req = JSON.parse(this.responseText)?.c.req;
                console.log("req:", req);
                await sendReq(req);
            }
        }
    }

```
```Python

import http.client
from urllib.parse import urlparse
import json
import requests

# Custom HTTPS Connection Class to intercept requests
class InterceptedHTTPSConnection(http.client.HTTPSConnection):
    def getresponse(self, *args, **kwargs):
        response = super().getresponse(*args, **kwargs)
        on_xhr(response)
        return response


http.client.HTTPSConnection = InterceptedHTTPSConnection


def on_xhr(response):
    response_url = response.geturl()

    if response_url.startswith("https://hcaptcha.com/checksiteconfig"):
        response_text = response.read().decode("utf-8")
        response_json = json.loads(response_text)
        req = response_json.get("c", {}).get("req")

        if req:
            print("req:", req)
            send_req(req)


async def send_req(req):
    # Implement your desired async function here
    pass

# Sample usage
response = requests.get("https://hcaptcha.com/checksiteconfig")
```


### Send Task Real World

:::

::: code-group
```JavaScript

async function sendReq(rq) {
    const searchParams = new URLSearchParams(location.hash);

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers,
                body: JSON.stringify({
                    sitekey: searchParams.get("sitekey"),
                    url: searchParams.get("host"),
                    type: "hcaptcha",
                     proxy: {
                        "ip": "123.45.678.9", // string
                        "port": 1234, // int
                        "username": "userid", // string
                        "password": "pass#=#rd", // string
                        "type": "https" // string "http", "socks5", "socks4" 
                    },
                    rqdata: rq,
                    useragent: navigator.userAgent,
                }),
            });
            const data = await response.json();
            if (data.status === "created") {
                console.log(data.url);
            }
        } catch (error) {
            console.error('Fetch error:', error.message);
        }
    }
```

```Python

import requests
import json
from urllib.parse import urlparse, parse_qs

# Assuming you have location_hash and endpoint like in the original JS code
location_hash = "#host=domain.com&sitekey=b17a7-90bf-4070-9296-62679"

search_params = parse_qs(urlparse(location_hash).fragment)
headers = {"Content-Type": "application/json"}

async def send_req(rq):
    payload = {
        "sitekey": search_params.get("sitekey")[0],
        "url": search_params.get("host")[0],
        "type": "hcaptcha",
        "proxy": {
            "ip": "123.45.678.9", // string
            "port": 1234, // int
            "username": "userid", // string
            "password": "pass#=#rd", // string
            "type": "https" // string "http", "socks5", "socks4" 
        },
        "rqdata": rq,
        "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"  # Replace with user agent string
    }

    try:
        response = requests.post(tokenapi, json=payload, headers=headers)
        data = response.json()
        if data["status"] == "created":
            print(data["url"])
    except Exception as error:
        print(f"Fetch error: {error}")

```
::: 
## Task Payload

```json

pSeudo 

{
    "url": "domain.com",
    "proxy": {
        "ip": "123.45.678.9", // string
        "port": 1234, // int
        "username": "userid", // string
        "password": "pass#=#rd", // string
        "type": "https" // string "http", "socks5", "socks4" 
    },
    "rqdata": "eyJ0zI1NiJ9.eyJmIjowLCJ....",
    "type":"hcaptcha",
    "sitekey": "b17a7-90bf-4070-9296-62679",
    "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)... Chrome/111.0.0.0 Safari/537.36"
}

Real

{
    "sitekey": "a5f74b19-9e45-40e0-b45d-47ff91b7a6c2",
    "url": "accounts.hcaptcha.com",
    "type": "hcaptcha",
    "proxy": {
        "ip": "123.45.678.9", // string
        "port": 1234, // int
        "username": "userid", // string
        "password": "pass#=#rd", // string
        "type": "https" // string "http", "socks5", "socks4" 
    },
    "rqdata": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmIjowLCJzIjoyLCJ0IjoidyIsImQiOiIwSlMzTWZDY2ttYlo5OE1DQmtzUi8ybWlYYnJzZldsK1hvbW9IMmNJWlNtWGdESndCdUx1NkE3djJEYzZCRzJSRWtIMjRKYlpRMFhuanc5NXVwRWdrN2NTaU1veDNnSzZFNnFCTnl4dXhVdmFTOVdRZkFmaHJ1ZWw0ZUFYK1ptbGh2WHlCUGQ0dTJ4MXZlKzRndFJqRGZiQU5Zd1Ywc2taaGd5OWtCa05wdHRqSDhvcWE5WFZoZm1Sbnc9PXZkR0JIOWEycVZaOU9VQVQiLCJsIjoiaHR0cHM6Ly9uZXdhc3NldHMuaGNhcHRjaGEuY29tL2MvNmZkZDJmMyIsImUiOjE2ODA5OTI2ODUsIm4iOiJoc3ciLCJjIjoxMDAwfQ.Lfp5o-dIBYCUpKTG13XqcyF3vXGmcOaJ1dOF5cl5bmA",
    "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
}
```

## Task RESPONSE

```json
{
    "id": "h_tok_cfnrmz_jLbu7SR4k",
    "message": "Task created.",
    "status": "created",
    "url": "https://token.nocaptchaai.com/token?id=h_tok_cfnrmz_jLbu7SR4k"
}
```

## Task Status - Processing

GET => `https://token.nocaptchaai.com/token?id=h_tok_cfnrmz_jLbu7SR4k`

```json
{
    "message": "processing",
    "status": "processing"
}

```
## Task Status - Failed

GET => `https://token.nocaptchaai.com/token?id=h_tok_cfnrmz_jLbu7SR4k`

```json
{
    "message": "failed",
    "status": "failed"
}

```
## Task Success

GET => `https://token.nocaptchaai.com/token?id=h_tok_cfnrmz_jLbu7SR4k`

```json
{
    "message": "",
    "status": "processed",
    "success": true,
    "token": "P1_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.hKdwYXNza2V5xQcX5uUJ_ole3QJJMt7fjZQ-1KsJKG6bwnJ-G6ygvAHEnGclvH__kBbFSfIjZXzCysdPmP7BA-D3gul7QC6NWUMip_6Gk7eZxbPDmSNkwwjAldGYChjk1hfPF79qB7DPRER75lAxMdA4zDBRQCveKHUaxXiPi2kznsCOtDds-d-2NVQBLZYiajNqZnl_dfarb_xriuA0iLi3XWMX11ZETZkTOkykBcmJMm4tP5tm36dKssWBbVHXrYUDL7mm2VXgJ7eHBeUPL942UBCFnO6wDlveEj_cgbWYmN6lrRVc5ZDVmvWicvliHnPfqrqU3-wtRCYAmMiRRd2ESopuXuht1yHidkCtRCVrPfc9mXAYHetitqZndanYjlWgpV6JyRD34qBG-z-mDU3FXULL1uR60rmicK2cdDvWhbXaJo0IfCij-sEUYsH1UL-DPa9vM_f3ZQUu2ddsuiDw5LT8dxFbAkkfI8fCeFjDNhDGF3n_h8Q7DHGR3dPI4t-s0WZINcW_Cgrl4a9Nh1Z6LSBSCZIC74ViXWQ-ioArK7pJtIKt3fF1kkeSfbryMhgSK6zOpNslMgyRoUoxOWGs7V6P2wtoZYC4i_lLFQIL6ERiU7low7UOEXx8y5zk4LvoctS_Wo-tfFG6Y04DKUUMxhswn7AKGND8R4GDPlz2ee7-WPtAWfEHYxou_u8qBSyXSiCdd-Hgx0k6T6RIsi4HkUYYOzOtCxy5Oy2akbkTwEOfXPYBmbB7ug9qre4MecfoV416Fo_QX27n-MjnzaUZJMDf0aGH12WPDfR2evuHvZu8Tve5vVPVZlZ9nX3dsXZC5ckJe_9015nXJ9DpFF_AT1pdLE_PkMpyhJ-KtjkOa0Tq5AqscrakQZSGMXbmHeYF5tKQYRNy7fZKTGyqjHusMyBe8N8TtynFESXZ66h0GOXpL10HP3VAKZz0mDZHqWRkHazrjcauX9eDgV_tDmM6-lPzFBd62ZJT_rJbm62oTx5J9yDLU9eYJ-JgoxZs8b2hyowf_6MN92MyuXyBuHRGxzXdjDfmQ1mVExOpINsv4TV_fA76Fo9gWiUlSeeJ1tLa4ND9XBGk-_tzt8D2r8M2Ib-27v191lHeQqOhh1OjQgjcH44gydAuWBf31R_qEqKzixqRaKTI1CueK_ejAqKB5GmUwjddXDL62TmEiRmQJAtqFOc143NHnbzig1diTVsw7GfmQkbzW8cwznwZD6xKWbCMLm1Q5AuixVdOq11g7CIAFBbfRVaIb-MYShLjtOh7ylOZrXQ3VSrfS3xRDdTqP8uU-MUWxCAh35i4hRt190ny_3NHWVJ_8Dh9irmF7ZV6UuXQXaNkbTtjEfKwNWE7AnvpSmVGUbsGuw4htd0l1eux8FtGzByWr4Kl3kv6CKLfEYKUhwLJDU2xk1lmLw8o5gOglkujx0QuXXzmsZJ0R2fQ46tznmpjQsP1ss0pXnRu753QlDRoh2ya2CyL-cVDmLroV99veBmRRr-Yc7xjoCaTdTjUrOuExpFSyHamyB6xVAzhA4Xxek4pwA5dY-kakRyiKNu9ZFJsgTGBroR9TgH4BA_EZ5E8T7PqRJbjlYj3FuU3jAL66xM7EGBSf6zbv5Xr0NxZQzFSOow1y_AmSMVITnpU90Yu5YlJ2_wDukTszslaDttl5qslKDPcA0tSTjq6FbfdWGGSP4Z2w7e_UxG0N9g8AQ3s3JdUOl7VXojEtRwT1LmA1EZo4VWRyIEwKesrez3V2QygwlyIYYjtOK7DLBEAomxE8p5zl1YZaXZI-l6KquCpSY-cTidwSMJjta2VoRsskPBo6aNCrwmqKXgTuzvfkTJwz-V7Kk_JEeeTmvFEJb0gFlAsjaQm-QoP-ixrtCPlYBrPy88uTf8wyBLr0hDinA0JGscRDEcLtzIiZbOadlxPx5-miM_VHyZcowrB8DZG3vzfCvz6Jasa1aaZXe45U5ZQNifZfPVHk0o2C8igS2v5UYuqUDZ33vGn8BDV5ALsss8BIK_Vmrc9mu4TtJgKQ78ZAo2yoMAAvm9ejuAGHJuYBeXNvJWr2I2fgIaHABM7LRyywOX7kdq-GHDjxX7HWk7_5snqhsdbD0kimMDfaoryVuqLwfDZ5faMcITe1onP02aoXqukkjbgKd0CvLmSREPNR3ZQimjVSmZcKeUWKIP1b37oL2h9wK6k1iERB9hs3coDMVeQ0uo9vqfw-UR2TBjAqxmVknocQ7ik5__eAFitr7N9ib-ELc0oozG5SSi0JVQgQsajFNDmgeJxH2I8r1h70hXSr06WtqkjiRmloAKhtBNpN4Mf4ti2iBsudAAgv2VPAqHWVoOCrYRoRr2EjaGsnAI69ckU6-bTHlVIxLz104gYGY3Q4xSspbBpDRkWluMBVsH1BFIynFMPixpdLbV3BgFpYoZf4cFMo2V4cM5kMenuqHNoYXJkX2lkzhQ8hB-icGQA.jppBDVbJ8MPH5hdYxs7_D1lwYJB_KhhNv8HuY7Ign7M"
}

```

## Task Failed

GET => `https://token.nocaptchaai.com/token?id=h_tok_cfnrmz_jLbu7SR4k`

```json
 {
    "message": "failed",
    "success": false,
}

```
