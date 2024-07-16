
import Image from "next/image";
import photo1 from '../../public/slider/photo1.svg';
import photo2 from '../../public/slider/photo2.svg';
import photo3 from '../../public/slider/photo3.svg';


const HomeSlider = () => {
  return (
    <div className="bgproducts ">

<div className=" flex flex-col   items-center ">
<div className=" text-white text-4xl font-bold my-16 ">
        Məhsullar
      </div>

  <div className="flex flex-col items-center">
  <div className=" css-juc flex justify-between  ">
    <Image src={photo2} alt="img"></Image>
   <Image  src={photo1} alt="img"></Image>
   <Image src={photo3} alt="img"></Image>

   </div>
  <div className="text-white text-3xl font-bold  my-10  ">
  DC Power Systems
  </div>
   <div className="w-4/12 text-white"> 
   Allow efficient distribution of your telecom and data center power utilizing these reliable, scalable and flexible DC power
   </div>
  </div>
</div>
    </div>
  )
}

export default HomeSlider
