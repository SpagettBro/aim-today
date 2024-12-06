import { render } from 'storyblok-rich-text-react-renderer';
import { storyblokEditable } from "@storyblok/react";

const Artikel = ({ blok }) => {
  return (
    <section className="text-gray-600 body-font dark:bg-darkGrijs dark:text-[#EAEAEA]" {...storyblokEditable(blok)}>
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="md:h-96 w-full mb-10 object-cover object-center rounded"
          alt={blok.afbeelding.alt}
          src={blok.afbeelding.filename}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-[#EAEAEA]">
            {blok.titel}
          </h1>
          <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-600 dark:text-[#D9D9D9]">
            {blok.subtitel}
          </h2>
          <div className="mb-8 leading-relaxed text-justify dark:text-[#D9D9D9]">{render(blok.content)}</div>
        </div>
      </div>
    </section>
  );
};

export default Artikel;
