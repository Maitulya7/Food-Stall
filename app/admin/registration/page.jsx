"use client"

import { useState } from 'react';
import { Input } from '@nextui-org/react';
import { CheckboxGroup, Checkbox } from '@nextui-org/react';
import Image from 'next/image';

const Register = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [stallName, setStallName] = useState('');
  const [stallLogo, setStallLogo] = useState(null);
  const [categories, setCategories] = useState(['Punjabi', 'Burger']);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('phoneNumber', phoneNumber);
      formData.append('stallName', stallName);
      formData.append('stallLogo', stallLogo);
      formData.append('categories', JSON.stringify(categories));

      const response = await fetch('/api/register', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Registration successful!');
      } else {
        const data = await response.json();
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error registering:', error);
      setError('Registration failed');
    }
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-between h-screen">
        <div className="md:h-screen md:w-1/2">
          <div className="flex justify-center xl:mt-32 lg:mt-24 w-full">
            <div className="flex flex-col w-1/2">
              <h1 className="text-3xl font-semibold mb-10 ml-2">
                Admin Registration
              </h1>
              <p className="ml-2 mb-1 font-medium text-sm">Email Address</p>
              <Input
                isRequired
                variant="bordered"
                type="email"
                label="Email"
                className="w-full mb-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="ml-2 mb-1 font-medium text-sm">Phone Number</p>
              <Input
                isRequired
                variant="bordered"
                type="number"
                label="Phone Number"
                className="w-full mb-6"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <p className="ml-2 mb-1 font-medium text-sm">Stall Name</p>
              <Input
                isRequired
                variant="bordered"
                type="text"
                label="Stall Name"
                className="w-full mb-6"
                value={stallName}
                onChange={(e) => setStallName(e.target.value)}
              />
              <p className="ml-2 mb-1 font-medium text-sm">Stall Logo</p>
              <label className="w-full mb-6 border-dotted border-3 rounded-2xl hover:cursor-pointer relative overflow-hidden">
                <span className="block text-center p-3">Upload</span>
                <input
                  isRequired
                  type="file"
                  className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
                  onChange={(e) => setStallLogo(e.target.files[0])}
                />
              </label>
              <p className="ml-2 mb-1 font-medium text-sm">Categories</p>
              <CheckboxGroup
                className="ml-2 mb-10 mt-1"
                color="success"
                orientation="horizontal"
                value={categories}
                onChange={(values) => setCategories(values)}
              >
                <Checkbox value="Punjabi">Punjabi</Checkbox>
                <Checkbox value="Chinese">Chinese</Checkbox>
                <Checkbox value="South India">South India</Checkbox>
                <Checkbox value="Pizza">Pizza</Checkbox>
                <Checkbox value="Burger">Burger</Checkbox>
              </CheckboxGroup>
              {error && <p className="text-red-500 ml-2 mt-2">{error}</p>}
              <button
                onClick={handleSubmit}
                className="bg-green-900 h-12 rounded-lg text-white font-medium w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block h-screen w-1/2 relative">
        <Image
            src="/images/bg-admin-registration.jpg"
            alt="Description of the image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
