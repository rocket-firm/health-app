import React from 'react';
import { connect } from 'react-redux';

import Navigator from 'navigator';

import Projects from './Projects';
import AddProject from './AddProject';

class Router extends React.Component {

  renderScene = (route, nav) => {
    // console.log('route', route.id);
    switch (route.screen) {
      case 'Projects':
        return <Projects navigator={nav} />

      case 'BackToProjects':

        return <Projects navigator={nav} />


      case 'AddProject':
        return <AddProject navigator={nav}/>
    }

    return <Projects navigator={nav} />
  };

  render() {
    const { navigatorConfig } = this.props;

    return (
        <Navigator
          initialRoute={{ screen: 'Projects' }}
          renderScene={ (route, nav) => { return this.renderScene(route, nav) } }
          configureScene={ (route, routeStack) => {
            console.log(navigatorConfig);
            return navigatorConfig;
          } }
        />
    )
  }
}

export default connect((state) => state)(Router);
