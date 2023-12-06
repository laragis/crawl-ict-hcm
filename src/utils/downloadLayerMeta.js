import axios from 'axios'
import config from '../config'
import fs from 'fs'

function downloadLayerMeta(layerName){
    return axios.request({
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://bando.tphcm.gov.vn/service/vdms/api/v1/layers/ICTHCM_HCM_NGANHANG',
        headers: {
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.9',
            'Connection': 'keep-alive',
            'Cookie': '_ga=GA1.3.1327928372.1700725153; _pk_id.5.ffea=3cbded178e1f74c9.1700725156.; _ga_9XBM2LBPMS=GS1.3.1701160266.1.0.1701160266.60.0.0; _gid=GA1.3.1545797763.1701771163; vdmsPublicAccesstoken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6InB1YmxpY19sYXllcl9kYXRhIiwidXNlcm5hbWUiOiJwdWJsaWNfbGF5ZXJfZGF0YSIsInBJZHMiOiI2MDQ4IiwiaWQiOiIyNDkiLCJuYW1lIjoicHVibGljX2xheWVyX2RhdGEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9oZ2lzMi52aWV0YmFuZG8udm4vYXBpL3YyL3VzZXJzL3VzZXJpbmZvL3BpY3R1cmUvcHVibGljX2xheWVyX2RhdGFAdmJkLnZuL3AiLCJlbWFpbCI6InB1YmxpY19sYXllcl9kYXRhQHZiZC52biIsImlhdCI6IjE2OTU4ODgxNTkiLCJpc3MiOiJ2ZG1zIiwiZXhwIjoyMDExMjQ4MTU5LCJuYmYiOjE2OTU4ODgxNTl9.Gfd7SJFb04iglrr6otWn1Fp3HrnZ2RIfmVXPGDziVoQ; _pk_ref.5.ffea=%5B%22%22%2C%22%22%2C1701844766%2C%22https%3A%2F%2Fapp.raindrop.io%2F%22%5D; _pk_ses.5.ffea=1; TS01c4b7aa=0150c7cfd1bd357f7308817a0068cd4fd1fcf6881a38c999bfa58dbdb36832371681fedf92b5de0954af66cb21dcd9239bfb15098d673646337609d0c71b06441656d71b66; TS0146297d=0150c7cfd1c9b4f256d008ccef71bd9fbbe9721bd1f74b5cef0675afc75f638b2526f453fe1c0513ab441a44065c05ecb93a275e3ccc91f8a9888702d915c2c1ed227224db; _frontend=!jtSPi0NPmKqkrBAd/4MJlWSZEi73ee1VRh6+34PPWnFfhMNvbmKy2LwhJZwsMqnAinmmqx6FaFlgYnw=; TS013f4524=0150c7cfd1a261cdccf7a5604d92f0b220d2efb5d841d18aa91f04edb68f197d9ef955ab6452aee7d5230af2e56751cd97256949686e18b9ab212769db1f2af52e38ee5209c6c8691b7ba22dccd4b364660969d8c9; TS0146297d=0150c7cfd1abb6eb6a953e3f3eb40e7cdb6f870cef97b48ea83aa6f2f8f05e5840b3f6ce9e5bfd5b5fb56839f19efb1d17f122f7295693c99be5999e45452ee361c795d594; TS013f4524=0150c7cfd12da72e320d4927fc1a708d5999a41275759816742bb4e5553a96365514e5de1f46c76e0ae3b8fe8b62624c288d1ca454f326b056498027c290764b3abfbc01899cb4f2591524eb05ae162a56faf94f25; _frontend=!0dluMFbMiofqAnEd/4MJlWSZEi73eSf7wetJzhFCKlsApcVlO5nMjGdCGafTER6dCGF/b0tDeF5okAo=',
            'Referer': 'https://bando.tphcm.gov.vn/gis-portal',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'authorization': 'bearer ' + config['token'],
            'content-type': 'application/json',
            'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"'
        }
    })
        .then((response) => {
            fs.writeFileSync(`data/${layerName}.meta.json`, JSON.stringify(response.data.data, null, "\t"));
            console.log(`${layerName}.meta.json - Done`)
        })
        .catch((error) => {
            console.log(error);
        });
}

export default downloadLayerMeta
