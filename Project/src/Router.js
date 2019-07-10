import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ShowList from './components/screens/ShowList';
import DetailPage from './components/screens/DetailPage';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
            <Scene key="shows" component={ShowList} hideNavBar={true} initial/>
            <Scene key="details" component={DetailPage} hideNavBar={false} />
             </Scene>

        </Router>
    );
};

export default RouterComponent;
