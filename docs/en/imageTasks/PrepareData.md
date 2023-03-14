---
title: Image Recognition
lang: en-US
---

# Prepare `postSolveTask` data

---

Helper to prepare data for [`postSolveTask`](./postSolveTask) method.

| Required    | Method      | Description                                                                        |
| ----------- | ----------- | ---------------------------------------------------------------------------------- |
| `Required ` | `endpoint ` | api server url explained in [basics](../api/basics)                                |
| `Required ` | `apikey`    | apikey for user authentication found in here [dash](https://dash.nocaptchaai.com/) |
| `Required ` | `target`    | challenge target name on Captcha Frame                                             |
| `Required ` | `method`    | our internal param to identify solving method                                      |
| `optional ` | `sitekey`   | hCaptcha sitekey found on DOM html                                                 |
| `optional ` | `site`      | captcha page url                                                                   |
| `Required ` | `ln`        | language of captcha frame/target                                                   |

![api info](/prepare.png)
![api info](/sitekey.png)
