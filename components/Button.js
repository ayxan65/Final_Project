
import React from 'react';


const Button = () => {

   
  return (
    <>
     <div className='flex justify-center mt-8  mr-2'>
        <button onClick={(()=>{
          
           
                alert('müracietiniz qebul edildi')
            
         
         
        })} className='h-12 w-52 bg-primary text-white rounded-lg'>Göndər
         
        </button>

       </div>
    </>
  )
}

export default Button