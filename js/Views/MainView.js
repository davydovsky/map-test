/**
 * @author      Nikita Davydovsky   
 * @since       2015-12-01          (the version of the package this class was first added to)
 */

var app = app || {};

(function () {
    'use strict';

    // Представление для главного контейнера
    app.MainView = Backbone.View.extend({
        el: '#main-container',
    
        initialize: function () {            
            // Инициализация компонентов приложения
            this.pointCollection = new app.PointCollection();
            this.state = new app.State();
            
            this.pointListView = new app.PointListView({
                collection: this.pointCollection, 
                state: this.state
            });
            
            this.mapView = new app.MapView({
                collection: this.pointCollection, 
                state: this.state
            });
            this.mapView.render().el;
            
            // С помощью jQuery UI, добавим возможность перетаскивать главный контейнер
            this.$el.draggable({
                handle: '#handle',
                containment: 'body',
                cursor: 'move'
            });
        },

        render: function () {           
            return this;
        }
    });
})();