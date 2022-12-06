import React, { FormEventHandler, useState } from 'react';

export default function Signin() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    e.preventDefault();

    // const res = await signIn('credentials', {
    //   email: userInfo.email,
    //   password: userInfo.password,
    //   redirect: false,
    // });
  };
  return (
    <div className='sign-in-form'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type='email'
          placeholder='jurjen@jacaranda.tree'
        />
        <input
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type='password'
          placeholder='purple'
        />
        <input type='submit' value='Login' />
      </form>
    </div>
  );
}
