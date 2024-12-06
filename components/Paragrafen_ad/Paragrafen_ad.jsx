import { storyblokEditable } from "@storyblok/react/rsc";

const Paragrafen_ad = ({ blok }) => (
  <div
    className="w-11/12 md:w-9/12 mx-auto py-8 my-40 flex flex-col items-center"
    {...storyblokEditable(blok)}
  >
    {/* Horizontale lijn en tekst */}
    <div className="flex flex-col items-center">
      <hr className="border-t-2 border-orange-500 mb-2" style={{ width: "204px" }} />
      <p className="font-montserrat text-sm text-gray-600 text-center">
        {blok.tekst || "Lees verder onder advertentie"}
      </p>
    </div>

    {/* Grijs vlak */}
    <div
      className="bg-gray-300 w-full mt-6 md:w-3/4 lg:w-2/3"
      style={{
        height: "300px", // standaardhoogte
      }}
    >
      {/* Placeholder content */}
    </div>
  </div>
);

export default Paragrafen_ad;
