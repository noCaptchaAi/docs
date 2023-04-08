---
title: Get Solve Status
lang: en-US
---

# `GET` Solve Status


## From `postSolveTask` response

```json{7}
{
  "id": "h-ZEQEvJzqtCTuSQak",
  "processing_time": "0.02s",
  "solution": [0, 1, 2, 6, 7, 8],
  "status": "solved",
  "target": "basketball",
  "url": "https://pro.nocaptchaai.com/status?id=h-ZEQEvJzqtCTuSQak"
}
```

## Get Task Status

::: code-group

```py
import requests
url = "https://pro.nocaptchaai.com/status?id=h-ZEQEvJzqtCTuSQak"
headers = {
    "Accept-Language": "last-requested-languages"
    "apikey": "apikey"
}
response = requests.get(url, headers=headers)
print(response.text)
```

```rust
use reqwest::header::{HeaderValue, ACCEPT_LANGUAGE};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "https://pro.nocaptchaai.com/status?id=h-ZEQEvJzqtCTuSQak";
    let client = reqwest::Client::new();
    let mut headers = reqwest::header::HeaderMap::new();
    headers.insert(ACCEPT_LANGUAGE, HeaderValue::from_str("last-requested-languages")?);

    let response = client
        .get(url)
        .headers(headers)
        .send()
        .await?
        .text()
        .await?;

    println!("{}", response);

    Ok(())
}
```

```js
const https = require("https");

const options = {
  headers: {
    "Accept-Language": "last-requested-languages",
  },
};

https
  .get(
    "https://pro.nocaptchaai.com/status?id=h-ZEQEvJzqtCTuSQak",
    options,
    (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        console.log(data);
      });
    }
  )
  .on("error", (err) => {
    console.error(err);
  });
```

```java
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        String url = "https://pro.nocaptchaai.com/status?id=h-ZEQEvJzqtCTuSQak";
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("GET");

        con.setRequestProperty("Accept-Language", "last-requested-languages");

        BufferedReader in = new BufferedReader(
            new InputStreamReader(con.getInputStream())
        );

        String inputLine;
        StringBuilder response = new StringBuilder();
        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        System.out.println(response.toString());
    }
}


```

```c#
using System;
using System.IO;
using System.Net;

class MainClass {
    static void Main(string[] args) {
        string url = "https://pro.nocaptchaai.com/status?id=h-ZEQEvJzqtCTuSQak";
        HttpWebRequest request = (HttpWebRequest)WebRequest.Create(url);
        request.Method = "GET";
        request.Headers["Accept-Language"] = "last-requested-languages";

        HttpWebResponse response = (HttpWebResponse)request.GetResponse();

        using (StreamReader reader = new StreamReader(response.GetResponseStream())) {
            string responseText = reader.ReadToEnd();
            Console.WriteLine(responseText);
        }
    }
}

```

```go
package main

import (
    "fmt"
    "net/http"
)

func main() {
    url := "https://pro.nocaptchaai.com/status?id=h-ZEQEvJzqtCTuSQak"
    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        fmt.Println(err)
        return
    }

    req.Header.Set("Accept-Language", "last-requested-languages")

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        fmt.Println(err)
        return
    }

    fmt.Println(string(body))
}
```

```php
<?php

$url = 'https://pro.nocaptchaai.com/status?id=h-ZEQEvJzqtCTuSQak';

$options = [
  'http' => [
    'header' => 'Accept-Language: last-requested-languages'
  ]
];

$context = stream_context_create($options);

$response = file_get_contents($url, false, $context);

echo $response;

?>

```

```c
requirements:
`sudo apt-get install libcurl4-openssl-dev`

#include <iostream>
#include <curl/curl.h>

int main() {
    CURL* curl;
    CURLcode res;

    curl = curl_easy_init();
    if (curl) {
        struct curl_slist* headers = NULL;
        headers = curl_slist_append(headers, "Accept-Language: last-requested-languages");

        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
        curl_easy_setopt(curl, CURLOPT_URL, "https://pro.nocaptchaai.com/status?id=h-ZEQEvJzqtCTuSQak");

        res = curl_easy_perform(curl);
        if (res != CURLE_OK) {
            std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
        }

        curl_easy_cleanup(curl);
    }

    return 0;
}
```

```ruby
require 'net/http'
url = URI('https://pro.nocaptchaai.com/status?id=h-ZEQEvJzqtCTuSQak')
req = Net::HTTP::Get.new(url)
req['Accept-Language'] = 'last-requested-languages'

res = Net::HTTP.start(url.hostname, url.port, use_ssl: true) do |http|
  http.request(req)
end
puts res.body
```

:::
