import React from 'react';
import Image from 'next/image';
import photo1 from '../../public/vertiv/photo1.svg';
import line from '../../public/vertiv/Line32.svg';
import Logo from '../../public/vertiv/logo.svg';
import Link from 'next/link';
import photo2 from '../../public/vertiv/photo2.svg';
import photo3 from '../../public/vertiv/photo3.svg';
import photo4 from '../../public/vertiv/photo4.svg';
import photo5 from '../../public/vertiv/photo5.svg';
import photo6 from '../../public/vertiv/photo6.svg';


const VertivMock = () => {
    interface T{
        title:string;
        desc:string;
        img:HTMLImageElement;
    }
    const Data:T[] = [
        {title:'Liebert EXM2 Uninterruptible Power Supply',
            desc:'Vertiv™ Liebert® EXM2 is a monolithic uninterruptible power supply (UPS), designed to address the rising need of highly reliable and efficient UPS for next-gen mid-size critical applications. ',
            img:photo1
        },
        {title:'Vertiv™ Edge Lithium-Ion UPS, 1500-3000VA',
            desc:'Vertiv™ Liebert® EXM2 is a monolithic uninterruptible power supply (UPS), designed to address the rising need of highly reliable and efficient UPS for next-gen mid-size critical applications. ',
            img:photo2
        },
        {title:'Liebert GXT5 UPS, 750 VA - 20 kVA ',
            desc:'Vertiv™ Liebert® EXM2 is a monolithic uninterruptible power supply (UPS), designed to address the rising need of highly reliable and efficient UPS for next-gen mid-size critical applications. ',
            img:photo3
        },
        {title:'Liebert Trinergy Cube UPS, 150 kW-3.4 MW',
            desc:'Vertiv™ Liebert® EXM2 is a monolithic uninterruptible power supply (UPS), designed to address the rising need of highly reliable and efficient UPS for next-gen mid-size critical applications. ',
            img:photo4
        },
        {title:'Vertiv™ Liebert® GXT RT+ UPS',
            desc:'Vertiv™ Liebert® EXM2 is a monolithic uninterruptible power supply (UPS), designed to address the rising need of highly reliable and efficient UPS for next-gen mid-size critical applications. ',
            img:photo5
        },
        {title:'Liebert EXL S1 UPS, 100-1200 kW',
            desc:'Vertiv™ Liebert® EXM2 is a monolithic uninterruptible power supply (UPS), designed to address the rising need of highly reliable and efficient UPS for next-gen mid-size critical applications. ',
            img:photo6
        }

    ]
  return (
    <div>
        <div>
           {
            Data.map(({title, desc,img})=>{
                return(
                   
                    <div className='flex mx-8 my-4 text-primary bg-third rounded-lg shadow-md'>
                   <Image className='p-4' alt='photo' src={img}></Image>
                 <div className='mx-5'>
                 <div className='font-bold my-4'>
                        {title}
                    </div>
                 
                   <div className='w-[650px] '>{desc}</div>
                 </div>
                   <Image   alt='line' src={line}></Image>
                  <div>
                  <div className='text-primary font-thin text-sm mx-5 my-4'>Download</div>
                <div className='flex my-6'>  <Image width={20} height={23} className='mx-2' alt='logo' src={Logo}></Image>
                <Link className='text-primary font-thin text-sm' href='/Home'>Brocure.pdf</Link></div>
                  </div>
                   </div>
                   
                )

            })
           }
        </div>

    </div>
  )
}

export default VertivMock