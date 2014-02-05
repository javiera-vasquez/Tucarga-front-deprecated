App.Router.map(function () {
    // Inicio
    this.route('index', { path: '/' });

    //Directorio transportistas
    this.resource('directorio');

    // Registro de usuario
    this.resource('registro', function(){
        this.resource('gracias');
    });

    // Cotizar
    this.resource('cotizar', function(){
        this.route('gracias');
    });

    // Como funciona
    this.resource('como_funciona', function(){
        this.resource('cargador');
        this.resource('transportista');
    });

    // Nosotros
    this.resource('nosotros', function(){
        this.resource('contacto');
        this.resource('ayuda');
    });
});


