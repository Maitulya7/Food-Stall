import Image from 'next/image';
import Link from 'next/link';
import { Input } from "@nextui-org/react";
import InputPassword from '../components/InputPassword';

const Admin = () => {


  return (
    <>
      <div className='flex flex-col-reverse md:flex-row justify-between h-screen'>

        <div className='md:h-screen md:w-1/2'>
          <div className='flex justify-center mt-12 md:mt-40 w-full'>
            <div className='flex flex-col'>
              <h1 className='text-3xl font-semibold mb-1 ml-2'>Welcome back!</h1>
              <p className='text-base mb-8 ml-2'>Enter your credentials to access your account</p>
              <p className='ml-2 mb-1 font-medium text-sm'>Email Address</p>
              <Input
                isRequired
                variant="bordered"
                type="email"
                label="Email"
                className="w-full mb-6"
              />
              <p className='ml-2 mb-1 font-medium text-sm'>Password</p>
              <InputPassword />

              <button className='bg-green-900 h-12 rounded-lg text-white font-medium w-full'>Login</button>

              <div className='flex items-center justify-center mt-5'>
                <div className='w-16 md:w-48 bg-slate-400 h-0.5'></div>
                <p className='m-3'>Or</p>
                <div className='w-16 md:w-48 bg-slate-400 h-0.5'></div>
              </div>

              <div className='flex justify-center items-center mt-10 gap-7'>
                <div className='flex border border-solid border-slate-400 p-3 rounded-lg hover:cursor-pointer'>
                  <div className='mr-1'>
                    <Image src='/images/google.png' alt='image' width={24} height={24} />
                  </div>
                  <p className='ml-2'>Sign in with Google</p>
                </div>
                <div className='flex  border border-solid border-slate-400 p-3 rounded-lg hover:cursor-pointer'>
                  <div className='mr-1'>
                    <Image src='/images/apple.png' alt='image' width={24} height={24} />
                  </div>
                  <p className='ml-2'>Sign in with Apple</p>
                </div>
              </div>

              <p className='flex items-center justify-center mt-10 text-base'>
                Don’t have an account?
                <Link href="/admin/registration " className='ml-1 text-blue-700 font-medium cursor-pointer hover:underline'>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className='hidden md:block h-screen w-1/2 relative'>
          <Image
            src="/images/bg-admin.jpg"
            alt="Description of the image"
            layout="fill"
            objectFit="cover"
            className='w-full h-full'
          />
        </div>

      </div>
    </>
  );
};

export default Admin;
