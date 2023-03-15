import { loginWithRedirect } from 'thin-backend';
import { useState } from 'react';

export default function LoginButton() {
  const [isLoading, setLoading] = useState(false);

  async function doLogin() {
    setLoading(true);
    await loginWithRedirect();
    setLoading(false);
  }

  return (
    <button onClick={doLogin} disabled={isLoading}>
      Werkgever
    </button>
  );
}
