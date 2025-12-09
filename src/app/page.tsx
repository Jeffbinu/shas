import Hero from "../components/Hero";
import PartnersLogos from "../components/PartnersLogos";
import OurStory from "../components/OurStory";
import ServicesGrid from "../components/ServicesGrid";
import HowWeWork from "../components/HowWeWork";
import ProductFeatures from "../components/ProductFeatures";
import ProjectsGrid from "../components/ProjectsGrid";
import TestimonialsGrid from "../components/TestimonialsGrid";
import BlogPreviewGrid from "../components/BlogPreviewGrid";
import {
  getHero,
  getServices,
  getHow,
  getProjects,
  getTestimonials,
  
} from "../lib/content";

import prt1 from "../../public/partners/partner1.png";
import prt2 from "../../public/partners/partner2.png";
import prt3 from "../../public/partners/partner3.png";
import prt4 from "../../public/partners/partner4.png";
import prt5 from "../../public/partners/partner5.png";
import prt6 from "../../public/partners/partner6.png";
import prt7 from "../../public/partners/partner7.png";

export default function HomePage() {
  const hero = getHero();
  const services = getServices();
  const how = getHow();
  const projects = getProjects();
  const testimonials = getTestimonials();

  const logos = [prt1, prt2, prt3, prt4, prt5, prt6, prt7];

  return (
    <>
      <Hero {...hero} />
      <PartnersLogos logos={logos} />
      <OurStory />
      <ServicesGrid items={services} />
      <HowWeWork data={how} />
      <ProductFeatures />
      <ProjectsGrid items={projects} />
      <TestimonialsGrid items={testimonials} />
      <BlogPreviewGrid />
    </>
  );
}
