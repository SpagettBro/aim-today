import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Home_header = ({ blok }) => (
  <div className="" {...storyblokEditable(blok)}>
    <div>
      <img
        className=""
        src={blok.artikelheaderfoto.filename}
        alt="header afbeelding"
      />
    </div>
  </div>
);

export default Home_header;
