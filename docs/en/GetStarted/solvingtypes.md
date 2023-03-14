---
title: Image Recognition
lang: en-US
---

# Image Recognition :framed_picture:

---

- Base64 of Images

::: code-group

```JavaScript{2,4}
body: JSON.stringify({
    images: {}, // base64 `object {}` of images
    target: "Please click each image containing a basketball",
    method: "hcaptcha_base64", // method name
    sitekey: xx-xx-xx-xx, // eg. b17a7-90bf-4070-9296-62679
    site: domain.com, // url of the website
    ln: "en" or  "ru" or  "ar", // language of the captcha
})
```

```Python
task_result = requests.post(apiurl, json={
    "images": {}, # base64 `object {}` of images
    "target": "Please click each image containing a basketball",
    "method": "hcaptcha_base64",
    "site": "domain.com",
    "sitekey": "xx-xx-xx-xx", # eg. b17a7-90bf-4070-9296-62679
}, headers={
    "Content-type": "application/json",
    "apikey": "apikey"
}.json())

```

```Java{2,4}
import com.google.gson.Gson;

...

Gson gson = new Gson();
Map<String, Object> body = new HashMap<>();
body.put("images", new HashMap<String, Object>()); // base64 `object {}` of images
body.put("target", "Please click each image containing a basketball");
body.put("method", "hcaptcha_base64"); // method name
body.put("sitekey", "xx-xx-xx-xx"); // eg. b17a7-90bf-4070-9296-62679
body.put("site", "domain.com"); // url of the website
body.put("ln", "en" or  "ru" or  "ar"); // language of the captcha

String jsonBody = gson.toJson(body);
```

```PHP
$data = array(
    "images" => array(), // base64 `object {}` of images
    "target" => "Please click each image containing a basketball",
    "method" => "hcaptcha_base64", // method name
    "sitekey" => "xx-xx-xx-xx", // eg. b17a7-90bf-4070-9296-62679
    "site" => "domain.com", // url of the website
    "ln" => "en" // language of the captcha
);

$json = json_encode($data);
$body = $json;

```

```Go
import (
    "bytes"
    "encoding/json"
    "net/http"
)

func main() {
    data := map[string]interface{}{
        "images":  map[string]interface{}{}, // base64 `object {}` of images
        "target":  "Please click each image containing a basketball",
        "method":  "hcaptcha_base64", // method name
        "sitekey": "xx-xx-xx-xx", // eg. b17a7-90bf-4070-9296-62679
        "site":    "domain.com", // url of the website
        "ln":      "en", // language of the captcha
    }
}

```

```C#
using System.Net.Http;
using System.Text.Json;

var data = new Dictionary<string, object>
{
    { "images", new Dictionary<string, string>() }, // base64 `object {}` of images
    { "target", "Please click each image containing a basketball" },
    { "method", "hcaptcha_base64" }, // method name
    { "sitekey", "xx-xx-xx-xx" }, // eg. b17a7-90bf-4070-9296-62679
    { "site", "domain.com" }, // url of the website
    { "ln", "en" } // language of the captcha
}
```

```C
#include <iostream>
#include <string>
#include <nlohmann/json.hpp> // include the json library

using json = nlohmann::json;

int main() {
    // create a json object
    json captcha_data = {
        {"images", {}}, // base64 `object {}` of images
        {"target", "Please click each image containing a basketball"},
        {"method", "hcaptcha_base64"}, // method name
        {"sitekey", "xx-xx-xx-xx"}, // eg. b17a7-90bf-4070-9296-62679
        {"site", "domain.com"}, // url of the website
        {"ln", "en" or "ru" or "ar"} // language of the captcha
    };

    // convert the json object to a string
    std::string captcha_data_str = captcha_data.dump();

    // output the string
    std::cout << captcha_data_str << std::endl;

    return 0;
}
```

```Rust
use serde_json::{json, Value};

fn main() {
    let data: Value = json!({
        "images": {}, // base64 `object {}` of images
        "target": "Please click each image containing a basketball",
        "method": "hcaptcha_base64", // method name
        "sitekey": "xx-xx-xx-xx", // eg. b17a7-90bf-4070-9296-62679
        "site": "domain.com", // url of the website
        "ln": "en", // language of the captcha
    });

    let body = data.to_string();
}
```

:::

- Screenshot of 3x3 Grid Sliced Images

::: warning
::: check in.php for more info.
:::

- Image urls (⚠️ slow and will be deprecated )

![api info](/hc.png)

---

# OCR / Text Recognition

---

![api info](/probot.png)

::: code-group

```javascript
data: JSON.stringify({
  method: "ocr",
  image, // base64 of image
});
```

```PYTHON
data = {
    "method": "ocr",
    "image": image # base64 of image
}

```

:::
