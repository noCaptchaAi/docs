---
title: Send ReCaptcha Audio Task
lang: en-US
---

# ReCaptcha Audio to Text Task `POST`

`Pricing: 3500 Requests/ 1$`

`Per Audio to Text COST: 2 Requests `


```
POST => https://audio.nocaptchaai.com/solve
headers:
 "content-type": multipart/form-data; boundary=----WebKitFormBoundary7ZBVIyvTjAwwlxhv
 "apikey": "apikey"



```

## Send Audio Task

::: code-group

```JavaScript
const response = await fetch(audiourl),
  arrayBuffer = await response.arrayBuffer();
  const mp3Blob = new Blob([arrayBuffer], { type: "audio/mp3" });
  const formData = new FormData();

  formData.append("audio", mp3Blob, "audio.mp3");
  formData.append("method", "rcaudio");

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: { apikey: api_key },
    body: formData,
  });

  const data = await res.json();
  if (res.ok) {
    return [data.solution, data.id];
  } else {
    return res.message;
  }

```



:::

## Task Payload

```js
  const response = await fetch(audiourl),
  arrayBuffer = await response.arrayBuffer();
  const mp3Blob = new Blob([arrayBuffer], { type: "audio/mp3" });
  const formData = new FormData();

  formData.append("audio", mp3Blob, "audio.mp3");
  formData.append("method", "rcaudio");

```

## Task SUCCESS

```json
{
    "id": "hgrid_tV779R_3rkXegg_d",
    "solution": "demographic groups in"
}

```
