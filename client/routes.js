import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import Form from '../imports/ui/form/form.jsx';
import App from '../imports/ui/App.jsx';
import Account from '../imports/ui/account';

FlowRouter.route('/', {
    name: 'Home',
    action() {
        mount(App, {
            main: <Form/>,
        });
    },
});

FlowRouter.route('/account/:_id', {
    name: 'Home',
    action(params) {
        mount(App, {
            main: <Account/>,
        });
    },
});