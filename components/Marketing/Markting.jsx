import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Markting = ({ blok }) => (
    <div className="blok-marketing w-11/12 md:w-9/12 mx-auto bg-offWhite p-4" {...storyblokEditable(blok)}>

        {/* Container voor flex layout op desktop */}
        <div className="md:flex md:space-x-6">
            {/* Linker Div */}
            <div className="w-full ml-2 mr-6">

                {/* Koptekst met flex layout */}
                <div className="hoofdartikel_titel font-dm-sans mb-4 pt-2  flex items-center justify-between">
                    {/* Titeltekst */}
                    <div className="text-base md:text-xl leading-6 md:leading-9 text-donkerBlauw tracking-wider">
                        {render(blok.marketingtitel)}
                    </div>

                    {/* hidden bekijk meer tekst, alleen zichtbaar voor mobile */}
                    <div className="text-oranje text-right text-sm md:text-base md:hidden">
                        {render(blok.bekijkalles)}
                    </div>
                </div>

                {/* Image */}
                <img
                    className="w-full h-[200px] md:h-auto object-cover object-center rounded mb-4 drop-shadow-imageachterg"
                    alt="MARKETING IMG"
                    src={blok.imagemarketinga.filename}
                />

                {/* Ondertekst voor de image */}
                <div className="font-dm-sans text-xs md:text-base text-black leading-5 tracking-wider">
                    {render(blok.marketinghoofdtekst)}
                </div>
            </div>


            {/* Rechter Div: Bevat aanvullende teksten en afbeeldingen */}
            <div className="mt-6 md:mt-0 space-y-3 md:space-y-4 flex-grow">

                {/* "Bekijk alles" tekst: alleen zichtbaar op desktop */}
                <div className="hoofdartikel_titel font-dm-sans text-oranje text-right text-sm md:text-base hidden md:block">
                    {render(blok.bekijkalles)}
                </div>

                {/* Horizontale scheidingslijnen */}
                <div className="border-y my-3 border-border-lijngrijs md:opacity-0"></div>

                {/* Eerste tekstblok met afbeelding */}
                <div className="flex items-start space-x-4">
                    {/* Afbeelding */}
                    <div>
                        <img
                            className="w-[250px] h-auto md:max-w-[130px] md:h-auto md:ml-6 object-cover object-center rounded drop-shadow-imageachters"
                            alt="MARKETING IMG"
                            src={blok.imagemarketingb.filename}
                        />
                    </div>
                    {/* Tekst naast de afbeelding */}
                    <div className="font-dm-sans text-xs md:text-base">
                        {render(blok.marketingteksta)}
                    </div>
                </div>

                {/* Horizontale scheidingslijnen */}
                <div className="border-y my-3 border-border-lijngrijs"></div>

                {/* Tweede tekstblok met afbeelding */}
                <div className="flex items-start space-x-4">
                    {/* Afbeelding */}
                    <div>
                        <img
                            className="w-[300px] h-auto md:max-w-[130px] md:h-auto md:ml-6 object-cover object-center rounded drop-shadow-imageachters"
                            alt="MARKETING IMG"
                            src={blok.imagemarketingc.filename}
                        />
                    </div>
                    {/* Tekst naast de afbeelding */}
                    <div className="font-dm-sans text-xs md:text-base">
                        {render(blok.marketingtekstb)}
                    </div>
                </div>

                {/* Horizontale scheidingslijnen */}
                <div className="border-y my-3 border-border-lijngrijs"></div>

                {/* Derde tekstblok met afbeelding */}
                <div className="flex items-start space-x-4">
                    {/* Afbeelding */}
                    <div>
                        <img
                            className="w-[300px] h-auto md:max-w-[130px] md:h-auto md:ml-6 object-cover object-center rounded drop-shadow-imageachters"
                            alt="MARKETING IMG"
                            src={blok.imagemarketingd.filename}
                        />
                    </div>
                    {/* Tekst naast de afbeelding */}
                    <div className="font-dm-sans text-xs md:text-base">
                        {render(blok.marketingtekstc)}
                    </div>
                </div>

                {/* Horizontale scheidingslijnen */}
                <div className="border-y my-3 border-border-lijngrijs"></div>

                {/* Vierde tekstblok met afbeelding */}
                <div className="flex items-start space-x-4">
                    {/* Afbeelding */}
                    <div>
                        <img
                            className="w-[300px] h-auto md:max-w-[130px] md:h-auto md:ml-6 object-cover object-center rounded drop-shadow-imageachters"
                            alt="MARKETING IMG"
                            src={blok.imagemarketinge.filename}
                        />
                    </div>
                    {/* Tekst naast de afbeelding */}
                    <div className="font-dm-sans text-xs md:text-base">
                        {render(blok.marketingtekstd)}
                    </div>
                </div>

                {/* Horizontale scheidingslijnen */}
                <div className="border-y my-3 border-lijngrijs"></div>
            </div>
        </div>
    </div>
);

export default Markting;