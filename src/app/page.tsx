import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import Image from "next/image";
import timeLine from "../../public/img/timeline.png";
import { benefitOne, benefitTwo } from "@/components/data";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle preTitle="Benefits" title=" Why Us?">
        Empower-Invest bridges financial literacy and real-world business for students. Using our platform, users invest virtual currency into real small and local businesses, tracking their investments in real-time. As investments grow, students visit these businesses to see firsthand how their money is used. This unique approach educates and inspires by showing tangible investment outcomes.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle="Watch a video" title="Learn how to use the application">
        This section highlights a demo video of our investment platform, Empower-Invest. Learn how you can invest virtual currency in real-life local businesses and track your earnings.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Here are some of our Frequently Asked Questions, if you have any further queries contact us at info@empowerinvest.in!
      </SectionTitle>

      <Faq />

      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-trueGray-800 px-7 py-2 lg:px-5 lg:py-2 lg:flex-nowrap rounded-xl">
        <SectionTitle preTitle="" title="Reach Out To Us">
          Fill Out This Form To Receive Prompt Solutions To Any Problems! <br /><br /> For further assistance, reach out to <strong>Advik Kotawala, 97723 70036</strong>. <br />For tech-related assistance, reach out to <strong>Vithal Agrawal, 91166 64128</strong>.
        </SectionTitle>
      </div>

      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl mx-auto text-white px-2 py-2 rounded-xl">
        <Image
          src={timeLine}
          id="register"
          width="1500"
          height="500"
          className="object-cover items-center"
          alt="Hero Illustration"
          loading="eager"
          placeholder="blur"
        />
      </div>

      <Cta />
    </Container>
  );
}
