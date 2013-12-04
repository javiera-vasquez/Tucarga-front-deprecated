// Transportista => Redirigir a validados
YoEmber.TransportistaRoute = Em.Route.extend({
    redirect: function(){
        this.transitionTo('validados');
    }
});

//  Buscar el modelo de validados
YoEmber.ValidadosRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('Validados');
  }
});
