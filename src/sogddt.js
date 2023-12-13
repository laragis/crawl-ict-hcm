import fs from 'fs'
import axios from 'axios'

axios.get('https://apigateway.hcm.edu.vn/WAPINetCore/GIS/getDiemTruong').then(resp => {
  fs.writeFileSync('data/sogddt.geojson', JSON.stringify(resp.data.result))
})

