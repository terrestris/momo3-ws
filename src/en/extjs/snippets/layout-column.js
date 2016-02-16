Ext.create('Ext.container.Viewport', {
    layout: 'column',
    defaults: {
        bodyPadding: 15,
    },
    items: [{
        title: 'Item 1',
        columnWidth: 0.3,
        html: 'Content 1'
    }, {
        title: 'Item 2',
        columnWidth: 0.2,
        html: 'Content 2'
    }, {
        title: 'Item 3',
        columnWidth: 0.2,
        html: 'Content 3'
    }, {
        title: 'Item 4',
        columnWidth: 0.3,
        html: 'Content 4'
    }]
});
