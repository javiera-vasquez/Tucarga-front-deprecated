//  Buscar el modelo de validados
App.DirectorioRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('Transportistas');
  }
});

App.DirectorioController = Em.ArrayController.extend({
  usersCount: function(){
    return this.get('model.length');
  }.property('@each')
});

// Contar modelo
//  usersCount: function(){
//    return this.get('model.length');
//  }.property('@each')
// });
