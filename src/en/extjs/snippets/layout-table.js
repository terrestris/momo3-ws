Ext.create('Ext.container.Viewport', {
    layout: {
        type: 'table',
        columns: 3,
        tableAttrs: {
            style: {
                width: '100%'
            }
        }
    },
    defaults: {
        bodyPadding: 15,
    },
    items: [{
        title: 'Item 1',
        rowspan: 1,
        colspan: 1,
        html: 'Content 1'
    }, {
        title: 'Item 2',
        rowspan: 1,
        colspan: 1,
        html: 'Content 2'
    }, {
        title: 'Item 3',
        rowspan: 1,
        colspan: 1,
        html: 'Content 3'
    }, {
        title: 'Item 4',
        colspan: 2,
        rowspan: 1,
        html: 'Content 4'
    }]
});
