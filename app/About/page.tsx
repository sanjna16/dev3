import React from "react";
import Header from "/Components/Header/header";
import Heading from "/Components/Heading/heading";
import Button from "/Components/Button/button";
import Image from "next/image";
import Card from "/Components/Card/card";
import Team from "/Components/Team/team";
import Info from "/Components/Info/info";
import Institution from "/Components/Institution/institution";
import Footer from "/Components/Footer/footer";
const About = () => {
	return (
		<div className="flex justify-center items-center  flex-col">
			<div className=" w-wid-343 flex flex-col items-start content-start gap-6">
				<Heading
					heading="Unlock Your Potential"
					content="At Sarath Chandra Academy, we believe in empowering students to unlock their full potential"
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
				<div className="flex flex-col w-wid-343 h-[360px] bg-info-90 rounded-lg">
					<Image
						src="/lady.png"
						alt="image"
						className="object-cover mt-10 "
						width={343}
						height={321}
						priority
					/>
					<div className="absolute top-[655px]  flex flex-row flex-wrap items-start justify-start">
						<div className="w-[218px] relative rounded-lg bg-grey-ff border border-solid border-grey-80 box-border h-[82px] flex flex-row space-x-2">
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
									Graduates
								</div>
								<div className="font-bold text-grey-20">436K+</div>
							</div>
						</div>
					</div>
				</div>
				<Card
					heading="From Humble Beginnings to Excellence"
					content="Sarath Chandra Academy was founded with a vision to provide quality
					education and empower students to achieve their dreams.Over the years,
					we have become a leading institute, know for our exceptional teaching
					methods and impressive results."
				/>
				<div
					className="flex flex-row items-center content-center justify-center flex-1 rounded-md bg-grey-ff border 
            border-solid border-primary-60 box-border h-10 pt-2 pr-5 pl-5 pb-2 gap-2 w-60 text-center 
            text-lg text-primary-60 font-be-vietnam "
				>
					<Button href="https://upsc.gov.in/apply-online" text="Learn More" />
				</div>
				<Card
					heading="To Achieve Their Full Potential Through Quality Education"
					content="At Sarath Chandra Academy we have successfully taught thousands
                    ofstudents and achieved a high exam success rate. Our Dedicated team
                    of teachers and innovation teaching methods have helped numerous
                    students excel in exam like JEE, EAPCET, SAT, NDA, BITSAT, CLAT, and
                    IPMAT."
				/>
				<div className="flex flex-col relative self-stretch w-wid-343 border border-solid border-grey-40 rounded-lg border-opacity-o">
					<b className="text-left ml-4 mt-2 font-semibold text-2xl text-primary-60">
						50%
					</b>
					<b className="text-left ml-4 mb-2 font-medium text-[15px] text-primary-60">
						Top Scorers in Various Competitive Exams
					</b>
				</div>
				<div className="flex flex-col relative self-stretch w-wid-343 border border-solid border-grey-40 rounded-lg border-opacity-o">
					<b className="text-left ml-4 mt-2 font-semibold text-2xl text-success-40">
						50%
					</b>
					<b className="text-left ml-4 mb-2 font-medium text-[15px] text-success-40">
						Exams Success Rate at Sarath Chandra Academy{" "}
					</b>
				</div>
				<div className="w-wid-343 h-hig-670 bg-primary-90 bg-opacity-o mt-8 rounded-lg">
					<Team />
				</div>
				<div className="flex flex-col font-semibold text-3xl">
					To Achieve Their Full Potential Through Quality Education
				</div>
				<Info
					img="/ppl.png"
					heading="Beginning Years"
					content="Established in 2005, Sarath Chandra Academy started with a small
              team of passionate Educators."
				/>
				<Info
					img="/building.png"
					heading="Expansion Phase"
					content="In 2010, we expanded our courses offering and opened a new branch
                    in a neighboring city."
				/>
				<Info
					img="/book.png"
					heading="Reaching New Heights"
					content="By 2015, Our Academy had become a leading name in the eduction
                    industry."
				/>
				<Info
					img="/startick.png"
					heading="Innovation and Excellence"
					content="Today, we continue to innovate and provide top-notch education to
                    students across the country."
				/>
				<Institution />
				<div className="flex flex-col overflow-hidden w-wid-343 bg-success-90 bg-opacity-o items-start justify-start box-border gap-3 pt-5 pr-4 ">
					<div className="self-stretch relative text-4xl font-bold ml-4">
						Join Our Education Journey Today!
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
						src="/team.png"
						alt="image"
						className="relative "
						width={311}
						height={320}
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
