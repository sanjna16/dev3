import React from 'react'
import Image from "next/image";
import Button from './button';
const Course
 = () => {
  return (
    <div className='flex justify-center items-center top-[149px] '>
        
        <div className='absolute top-[50px] w-wid-343 flex flex-col items-start content-start gap-6'>

            <Image
              src="/logo.png"
              alt="Logo"
              className=" relative object-cover"
              width={152}
              height={38}
              priority
              />
              <hr className='border-t-2 border-primary-40 w-full h-1/2'></hr>
            <b className='relative w-wid-343 inline-block text-4xl'>
                Unlock Your Potential
            </b>
            <div className='relative w-wid-343 inline-block text-lg font-light'>
            Welcome to Sarath Chandra Academy’s Courses Page, Where we offer a
          wide range of academic steams and comprehensive preparation for
          competitive exams. Whether you’re aiming for engineering, medical,
          law, or management, our expert faculty and innovation teaching methods
          will guide you towards success.
            </div>
            <div className='flex flex-row items-center content-center flex-1 rounded-md bg-grey-ff border 
      border-solid border-primary-60 box-border h-10 pt-2 pr-5 pl-16 pb-2 gap-2 w-wid-343 text-center 
      text-lg text-primary-60 font-be-vietnam'>
                    <Button href="https://upsc.gov.in/apply-online" text="Book a Free Demo Today ->" />
            </div>
        
        </div>
        <div className='absolute overflow-hidden flex flex-col items-center content-center gap-3 top-[585px] left-[calc(50%-181.5px)] rounded-xl bg-blue-100
        pt-0 pr-0 pb-5 ml-2 text-xs text-gray-100 font-poppins'>
            <Image
              src="/cimage.png"
              alt="image"
              className=" relative object-cover"
              width={343}
              height={265}
              priority
              />
            <b className='w-wid-343 relative text-3xl flex font-barlow text-black text-center items-center content-center'>UPSC Civil Services Coaching</b>
            <div className='w-wid-343 flex flex-row items-center content-start pt-0 pr-3 pb-0 pl-10 box-border gap-3'>
                <Image
                src="/tick.svg"
                alt="tick"
                className=" relative "
                width={24}
                height={24}
                priority
                />
                <div className='relative'>Weekly prelims and Mains Exams</div>
            </div>
            <div className='w-wid-343 flex flex-row items-center content-start pt-0 pr-3 pb-0 pl-10 box-border gap-3'>
            <Image
                src="/tick.svg"
                alt="tick"
                className="relative "
                width={24}
                height={24}
                priority
                />
                <div className='relative'>Guest Lectures by IAS Officers</div>
            </div>
            <div className='w-wid-343 flex flex-row items-center content-start pt-0 pr-3 pb-0 pl-10 box-border gap-3'>
            <Image
                src="/tick.svg"
                alt="tick"
                className=" relative "
                width={24}
                height={24}
                priority
                />
                <div className='relative'>Comprehensive coverage of syllabus</div>
            </div>
            <b className='relative text-2xl font-barlow text-red-100 '><span>₹ 59999</span>
            <span className='text-gray-100'> - ₹ 63000</span>
            </b>

            <div className='flex flex-row items-center content-center flex-1
            rounded-md bg-primary-60 border border-solid border-primary-60
            box-border h-10 pt-2 pr-5 pl-10 pb-2 gap-2 w-wid-165 text-lg text-grey-90 font-be-vietnam'>
                    <Button href="https://upsc.gov.in/apply-online" text=" Enroll Now" />
            </div>

        </div>
        <div className='absolute top-[1180px] left-[calc(50% - 181.5px)] flex flex-col items-start content-start gap-3'>
            <Image
                    src="/ketan.png"
                    alt="Image"
                    className=" relative rounded-xl  object-cover mix-blend-multiply"
                    width={343}
                    height={265}
                    priority
                    />

            <div className='w-wid-343 relative text-3xl font-semibold inline-block'>
            Ace the Exam with Our Comprehensive course
            </div>
            <div className='w-wid-343 relative inline-block font-medium text-sm'>
            Get the knowledge and skills you need to succeed in the exam
            </div>
            <div className='flex flex-row items-center content-center justify-center flex-1 rounded-md bg-grey-ff border 
            border-solid border-primary-60 box-border h-10 pt-2 pr-5 pl-5 pb-2 gap-2 w-60 text-center 
            text-lg text-primary-60 font-be-vietnam '>
                    <Button href="https://upsc.gov.in/apply-online" text="Learn More" />
            </div>

            <Image
                    src="/ketan.png"
                    alt="Image"
                    className="relative rounded-xl  object-cover mix-blend-multiply"
                    width={343}
                    height={265}
                    priority
                    />

            <div className='w-wid-343 relative text-3xl font-semibold inline-block'>
            From Humble Beginnings to Excellence
            </div>

            <div className='w-wid-343 relative inline-block font-medium text-sm'>
            Sarath Chandra Academy was founded with a vision to provide quality
            education and empower students to achieve their dreams.Over the years,
            we have become a leading institute, know for our exceptional teaching
            methods and impressive results.
            </div>

            <div className='flex justify-start w-wid-343 flex-row items-center pt-0 pr-3 pb-0 pl-0 box-border gap-3'>
                <Image
                    src="/tick.svg"
                    alt="tick"
                    className="relative "
                    width={24}
                    height={24}
                    priority
                    />
                    <div className='relative text-sm'>Expert Facility</div>
            </div>
            <div className='flex justify-start w-wid-343 flex-row items-center pt-0 pr-3 pb-0 pl-0 box-border gap-3'>
                <Image
                    src="/tick.svg"
                    alt="tick"
                    className="relative"
                    width={24}
                    height={24}
                    priority
                    />
                    <div className='relative text-sm'>Cutting Edge Methods</div>
            </div>
            <div className='flex justify-start w-wid-343 flex-row items-center pt-0 pr-3 pb-0 pl-0 box-border gap-3'>
                <Image
                    src="/tick.svg"
                    alt="tick"
                    className=" relative"
                    width={24}
                    height={24}
                    priority
                    />
                    <div className='relative text-sm'>Personalized Guidance</div>
            </div>

            <div className='absolute top-[1140px] left-[calc(50% - 171.5px)] overflow-hidden items-startjustify-start
            gap-1 text-error-10'>
                <Image
                    src="/phonebook.png"
                    alt="phone"
                    className="relative rounded-md"
                    width={42}
                    height={42}
                    priority
                    />
                    <b className='w-wid-332 relative flex items-center h-hig-29 flex-shrink-0'>Explore Diffferent Streams</b>
                    <div className='w-wid-343 relative text-sm font-medium text-grey-10 inline-block'>
                    We offer a wide range of courses including MPC, MEC, HEC, and CEC.
                    Our expert faculty ensures comprehensive preparation for exams like
                    JEE, EAPCET, SAT, NDA, BITSAT, CLAT, and IPMAT.
                    </div>
            </div>

            <div className='absolute top-[1320px] left-[calc(50% - 171.5px)] overflow-hidden items-startjustify-start
            gap-1 text-error-10'>
                <Image
                    src="/a.png"
                    alt="a"
                    className="relative rounded-md"
                    width={42}
                    height={42}
                    priority
                    />
                    <b className='w-wid-332 relative flex items-center h-hig-29 flex-shrink-0'>Prepare for Top Exams</b>
                    <div className='w-wid-343 relative text-sm font-medium text-grey-10 inline-block'>
                    Our academy provides top-notch preparation for exams like JEE,
                    EAPCET, SAT, NDA, BITSAT, CLAT, and IPMAT. Our experienced teachers
                    and advance teaching methods guarantee success.
                    </div>
            </div>

            <div className='absolute top-[1500px] left-[calc(50% - 171.5px)] overflow-hidden items-startjustify-start
            gap-1 text-error-10'>
                <Image
                    src="/star.png"
                    alt="star"
                    className="relative rounded-md"
                    width={42}
                    height={42}
                    priority
                    />
                    <b className='w-wid-332 relative flex items-center h-hig-29 flex-shrink-0'>Unleash Your Potential</b>
                    <div className='w-wid-343 relative text-sm font-medium text-grey-10 inline-block'>
                    Our academy provides top-notch preparation for exams like JEE,
                    EAPCET, SAT, NDA, BITSAT, CLAT, and IPMAT. Our experienced teachers
                    and advance teaching methods guarantee success.
                    </div>
            </div>


        </div>
        
    </div>
  )
}

export default Course
