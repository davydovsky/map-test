/**
 * @author      Nikita Davydovsky   
 * @since       2015-12-01          (the version of the package this class was first added to)
 */

var app = app || {};

(function () {
    'use strict';

    // Коллекция точек
    app.PointCollection = Backbone.Model.extend({
        // Модель - точка
        model: app.Point,
        
        // Сохранение точек в локальном хранилище
        localStorage: new Backbone.LocalStorage('point-collection'),
        
        /**
         * Создание новой точки и добавление ее в коллекцию
         * @param {Double} lat
         * @param {Double} lng
         */
        createPoint: function (lat, lng) {
            this.create({
                title: this.generatePointTitle(),
                lat: lat,
                lng: lng
            });
        },
        
        /**
         * Генерация имени для новой точки
         * @returns {String} 
         */
        generatePointTitle: function () {
            return 'Point #' + (this.length + 1);
        }
    });
});