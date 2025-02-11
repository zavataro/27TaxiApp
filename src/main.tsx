import React from "react";
import ReactDOM from "react-dom/client";
import { I18n } from 'aws-amplify/utils';
import { Authenticator, translations, View, Image, useTheme } from '@aws-amplify/ui-react';
import App from "./App.tsx";
import "./index.css";
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './ReduxToolkit/Store';

I18n.putVocabularies(translations);
I18n.setLanguage('pt-br');


I18n.putVocabularies({
 "pt-br" : {
    'Sign In': 'Entrar',
    'Enter your Email' : 'Digite seu Email',
    'Enter your email' : 'Digite seu Email',
    'Sign Up': "Sair",
    'Create Account' : 'Seja um Associado',
    'Password' : 'Senha',
    'Enter your Password' : 'Digite sua Senha',
  'Reset Password' : 'Recupere sua Senha',
  'Email' : 'Email',
  },
});

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="27 Taxi"
          src="./src/assets/logo.jpg"
          width="100px"
        />
      </View>
    );
  },
}

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator components={components}>
      <Provider store={store}>
        <App />
      </Provider>
    </Authenticator>
  </React.StrictMode>
);

reportWebVitals();