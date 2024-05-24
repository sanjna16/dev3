import React from "react";
import Image from "next/image";
import Button from "./button";
import Infobox from "./infobox";
import Card from "./card";
import List from "./list";
import Checklist from "./checklist";
const Course = () => {
	return (
		<div className="flex justify-center items-center top-[149px] ">
			<div className="absolute top-[50px] w-wid-343 flex flex-col items-start content-start gap-6">
				<Image
					src="/logo.png"
					alt="Logo"
					className=" relative object-cover"
					width={152}
					height={38}
					priority
				/>
				<hr className="border-t-2 border-primary-40 w-full h-1/2"></hr>
				<b className="relative w-wid-343 inline-block text-4xl">
					Unlock Your Potential
				</b>
				<div className="relative w-wid-343 inline-block text-lg font-light">
					Welcome to Sarath Chandra Academy’s Courses Page, Where we offer a
					wide range of academic steams and comprehensive preparation for
					competitive exams. Whether you’re aiming for engineering, medical,
					law, or management, our expert faculty and innovation teaching methods
					will guide you towards success.
				</div>
				<div
					className="flex flex-row items-center content-center flex-1 rounded-md bg-grey-ff border 
      border-solid border-primary-60 box-border h-10 pt-2 pr-5 pl-16 pb-2 gap-2 w-wid-343 text-center 
      text-lg text-primary-60 font-be-vietnam"
				>
					<Button
						href="https://upsc.gov.in/apply-online"
						text="Book a Free Demo Today ->"
					/>
				</div>
			</div>
			<div
				className="absolute overflow-hidden flex flex-col items-center content-center gap-3 top-[585px] left-[calc(50%-181.5px)] rounded-xl bg-blue-100
        pt-0 pr-0 pb-5 ml-2 text-xs text-gray-100 font-poppins"
			>
				<Image
					src="/cimage.png"
					alt="image"
					className=" relative object-cover"
					width={343}
					height={265}
					priority
				/>
				<b className="w-wid-343 relative text-3xl flex font-barlow text-black text-center items-center content-center">
					UPSC Civil Services Coaching
				</b>

				<Checklist content="Weekly prelims and Mains Exams" />

				<Checklist content="Guest Lectures by IAS Officers" />

				<Checklist content="Comprehensive coverage of syllabus" />

				<b className="relative text-2xl font-barlow text-red-100 ">
					<span>₹ 59999</span>
					<span className="text-gray-100"> - ₹ 63000</span>
				</b>

				<div
					className="flex flex-row items-center content-center flex-1
            rounded-md bg-primary-60 border border-solid border-primary-60
            box-border h-10 pt-2 pr-5 pl-10 pb-2 gap-2 w-wid-165 text-lg text-grey-90 font-be-vietnam"
				>
					<Button href="https://upsc.gov.in/apply-online" text=" Enroll Now" />
				</div>
			</div>
			<div className="absolute top-[1180px] left-[calc(50% - 181.5px)] flex flex-col items-start content-start gap-3">
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
		</div>
	);
};

export default Course;
