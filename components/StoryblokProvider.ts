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
import Footer from "./Footer/Footer";
import Home_net_binnen from "./Home/Home_net_binnen";
import Inschrijven_heading from "./Inschrijven_heading/Inschrijven_heading";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import Workshop from "./Workshop/Workshop_blok";
=======
=======
>>>>>>> Stashed changes
import Inschrijven from "./Inschrijven/Inschrijven";
import Slideshow from "./Slideshow/Slideshow";
import ReactieSectie from "./ReactieSectie/ReactieSectie"; 
import Artikelshare from "./Artikelshare/Artikelshare"; 
import Blok_container from "./Blok_container/Blok_container";
import Net_binnen_artikel from "./Net_binnen_artikel/Net_binnen_artikel";
import Article from "./Article/Article";
import ArticleTeaser from "./ArticleTeaser/ArticleTeaser";
import AllArticles from "./AllArticles/AllArticles";
<<<<<<< Updated upstream

import Workshop_blok from "./Workshop/Workshop_blok"
=======
import EventsOverzicht from "./EventsOverzicht/EventsOverzicht";
import achtergrondblok from "./Workshop/Workshop_blok";
import Tags from "./Tags/Tags"
import Artikelfoot from "./Artikelfoot/Artikelfoot"
import Workshop_blok from "./Workshop/Workshop_blok"
>>>>>>> Stashed changes

>>>>>>> Stashed changes
const components = {
  page: Page,
  feature: Feature,
  threequarterlayout: ThreeQuarterLayout,
  navbar: Navbar,
<<<<<<< Updated upstream
=======
  artikelheader: Artikelheader,
  artikelinhoud: Artikelinhoud,
  artikelshare: Artikelshare,
>>>>>>> Stashed changes
  footer: Footer,
  home_net_binnen: Home_net_binnen,
  inschrijven_heading: Inschrijven_heading,
  blok_container: Blok_container,
  net_binnen_artikel: Net_binnen_artikel,
<<<<<<< Updated upstream
=======
  Workshop_blok: Workshop_blok,
  achtergrondblok: achtergrondblok,
  Workshop_blok: Workshop_blok,
>>>>>>> Stashed changes
  
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
