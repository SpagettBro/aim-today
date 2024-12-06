import { storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokComponent } from "@storyblok/react/rsc";

const Artikelfoot= ({ blok }) => (
  <div className="flex h-fit justify-between mx-4 my-8 text-sm lg:w-1/2 lg:mx-auto " {...storyblokEditable(blok)}>
      {blok.artikelgrid?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);

export default Artikelfoot;