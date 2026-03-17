var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_NANDO_1 = new ol.format.GeoJSON();
var features_NANDO_1 = format_NANDO_1.readFeatures(json_NANDO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NANDO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NANDO_1.addFeatures(features_NANDO_1);
var lyr_NANDO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NANDO_1, 
                style: style_NANDO_1,
                popuplayertitle: 'NANDO',
                interactive: true,
    title: 'NANDO<br />\
    <img src="styles/legend/NANDO_1_0.png" /> 23 - 93<br />\
    <img src="styles/legend/NANDO_1_1.png" /> 93 - 162<br />\
    <img src="styles/legend/NANDO_1_2.png" /> 162 - 231<br />\
    <img src="styles/legend/NANDO_1_3.png" /> 231 - 301<br />\
    <img src="styles/legend/NANDO_1_4.png" /> 301 - 370<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_NANDO_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_NANDO_1];
lyr_NANDO_1.set('fieldAliases', {'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'POP_NANDO_': 'POP_NANDO_', 'SUP': 'SUP', 'DENSITE': 'DENSITE', });
lyr_NANDO_1.set('fieldImages', {'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'POP_NANDO_': 'TextEdit', 'SUP': 'TextEdit', 'DENSITE': 'TextEdit', });
lyr_NANDO_1.set('fieldLabels', {'Nom': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'POP_NANDO_': 'no label', 'SUP': 'no label', 'DENSITE': 'no label', });
lyr_NANDO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});