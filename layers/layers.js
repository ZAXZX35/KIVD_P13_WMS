var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasAdministrasi_1 = new ol.format.GeoJSON();
var features_BatasAdministrasi_1 = format_BatasAdministrasi_1.readFeatures(json_BatasAdministrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdministrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdministrasi_1.addFeatures(features_BatasAdministrasi_1);
var lyr_BatasAdministrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdministrasi_1, 
                style: style_BatasAdministrasi_1,
                popuplayertitle: 'Batas Administrasi',
                interactive: true,
                title: '<img src="styles/legend/BatasAdministrasi_1.png" /> Batas Administrasi'
            });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_SMA_3 = new ol.format.GeoJSON();
var features_SMA_3 = format_SMA_3.readFeatures(json_SMA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMA_3.addFeatures(features_SMA_3);
var lyr_SMA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMA_3, 
                style: style_SMA_3,
                popuplayertitle: 'SMA',
                interactive: true,
                title: '<img src="styles/legend/SMA_3.png" /> SMA'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BatasAdministrasi_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_SMA_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BatasAdministrasi_1,lyr_Jalan_2,lyr_SMA_3];
lyr_BatasAdministrasi_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SMA_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_BatasAdministrasi_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SMA_3.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'KATPDK': '', 'JLPDDK': '', 'FGGPDK': '', 'REMARK': '', 'FCODE': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JJGPDF': '', 'JNSPDL': '', });
lyr_BatasAdministrasi_1.set('fieldLabels', {'KDPPUM': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'KDPBPS': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'KDEBPS': 'inline label - always visible', 'KDEPUM': 'inline label - always visible', 'KDCBPS': 'inline label - always visible', 'KDCPUM': 'inline label - always visible', 'KDBBPS': 'inline label - always visible', 'KDBPUM': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WIADKD': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WIADKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WIADKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADPR': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_Jalan_2.set('fieldLabels', {'NAMRJL': 'inline label - always visible', 'KONRJL': 'inline label - always visible', 'MATRJL': 'inline label - always visible', 'FGSRJL': 'inline label - always visible', 'UTKRJL': 'inline label - always visible', 'TOLRJL': 'inline label - always visible', 'WLYRJL': 'inline label - always visible', 'AUTRJL': 'inline label - always visible', 'KLSRJL': 'inline label - always visible', 'SPCRJL': 'inline label - always visible', 'JPARJL': 'inline label - always visible', 'ARHRJL': 'inline label - always visible', 'STARJL': 'inline label - always visible', 'KLLRJL': 'inline label - always visible', 'MEDRJL': 'inline label - always visible', 'LOCRJL': 'inline label - always visible', 'JARRJL': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', });
lyr_SMA_3.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'KATPDK': 'inline label - always visible', 'JLPDDK': 'inline label - always visible', 'FGGPDK': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'JJGPDF': 'inline label - always visible', 'JNSPDL': 'inline label - always visible', });
lyr_SMA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});