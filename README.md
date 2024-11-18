# AIM Today

## Inhoudsopgave

[Project Overzicht](#project-overzicht)<br />
[Technologieën](#technologieën)<br />
[Stappen](#stappen)<br />
[Configuratie](#configuratie)<br />
[Gebruik](#gebruik)<br />
[Vervolg](#vervolg)<br />
[Licentie](#licentie)

## Project Overzicht

AIM Today is een platform dat professionals in marketing, communicatie en ondernemerschap op de hoogte houdt van de laatste trends, inzichten en ontwikkelingen in de marketingwereld. De website biedt dagelijkse artikelen, analyses, interviews met experts, casestudies, en marktdata. Gebruikers kunnen zich daarnaast abonneren op nieuwsbrieven en deelnemen aan webinars en evenementen om verder geïnformeerd en betrokken te blijven.

## Technologieën

Het project maakt gebruik van de volgende technologieën en frameworks:

    Next.js: Voor server-side rendering en optimalisatie van de gebruikerservaring.
    React.js: Voor de component-based frontend-architectuur.
    JavaScript: Voor dynamische functionaliteit en interactiviteit.
    Storyblok: Als headless CMS voor contentbeheer en het dynamisch laden van artikelen, evenementen en andere content.
    CSS / SCSS: Voor het ontwerpen en stylen van de gebruikersinterface.

## Stappen

Hieronder volgen de stappen om het project op te zetten en uit te voeren.

    Repository Clonen:

    git clone <repository_url>
    cd aim-today

    Dependencies Installeren: Installeer de benodigde dependencies:

    npm install

    Storyblok API Sleutel Configureren: Vraag een Storyblok API-sleutel aan en voeg deze toe aan de .env.local-bestand (zie Configuratie hieronder).

    Applicatie Starten: Start de ontwikkelserver:

    npm run dev

    Build Productie: Voor productie-build:

        npm run build
        npm start

## Configuratie

Voeg een .env.local-bestand toe in de hoofdmap van het project met de volgende omgeving variabelen:

NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your_storyblok_api_key

Vervang your_storyblok_api_key door de daadwerkelijke API-sleutel van je Storyblok-project.

## Gebruik

Starten van de Applicatie

    Ontwikkelomgeving: Gebruik npm run dev om de app in een lokale ontwikkelomgeving te draaien. De applicatie is standaard bereikbaar op http://localhost:3000.

    Productieomgeving: Na het uitvoeren van npm run build en npm start, draait de applicatie in productie op dezelfde poort of op een server naar keuze.

## Vervolg

De volgende stap is om een pagina met veschillende componenten af te werken en om de connectie met storyblok te leggen zodat deze ook al uitgetest kan worden op de pagina.

## Licentie

Dit project is gelicentieerd onder een eigen licentie. Ongeautoriseerde kopieën, wijzigingen, distributie of enig ander gebruik van de code is strikt verboden zonder uitdrukkelijke toestemming van 2ManyDots. Alle rechten voorbehouden.