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
import Home_net_binnen from "./home/Home_net_binnen";
import Net_binnen_artikel from "./home/Net_binnen_artikel";

const components = {
  page: Page,
  feature: Feature,
  threequarterlayout: ThreeQuarterLayout,
  navbar: Navbar,
  footer: Footer,
  home_net_binnen: Home_net_binnen,
  net_binnen_artikel: Net_binnen_artikel,
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
