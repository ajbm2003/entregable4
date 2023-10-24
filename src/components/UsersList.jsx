import React from 'react';
import User from './User';
const UsersList = ({users, deleteUser, handleClickUpdate}) => {
    return (
      <section className='max-w-[1200px] mx-auto grid justify-center p-4 grid-cols-[repeat(auto-fit,_350px)] gap-5'>
        {
            users.map((user)=><User handleClickUpdate={handleClickUpdate} deleteUser={deleteUser} key={user.id} info={user}/>)
        }
      </section>
    );
};

export default UsersList;