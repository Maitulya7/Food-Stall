import Image from 'next/image';
import Link from 'next/link';
import { Input } from "@nextui-org/react";

const page = () => {
    return (
        <>
            <div className='flex flex-col-reverse md:flex-row justify-between h-screen'>

                <div className='md:h-screen md:w-1/2'>
                    <div className='flex justify-center mt-12 md:mt-40 w-full'>
                        <div className='flex flex-col  w-1/2'>
                            <h1 className='text-3xl font-semibold mb-10 ml-2'>Admin Registration  </h1>
                            <p className='ml-2 mb-1 font-medium text-sm'>Email Address</p>
                            <Input
                                isRequired
                                variant="bordered"
                                type="email"
                                label="Email"
                                className="w-full mb-6"
                            />
                            <p className='ml-2 mb-1 font-medium text-sm'>Phone Number</p>
                            <Input
                                isRequired
                                variant="bordered"
                                type="number"
                                label="Phone Number"
                                className="w-full mb-6"
                            />
                            <p className='ml-2 mb-1 font-medium text-sm'>Stall Name</p>
                            <Input
                                isRequired
                                variant="bordered"
                                type="text"
                                label="Stall Name"
                                className="w-full mb-6"
                            />


                            <button className='bg-green-900 h-12 rounded-lg text-white font-medium w-full'>Submit</button>

                        </div>
                    </div>
                </div>

                <div className='hidden md:block h-screen w-1/2 relative'>
                    <Image
                        src="/images/bg-admin-registration.jpg"
                        alt="Description of the image"
                        layout="fill"
                        objectFit="cover"
                        className='w-full h-full'
                    />
                </div>

            </div>
        </>
    )
}

export default page