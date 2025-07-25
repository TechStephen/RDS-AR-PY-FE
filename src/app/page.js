'use client'
import React, { useState } from 'react';

export default function Home() {
  const [msItem, setMsItem] = useState(null);

  const getItems = async () => {
    const items = await fetch('https://efpr31v2rk.execute-api.us-east-1.amazonaws.com/prod/get-items')
    const item = await items.json();
    if (item && item.item) {
      setMsItem(item.item);
    }
  }

  return (
    <div className="text-center p-4 pt-12">
      {msItem ? ( <span className='p-8 border border-[1px] border-red-500 border-solid'>item: {msItem}</span>) : (<span className='border border-[1px] border-red-500 border-solid p-8'>Not Loaded</span>)}
      <br/>
      <div className='flex flex-row justify-center items-center gap-6 pt-12'>
        <h1>RDS AppRunner API Gateway Lambda Test</h1>
        <button onClick={() => getItems()} className='border border-[1px] border-black border-solid p-2'>Activate Microservice</button>
      </div>
    </div>
  );
}
