import React from 'react';
import "../app/globals.css";
import { Navbar } from "@/components/Navbar";

const Visit: React.FC = () => {
    return (
        <>
            <Navbar />

            <div className="bg-trueGray-900 text-gray-100 min-h-screen p-8">
                <div className="container mx-auto text-center mt-10 px-4">
                    <h1 className="text-5xl font-extrabold mb-6 text-white animate-fade-in">
                        Sessions with Empower Invest
                    </h1>
                    <p className="mb-6 text-lg leading-relaxed">
                        Welcome to Empower-Invest! Our <strong>interactive sessions</strong> are a crucial part of your journey with us, offering essential insights into investment fundamentals and how to effectively use our platform. <strong>Attending these sessions</strong> will not only help you perform better on the quiz but also ensure you <strong>fully understand</strong> and help navigate all the resources available on our website.
                    </p>
                    <p className="mb-6 text-lg leading-relaxed">
                        To enhance your learning journey, Empower-Invest offers interviews with industry experts, and competitions that will put your new skills to the test.
                    </p>
                    <p className="mb-6 text-lg leading-relaxed">
                        Your <strong>participation is key</strong> to unlocking the full potential of Empower-Invest. Don’t miss out on this valuable opportunity to enhance your financial literacy and investment skills. We look <strong>forward</strong> to seeing you in our sessions and <strong>helping you navigate</strong> your investment journey with confidence!
                    </p>
                    <p className="mb-6 text-lg leading-relaxed">
                        As a member of Empower-Invest, you <strong>automatically gain access</strong> to recordings from previous sessions, ensuring you <strong>never miss out</strong> on valuable insights and experiences.
                    </p>
                    {/* <div className="my-6">
                        <p className="italic">- Leave space for a chart/diagram for the timeline of the sessions -</p>
                    </div> */}
                    <h1 className="text-5xl font-extrabold mb-6 text-white animate-fade-in">
                        Business Visits with Empower Invest
                    </h1>
                    <p className="mb-6 text-lg leading-relaxed">
                        We&apos;re thrilled to offer you the opportunity to visit real businesses and gain a deeper understanding of their operations.
                    </p>
                    <p className="mb-6 text-lg leading-relaxed">
                        To ensure a valuable experience, please book your slots promptly, as we can accommodate a maximum of 15 students per visit. If you’re unable to secure a spot this time, don’t worry—additional visits will be scheduled on weekends.
                    </p>
                    <p className="mb-6 text-lg leading-relaxed">
                        We look forward to having you join us and explore the world of business firsthand!
                    </p>
                    <div className="my-6">
                        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out animate-bounce">
                            Book your slots down here 📅
                        </button>
                    </div>
                    <div className="my-6">
                        <p className="italic">- Space for the slots and businesses will be displayed here that are available to visit -</p>
                    </div>
                    <h1 className="text-5xl font-extrabold mb-6 text-white animate-fade-in">
                        Competitions with Empower Invest
                    </h1>
                    <p className="text-lg leading-relaxed">Coming soon...</p>
                </div>
            </div>
        </>
    );
};

export default Visit;
