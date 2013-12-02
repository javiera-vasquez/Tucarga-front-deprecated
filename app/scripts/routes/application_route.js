YoEmber.TransportistaRoute = Ember.Route.extend({
    model: function () {
        return this.store.find('transportista');
    }
});

