import fs from 'fs'

function writeLayer(layerName, data){
    fs.writeFileSync(`data/${layerName}.geojson`, JSON.stringify(data, null, "\t"))
    console.log(`${layerName}.geojson - Written`)
}

export default writeLayer