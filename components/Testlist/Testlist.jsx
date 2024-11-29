import { storyblokEditable } from "@storyblok/react/rsc";
import Image from 'next/image'; 


const Testlist = ({ blok }) => (
  <div className="mx-auto px-8 relative w-full" {...storyblokEditable(blok)}>
  <div className="flex flex-wrap gap-4 justify-between">
    <div className="blok-feature w-[200px] aspect-square bg-gray-200 border border-gray-300 flex items-center justify-center">
        <Feature blok={{ name: "Feature 1" }} />
        <div className="w-full mb-4">
         <Image
          src={blok.image.filename}
          alt={blok.image.alt || "afbeelding artikel"}
          width={350} 
          height={215} 
       />
        </div>
            <p className="Datum">{blok.datum}</p>
            <p className="Tijd">{blok.tijd}</p>
            <p className="Title">{blok.title}</p>
    </div>
    <div className="blok-feature w-[200px] aspect-square bg-gray-200 border border-gray-300 flex items-center justify-center">
      <Feature blok={{ name: "Feature 2" }} />
              <div className="w-full mb-4">
         <Image
          src={blok.image.filename}
          alt={blok.image.alt || "afbeelding artikel"}
          width={350} 
          height={215} 
       />
        </div>
            <p className="Datum">{blok.datum}</p>
            <p className="Tijd">{blok.tijd}</p>
            <p className="Title">{blok.title}</p>
    </div>
    <div className="blok-feature w-[200px] aspect-square bg-gray-200 border border-gray-300 flex items-center justify-center">
      <Feature blok={{ name: "Feature 3" }} />
              <div className="w-full mb-4">
         <Image
          src={blok.image.filename}
          alt={blok.image.alt || "afbeelding artikel"}
          width={350} 
          height={215} 
       />
        </div>
            <p className="Datum">{blok.datum}</p>
            <p className="Tijd">{blok.tijd}</p>
            <p className="Title">{blok.title}</p>
    </div>
  </div>
  </div>
);

export default Testlist;