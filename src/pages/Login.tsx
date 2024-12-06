import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonText, IonIcon, IonToast } from '@ionic/react';
import { eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const history = useHistory();

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    // Check for empty fields
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    // Validate email
    if (!isEmailValid(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Clear error and display success toast
    setError('');
    setShowToast(true);

    // Mock authentication logic
    console.log('User logged in successfully:', { email, password });
    
    history.push('/menu');
  
  };

  return (
    <IonPage>
      <IonContent className="login-container">
        <div className="image-container">
          <img src="/loginbackground.png" alt="Food Bowl" className="background-image" />
        </div>
        <h1 className="title">Hello!</h1>
        <form className="form">
          <IonInput
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
            type="email"
            placeholder="Email"
            className="input-field"
          />
          <div className="password-container">
            <IonInput
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="input-field"
            />
            <IonButton
              fill="clear"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              <IonIcon icon={showPassword ? eyeOutline : eyeOffOutline} />
            </IonButton>
          </div>
          {error && <IonText color="danger" className="error-message">{error}</IonText>}
          <p className="forgot-password">Forgot password?</p>
          <IonButton expand="block" className="login-button" onClick={handleLogin}>
            SIGN IN
          </IonButton>
          <IonText>
            New user?{' '}
            <Link to="/signup" className="switch-link">SIGN UP</Link>
          </IonText>
        </form>

        {/* Toast for success message */}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Login successful!"
          duration={2000}
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default Login;
