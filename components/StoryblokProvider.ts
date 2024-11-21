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

const components = {
  page: Page,
  feature: Feature,
  threequarterlayout: ThreeQuarterLayout,
  navbar: Navbar,
  artikelheader: Artikelheader,
  artikelinhoud: Artikelinhoud,
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
