//  Buscar el modelo de validados
App.DirectorioRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('Transportistas');
  }
});

// Contar modelo
//  usersCount: function(){
//    return this.get('model.length');
//  }.property('@each')
// });
