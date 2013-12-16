//  Buscar el modelo de validados
YoEmber.DirectorioRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('Transportistas');
  }
});

