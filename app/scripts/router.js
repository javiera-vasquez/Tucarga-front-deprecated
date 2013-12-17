App.Router.map(function () {
    // Inicio
    this.resource('index', { path: '/' });

    //Directorio transportistas
    this.resource('directorio');

    // Log-in
    this.resource('iniciar-sesion');

    // Registro de usuario
    this.resource('registrar');

    // Nosotros
    this.resource('nosotros', function(){
        this.resource('contacto');
        this.resource('faq');
        this.resource('como-funciona');
    });
});


