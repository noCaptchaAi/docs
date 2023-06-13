import requests
import base64
from PIL import Image
from io import BytesIO

def image_to_base64(image_url):
    response = requests.get(image_url)
    img = Image.open(BytesIO(response.content))
    img_buffer = BytesIO()
    img.save(img_buffer, format='PNG')
    return base64.b64encode(img_buffer.getvalue()).decode('utf-8')

payload = {
    "method": "ocr",
    "image": image_to_base64("https://i.postimg.cc/SK1RVmYC/defs.png")
}

headers = {
    "Content-Type": "application/json",
    "apikey": "sope-abff7276-6a36-052c-89ee-56c5d40f99a3"
}

def send_request():
    try:
        response = requests.post("https://pro.nocaptchaai.com/solve", json=payload, headers=headers)
        data = response.json()
        print(data)
        print(data["solution"])

    except Exception as error:
        print(f"Fetch error: {error}")

send_request()
