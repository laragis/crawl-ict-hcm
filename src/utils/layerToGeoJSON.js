import fs from 'fs'
import { omit, snakeCase, mapKeys } from 'lodash'
import { featureCollection } from '@turf/helpers'

function layerToGeoJSON(layerName, geometryField) {
    const content = fs.readFileSync(`data/${layerName}.json`, 'utf-8')
    const data = JSON.parse(content)

    let geometry = data['ViTri']

    const features = data.map(v => ({
        type: 'Feature',
        geometry: JSON.parse(v[geometryField]),
        properties: mapKeys(omit(v, [geometryField]), (v, k) => k)
    }))

    return featureCollection(features)
}

export default layerToGeoJSON