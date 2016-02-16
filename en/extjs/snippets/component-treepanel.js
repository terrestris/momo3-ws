{
    xtype: 'treepanel',
    width: '20%',
    bodyPadding: 0,
    title: 'TreePanel',
    region: 'west',
    rootVisible: false,
    store: {
        data: {
            text: 'Root',
            children: [{
                text: 'Child 1',
                leaf: true
            }, {
                text: 'Child 2',
                leaf: true
            }, {
                text: 'Child 3',
                leaf: true
            }, {
                text: 'Child 4',
                children: [{
                    text: 'GrandChild 1',
                    leaf: true
                }, {
                    text: 'GrandChild 2',
                    leaf: true
                }]
            }]
        }
    }
}
