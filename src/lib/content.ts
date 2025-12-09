import content from "../data/content.json";
export const getSite = () => content.site;
export const getHero = () => content.hero;
export const getServices = () => content.services || [];
export const getHow = () => content.how;
export const getProjects = () => content.projects || [];
export const getTestimonials = () => content.testimonials || [];
