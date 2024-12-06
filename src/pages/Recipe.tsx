import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonIcon, IonButton, IonText, IonFooter, IonSearchbar} from '@ionic/react';
import { bookmarkOutline, bookmark, homeOutline, settingsOutline, chevronBackOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './Recipe.css';

const Recipe: React.FC = () => {
    const history = useHistory();
    const isFavorite = false; // Placeholder for favorite state

  return (
    <IonPage>
      <IonHeader>


        <IonToolbar>
        <IonButton shape="round" color="medium" 
            onClick={() => {
              history.push('/login');
            }}
          >
          <IonIcon slot="icon-only" icon={chevronBackOutline} ></IonIcon>
          </IonButton>
          <IonTitle className="recipe-title">Vegetarian</IonTitle>
          <IonButton fill="clear" slot="end" className="profile-button">
            <img
              src="/profile.png"
              alt="Profile"
              className="profile-image"
            />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonSearchbar placeholder="Find the best recipe"  class="custom" className="searchbar" />

      <IonContent className="recipe-container">
        <IonText className="recipe-name">Spiced haricot beans</IonText>
        <div className="recipe-image-container">
          <img
            src="/vegetarian.png"
            alt="Spiced Haricot Beans"
            className="recipe-image"
          />
          <IonButton fill= "clear" className="favorite-button">
            <IonIcon icon={isFavorite ? bookmark : bookmark}/>
          </IonButton>
        </div>

        <div className="recipe-details">
          <IonText className="section-title">Ingredients</IonText>
          <ul className="ingredients-list">
            <li>Olive oil</li>
            <li>4 sprigs of coriander</li>
            <li>1 heaped tablespoon korma curry paste</li>
            <li>1 teaspoon ground turmeric</li>
            <li>1 x 400g tin of haricot beans</li>
            <li>160g frozen leaf spinach</li>
            <li>Red wine vinegar</li>
          </ul>
  {/*         <div className="recipe-meta">
            <p>Published 3 Nov 2024</p>
            <p>By Charlotte Busse</p>
            <p>Rating: <span className="rating-stars">★★★★☆</span> 4/5</p>
          </div> */}

          <IonText className="section-title">Preparation</IonText>
          <ol className="preparation-steps">
            <li>Put a non-stick frying pan on medium heat with 1 tbsp olive oil.</li>
            <li>Chop the coriander and stir in korma paste and turmeric.</li>
            <li>Add haricot beans, frozen spinach, and bring to a boil. Simmer for 5 minutes.</li>
            <li>Season with red wine vinegar, sea salt, and black pepper. Serve warm.</li>
          </ol>
        </div>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <div className="footer-buttons">
            <IonButton fill="clear" className="footer-button" routerLink="/home">
              <IonIcon icon={homeOutline} />
              <span>home</span>
            </IonButton>
            <IonButton fill="clear" className="footer-button" routerLink="/faves">
              <IonIcon icon={bookmarkOutline} />
              <span>faves</span>
            </IonButton>
            <IonButton fill="clear" className="footer-button" routerLink="/settings">
              <IonIcon icon={settingsOutline} />
              <span>settings</span>
            </IonButton>
          </div>
        </IonToolbar>
      </IonFooter>

    </IonPage>
  );
};

export default Recipe;
