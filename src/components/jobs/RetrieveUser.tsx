import { useCurrentUser } from 'thin-backend-react';

export default function UserStatus() {
  // Use the `useCurrentUser()` react hook to access the current logged in user
  const user = useCurrentUser();

  return <div>{user?.email}</div>;
}

// Don't forget to mount the `<UserStatus/>` component from somewhere
// in your app, e.g. the `pages/index.tsx`:

// const Home: NextPage = () => {
//   return <UserStatus />;
// };
