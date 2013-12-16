// Filtros de transportista
YoEmber.Filters = DS.Model.extend({
    from : DS.attr(),
    to : DS.attr(),
    type : DS.attr()
});

YoEmber.Filters.FIXTURES = [{
    id: 1,
    from: ["Yehuda", "Tom"],
    to: ["Yehuda", "Tom"],
    type: ["Yehuda", "Tom"]
}];

// Listado de transportista
YoEmber.Transportistas = DS.Model.extend({
    name: DS.attr(),
    zone: DS.attr(),
    city: DS.attr(),
    suply: DS.attr()
});

YoEmber.Transportistas.FIXTURES = [{
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
