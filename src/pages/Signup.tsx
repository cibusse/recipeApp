import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonText, IonIcon, IonToast } from '@ionic/react';
import { eyeOffOutline, eyeOutline } from 'ionicons/icons';
import { Link, useHistory } from 'react-router-dom';
import './Signup.css';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const history = useHistory();

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = () => {
    // Check for empty fields
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    // Validate email
    if (!isEmailValid(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Reset error and display success toast
    setError('');
    setShowToast(true);

    history.push('/menu');

    // Mock authentication logic
    console.log('User signed up successfully:', { username, email, password });
  };

  return (
    <IonPage>
      <IonContent className="signup-container">
        <div className="image-container">
          <img src="/signupbackground.png" alt="Food Plate" className="background-image" />
        </div>
        <h2 className="title">Create your account</h2>
        <form className="form">
          <IonInput
            value={username}
            onIonChange={(e) => setUsername(e.detail.value!)}
            placeholder="Username"
            className="input-field"
          />
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

          <IonInput
            value={confirmPassword}
            onIonChange={(e) => setConfirmPassword(e.detail.value!)}
            type="password"
            placeholder="Confirm Password"
            className="input-field"
          />

          {error && <IonText color="danger" className="error-message">{error}</IonText>}

          <IonButton expand="block" className="signup-button" onClick={handleSignup}>
            SIGN UP
          </IonButton>
          <IonText>Already have an account? {' '}</IonText>
          <IonText>
            <Link to="/login" className="switch-link">SIGN IN</Link>
          </IonText>
        </form>

        {/* Toast for success message */}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Signup successful!"
          duration={2000}
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};

export default Signup;
