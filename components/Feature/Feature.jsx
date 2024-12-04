import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";

const Feature = ({ blok }) => {
  return (
    <div
      className="container mx-auto px-8 relative w-full"
      {...storyblokEditable(blok)}
    >
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="relative w-full mx-auto mt-4">
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={blok.image.filename}
              alt={blok.image.alt || "Afbeelding artikel"}
              width={300}
              height={190}
              className="w-full h-auto"
            />
            <div className="p-4" style={{ height: "170px", maxWidth: "310px" }}>
              <p className="font-montserrat text-xs font-normal text-gray-500">
                {blok.accent}
              </p>
              <h3 className="font-dm-sans text-sm font-bold leading-5 pt-2">
                {blok.title}
              </h3>
              <p className="text-sm text-gray-600 pt-2">
                {render(blok.description)}
              </p>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="relative w-full mx-auto mt-4">
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={blok.image.filename}
              alt={blok.image.alt || "Afbeelding artikel"}
              width={300}
              height={190}
              className="w-full h-auto"
            />
            <div className="p-4" style={{ height: "170px", maxWidth: "310px" }}>
              <p className="font-montserrat text-xs font-normal text-gray-500">
                {blok.accent}
              </p>
              <h3 className="font-dm-sans text-sm font-bold leading-5 pt-2">
                {blok.title}
              </h3>
              <p className="text-sm text-gray-600 pt-2">
                {render(blok.description)}
              </p>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="relative w-full mx-auto mt-4">
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={blok.image.filename}
              alt={blok.image.alt || "Afbeelding artikel"}
              width={300}
              height={190}
              className="w-full h-auto"
            />
            <div className="p-4" style={{ height: "170px", maxWidth: "310px" }}>
              <p className="font-montserrat text-xs font-normal text-gray-500">
                {blok.accent}
              </p>
              <h3 className="font-dm-sans text-sm font-bold leading-5 pt-2">
                {blok.title}
              </h3>
              <p className="text-sm text-gray-600 pt-2">
                {render(blok.description)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
