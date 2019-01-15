import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import Form from '../imports/ui/form/form.jsx';
import App from '../imports/ui/App.jsx';
import Account from '../imports/ui/Account.jsx';

FlowRouter.route('/', {
    name: 'Home',
    action() {
        mount(App, {
            main: <Form/>,
        });
    },
});

FlowRouter.route('/account/:_id', {
    name: 'Account',
    action(params, queryParams) {
        mount(App, {
            main: <Account/>,
        });
    },
});