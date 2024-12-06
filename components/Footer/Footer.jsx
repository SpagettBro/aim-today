import { storyblokEditable } from "@storyblok/react/rsc";

const Footer = ({ blok }) => (
  <div
    className="bg-gray-100 py-1 px-4 md:py-[20px] dark:bg-[#1E1E1E] dark:text-white" // Dark background and text color
    {...storyblokEditable(blok)}
  >
    {/* Main Content */}
    <div className="md:flex md:justify-between md:items-start md:w-full md:max-w-[1200px] md:mx-auto">
      {/* Links Section */}
      <div className="md:w-[322px]">
        {/* Mobile: Stacked Links in Flex Columns */}
        <ul className="space-y-4 text-center md:hidden flex flex-wrap justify-center font-inter dark:text-white">
          <li className="w-1/2 mt-2">
            <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
              Nieuws
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
              Interviews
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
              Artikels
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
              Evenementen
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
              Webinars
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
              Vacatures
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
              Contact
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
              Team
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
              Over
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
              Nieuwsbrief
            </a>
          </li>
        </ul>

        {/* Desktop: Two Columns */}
        <div className="hidden md:grid grid-cols-2 gap-x-8 gap-y-4 text-left dark:text-white">
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
                Nieuws
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
                Interviews
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
                Artikels
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
                Evenementen
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
                Webinars
              </a>
            </li>
          </ul>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
                Vacatures
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
                Over
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-oranje dark:hover:text-orange-500">
                Nieuwsbrief
              </a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gray-300 dark:bg-[#FFFFFF] hidden md:block w-[1200px] mt-[35px]" />

        {/* Logo */}
        <div className="mt-6 flex justify-center md:justify-start">
          <img
            src={blok.logo.filename}
            alt="AIM TODAY"
            className="h-auto max-w-[140px]"
          />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="md:w-[430px] w-full flex flex-col items-center md:items-start mt-8 mr-[-700px] md:mt-0">
        <p className="text-lg font-medium text-gray-700 mb-4 text-center md:text-left dark:text-white">
          Meld je aan voor de nieuwsbrief
        </p>
        <div className="flex w-full mb-6">
          <input
            type="email"
            placeholder="email@gmail.com"
            className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-oranje dark:bg-[#1E1E1E] dark:text-white"
          />
          <button className="px-4 py-2 bg-oranje text-white rounded-r-lg hover:bg-orange-600 focus:outline-none">
            ⟶
          </button>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="md:mt-[230px] flex gap-6 justify-center md:justify-end w-full md:w-auto dark:text-[#EAEAEA]">
        {[
          "instagram_icon",
          "facebook_icon",
          "youtube_icon",
          "linkedin_icon",
          "x_icon"
        ].map((icon, i) => (
          <img
            key={i}
            src={blok[icon].filename}
            alt={blok[icon].alt || icon}
            className="h-8 w-8 dark:text-[#EAEAEA]"
          />
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
