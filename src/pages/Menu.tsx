import React from 'react';
import {
  IonContent,
  IonPage,
  IonSearchbar,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonToolbar,
  IonFooter,
} from '@ionic/react';
import { homeOutline, bookmarkOutline, settingsOutline, chevronBackOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import './Menu.css';

const Menu: React.FC = () => {
  const history = useHistory();

  const navigateToRecipe = (category: string) => {
    // Navigate to Recipe page with the selected category
    history.push(`/recipe?category=${category}`);
  };

  const categories = [
    'Fish',
    'Soup',
    'Meat',
    'Mexican',
    'Italian',
    'Chinese',
    'Lactose-Free',
    'Vegetarian',
    'Gluten-Free',
    'Pizza',
    'Dessert',
    'Breads & Buns',
  ];

  const newestRecipes = ['Vegetarian', 'Dessert', 'Pizza'];

  return (
    <IonPage>
      <IonContent className="menu-container">
        {/* Header */}
        <div className="header">
          <IonButton
            className="back-button"
            shape="round"
            color="medium"
            onClick={() => {
              history.push('/login');
            }}
          >
            <IonIcon slot="icon-only" icon={chevronBackOutline}></IonIcon>
          </IonButton>
          <h1 className="logo">Flavorly</h1>
          <IonButton fill="clear" className="profile-button">
            <img src="/profile.png" alt="Profile" className="profile-image" />
          </IonButton>
        </div>

        {/* Searchbar */}
        <IonSearchbar placeholder="Find the best recipe" className="searchbar" />

        {/* Categories */}
        <h2 className="section-title">What do you want to prepare?</h2>
        <IonGrid>
          <IonRow>
            {categories.map((category, index) => (
              <IonCol key={index} size="4">
                <div
                  className={`category-card ${category.toLowerCase().replace(' ', '-')}`}
                  onClick={() => navigateToRecipe(category)}
                >
                  <span className="category-label">{category}</span>
                </div>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        {/* Newest Recipes */}
        <h2 className="section-title">Newest Recipes</h2>
        <div className="carousel">
          {newestRecipes.map((recipe, index) => (
            <div
              key={index}
              className="carousel-item"
              onClick={() => navigateToRecipe(recipe)}
            >
              <img src={`/public/${recipe.toLowerCase()}.png`} alt={recipe} />
              <p>{recipe}</p>
            </div>
          ))}
        </div>
      </IonContent>

      {/* Footer */}
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

export default Menu;
