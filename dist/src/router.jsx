import React, { PureComponent } from 'react';
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/auth/login'

import TaskPage from './pages/tasklist'
import DonePage from './pages/donelist'

import StatisticPage from './pages/statistic'
import SettingsPage from './pages/settings'

import CreateTaskPage from './pages/create_task'
import EditTaskPage from './pages/edittask'

@withRouter
class RootRouter extends PureComponent {

    render() {
        return (
            <Switch>
                {/* <Route path='/' exact component={HomePage} /> */}
                <Route path='/' exact component={LoginPage} />
            </Switch>
        )
    }
}

@withRouter
class UserRouter extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/' exact component={TaskPage} />

                <Route path='/create' component={CreateTaskPage} />
                <Route path='/edit/:id' component={EditTaskPage} />
                
                <Route path='/done' component={DonePage} />
                <Route path='/statistic' component={StatisticPage} />
                <Route path='/settings' component={SettingsPage} />
                
            </Switch>
        )
    }
}
export {
    RootRouter,
    UserRouter
}
