"use client";
import React from "react";
import "../app/globals.css";
import Image, { StaticImageData } from "next/image";
import { Container } from "@/components/Container";
import { Navbar } from "@/components/Navbar";
import teamMember1 from "../../public/img/user1.jpg";
import teamMember2 from "../../public/img/user2.jpg";
import teamMember3 from "../../public/img/user3.jpg";
import teamMember4 from "../../public/img/user1.jpg";
import teamMember5 from "../../public/img/user2.jpg";
import teamMember6 from "../../public/img/user3.jpg";
import teamMember7 from "../../public/img/user1.jpg";

interface TeamMemberProps {
  image: StaticImageData;
  name: string;
  position: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, position, bio }) => {
  return (
    <div className="max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg">
      <Image
        src={image}
        width={200}
        height={200}
        className="object-cover w-32 h-32 mx-auto rounded-full"
        alt={name}
        placeholder="blur"
      />
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="mt-2 text-gray-400">{position}</p>
        <p className="mt-4 text-gray-300">{bio}</p>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen">
        <Container className="flex justify-center items-center py-12">
          <h1 className="text-center text-6xl font-bold leading-snug tracking-tight text-white">
            About Us
          </h1>
        </Container>
        <Container className="py-12 flex flex-col items-center">
          <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl text-center md:text-left">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
                Our Mission
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                Our mission is to cultivate a passion for financial literacy in young minds, empowering them with the skills and knowledge to make informed financial choices. We aim to develop critical thinking and a proactive mindset, preparing students to navigate and shape the financial landscape of tomorrow with confidence and creativity.
              </p>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
                Our Vision
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                Our vision is to empower students by integrating financial literacy with real-world business insights. We aim to transform learning into a dynamic experience, where students invest virtual currency in actual businesses, track their progress, and witness the impact firsthand. This approach nurtures informed decision-making and fosters a lifelong understanding of finance and business operations.
              </p>
            </div>
          </div>
        </Container>
        <Container className="py-12">
          <h2 className="text-3xl font-bold leading-snug tracking-tight text-center text-white lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap justify-center mt-8 gap-8">
            <div className="flex gap-8 justify-center w-full max-w-4xl">
              <TeamMember
                image={teamMember1}
                name="Advik Kotawala"
                position="Founder"
                bio=""
              />
              <TeamMember
                image={teamMember2}
                name="Vithal Agrawal"
                position="CEO"
                bio=""
              />
            </div>
            <div className="flex flex-wrap gap-8 justify-center w-full max-w-4xl mt-8">
              <TeamMember
                image={teamMember3}
                name="Shaurya Kohli"
                position="COO"
                bio=""
              />
              <TeamMember
                image={teamMember4}
                name="Vaishnavi Siyag"
                position="Head of Design"
                bio=""
              />
              {/* <TeamMember
                image={teamMember5}
                name="Emma Wilson"
                position="COO"
                bio="Emma ensures smooth operations and efficient management of our resources."
              />
              <TeamMember
                image={teamMember6}
                name="Olivia Lee"
                position="VP of Sales"
                bio="Olivia leads our sales team and drives business growth."
              />
              <TeamMember
                image={teamMember7}
                name="Sophia Miller"
                position="VP of Product"
                bio="Sophia oversees product development and strategy."
              /> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
