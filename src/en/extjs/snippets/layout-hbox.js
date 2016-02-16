Ext.create('Ext.container.Viewport', {
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    defaults: {
        bodyPadding: '10 15',
        margin: 5,
        flex: 1,
    },
    items: [{
        title: 'Item 1',
        html: 'Content 1'
    }, {
        title: 'Item 2',
        flex: 1.5,
        html: 'Content 2'
    }, {
        title: 'Item 3',
        html: 'Content 3'
    }, {
        title: 'Item 4',
        html: 'Content 4'
    }]
});
