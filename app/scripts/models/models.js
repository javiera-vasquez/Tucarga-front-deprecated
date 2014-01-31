// string, number, boolean, and date

// Registro de transportistas
App.Registro = DS.Model.extend({
    // Datos empresa
    type : DS.attr('string'),
    company : DS.attr('string'),
    razonName : DS.attr('string'),
    rut : DS.attr('number'),
    creationDate : DS.attr('date'),
    address : DS.attr('string'),
    addressNumber : DS.attr('number'),
    addressOffice : DS.attr('string'),
    commune : DS.attr('string'),
    city : DS.attr('string'),
    region : DS.attr('string'),
    // Datos segun tipo
    truckNumber : DS.attr('number'),
    storageType : DS.attr('string'),
    storageCapacity : DS.attr('number'),
    // Usuario
    firstName : DS.attr('string'),
    lastName : DS.attr('string'),
    jobTittle : DS.attr('string'),
    mail : DS.attr('string'),
    phone : DS.attr('number'),
    celPhone : DS.attr('number')
    // Traigo el usuario
    //user : DS.belongsTo('user')
});

// App.Cotizacion = DS.Model.extend({
//     user : DS.belongsTo('user')
// });

// App.User = DS.Model.extend({
//     firstName : DS.attr('string'),
//     lastName : DS.attr('string'),
//     jobTittle : DS.attr('string'),
//     mail : DS.attr('string'),
//     phone : DS.attr('number'),
//     celPhone : DS.attr('number'),
//     // Linkeo a modelo registro y cotizacion
//     registro : DS.belongsTo('registro'),
//     cotizacion : DS.belongsTo('cotizacion')
// });

// Listado de transportista
App.Transportistas = DS.Model.extend({
    name: DS.attr(),
    zone: DS.attr(),
    city: DS.attr(),
    suply: DS.attr()
});

// Filtros de transportista
App.Filters = DS.Model.extend({
    from : DS.attr(),
    to : DS.attr(),
    type : DS.attr()
});

// FIXTURES
App.Filters.FIXTURES = [{
    id: 1,
    from: [
        "asdf",
        "Tom"
    ],
    to: [
        "Yehuda",
        "Tom"
    ],
    type: [
        "Yehuda",
        "Tom"
    ]
}];

App.Transportistas.FIXTURES = [{
    id: 1,
    name: 'Super duper emprresa',
    zone: 'Centro',
    city: 'Santiago',
    suply: 'Si'
}, {
    id: 2,
    name: 'Nombre emprresa',
    zone: 'Norte - centro - sur',
    city: 'Santiago',
    suply: 'Si'
}, {
    id: 3,
    name: 'Aasdfasdf asdf',
    zone: 'Centro',
    city: 'Santiago',
    suply: 'Si'
}, {
    id: 4,
    name: 'qwertqwe',
    zone: 'Centro',
    city: 'Santiago',
    suply: 'Si'
}, {
    id: 5,
    name: 'Super duper emprresa',
    zone: 'Centro',
    city: 'Santiago',
    suply: 'Si'
}, {
    id: 6,
    name: 'duper emprresa',
    zone: 'Centro',
    city: 'Santiago',
    suply: 'Si'
}, {
    id: 7,
    name: 'Super duper emprresa',
    zone: 'Centro',
    city: 'Santiago',
    suply: 'Si'
}, {
    id: 8,
    name: 'emprresa',
    zone: 'Centro',
    city: 'Santiago',
    suply: 'Si'
}, {
    id: 9,
    name: 'Super',
    zone: 'Centro',
    city: 'Santiago',
    suply: 'Si'
}];
