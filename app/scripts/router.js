YoEmber.Router.map(function () {
    // Inicio
    this.resource('index', { path: '/' });

    //Directorio transportistas
    this.resource('directorio');

    // Registro de usuario
    this.resource('registro', function{
        this.route('create');
    });

    // Nosotros
    this.resource('nosotros', function(){
        this.rosource('contacto'):
        this.rosource('preguntas-frecuentes'):
        this.rosource('como-funciona'):
    });
});


