import React from 'react';
import image from '../../public/WhatWeDo/img.svg';
import Image, { StaticImageData } from 'next/image';

interface Tdata {
    title: string;
    desc: string;
    img: StaticImageData;
}

const WhatWeDoMock = () => {
    const data: Tdata[] = [
        {
            title: 'Avadanlıqların quraşdırılması və konfiqurasiyası',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam ullamcorper aliquet non, ut id sit eros integer.',
            img: image
        },
        {
            title: 'Daimi nəzarət',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam ullamcorper aliquet non, ut id sit eros integer.',
            img: image
        },
        {
            title: 'Avadanlıqların vaxtında dəyişdirilməsi',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam ullamcorper aliquet non, ut id sit eros integer.',
            img: image
        },
        {
            title: 'İT xidmətlər',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam ullamcorper aliquet non, ut id sit eros integer.',
            img: image
        },
        {
            title: 'Helpdesk xidmətləri',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam ullamcorper aliquet non, ut id sit eros integer.',
            img: image
        },
        {
            title: 'Təhlükəsizlik xidmətləri',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam ullamcorper aliquet non, ut id sit eros integer.',
            img: image
        }
    ];
    
    return (
        <div className="flex justify-between flex-wrap mx-7">
            {data.map(({ title, desc, img }, index) => (
                <div key={index} id='card' className="w-96 h-72 bg-white my-5 shadow-lg rounded-xl p-6 flex flex-col justify-between">
                    <div>
                        <Image src={img} alt='img' />
                        <div className="my-4 text-primary font-semibold text-2xl">{title}</div>
                        <div>{desc}</div>
                    </div>
                    <div id="foot" className="w-full h-8 bg-primary rounded-xl mt-4 self-end invisible">
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WhatWeDoMock;
