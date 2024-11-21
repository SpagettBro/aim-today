import { storyblokEditable } from "@storyblok/react/rsc";
import Image from 'next/image'; 




const Net_binnen_artikel = ({ blok }) => (
  <div className="relative w-full max-w-sm px-4" {...storyblokEditable(blok)}>
    <div className="mt-8 px-4">
      <div className="relative w-full max-w-[350px] mx-auto mt-4 flex gap-4">
              <div className="absolute inset-0 rounded-md transform translate-x-2 translate-y-2"></div>
        {/*afbeelding*/}
        <div className="w-1/2">
         <Image
          src={blok.netBinnen_img.filename}
          alt={blok.netBinnen_img.alt || "afbeelding artikel links"}
          width={350} 
          height={215} 
          className="relative w- h-auto" 
       />
        </div>

        {/*Linker tekst*/}
        <div className="w-1/2">
        <p className="font-montserrat text-xs font-normal pt-5 ml-2">{blok.netBinnen_accent}</p>
        <p className="font-dm-sans text-sm font-bold pt-2 ml-2 leading-5">{blok.netBinnen_titel}</p>
        </div>

      </div>
    </div>
  </div>
);

export default Net_binnen_artikel;
