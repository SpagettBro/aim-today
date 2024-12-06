import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "app/globals.css";

const Workshop_blok = ({ blok }) => (
  <div
    className="w-auto mx-2 lg:w-1/2 lg:mx-auto lg:grid lg:columns-12"
    {...storyblokEditable(blok)}
  >
    <div className="w-[400px]">
      <div className="flex justify-end mb-6 font-sans font-bold text-xl text-donkerBlauw">
        <h1>{render(blok.Workshop_header1)}</h1>
      </div>
      <div className="flex justify-between">
        <div className=" links flex h-[600px] w-[25%]">
          <img className="" src={blok.WorkshopImage.filename} />
        </div>
        <div className=" rechts flex flex-col justify-between w-[73%] h-[600px]">
          <div className="bg-[#EBEEF3] rounded mt-1 p-2">
            <div className="font-font-sans font-bold text-xl">
              {render(blok.WorkshopNaam1)}
            </div>
            <div className="font-sans font-normal">
              {render(blok.WorkshopSubtekst1)}
            </div>
            <div className="flex justify-end font-montserrat font-normal">
              {render(blok.WorkshopTijd1)}
            </div>
          </div>
          <div className="bg-[#EBEEF3]  rounded p-2">
            <div className="font-sans font-bold text-xl">
              {render(blok.WorkshopNaam2)}
            </div>
            <div className="font-sans font-normal">
              {render(blok.WorkshopSubtekst2)}
            </div>
            <div className="flex justify-end font-montserrat font-normal">
              {render(blok.WorkshopTijd2)}
            </div>
          </div>
          <div className="bg-[#EBEEF3] p-2 rounded">
            <div className="font-sans font-bold text-xl">
              {render(blok.WorkshopNaam3)}
            </div>
            <div className="font-sans font-normal">
              {render(blok.WorkshopSubtekst3)}
            </div>
            <div className="flex justify-end font-montserrat font-normal">
              {render(blok.WorkshopTijd3)}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Workshop_blok;
