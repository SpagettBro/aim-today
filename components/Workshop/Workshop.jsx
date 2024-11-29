import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
<link
  href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@900&family=Montserrat:wght@400&display=swap"
  rel="stylesheet"
/>;

const Workshop = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="font-dm-sans text-[21.5px] text-right font-bold pt-2 ml-2 leading-5">
        {render(blok.workshopblok)}
      </div>
    </div>
  );
};

export default Workshop;
