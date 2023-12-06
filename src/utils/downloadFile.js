import ProgressBar from 'progress'
import axios from 'axios'
import fs from 'fs'
import path from 'path'
import config from '../config'

async function downloadFile(url, filename, options = {}) {
    console.log(`Connecting … (${url})`)
    const { data, headers } = await axios({
        method: 'post',
        maxBodyLength: Infinity,
        headers: {
            'Accept': '*/*',
            'Accept-Language': 'en-US,en;q=0.9',
            'Connection': 'keep-alive',
            'Cookie': '_ga=GA1.3.1327928372.1700725153; _pk_id.5.ffea=3cbded178e1f74c9.1700725156.; _ga_9XBM2LBPMS=GS1.3.1701160266.1.0.1701160266.60.0.0; _gid=GA1.3.1545797763.1701771163; vdmsPublicAccesstoken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6InB1YmxpY19sYXllcl9kYXRhIiwidXNlcm5hbWUiOiJwdWJsaWNfbGF5ZXJfZGF0YSIsInBJZHMiOiI2MDQ4IiwiaWQiOiIyNDkiLCJuYW1lIjoicHVibGljX2xheWVyX2RhdGEiLCJwaWN0dXJlIjoiaHR0cHM6Ly9oZ2lzMi52aWV0YmFuZG8udm4vYXBpL3YyL3VzZXJzL3VzZXJpbmZvL3BpY3R1cmUvcHVibGljX2xheWVyX2RhdGFAdmJkLnZuL3AiLCJlbWFpbCI6InB1YmxpY19sYXllcl9kYXRhQHZiZC52biIsImlhdCI6IjE2OTU4ODgxNTkiLCJpc3MiOiJ2ZG1zIiwiZXhwIjoyMDExMjQ4MTU5LCJuYmYiOjE2OTU4ODgxNTl9.Gfd7SJFb04iglrr6otWn1Fp3HrnZ2RIfmVXPGDziVoQ; _pk_ref.5.ffea=%5B%22%22%2C%22%22%2C1701844766%2C%22https%3A%2F%2Fapp.raindrop.io%2F%22%5D; _pk_ses.5.ffea=1; TS01c4b7aa=0150c7cfd1bd357f7308817a0068cd4fd1fcf6881a38c999bfa58dbdb36832371681fedf92b5de0954af66cb21dcd9239bfb15098d673646337609d0c71b06441656d71b66; _frontend=!Ki28Y8jqX8un83kd/4MJlWSZEi73eQZIMpcqB5D/Dbv75fvPsfma7mFHuxMSe4uEo3PgUVqg0QZBM9s=; TS0146297d=0150c7cfd1d567498c70658eef9dca20f1162bac53b6fef2a6fd519063fe9accef226d6031061e3f20a25341f48df953d1247e29f5ca233a3a1194418fd51285d09cd0b3fb; TS013f4524=0150c7cfd13ccfacdbbca0ffc1ef4251406b81bd9e41d18aa91f04edb68f197d9ef955ab6452aee7d5230af2e56751cd9725694968b541f57d12cdc3cc2f844f0969bfa3efe4d8ad52863b2036f7bbea981539bc8f',
            'Origin': 'https://bando.tphcm.gov.vn',
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
        },
        url,


        ...options
    })

    const totalLength = headers['content-length']

    const progressBar = new ProgressBar(`-> Downloading [${filename}] [:bar] :percent :etas`, {
        width: 40,
        complete: '=',
        incomplete: ' ',
        renderThrottle: 1,
        total: parseInt(totalLength)
    })

    // const writer = fs.createWriteStream(
    //     path.resolve(process.cwd(), 'data', filename)
    // )

    data.on('data', (chunk) => progressBar.tick(chunk.length))
    data.on('end', function () {
        console.log(`Done [${filename}]`)
    })
    // data.pipe(writer)
}


export default downloadFile