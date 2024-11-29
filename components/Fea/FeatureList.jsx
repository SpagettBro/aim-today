import { storyblokEditable } from "@storyblok/react/rsc";
 
const Feature = ({ blok }) => (
  <div className="blok-feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);
 
const FeatureList = () => (
  <div className="flex flex-wrap gap-4 justify-between">
    <div className="blok-feature w-[200px] aspect-square bg-gray-200 border border-gray-300 flex items-center justify-center">
      <Feature blok={{ name: "Feature 1" }} />
    </div>
    <div className="blok-feature w-[200px] aspect-square bg-gray-200 border border-gray-300 flex items-center justify-center">
      <Feature blok={{ name: "Feature 2" }} />
    </div>
    <div className="blok-feature w-[200px] aspect-square bg-gray-200 border border-gray-300 flex items-center justify-center">
      <Feature blok={{ name: "Feature 3" }} />
    </div>
  </div>
);

 
export default FeatureList;
 
 