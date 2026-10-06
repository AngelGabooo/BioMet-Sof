import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import WhatWeDo from '../components/sections/WhatWeDo';
import FeaturedServices from '../components/sections/FeaturedServices';
import Projects from '../components/sections/Projects';
import Process from '../components/sections/Process';
import FAQ from '../components/sections/FAQ';
import CTA from '../components/sections/CTA';
import Reveal from '../components/ui/Reveal';

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal><Stats /></Reveal>
      <Reveal><WhatWeDo /></Reveal>
      <Reveal><FeaturedServices /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Process /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><CTA /></Reveal>
    </>
  );
}