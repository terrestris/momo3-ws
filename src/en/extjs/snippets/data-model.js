Ext.define('FormerMembers', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'firstName',
        type: 'string'
    }, {
        name: 'lastName',
        type: 'string'
    }, {
        name: 'instruments',
        type: 'string'
    }],
    validators: {
        firstName: 'presence',
        lastName: 'presence',
        instruments: 'presence'
    }
});
