import { useState } from 'react';
import React from 'react';
import Image from 'next/image';

type User = {
  id: number;
  name: string;
  avatar: string;
};

const Select = () => {
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [dropdownUsers, setDropdownUsers] = useState<User[]>([
    { id: 1, name: 'Mariana Augustine', avatar: 'https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_640.png' },
    { id: 2, name: 'Nick Gianapoulas', avatar: 'https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_640.png' },
    { id: 3, name: 'Narayan Garner', avatar: 'https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_640.png' },
    { id: 4, name: 'Anita Gros', avatar: 'https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_640.png'},
    { id: 5, name: 'Megan Smith', avatar: 'https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_640.png' },

  ]);

  const handleAddUser = (user: User) => {
    setSelectedUsers([...selectedUsers, user]);
    setDropdownUsers(dropdownUsers.filter((u) => u.id !== user.id));
  };

  const handleRemoveUser = (user: User) => {
    setSelectedUsers(selectedUsers.filter((u) => u.id !== user.id));
    setDropdownUsers([...dropdownUsers, user]);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value)
    if (value === '') {
      setDropdownUsers(dropdownUsers);
    } else {
      const filteredUsers = dropdownUsers.filter((user) => user.name.toLowerCase().includes(value.toLowerCase()));
      setDropdownUsers(filteredUsers);
    }
  }

  const toggleDropdown = () => {
    const options:| HTMLDivElement| null = document.querySelector('.options');
    options?.classList.toggle('hidden');
  };

  return (
    <div className="relative my-12 border-b border-blue-500" onClick={toggleDropdown}>
      <div className="flex flex-wrap gap-2">
        {selectedUsers.map((user) => (
          <div key={user.id} className="flex items-center gap-2 bg-gray-200 rounded p-2">
            <Image src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
            <span>{user.name}</span>
            <button onClick={() => handleRemoveUser(user)}>&times;</button>
          </div>
        ))} 
        <input type="text" onChange={handleSearch} className="border-2 border-black max-w-max" />
      </div>
      <div className="absolute hidden options top-full left-[100px] w-[300px] bg-white  rounded mt-2 border-2">
        {dropdownUsers.map((user) => (
          <div key={user.id} className="flex items-center gap-2 p-2 cursor-pointer" onClick={()=>handleAddUser(user)}>
            <Image src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full" />
            <span>{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
