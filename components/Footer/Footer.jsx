import { storyblokEditable } from "@storyblok/react/rsc";

const Footer = ({ blok }) => (
  <div
    className="bg-grijs py-2 px-4 md:pt-[60px] md:pb-[20px]"
    {...storyblokEditable(blok)}
  >
    {/* Main Content */}
    <div className="md:flex md:justify-between md:items-start md:w-full md:max-w-[1200px] md:mx-auto">
      {/* Links Section */}
      <div className="md:w-[322px]">
        {/* Mobile: Stacked Links in Flex Columns */}
        <ul className="space-y-4 text-center md:hidden flex flex-wrap justify-center font-inter">
          <li className="w-1/2 mt-4">
            <a href="#" className="hover:text-oranje">
              Nieuws
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje">
              Interviews
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje">
              Artikels
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje">
              Evenementen
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje">
              Webinars
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje">
              Vacatures
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje">
              Contact
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje">
              Team
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje">
              Over
            </a>
          </li>
          <li className="w-1/2">
            <a href="#" className="hover:text-oranje">
              Nieuwsbrief
            </a>
          </li>
        </ul>
        {/* Desktop: Two Columns */}
        <div className="hidden md:grid grid-cols-2 gap-x-8 gap-y-4 text-left">
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-oranje">
                Nieuws
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-oranje">
                Interviews
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-oranje">
                Artikels
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-oranje">
                Evenementen
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-oranje">
                Webinars
              </a>
            </li>
          </ul>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-oranje">
                Vacatures
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-oranje">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-oranje">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-oranje">
                Over
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-oranje">
                Nieuwsbrief
              </a>
            </li>
          </ul>
        </div>
        {/* Divider */}
        <div className="h-[1px] bg-gray-300 hidden md:block w-[1200px] mt-[35px]" />
        {/* Logo */}
        <div className="mt-6 md:mt-4 flex justify-center md:justify-start">
          <img
            src={blok.logo.filename}
            alt="AIM TODAY"
            className="h-auto max-w-[140px]"
          />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="md:w-[430px] w-full flex flex-col items-center md:items-start mt-8 mr-[-700px] md:mt-0">
        <p className="text-lg font-medium text-gray-700 mb-4 text-center md:text-left">
          Meld je aan voor de nieuwsbrief
        </p>
        <div className="flex w-full mb-6 border-[2px] border-oranje rounded-lg">
          <form
            action="https://gmail.us14.list-manage.com/subscribe/post?u=4564b0a1d61a29a6ea2701a1c&amp;id=b3252484f9"
            method="POST"
            target="_blank"
            className="flex w-full"
          >
            {/* Email Input */}
            <input
              type="email"
              name="EMAIL"
              placeholder="Voer je e-mailadres in"
              className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none"
              required
            />
            {/* Hidden Field */}
            <input
              type="text"
              name="b_4564b0a1d61a29a6ea2701a1c_b3252484f9"
              tabIndex="-1"
              value=""
              className="hidden"
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 bg-oranje text-white rounded-r-md hover:bg-orange-600 "
            >
              ⟶
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="md:mt-[240px] md:mb-0 mb-4 flex gap-6 justify-center md:justify-end w-full md:w-auto">
        {[
          "instagram_icon",
          "facebook_icon",
          "youtube_icon",
          "linkedin_icon",
          "x_icon",
        ].map((icon, i) => (
          <img
            key={i}
            src={blok[icon].filename}
            alt={blok[icon].alt || icon}
            className="h-8 w-8"
          />
        ))}
      </div>
    </div>
  </div>
);

export default Footer;
