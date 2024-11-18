import { storyblokEditable } from "@storyblok/react/rsc";
import Image from 'next/image'; 

const Home_net_binnen = ({ blok }) => (
  <div className="relative w-full m-4" {...storyblokEditable(blok)}>
      {/* Oranje achtergrondvlak achter de afbeelding */}
      <div className="absolute w-full h-full bg-orange-500 rounded-md -bottom-2 -right-2"></div>

      {/* Hoofdafbeelding, 16px omlaag geplaatst */}
      <Image
        src={blok.home_hoofdartikel_img.filename}
        alt={blok.home_hoofdartikel_img.alt || "Hoofd artikel img"}
        layout="responsive"
        width={80} 
        height={200}
        className="relative rounded-md"
      />
    </div>
);

export default Home_net_binnen;
