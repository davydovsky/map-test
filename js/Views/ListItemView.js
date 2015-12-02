/**
 * @author      Nikita Davydovsky   
 * @since       2015-12-01          (the version of the package this class was first added to)
 */

var app = app || {};

(function () {
    'use strict';

    // Представление для элемента списка точек
    app.ListItemView = Backbone.View.extend({
        tagName: 'a',
        
        className: 'list-group-item',
        
        attributes: {
            href: '#'
        },  
        
        template: _.template($('#list-item-template').html()),
        
        events: {
            'click': 'itemClicked'
	},
        
        initialize: function (options) {
            this.options = options;
        },

        render: function () {
            if (this.model.changed.id !== undefined) {
                return;
            }

            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        
        /**
         * Изменить активную точку при клике
         */
        itemClicked: function () {
            this.options.state.set('activePoint', this.model);
        }       
    });
})();