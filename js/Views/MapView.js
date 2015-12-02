/**
 * @author      Nikita Davydovsky   
 * @since       2015-12-01          (the version of the package this class was first added to)
 */

var app = app || {};

(function () {
    'use strict';

    // Представление для карты
    app.MapView = Backbone.View.extend({
        el: '#map',
    
        initialize: function (options) {
            this.options = options;
            this.map = L.map(this.el).setView([61.7830, 34.350], 10);

            this.map.addEventListener('click', this.handleMapClick, this);
            this.listenTo(this.collection, 'add', this.addMarker);           
            this.listenTo(this.collection, 'reset', this.addAllMarkers);
            this.listenTo(this.options.state, 'change:activePoint', this.focusOnPoint);

            // Загрузить коллекцию из хранилища
            this.collection.fetch({reset: true});
        },

        /**
         * Отрисовка представления с тайлами карты
         */ 
        render: function () {
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.map);
            return this;
        },
        
        /**
         * При клике на карту, добавить точку в коллекцию с координатами места клика
         * @param {Object} Объект клика Leaflet
         */ 
        handleMapClick: function (target) {
            this.collection.createPoint(target.latlng.lat, target.latlng.lng);
        },
        
        /**
         * Добавить маркер на карту
         * @param {Point} Точка
         */
        addMarker: function (point) {
            var marker = L.marker([point.get('lat'), point.get('lng')], {title: point.get('title')});
            this.map.addLayer(marker);
        },
        
        /**
         * Добавить маркеры для всех точек коллекции
         */
        addAllMarkers: function () {
            this.clearMap();
            this.collection.each(this.addMarker, this);
        },
        
        /**
         * Установить центр карты в заднную точку
         * @param {State} Состояние приложения
         */
        focusOnPoint: function (state) {
            var point = state.get('activePoint');
            this.map.setView(new L.LatLng(point.get('lat'), point.get('lng')), 13, {animate: true});
        },
        
        /**
         * Убрать все слои с карты
         */
        clearMap: function () {
            this.map.eachLayer(function (layer) {
                this.map.removeLayer(layer);
            });
        }
    });
})();