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
import Home_afbeelding from "./Home_afbeelding/Home_afbeelding";
import Inschrijven_heading from "./Inschrijven_heading/Inschrijven_heading";
import Markting from "./Marketing/Markting";
import Workshop from "./Workshop/Workshop_blok"
import Inschrijven from "./Inschrijven/Inschrijven";
import Slideshow from "./Slideshow/Slideshow";
import ReactieSectie from "./ReactieSectie/ReactieSectie";
import Artikelshare from "./Artikelshare/Artikelshare";
import Blok_container from "./Blok_container/Blok_container";
import Net_binnen_artikel from "./Net_binnen_artikel/Net_binnen_artikel";
import Artikel from "./Artikel/Artikel";
import PopulaireArtikelen from "./PopulaireArtikelen/PopulaireArtikelen";
import ArtikelTeaser from "./ArtikelTeaser/ArtikelTeaser";
import ArtikelContainer from "./ArtikelContainer/ArtikelContainer";
import Tags from "./Tags/Tags"
import Artikelfoot from "./Artikelfoot/Artikelfoot"
import EventsOverzicht from "./EventsOverzicht/EventsOverzicht";
import achtergrondblok from "./Workshop/Workshop_blok";
import Workshop_blok from "./Workshop/Workshop_blok";
import Home_header from "./Home_header/Home_header";
import Artikelsidebar from "./Artikelsidebar/Artikelsidebar";
import Advertentie from "./Advertentie/Advertentie";

const components = {
  page: Page,
  feature: Feature,
  threequarterlayout: ThreeQuarterLayout,
  navbar: Navbar,
  artikelheader: Artikelheader,
  artikelinhoud: Artikelinhoud,
  artikelshare: Artikelshare,
  footer: Footer,
  markting: Markting,
  home_afbeelding: Home_afbeelding,
  inschrijven_heading: Inschrijven_heading,
  blok_container: Blok_container,
  net_binnen_artikel: Net_binnen_artikel,
  workshop: Workshop,
  Workshop_blok: Workshop_blok,
  achtergrondblok: achtergrondblok,

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
  home_header: Home_header,
  artikelsidebar: Artikelsidebar,
  advertentie: Advertentie,  
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
