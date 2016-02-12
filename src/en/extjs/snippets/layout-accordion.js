Ext.create('Ext.container.Viewport', {
    layout: 'accordion',
    defaults: {
        bodyPadding: 15,
        border: false
    },
    items: [{
        title: 'Item 1',
        html: 'Content 1'
    }, {
        title: 'Item 2',
        html: 'Content 2'
    }, {
        title: 'Item 3',
        html: 'Content 3'
    }, {
        title: 'Item 4',
        html: 'Content 4'
    }]
});
