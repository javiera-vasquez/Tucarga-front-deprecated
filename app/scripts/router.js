App.Router.map(function () {
    // Inicio
    this.resource('index', { path: '/' });

    //Directorio transportistas
    this.resource('directorio');

    // Registro de usuario
    this.resource('registrar');

    // Cotizar
    this.resource('cotizar');

    // Cotizar
    this.resource('como_funciona');

    // Nosotros
    this.resource('nosotros', function(){
        this.resource('contacto');
        this.resource('ayuda');
    });
});


