const imageToBase64 = async (imageUrl) => {
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();
  const base64Data = Buffer.from(buffer).toString('base64');
  return base64Data;
};

(async () => {
  const headers = {
    'Content-Type': 'application/json',
    'apikey': 'sope-abff7276-6a36-052c-89ee-56c5d40f99a3'
  };

  const payload = {
    method: 'ocr',
    image: await imageToBase64('https://i.postimg.cc/SK1RVmYC/defs.png')
  };

  try {
    const response = await fetch('https://pro.nocaptchaai.com/solve', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log(data);
    console.log(data.solution);
  } catch (error) {
    console.log('Request error:', error.message);
  }
})();
