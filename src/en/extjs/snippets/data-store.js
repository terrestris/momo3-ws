Ext.create('Ext.data.Store', {
    autoLoad: true,
    storeId: 'formerMembers',
    model: 'FormerMembers',
    proxy: {
        type: 'ajax',
        url: './materials/former-members.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
