App.Router.map(function () {
    // Inicio
    this.resource('index', { path: '/' });

    //Directorio transportistas
    this.resource('directorio');

    // Registro de usuario
    this.resource('registrar');

    // Cotizar
    this.resource('cotizar');

    // Como funciona
    this.resource('como_funciona', function(){
        this.resource('cargadores');
        this.resource('transportistas');
    });

    // Nosotros
    this.resource('nosotros', function(){
        this.resource('contacto');
        this.resource('ayuda');
    });
});


