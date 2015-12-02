/**
 * @author      Nikita Davydovsky   
 * @since       2015-12-01          (the version of the package this class was first added to)
 */

var app = app || {};

(function () {
    'use strict';

    // Представление для списка точек
    app.PointListView = Backbone.View.extend({
        el: '#point-list',   
        initialize: function (options) {
            this.options = options;
            
            this.listenTo(this.collection, 'add', this.addItem);
            this.listenTo(this.collection, 'reset', this.addAllItems);
            
            // Загрузить коллекцию из хранилища
            this.collection.fetch({reset: true});
        },

        render: function () {
            return this;
        },
        
        /**
         * Добавление элемента в список
         * @param {Point} Точка 
         */
        addItem: function (point) {
            var itemView = new app.ListItemView({ 
                model: point,
                state: this.options.state
            });
            this.$el.append(itemView.render().el);
        },
        
        /**
         * Добавить все элементы коллекции в список
         */ 
        addAllItems: function () {
            this.$el.html('');
            this.collection.each(this.addItem, this);
        }
    });
})();