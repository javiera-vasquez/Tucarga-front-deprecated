YoEmber.Router.map(function () {
    this.resource('index', { path: '/' });
    this.resource('cargador');

    // Rutas de la vista transportista
    this.resource('transportista', function(){
        // Crea un usuario de tipo transportista
        this.route('create');
        // Validados
        this.resource('validados', function(){
            this.resource('user', {path: '/:user_id'}, function(){
                this.route('edit');
            });
        });
        // Prospectos
        this.resource('prospectos', function(){
            this.resource('prospecto', {path: '/:user_id'}, function(){
                this.route('edit');
            });
        });
        // Rechazados
        this.resource('rechazados', function(){
            this.resource('rechazado', {path: '/:user_id'}, function(){
                this.route('edit');
            });
        });
    });

});


