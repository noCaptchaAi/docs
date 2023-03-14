import requests
import json
api = "https://manage.nocaptchaai.com/balance"

balance = requests.get(
    api, headers={'apikey': 'sope-0eac2e22-577e-5ab2-e811-726221f22af1'})
print(json.dumps(balance.json(), indent=4))
