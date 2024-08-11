"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import search from '../public/logo/search.svg';

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
       <div className="mt-4">
         <input
           type="text"
           className="w-full p-2 border border-gray-300 rounded"
           placeholder="Search..."
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
         />
         {searchTerm && (
           <ul className="">
             {filteredData.length > 0 ? (
               filteredData.map((item, index) => (
                 <li key={index} className="p-2 border-b text-gray">
                   <Link href={item.link}>
                   {item.name}
                   </Link>
                 </li>
               ))
             ) : (
               <li className="p-2 text-gray-500">No results found</li>
             )}
           </ul>
         )}
       </div>
     )}
 </div>
    </div>
  );
};

export default SearchBar;
