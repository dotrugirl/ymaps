ym.modules.define('layout.MapStateInfoWindowLayout', [
    'templateLayoutFactory',
    'layout.storage',
    'template.filter.json'
], function (provide, templateLayoutFactory, layoutStorage) {
    var MapStateInfoWindowLayout = templateLayoutFactory.createClass([
        '<div class="popover top mapstateinfo-window">',
            '<div class="popover-inner">',
            '<form class="form-horizontal">',
                '<div class="control-group">',
                    '<label class="control-label" for="markerCenter">Метка</label>',
                    '<div class="controls">',
                        '<input type="text" id="markerCenter" class="input-mini" value="{{ data.markerCenter|json }}">',
                    '</div>',
                '</div>',
                '<div class="control-group">',
                    '<label class="control-label" for="mapZoom">Масштаб</label>',
                    '<div class="controls">',
                        '<input type="text" id="mapZoom" class="input-mini" value="{{ data.mapZoom }}">',
                    '</div>',
                '</div>',
                '<div class="control-group">',
                    '<label class="control-label" for="mapCenter">Центр</label>',
                    '<div class="controls">',
                        '<input type="text" id="mapCenter" class="input-mini" value="{{ data.mapCenter|json }}">',
                    '</div>',
                '</div>',
                '<div class="control-group">',
                    '<label class="control-label" for="mapBounds">Область</label>',
                    '<div class="controls">',
                        '<input type="text" id="mapBounds" class="input-mini" value="{{ data.mapBounds|json }}">',
                    '</div>',
                '</div>',
            '</form>',
            '</div>',
        '</div>'
    ].join(''));

    layoutStorage.add('mapstate#window', MapStateInfoWindowLayout);

    provide(layoutStorage);
    // provide(MapStateInfoWindowLayout);
});