import React from "react";
import Heading from "/Components/Heading/heading";
import Button from "/Components/Button/button";
import Blogcontent from "./Blogcontent/blogcontent";
import Faqparent from "/Components/Faqparent/faqparent";
import Footer from "/Components/Footer/footer";
import Contact from "/Components/Contact/contact";
const Blog = () => {
	return (
		<div className="flex justify-center items-center  flex-col">
			<div className=" w-wid-343 flex flex-col items-start content-start gap-6">
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
				<Blogcontent
					heading="The Benefits of Regular Exercise"
					content="Sarath Chandra Academy was founded with a vision to provide quality education and empower students to achieve their dreams.Over the years, we have become a leading institute, know for our exceptional teaching methods and impressive results."
				/>
				<Blogcontent
					heading="The Benefits of Regular Exercise"
					content="Sarath Chandra Academy was founded with a vision to provide quality education and empower students to achieve their dreams.Over the years, we have become a leading institute, know for our exceptional teaching methods and impressive results."
				/>
				<Blogcontent
					heading="The Benefits of Regular Exercise"
					content="Sarath Chandra Academy was founded with a vision to provide quality education and empower students to achieve their dreams.Over the years, we have become a leading institute, know for our exceptional teaching methods and impressive results."
				/>
				<div className="flex flex-col relative w-wid-343 text-3xl font-semibold">
					Discover The Best Courses
				</div>
				<div className="flex w-wid-343 items-start text-[15px] font-medium">
					Stay updated with our informative blog posts.
				</div>
				<Blogcontent
					heading="10 Study Tips to Ace Your Exams"
					content="Learn effective study techniques to improve your exam performance."
				/>
				<Blogcontent
					heading="The Future of Education: Embracing Technology"
					content="Explore how technology is transforming the education landscape."
				/>
				<Blogcontent
					heading="The Future of Education: Embracing Technology"
					content="Explore how technology is transforming the education landscape."
				/>
			</div>
			<Faqparent />
			<Contact />
		</div>
	);
};

export default Blog;
