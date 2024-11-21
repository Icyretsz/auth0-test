'use client';
import {useUser} from '@auth0/nextjs-auth0/client';

const User = () => {

  const {user, isLoading, error} = useUser();

  return (
    <>
      {user && (
        <div>
          <p>Hello, {user?.name}</p>
          <a href="/api/auth/logout">Logout</a>
        </div>
      )}
    </>
  );

  // console.log(user)
  //
  // return <div>Hello guest!</div>;
};

export default User;
