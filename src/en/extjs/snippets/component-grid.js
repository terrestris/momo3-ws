{
    xtype: 'gridpanel',
    title: 'GridPanel',
    region: 'south',
    bodyPadding: 0,
    maxHeight: 350,
    collapsed: true,
    columns: [{
        text: 'First name',
        dataIndex: 'firstName',
        flex: 1
    }, {
        text: 'Last name',
        dataIndex: 'lastName',
        flex: 1
    }, {
        text: 'Instruments',
        dataIndex: 'instruments',
        flex: 1
    }],
    store: {
        data: [{
            firstName: 'Angus',
            lastName: 'Young',
            instruments: 'Guitar'
        }, {
            firstName: 'Cliff',
            lastName: 'Williams',
            instruments: 'Bass guitar, vocals'
        }, {
            firstName: 'Brian',
            lastName: 'Johnson',
            instruments: 'Vocals'
        }, {
            firstName: 'Stevie',
            lastName: 'Young',
            instruments: 'Guitar, vocals'
        }, {
            firstName: 'Chris',
            lastName: 'Slade',
            instruments: 'Drums, percussion'
        }]
    }
}
