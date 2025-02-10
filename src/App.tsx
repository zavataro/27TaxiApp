
import { useAuthenticator } from '@aws-amplify/ui-react';

function App() {
  const { signOut } = useAuthenticator();

  return (
    <main>
      <h1>Seja Bem vindo</h1>
      <h1>ERRO AO CARREGAR INFORMAÇÕES</h1>
      <button onClick={signOut}>Sair</button>
    </main>
  );
}

export default App;
