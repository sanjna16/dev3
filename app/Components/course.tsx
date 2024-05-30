import React from "react";
import Image from "next/image";
import Button from "./button";
import Infobox from "./infobox";
import Card from "./card";
import List from "./list";
import Checklist from "./checklist";
import Social from "./social";
import ReviewCard from "./reviewcard";
import Inputbox from "./inputbox";
import Faq from "./faq";
import Linkitems from "./linkitems";
import Footer from "./footer";
import Contact from "./contact";
import Faqparent from "./faqparent";
import Header from "./header";
import Heading from "./heading";
import Enrollbox from "./enrollbox";
import Team from "./team";
const Course = () => {
	return (
		<div className="flex justify-center items-center  flex-col">
			<div className=" w-wid-343 flex flex-col items-start content-start gap-6">
				<Header />
				{/* <b className="relative w-wid-343 inline-block text-4xl">
					Unlock Your Potential
				</b>
				<div className="relative w-wid-343 inline-block text-lg font-light">
					Welcome to Sarath Chandra Academy’s Courses Page, Where we offer a
					wide range of academic steams and comprehensive preparation for
					competitive exams. Whether you’re aiming for engineering, medical,
					law, or management, our expert faculty and innovation teaching methods
					will guide you towards success.
    </div>*/}
				<Heading
					heading="Unlock Your Potential"
					content="Welcome to Sarath Chandra Academy’s Courses Page, Where we offer a wide
				range of academic steams and comprehensive preparation for competitive
				exams. Whether you’re aiming for engineering, medical, law, or
				management, our expert faculty and innovation teaching methods will
				guide you towards success."
				/>
				<div
					className="flex flex-row items-center content-center flex-1 rounded-md bg-grey-ff border 
      border-solid border-primary-60 box-border h-10 pt-2 pr-5 pl-16 pb-2 gap-2 w-wid-343 text-center 
      text-lg text-primary-60 font-be-vietnam "
				>
					<Button
						href="https://upsc.gov.in/apply-online"
						text="Book a Free Demo Today ->"
					/>
				</div>
			</div>

			<Enrollbox />
			<div className="flex flex-col items-start content-start gap-3 ">
				<Card
					heading="Ace the Exam with Our Comprehensive course"
					content="Get the knowledge and skills you need to succeed in the exam"
				/>
				<div
					className="flex flex-row items-center content-center justify-center flex-1 rounded-md bg-grey-ff border 
            border-solid border-primary-60 box-border h-10 pt-2 pr-5 pl-5 pb-2 gap-2 w-60 text-center 
            text-lg text-primary-60 font-be-vietnam "
				>
					<Button href="https://upsc.gov.in/apply-online" text="Learn More" />
				</div>
				<Card
					heading="From Humble Beginnings to Excellence"
					content="Sarath Chandra Academy was founded with a vision to provide quality
					education and empower students to achieve their dreams.Over the years,
					we have become a leading institute, know for our exceptional teaching
					methods and impressive results."
				/>
				<Card
					heading="From Humble Beginnings to Excellence"
					content="Sarath Chandra Academy was founded with a vision to provide quality
					education and empower students to achieve their dreams.Over the years,
					we have become a leading institute, know for our exceptional teaching
					methods and impressive results."
				/>

				<List content="Expert Facility" />

				<List content="Cutting Edge Methods" />

				<List content="Personalized Guidance" />

				<Infobox
					imageSrc="/phonebook.png"
					imageAlt="phone"
					heading="Explore Diffferent Streams"
					content="We offer a wide range of courses including MPC, MEC, HEC, and CEC.
                    Our expert faculty ensures comprehensive preparation for exams like
                    JEE, EAPCET, SAT, NDA, BITSAT, CLAT, and IPMAT."
				/>

				<Infobox
					imageSrc="/a.png"
					imageAlt="a"
					heading="Prepare for Top Exams"
					content="Our academy provides top-notch preparation for exams like JEE,
                    EAPCET, SAT, NDA, BITSAT, CLAT, and IPMAT. Our experienced teachers
                    and advance teaching methods guarantee success."
				/>

				<Infobox
					imageSrc="/star.png"
					imageAlt="star"
					heading="Unleash Your Potential"
					content="Our academy provides top-notch preparation for exams like JEE,
                    EAPCET, SAT, NDA, BITSAT, CLAT, and IPMAT. Our experienced teachers
                    and advance teaching methods guarantee success."
				/>
			</div>
			<div className="w-wid-343 h-hig-670 bg-primary-90 bg-opacity-o mt-8 rounded-lg">
				<Team />
			</div>
			<div className="flex felx-col items-center justify-start gap-5 mb-8">
				<Image
					src="/video.png"
					alt="Image"
					className=" relative rounded-3 object-cover mt-8"
					width={343}
					height={275}
					priority
				/>
			</div>
			<ReviewCard
				img="/barb.png"
				text="    I highly recommend Jodi J. Appleby. She was attentive to our needs and
          worked tirelessly to find us the perfect home. We couldn't be happier
          with our new place!"
				name="Barbara D. Smith"
			/>
			<div className="flex flex-col mt-8 items-center justify-center pt-0 pr-0 pb-5 gap-3 text-xs text-gray-100 rounded-xl bg-blue-100">
				<div className="w-wid-343 mt-8 relative flex align-center justify-center text-3xl font-bold text-center font-barlow">
					Unlock Your Potential Today
				</div>
				<div className="w-wid-343 relative flex text-center text-base font-barlow items-center justify-center font-medium flex-shrink-0">
					Explore our wide range of courses and take the first step towards a
					successful future.
				</div>
				<div
					className="flex flex-row items-center content-center flex-1
                    rounded-md bg-primary-60 border border-solid border-primary-60
                    box-border h-10 pt-2 pr-5 pl-10 pb-2 gap-2 mt-4 w-wid-165 text-lg text-grey-90 font-be-vietnam"
				>
					<Button href="https://upsc.gov.in/apply-online" text=" Enroll Now" />
				</div>

				<Image
					src="/cimage.png"
					alt="Image"
					className=" relative object-cover mt-4"
					width={343}
					height={265}
					priority
				/>
			</div>

			<Faqparent />
			<Contact />
			<Footer />
		</div>
	);
};

export default Course;
