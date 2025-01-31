import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// Components
import { Button } from "~/components/atom/button";
import { Accordion } from "~/components/molecule/accordion";

// Images 
import Star from "/image/star.png?jsx"
import Image1 from "/image/image1.png?jsx"
import Image2 from "/image/image2.png?jsx"
import Carpet from '/image/carpet.png?jsx'
import Bed from '/image/bed.png?jsx'
import Sofa from '/image/sofa.png?jsx'
import Toilet from '/image/toilet.png?jsx'
import CleaningService from "/image/cleaning.png?jsx"

// Constants
// import { SERVICES } from "~/constant/services";
import { FAQ } from "~/constant/faq";



export default component$(() => {
  return (
    <>
      <section id="#" class="header min-h-screen flex justify-center items-center w-full overflow-x-hidden px-4">
        <div class="relative">
          <Star class="absolute -top-32 -right-5 scale-50" />
          <div class="text-center mx-auto text-white space-y-4">
            <p class="gradient-text">COMMITTED TO TOP QUALTY SERVICES</p>
            <h1 class="text-3xl md:text-4xl font-extrabold">PROFESSIONAL RESIDENTIAL AND <span class="sm:block">COMMERCIAL CLEANNG</span> SERVICES</h1>
            <Button customClass="text-white" variant="solid" size="large">BOOK NOW</Button>
          </div>
          <Star class="absolute bottom-0 -left-5 scale-50 rotate-180" />
        </div>
      </section>

      <section id="about" class="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-x-4 items-center">
        <Image1 class="w-[80%]" />
        <div>
          <span class="gradient-text">ABOUT SHIFT GROUP</span>
          <h2 class="uppercase text-3xl sm:text-4xl font-extrabold">ResidentIal Cleaning Services</h2>
          <div class="space-y-12">
            <div class="text-[#5A5A5A] space-y-4">
              <p>In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. </p>
              <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
            </div>

            <div class="flex gap-x-4 items-center justify-center md:justify-start">
              <div class="text-center">
                <p class="font-bold text-2xl">53k</p>
                <span>Layout Done</span>
              </div>
              <div class="text-center">
                <p class="font-bold text-2xl">10k</p>
                <span>Projects Done</span>
              </div>
              <div class="text-center">
                <p class="font-bold text-2xl">150</p>
                <span>Get Awards</span>
              </div>
            </div>

            <Button variant="solid" size="large" customClass="text-white uppercase text-center w-full md:w-fit justify-center">learn more</Button>
          </div>
        </div>
      </section>


      <section id="service" class="text-center space-y-12 py-16">
        <div>
          <span class="gradient-text">SERVICES NOW</span>
          <h2 class="text-3xl md:text-4xl font-extrabold">WHAT WE OFFER SERVICES</h2>
        </div>


        <div class="grid space-y-6 container mx-auto px-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 items-baseline">
          <div class="space-y-6 px-4">
            <Carpet class="w-[30%] mx-auto" />
            <p class="font-bold text-xl">Carpet Cleaning</p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
          </div>
          <div class="space-y-6 px-4">
            <Bed class="w-[30%] mx-auto" />
            <p class="font-bold text-xl">Bed Room Cleaning</p>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
          </div>
          <div class="space-y-6 px-4">
            <Sofa class="w-[30%] mx-auto" />
            <p class="font-bold text-xl">Sofa Cleaning</p>
            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born</p>
          </div>
          <div class="space-y-6 px-4">
            <Toilet class="w-[30%] mx-auto" />
            <p class="font-bold text-xl">Toilet Cleaning</p>
            <p>The standard chunk of Lorem Ipsum used since the 1500s</p>
          </div>
        </div>
        <Button variant="solid" size="large" customClass="text-white uppercase text-center justify-center">view all services</Button>
      </section>


      <section class="py-12 space-y-6 px-4">
        <div class="text-center">
          <span class="gradient-text">PLAY THIS VIDEO TO HOW MAKE IT</span>
          <h2 class="text-3xl md:text-4xl font-extrabold uppercase">Click on this video to check how <span class="sm:block">we work with our clients</span></h2>
        </div>
        <CleaningService class="mx-auto rounded-xl" />
      </section>


      <section id="faq" class="container mx-auto px-4 py-16 space-y-12 lg:flex gap-4 items-center">
        <div class="w-full">
          <span class="gradient-text">FREQUENTLY ASKED QUESTION</span>
          <h2 class="uppercase text-3xl sm:text-4xl font-extrabold">Get answers to common <span class="sm:block">questions about our app</span></h2>
          {FAQ.map((data, index) => (
            <Accordion key={index} opened={data.isOpen}>
              <h1 q:slot="title">{data.title}</h1>
              <p>{data.description}</p>
            </Accordion>
          ))}

          <Button variant="solid" size="large" customClass="text-white uppercase text-center w-full md:w-fit justify-center">learn more</Button>
        </div>
        <Image2 class="mx-auto w-[80%] lg:w-[45%]" />
      </section >


      <section class="md:flex px-4 space-y-6 justify-around items-center py-24 bg-[#CF881D]">
        <h2 class="uppercase font-extrabold text-3xl sm:text-4xl text-white">Ready to dive in? Start your <span class="sm:block">free trial today</span></h2>
        <div class="space-x-4">
          <Button variant="ghost" size="medium" customClass="text-white">view docs</Button>
          <Button variant="outline" size="medium" customClass="text-[#CF881D]">get started</Button>
        </div>
      </section>


    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
