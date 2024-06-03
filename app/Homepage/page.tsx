import React from "react";
import Button from "/components/button/buttonfile";
import Image from "next/image";
import ReviewCard from "/components/reviewcard/reviewcardfile";
import Enrollbox from "/components/enrollbox/enrollboxfile";
import Institution from "/components/institution/institutionfile";
import Card from "/components/card/cardfile";
import Infobox from "/components/contact/infobox/infoboxfile";
import Faqparent from "/components/faqparent/faqparentfile";
import Contact from "/components/contact/contactfile";
import Social from "/components/social/socialfile";
const Homepage = () => {
	return (
		<div className="flex justify-center items-center  flex-col">
			<div className=" w-wid-343 flex flex-col items-start content-start gap-6">
				<b className="relative w-wid-343 inline-block text-[40px]">
					Sarat Chandra <br />
					<span className="text-red-100">IIT</span> Academy
				</b>
				<div className="relative w-wid-343 inline-block text-lg font-light">
					Sarat Chandra IIt Academy is a premier coaching institute that
					provides comprehensive training for IIT JEE, EAPCET, and other
					competitive exams.
				</div>
				<div
					className="flex flex-row items-center
                    rounded-md bg-primary-60 border border-solid border-primary-60
                    box-border h-10 pt-2 pr-5 pl-10 pb-2 gap-2 w-wid-332 text-center justify-center text-lg text-grey-90 font-be-vietnam"
				>
					<Button href="/about" text=" Register Now" />
				</div>
				<div
					className="flex flex-row items-center justify-center flex-1 rounded-md bg-grey-ff border 
      border-solid border-primary-60 box-border h-10 pt-2 pr-5 pl-10 pb-2 gap-2 w-wid-332 text-center 
      text-lg text-primary-60 font-be-vietnam "
				>
					<Button href="/course" text="Book a Free Demo Today ->" />
				</div>
				<div className="flex flex-row space-x-2 items-start justify-start p-1  ">
					<Image
						src="/starbox.png"
						alt="image"
						className="flex flex-row rounded-md"
						width={40}
						height={40}
						priority
					/>
					<div className="relative text-base pt-1 text-gray-100 font-light">
						Rated 4.9 out of 1200 reviews
					</div>
				</div>
				<Image
					src="/lines.png"
					alt="image"
					className="flex flex-row rounded-md pl-4"
					width={60}
					height={80}
					priority
				/>
				<div className="pl-4">
					<ReviewCard
						img="/barb.png"
						text="    I highly recommend Jodi J. Appleby. She was attentive to our needs and
          worked tirelessly to find us the perfect home. We couldn't be happier
          with our new place!"
						name="Barbara D. Smith"
					/>
				</div>

				<div className="w-[343px] h-[419px]">
					<Image
						src="/laptop.png"
						alt="image"
						className="flex object-cover "
						width={349}
						height={360}
						priority
					/>
					<div className="relative top-[-20px] flex flex-row flex-wrap items-end justify-end">
						<div className="w-[218px] relative object-cover rounded-lg bg-grey-ff border border-solid border-grey-80 box-border h-[82px] flex flex-row space-x-2">
							<Image
								src="/people.png"
								alt="image"
								className="flex flex-row relative mt-4 ml-4 mb-4 rounded-full "
								width={50}
								height={50}
								priority
							/>
							<div className="flex flex-col relative ">
								<div className="text-lg font-bold text-grey-40 mt-3">
									Free Courses
								</div>
								<div className="font-bold text-grey-20">78+</div>
							</div>
						</div>
					</div>
				</div>

				<Institution />
				<Card
					heading="Unleash your potential with Sarath Chandra Academy"
					content="Join us and get the best education to excel in your exams.
                    "
				/>
				<div
					className="flex flex-row items-center justify-center flex-1 rounded-md bg-grey-ff border 
      border-solid border-primary-60 box-border h-10 pt-2 pr-5 pl-10 pb-2 gap-2 w-[254px] text-center 
      text-lg text-primary-60 font-be-vietnam "
				>
					<Button href="/blog" text="Try Now" />
				</div>
				<div className="flex flex-col overflow-hidden w-wid-343 bg-grey-bg items-start justify-start box-border gap-3 pt-5 pr-4 ">
					<div className="self-stretch relative text-4xl font-bold ml-4">
						Unlock Your Potential With Us
					</div>
					<div className="self-stretch relative font-medium ml-4 text-sm">
						Join our academy and excel in your exams
					</div>
					<div className="text-primary-60 text-base items-start justify-start ml-4 font-medium">
						<Button
							href="https://upsc.gov.in/apply-online"
							text="Enroll Now ->"
						/>
					</div>
					<Image
						src="/bulb.png"
						alt="image"
						className="relative "
						width={311}
						height={320}
						priority
					/>
				</div>
				<div className="">
					<Infobox
						imageSrc="/phonebook.png"
						imageAlt="phonebook"
						heading="Explore Different streams"
						content=" We offer a wide range of courses including MPC, MEC, HEC, and CEC. Our
          expert faculty ensures comprehensive preparation for exams like JEE,
          EAPCET, SAT, NDA, BITSAT, CLAT, and IPMAT."
					/>
					<Infobox
						imageSrc="/a.png"
						imageAlt="a"
						heading="Prepare for Top Exams"
						content=" Our academy provides top-notch preparation for exams like JEE, EAPCET,
          SAT, NDA, BITSAT, CLAT, and IPMAT. Our experienced teachers and
          advance teaching methods guarantee success."
					/>
					<Infobox
						imageSrc="/star.png"
						imageAlt="star"
						heading="Unleash Your Potential"
						content=" Our academy provides top-notch preparation for exams like JEE, EAPCET,
          SAT, NDA, BITSAT, CLAT, and IPMAT. Our experienced teachers and
          advance teaching methods guarantee success"
					/>
				</div>
				<Image
					src="/cimage.png"
					alt="image"
					className="relative rounded-lg"
					width={343}
					height={265}
					priority
				/>
				<div className="flex flex-col items-center w-wid-343 justify-center pt-[31px]  text-center text-2xl bg-primary-90 bg-opacity-o">
					<div className="w-wid-305 relative font-semibold inline-block text-xl text-black text-center">
						I highly recommend Jodi J. Appleby. She was attentive to our needs
						and worked tirelessly to find us the perfect home. We couldn't be
						happier with our new place!
					</div>
					<hr className="border-t-1 mt-2 border-grey-80 w-wid-274 h-0.5 "></hr>
					<div className="flex space-x-1 mt-2">
						<Image
							src="/stars.svg"
							alt="Image"
							className=" relative "
							width={24}
							height={24}
							priority
						/>
						<Image
							src="/stars.svg"
							alt="Image"
							className="  relative "
							width={24}
							height={24}
							priority
						/>
						<Image
							src="/stars.svg"
							alt="Image"
							className="  relative"
							width={24}
							height={24}
							priority
						/>
						<Image
							src="/stars.svg"
							alt="Image"
							className="  relative "
							width={24}
							height={24}
							priority
						/>
						<Image
							src="/stars.svg"
							alt="Image"
							className="  relative "
							width={24}
							height={24}
							priority
						/>
					</div>
					<Image
						src="/barb.png"
						alt="Image"
						className="  relative rounded-full mt-4"
						width={60}
						height={60}
						priority
					/>
					<div className="flex flex-col text-lg font-medium text-black mt-2">
						Barbara D. Smith
					</div>
					<div className="flex gap-x-2 mt-2 mb-8">
						<Social img="/phone.svg" imgAlt="call" />
						<Social img="/whatsapp.svg" imgAlt="whatsapp" />
						<Social img="/insta.svg" imgAlt="insta" />
					</div>
				</div>
				<div className="flex flex-col items-center justify-start gap-4">
					<div className="w-wid-343 relative text-3xl inline-block text-center pt-4 font-barlow font-semibold">
						Meet Our Team
					</div>
					<div className="w-wid-343 relative inline-block font-medium text-gray-100 text-sm text-center">
						Get to know our rockstar teachers and staff.
					</div>
					<Image
						src="/john.png"
						alt="john"
						className="relative rounded-full border-solid border-primary-60 border-2"
						width={180}
						height={180}
						priority
					/>
					<div className="w-wid-343 relative text-2xl inline-block text-center font-bold font-barlow">
						John Doe
					</div>
					<div className="pr-2 pl-2 relative inline-block  text-gray-100  text-center text-sm font-medium font-barlow">
						John is a passionate math teacher with over 10 years of experience.
					</div>
					<div className="flex flex-row items-center justify-center gap-3 pr-2">
						<Social img="/phone.svg" imgAlt="phone" />
						<Social img="/whatsapp.svg" imgAlt="whatsapp" />
						<Social img="/insta.svg" imgAlt="instagram" />
					</div>
				</div>
				<Enrollbox />
				<Image
					src="/video.png"
					alt="image"
					className="relative rounded-lg"
					width={343}
					height={265}
					priority
				/>
			</div>
			<Faqparent />
			<div className="flex flex-col text-center content-center itmes-center w-wid-343 h-[512px] rounded-lg bg-success-90 mt-8">
				<div className="flex relative font-bold text-3xl mt-8 ml-6 font-barlow">
					Still have Questions
				</div>
				<div className="flex relative items-center justify-center text-center text-lg font-medium font-barlow">
					Contact us for more information
				</div>
				<div
					className="ml-[110px] rounded-md bg-grey-ff border 
      border-solid border-primary-60 box-border h-10 pt-1 mt-4 gap-2 w-[117px] text-center 
      text-lg text-primary-60 font-be-vietnam "
				>
					<Button href="https://upsc.gov.in/apply-online" text="Contact Us" />
				</div>
				<Image
					src="/girl.png"
					alt="image"
					className="object-cover"
					width={500}
					height={265}
					priority
				/>
			</div>
			<Contact />
		</div>
	);
};

export default Homepage;
