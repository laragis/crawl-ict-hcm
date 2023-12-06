import downloadLayer from "./downloadLayer"
import downloadLayerMeta from "./downloadLayerMeta"
import layerToGeoJSON from "./layerToGeoJSON"
import writeLayer from "./writeLayer"

async function getLayer(layerName, returnFields, geometryField){
    await downloadLayerMeta(layerName, returnFields)
    await downloadLayer(layerName, returnFields)
    writeLayer(layerName, layerToGeoJSON(layerName, geometryField))
}

export default getLayer