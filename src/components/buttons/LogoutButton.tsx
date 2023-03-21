import { logout } from 'thin-backend';
import { useState } from 'react';

export default function LogoutButton() {
  const [isLoading, setLoading] = useState(false);

  async function doLogout() {
    setLoading(true);
    await logout({ redirect: 'http://localhost:3000' });
    // await logout();
    setLoading(false);
  }

  return (
    <button onClick={doLogout} disabled={isLoading}>
      Logout
    </button>
  );
}
