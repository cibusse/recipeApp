import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonButton, IonIcon} from '@ionic/react';
import { chevronBackOutline} from 'ionicons/icons';
import './SplashScreen.css';


const SplashScreen: React.FC = () => {

    const history = useHistory();

  return (
    <div className="splash-screen">
        <div className="splash-content">
          <h1 className="app-title">Flavorly</h1>
          <p className="tagline">Find the best recipes with us!</p>
          <IonButton shape="round" color="light" 
          onClick={() => {
            history.push('/login');
          }}
        >
        <IonIcon slot="icon-only" icon={chevronBackOutline} ></IonIcon>
      </IonButton>
        </div>
    </div>
  );
};

export default SplashScreen;
