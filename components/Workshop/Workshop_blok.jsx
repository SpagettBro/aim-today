import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import "app/globals.css";

const Workshop_blok = ({ blok }) => (
  <div
    className="w-auto mx-2 lg:w-1/2 lg:mx-auto lg:grid lg:columns-12"
    {...storyblokEditable(blok)}
  >
    <div>
      <div className="flex justify-end">
        <div className="flex bg-red-500 h-[500px]">
          <img className="bg-green-500" src={blok.WorkshopImage.filename} />
        </div>
        <div className="rechts flex flex-col justify-between w-[300px] h-[500px]">
          <div className="bg-[#EBEEF3] rounded">
            <div className="font-bold">{render(blok.WorkshopNaam1)}</div>
            <div>{render(blok.WorkshopSubtekst1)}</div>
            <div className="flex justify-end">{render(blok.WorkshopTijd1)}</div>
          </div>
          <div className="bg-[#EBEEF3] rounded">
            <div className="font-bold">{render(blok.WorkshopNaam2)}</div>
            <div>{render(blok.WorkshopSubtekst2)}</div>
            <div className="flex justify-end">{render(blok.WorkshopTijd2)}</div>
          </div>
          <div className="bg-[#EBEEF3] rounded">
            <div className="font-bold">{render(blok.WorkshopNaam3)}</div>
            <div>{render(blok.WorkshopSubtekst3)}</div>
            <div className="flex justify-end">{render(blok.WorkshopTijd3)}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Workshop_blok;
