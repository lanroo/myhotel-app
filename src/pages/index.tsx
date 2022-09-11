import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ItemList } from '../components/item_list'
import offers from '../assets/offers';
import { AvatarGenerator } from 'random-avatar-generator';
import { Navbar } from '../components/navbar';
import { Button } from '../components/button';
import { useState } from 'react';
import { Sidebar } from '../components/sidebar';

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  let [selectedItems, setSelectedItems] = useState<[]>();
  let [showRecentOffer, setShowRecentOffers] = useState(false);
  let items = [];
  
  function selectItem(item: any, index: number) {
    
    setSelectedItems([]);
    items.push(item);
    
  }
  
  return (
    <div className='h-screen w-screen h- items-center flex flex-col px-96 py-8 bg-[#F6F9FF]'>
      <Navbar onClick={() => setShowModal(true)}/>
      <div className="flex flex-row items-center justify-between w-full mb-4 mt-10">
        <h3 className='text-xl text-black font-bold'>Waiting for your offer</h3>
        <p className='text-[#ED5959]'>View all {offers.length}</p>
      </div>
      <div className='flex flex-col h-1/2 w-full px-1 overflow-y-hidden'>
          {offers.map((e, index) => {
              const generator = new AvatarGenerator();
              let avatar = generator.generateRandomAvatar();
                  return (
                    <ItemList selected={true} onClick={() => selectItem(e, index)} key={index} avatar={avatar} name={e.name} 
                    profession={e.profession} created={e.created} punctuation={e.punctuation}/>    
                  );
                })}
      </div>
      
      {
        showModal ? (
          <Sidebar onClose={() => setShowModal(false)}/>
        ) : null
      }

      {
        // Recent Offer
        showRecentOffer ?
        <div className=" flex flex-col w-full"> 
            <div className="flex flex-row items-center justify-between w-full mb-4 mt-10">
                <h3 className='text-xl text-black font-bold'>Recent Offers</h3>
                <p className='text-[#ED5959]'>View all</p>
            </div>
            <div className='mt-4 w-full rounded-lg bg-white shadow-lg justify-between my-2 p-4 flex flex-row h-content'>
              <div className='flex flex-col'>
                  <h2 className='text-4xl font-semibold'>USD 3000</h2>
                  <p className='text-sm text-slate-400 mt-3'>Valid for 4 days</p>
              </div>

              <div className='flex flex-col'>
                <p className='text-sm text-slate-400 mt-3'>6 days ago</p>
                <div className='flex flex-row mt-3'>
                  
                  <div className='w-8 h-8 rounded-md shadow-md bg-red-500'></div>
                  <div className='w-8 h-8 ml-[-16px] rounded-md shadow-md bg-green-500'></div>
                  <div className='w-8 h-8 ml-[-16px] rounded-md shadow-md bg-purple-500'></div>
                  <div className='w-8 h-8 ml-[-16px] rounded-md shadow-md bg-orange-500'></div>

                </div>
              </div>
            </div>
        </div> 
        :
          <div className='flex flex-row justify-between items-center mt-16'>
            <p className='text-black w-2/3 text-md'>Why wait? Start creating a new ofter and share among your guests</p>
            <Button label={'New Offer'} onClick={() => setShowModal(true)}/>
        </div>
      }
     
      
    </div>
  )
}

export default Home
