/**
 * @author      Nikita Davydovsky   
 * @since       2015-12-01          (the version of the package this class was first added to)
 */

var app = app || {};

(function () {
    'use strict';

    // Модель для точки
    app.Point = Backbone.Model.extend({
        defaults: {
            title: '', // Имя точки
            lat: 0.0, // Широта
            lng: 0.0 // Долгота
        }
    });
});