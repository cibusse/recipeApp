import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bookmarkOutline, homeOutline, settingsOutline} from 'ionicons/icons';
import Home from './pages/Home';
import Faves from './pages/Faves';
import Settings from './pages/Settings';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Menu from './pages/Menu';
import Recipe from './pages/Recipe';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Switch>
          <Route exact path="/splash" component={SplashScreen} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/menu" component={Menu} />
          <Route path="/recipe" component={Recipe} />
          <Redirect from="/" to="/splash"/>
          <Redirect exact from="/" to="/menu" />
          <Redirect to="/splash" />
        </Switch>
      </IonRouterOutlet>
    </IonReactRouter>
      
{/*     <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Faves">
            <Faves />
          </Route>
          <Route path="/Settings">
            <Settings />
          </Route>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/Home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/Faves">
            <IonIcon aria-hidden="true" icon={bookmarkOutline} />
            <IonLabel>Faves</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/Settings">
            <IonIcon aria-hidden="true" icon={settingsOutline} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter> */}
  </IonApp>
  );
};
export default App;
