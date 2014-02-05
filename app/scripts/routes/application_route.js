//  Buscar el modelo de validados
App.DirectorioRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('transportistas');
  }
});

// Cotizar
App.CotizarRoute = Ember.Route.extend({
    model: function() {
        return this.store.createRecord('cotizacion');
    }
});

App.CotizarController =Ember.ObjectController.extend({
    actions: {
        // crear objeto cotizacion
        saveCotizacion: function() {
            var cotizar = this.store.createRecord('cotizacion', {
                name: this.get('name'),
                fecha: this.get('fecha'),
                lugar: this.get('lugar')
            });
            // post de la cotizacion
            var controller = this;
            cotizar.save().then(function(cotizar){});
            // #link-to
            this.transitionToRoute('exito');
        }
    }
});

// Registro
App.RegistrorRoute = Ember.Route.extend({
    model: function() {
        return this.store.createRecord('registro');
    }
});

App.RegistroController = Ember.ArrayController.extend({
    actions: {
      saveRegistro: function() {
           var registro = this.store.createRecord('registro', {
                company: this.get('company')
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
