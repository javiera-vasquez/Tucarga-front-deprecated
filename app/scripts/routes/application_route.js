//  Buscar el modelo de validados
App.DirectorioRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('transportistas');
  }
});

App.RegistrarRoute = Ember.Route.extend({});

App.RegistrarController = Ember.ArrayController.extend({
    actions: {
      saveRegistro: function() {
           var registro = this.store.createRecord('registro', {
                company: this.get('company'),
                firstName: this.get('user.firstName'),
                lastName: this.get('user.lastName')
            });
            var controller = this;
            registro.save().then(function(registro){});
            //this.transitionToRoute('gracias');
      }
    }
});

// App.NosotrosRoute = Ember.Route.extend({
//    redirect: function(){
//       this.transitionTo('ayuda');
//    }
// });


// Contar modelo
//  usersCount: function(){
//    return this.get('model.length');
//  }.property('@each')
// });
