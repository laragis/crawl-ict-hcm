import getLayer from "./utils/getLayer"
import fs from 'fs'

(async () => {
    await getLayer('ICTHCM_HCM_NGANHANG', [
        "ViTri", "Name", "Title", "Description", "TenNganHang", "ToaNha", "SoNha", "Tang", "Phong", "TenDuong", "PhuongXa", "QuanHuyen", "TinhThanhPho", "DiaChi", "SoDienThoai", "SoFax", "GhiChu", "Longitude", "Latitude", "Title", "Layer"
    ], 'ViTri')
})()