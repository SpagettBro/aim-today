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
import Inschrijven_heading from "./Inschrijven_heading/Inschrijven_heading";
import Workshop from "./Workshop/Workshop"
import Inschrijven from "./Inschrijven/Inschrijven";
import Slideshow from "./Slideshow/Slideshow";
import ReactieSectie from "./ReactieSectie/ReactieSectie"; 
import Artikelshare from "./Artikelshare/Artikelshare"; 
import Blok_container from "./Blok_container/Blok_container";
import Net_binnen_artikel from "./Net_binnen_artikel/Net_binnen_artikel";
import EventsOverzicht from "./EventsOverzicht/EventsOverzicht";
import Artikel from "./Artikel/Artikel";
import PopulaireArtikelen from "./PopulaireArtikelen/PopulaireArtikelen";
import ArtikelTeaser from "./ArtikelTeaser/ArtikelTeaser";
import ArtikelContainer from "./ArtikelContainer/ArtikelContainer";



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
  blok_container: Blok_container,
  net_binnen_artikel: Net_binnen_artikel,
  workshop: Workshop,
  
  inschrijven: Inschrijven,
  slideshow: Slideshow,
  reactiesectie: ReactieSectie,
  eventsoverzicht: EventsOverzicht,
  tags: Tags,
  artikelfoot: Artikelfoot,
  artikel: Artikel,
  populaireartikelen: PopulaireArtikelen,
  artikelteaser: ArtikelTeaser,
  artikelcontainer: ArtikelContainer,
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
