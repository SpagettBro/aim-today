import React from 'react';
import { storyblokEditable } from "@storyblok/react";
import ArtikelTeaser from "../ArtikelTeaser/ArtikelTeaser";

const PopularArticles = ({ blok }) => {
  return (
    <div className="populaireartikelen" {...storyblokEditable(blok)}>
      <h2>{blok.title}</h2>
      <div className="articles-list">
        {blok.articles.map((article) => (
          <ArtikelTeaser key={article._uid} blok={article} />
        ))}
      </div>
    </div>
  );
};

export default PopularArticles;