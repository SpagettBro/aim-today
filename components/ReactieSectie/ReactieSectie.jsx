import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const ReactieSectie = ({ blok }) => (
  <div className=" lg:w-1/2 lg:mx-auto align-text-middle mx-2 mb-10 dark:bg-darkGrijs" {...storyblokEditable(blok)}>
    <div className="flex justify-between mb-5">
      <div className="text-base font-bold py-2">{render(blok.reactieKop)}</div>
      <div className=" bg-orange-500 text-white text-sm font-bold py-2 px-4 rounded">
        {render(blok.reactieButton)}
      </div>
    </div>
    <div className="flex justify-between">
      <div className="text-center">
        <div className="overflow-hidden w-28 h-28 bg-slate-900 rounded-full "   style={{
          backgroundImage: `url(${blok.profielfoto?.filename || ''})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} >
        </div>
      
        <div className="font-inter w-28">
          {render(blok.reactienaam)}
        </div>
      </div>

        <div className="bg-[#D9D9D9] w-[38vw] p-[35px] rounded">
          {render(blok.reactietekst)}
        </div>
    </div>
  </div>
);

export default ReactieSectie;
