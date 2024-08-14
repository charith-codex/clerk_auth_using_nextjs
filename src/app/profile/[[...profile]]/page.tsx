import { UserProfile } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { auth, currentUser } from '@clerk/nextjs/server';
import React from 'react';

const Profile = async () => {
  const { userId } = auth();
  const isAuth = !!userId;
  const user = await currentUser();

  if (!isAuth) {
    redirect('/');
  }

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className='text-2xl'>{user?.firstName} {user?.lastName}</h1>
      <UserProfile />
    </div>
  );
};

export default Profile;
