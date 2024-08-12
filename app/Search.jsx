"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import search from '../public/logo/search.svg';
import { TextField } from '@mui/material';

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-md mx-auto mt-10">
 <div className='flex gap-2'>
 <button
       
       onClick={() => setIsOpen(!isOpen)}
     >
       <Image alt='search' src={search}></Image>
      
     </button>

     {isOpen && (
       <div className="mt-4 ">
         <input
           type="text"
           className="w-full p-2 border border-gray rounded sticky"
           placeholder="Search..."
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
        /> 
         {searchTerm && (
           <ul>
            <div className='bg-white'>
            {filteredData.length > 0 ? (
               filteredData.map((item, index) => (
                 <li key={index} className="p-2 border-b text-primary ">
                   <Link href={item.link}>
                   {item.name}
                   </Link>
                 </li>
               ))
             ) : (
               <li className="p-2 text-gray">No results found</li>
             )}
            </div>
           </ul>
         )}
       </div>
     )}
 </div>
    </div>
  );
};

export default SearchBar;
