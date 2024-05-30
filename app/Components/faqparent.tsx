import React from "react";
import Faq from "./faq";
const Faqparent = () => {
	return (
		<>
			<div className="w-wid-274 mt-8 font-bold font-barlow relative flex flex-col justify-start items-center gap-8 text-center text-3xl">
				Frequently Asked Questions
			</div>

			<Faq
				title="What are the courses offered?"
				content="We offer a wide range of courses including MPC, MEC, HEC, and
      CEC. We also provide top-notch preparation for exams like JEE,
      EAPCET, SAT, NDA, BITSAT, CLAT, and IPMAT."
			/>
			<Faq
				title="How can I enroll?"
				content="We offer a wide range of courses including MPC, MEC, HEC, and
      CEC. We also provide top-notch preparation for exams like JEE,
      EAPCET, SAT, NDA, BITSAT, CLAT, and IPMAT."
			/>
			<Faq
				title="What is the exam preparation like?"
				content="We offer a wide range of courses including MPC, MEC, HEC, and
      CEC. We also provide top-notch preparation for exams like JEE,
      EAPCET, SAT, NDA, BITSAT, CLAT, and IPMAT."
			/>
			<Faq
				title="Can I get support during my studies?"
				content="We offer a wide range of courses including MPC, MEC, HEC, and
      CEC. We also provide top-notch preparation for exams like JEE,
      EAPCET, SAT, NDA, BITSAT, CLAT, and IPMAT."
			/>
		</>
	);
};

export default Faqparent;
