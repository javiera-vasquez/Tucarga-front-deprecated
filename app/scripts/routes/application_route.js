//  Buscar el modelo de validados
App.DirectorioRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('Transportistas');
  }
});

App.NosotrosRoute = Em.Route.extend({
    redirect: function(){
        this.transitionTo('ayuda');
    }
});

// Contar modelo
//  usersCount: function(){
//    return this.get('model.length');
//  }.property('@each')
// });
