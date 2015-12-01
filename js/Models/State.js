/**
 * @author      Nikita Davydovsky   
 * @since       2015-12-01          (the version of the package this class was first added to)
 */

var app = app || {};

(function () {
    'use strict';

    // Модель для состояния приложения
    app.State = Backbone.Model.extend({
        defaults: {
            activePoint: null // Выбранная пользователем точка
        }
    });
});