"use client";

import {
  storyblokInit,
  apiPlugin,
  SbReactComponentsMap,
} from "@storyblok/react/rsc";
import Page from "./page.component";
import Feature from "./Feature/Feature";
import ThreeQuarterLayout from "./ThreeQuarterLayout/ThreeQuarterLayout";
import Navbar from "./Navbar/Navbar";
import Artikelheader from "./Artikelheader/Artikelheader";
import Artikelinhoud from "./Artikelinhoud/Artikelinhoud";
import Footer from "./Footer/Footer";
import Home_net_binnen from "./Home/Home_net_binnen";
import Net_binnen_artikel from "./Net_binnen_artikel/Net_binnen_artikel";
import Inschrijven_heading from "./Inschrijven_heading/Inschrijven_heading";
import Inschrijven from "./Inschrijven/Inschrijven";
import Slideshow from "./Slideshow/Slideshow";
import ReactieSectie from "./ReactieSectie/ReactieSectie"; 
import Artikelshare from "./Artikelshare/Artikelshare"; 
import Tags from "./Tags/Tags"
import Artikelfoot from "./Artikelfoot/Artikelfoot"

const components = {
  page: Page,
  feature: Feature,
  threequarterlayout: ThreeQuarterLayout,
  navbar: Navbar,
  artikelheader: Artikelheader,
  artikelinhoud: Artikelinhoud,
  artikelshare: Artikelshare,
  footer: Footer,
  home_net_binnen: Home_net_binnen,
  inschrijven_heading: Inschrijven_heading,
  net_binnen_artikel: Net_binnen_artikel,
  inschrijven: Inschrijven,
  slideshow: Slideshow,
  reactiesectie: ReactieSectie,
  tags: Tags,
  artikelfoot: Artikelfoot,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: components as SbReactComponentsMap,
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

console.log(process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN);
