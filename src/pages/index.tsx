import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ItemList } from '../components/item_list'
import offers from '../assets/offers';
import { AvatarGenerator } from 'random-avatar-generator';
import { Navbar } from '../components/navbar';
import { Button } from '../components/button';

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen h- items-center flex flex-col px-96 py-8 bg-[#F6F9FF]'>
      <Navbar/>
      <div className="flex flex-row items-center justify-between w-full mb-4 mt-10">
        <h3 className='text-xl text-black font-bold'>Waiting for your offer</h3>
        <p className='text-[#ED5959]'>View all {offers.length}</p>
      </div>
      <div className='flex flex-col h-1/2 w-full px-1 overflow-y-hidden'>
          {offers.map((e, index) => {
              const generator = new AvatarGenerator();
              let avatar = generator.generateRandomAvatar();
                  return (
                    <ItemList key={index} avatar={avatar} name={e.name} 
                    profession={e.profession} created={e.created} punctuation={e.punctuation}/>    
                  );
                })}
      </div>
      
     
      <div className='flex flex-row justify-between items-center mt-16'>
        <p className='text-black w-2/3 text-md'>Why wait? Start creating a new ofter and share among your guests</p>
        <Button label={'New Offer'} onClick={() => {}}/>
      </div>
    </div>
  )
}

export default Home
