import { AnimatePresence, motion, useInView } from "framer-motion";
import { useCallback, useRef } from "react";
import { scroller, Element } from "react-scroll";
import "./App.css";

const ONCE = true;

const PassionSection = (props: {
  count: number;
  heading: React.ReactNode;
  content: React.ReactNode;
  firstCircle: React.ReactNode;
  secondCircle: React.ReactNode;
  background: React.ReactNode;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const visible = useInView(sectionRef, {
    once: ONCE,
    margin: '-200px'
  })

  const initialDelay = 0.4

  return (
    <motion.div
      viewport={{once: ONCE}}
      ref={sectionRef} className="w-full px-5 py-20 relative">
      {props.background}
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom, white, white, white, transparent)",
        }}
        className="absolute inset-0 w-full h-full from-[#f7a17c]"
      ></div>

      <div className="w-full max-w-7xl flex flex-col sm:flex-row sm:gap-10 gap-y-10 mx-auto relative z-10">
        <div className="grow flex flex-col gap-y-10 items-start">
          <div className="flex flex-col gap-y-5 items-start">
            <motion.div
              initial={{opacity: 0, y: 10}}
              animate={visible ? {y: 0, opacity: 1} : {y: 10, opacity: 0}}
              transition={{delay: initialDelay, ease: 'easeOut'}}
              className="inline-block bg-[#252422]/[0.75] rounded-full uppercase font-[HelveticaNowDisplay] font-semibold text-white tracking-wide">
              <div className="px-2 inline-block bg-[#252422] rounded-full uppercase font-[HelveticaNowDisplay] font-semibold text-white tracking-wide">
                passion
              </div>
              <div className="inline-block leading-none font-mono text-white/[0.5] pr-2 pl-1.5">
                0{props.count}
              </div>
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: 10}}
              animate={visible ? {y: 0, opacity: 1} : {y: 10, opacity: 0}}
              transition={{delay: initialDelay + 0.15, ease: 'easeOut'}}
              className="max-w-full relative flex">
              <span className="text-[#eb5e28] text-4xl lg:text-7xl font-bold font-['Montserrat'] uppercase not:text-[#252422] tracking-wider">
                {props.heading}
              </span>
              {/*
- animations
- prototyping
- research-informed UX improvements
- user flows, look and feel
    */}
            </motion.div>
          </div>
          <motion.div
              initial={{opacity: 0, y: 10}}
              animate={visible ? {y: 0, opacity: 1} : {y: 10, opacity: 0}}
            transition={{delay: initialDelay + 0.3, ease: 'easeOut'}}
            className="font-[HelveticaNowDisplay] text-[#252422] text-[16px] sm:text-[20px] tracking-wide max-w-prose flex flex-col gap-y-5">
            {props.content}
          </motion.div>
        </div>
        {/* TODO link to https://gist.github.com/L8D/c27a4563f5d9e98b8220acb4bdae4cac */}
        <div className="max-w-6xl mx-auto flex flex-col items-center sm:items-end gap-y-10 grow-0">
          <motion.div
            initial={{opacity: 0, scale: 0, y: 10}}
            animate={visible ? {y: 0, opacity: 1, scale: 1} : {y: 10, opacity: 0, scale: 0}}
            transition={{ delay: initialDelay, ease: 'circOut', duration: 1}}
          >

          {props.firstCircle}
          </motion.div>

          <motion.div
            initial={{opacity: 0, scale: 0, y: 10}}
            animate={visible ? {y: 0, opacity: 1, scale: 1} : {y: 10, opacity: 0, scale: 0}}
            transition={{ delay: initialDelay + 0.15, ease: 'circOut', duration: 1}}
          >

          {props.secondCircle}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillTag = (props: { name: string; index: number }) => {
  return (
    <motion.div
      viewport={{ once: ONCE }}
      initial={{ y: 20, opacity: 0, scale: 0 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          delay: 0.2 + props.index * 0.05,
          mass: 0.5,
        },
      }}
    >
      <motion.div className="px-1 shadow rounded-full py-2 bg-white inline-block flex flex-col items-start gap-y-2 group relative overflow-hidden">
        <span className="px-2 w-full font-[HelveticaNowDisplay] font-semibold tracking-wider text-xl text-[#252422]/[0.6] inline-flex justify-between items-center leading-none">
          <span className="whitespace-nowrap">{props.name}</span>
        </span>
      </motion.div>
    </motion.div>
  );
};

function App() {
  const seeSkills = useCallback(() => {
    scroller.scrollTo("skills", {
      duration: 800,
      smooth: "easeOutQuint",
    });
  }, []);

  const seePassions = useCallback(() => {
    scroller.scrollTo("passions", {
      duration: 800,
      smooth: "easeOutQuint",
    });
  }, []);

  const goToPassionsButton = (
    <motion.div
      viewport={{ once: ONCE }}
      initial={{ y: 20, opacity: 0, scale: 0.9 }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { type: "spring", delay: 0.5, mass: 0.5, stiffness: 50 },
      }}
    >
      <motion.button
        onClick={seePassions}
        initial={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.99, transition: { duration: 0.05 } }}
        className="w-52 shadow rounded-lg py-2 cursor-pointer bg-white inline-block flex flex-col items-start gap-y-2 group relative overflow-hidden hover:shadow-inset"
      >
        <div className="absolute inset-0 group-hover:bg-[#252422]/[0.1] group-active:bg-[#252422]/[0.2]"></div>
        <span className="px-2 w-full font-[HelveticaNowDisplay] font-semibold tracking-wider text-xl text-[#252422]/[0.6] uppercase inline-flex justify-between items-center leading-none">
          <span>See Passions</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M14.77 4.21a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 011.08-1.04L10 8.168l3.71-3.938a.75.75 0 011.06-.02zm0 6a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 111.08-1.04L10 14.168l3.71-3.938a.75.75 0 011.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </motion.button>
    </motion.div>
  );

  return (
    <>
      <motion.div className="graphic-wrapper p-5 md:p-[100px] md:min-h-[800px]">
        <motion.svg
          viewport={{ once: ONCE }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.1, ease: "easeIn" },
          }}
          style={{
            outline: "none",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            flexShrink: 0,
            transform: "none",
          }}
          viewBox="0 0 1470 471"
        >
          <foreignObject
            width="100%"
            height="100%"
            transform="scale(1)"
            style={{ overflow: "visible", transformOrigin: "center center" }}
          >
            <h1 style={{ fontWeight: 400 }} className="first-heading">
              Tenor
            </h1>
          </foreignObject>
        </motion.svg>

        <motion.div
          viewport={{ once: ONCE }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.2, ease: "easeIn" },
          }}
          className="subheading"
        >
          <div
            className="subheading-item"
            style={{
              outline: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flexShrink: 0,
              transform: "none",
            }}
          >
            <div style={{ textAlign: "left" }}>UI, UX, Development, Design</div>
          </div>
          <div
            className="subheading-item lg-only"
            style={{
              outline: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flexShrink: 0,
              transform: "none",
            }}
          >
            <div style={{ textAlign: "center" }}>Portfolio</div>
          </div>
          <div
            className="subheading-item lg-only"
            style={{
              outline: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              flexShrink: 0,
              transform: "none",
            }}
          >
            <div style={{ textAlign: "right" }}>2023</div>
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: ONCE }}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.3, ease: "easeIn" },
          }}
          className="graphic"
        >
          <div className="graphic-block">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              style={{
                background: "rgb(50, 49, 46)",
                transform: "rotate(270deg)",
                display: "block",
              }}
            >
              <rect width={100} height={100} fill="rgb(235, 94, 40)" />
              <rect
                x={100}
                y={100}
                width={100}
                height={100}
                fill="rgb(204, 197, 185)"
              />
            </svg>
          </div>
          <div className="graphic-block">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              style={{
                background: "rgb(50, 49, 46)",
                transform: "rotate(180deg)",
                display: "block",
              }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M200 120L200 200C89.5431 200 1.17422e-05 110.457 2.62268e-05 0L80 1.04907e-05C80 66.2742 133.726 120 200 120Z"
                fill="rgb(235, 94, 40)"
              />
            </svg>
          </div>
          <div className="graphic-block">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              style={{
                background: "rgb(50, 49, 46)",
                transform: "rotate(270deg)",
                display: "block",
              }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M150 100C177.614 100 200 77.6142 200 50C200 22.3858 177.614 0 150 0C122.386 0 100 22.3858 100 50C100 77.6142 122.386 100 150 100ZM50 200C77.6142 200 100 177.614 100 150C100 122.386 77.6142 100 50 100C22.3858 100 0 122.386 0 150C0 177.614 22.3858 200 50 200Z"
                fill="rgb(204, 197, 185)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM150 200C177.614 200 200 177.614 200 150C200 122.386 177.614 100 150 100C122.386 100 100 122.386 100 150C100 177.614 122.386 200 150 200Z"
                fill="rgb(235, 94, 40)"
              />
            </svg>
          </div>
          <div className="graphic-block">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              style={{
                background: "rgb(50, 49, 46)",
                transform: "rotate(0deg)",
                display: "block",
              }}
            >
              <path
                d="M0 100C0 155.228 44.7715 200 100 200V0C44.7715 0 0 44.7715 0 100Z"
                fill="rgb(235, 94, 40)"
              />
              <path
                d="M100 100C100 155.228 144.772 200 200 200V0C144.772 0 100 44.7715 100 100Z"
                fill="rgb(204, 197, 185)"
              />
            </svg>
          </div>
          <div className="graphic-block">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              style={{
                background: "rgb(50, 49, 46)",
                transform: "rotate(90deg)",
                display: "block",
              }}
            >
              <path
                d="M1.74846e-05 -1.74846e-05L0 200L200 0L1.74846e-05 -1.74846e-05Z"
                fill="rgb(235, 94, 40)"
              />
            </svg>
          </div>
          <div className="graphic-block">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              style={{
                background: "rgb(50, 49, 46)",
                transform: "rotate(180deg)",
                display: "block",
              }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M200 120L200 200C89.5431 200 1.17422e-05 110.457 2.62268e-05 0L80 1.04907e-05C80 66.2742 133.726 120 200 120Z"
                fill="rgb(235, 94, 40)"
              />
            </svg>
          </div>
          <div className="graphic-block">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              style={{
                background: "rgb(50, 49, 46)",
                transform: "rotate(0deg)",
                display: "block",
              }}
            >
              <path d="M200 100L0 0V200L200 100Z" fill="rgb(235, 94, 40)" />
            </svg>
          </div>
          <div className="graphic-block">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              style={{
                background: "rgb(50, 49, 46)",
                transform: "rotate(180deg)",
                display: "block",
              }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M200 200V0C89.543 0 0 89.5431 0 200H200Z"
                fill="rgb(235, 94, 40)"
              />
            </svg>
          </div>
          <div className="graphic-block">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              style={{
                background: "rgb(50, 49, 46)",
                transform: "rotate(270deg)",
                display: "block",
              }}
            >
              <rect width={100} height={100} fill="rgb(235, 94, 40)" />
              <rect
                x={100}
                y={100}
                width={100}
                height={100}
                fill="rgb(204, 197, 185)"
              />
            </svg>
          </div>
          <div className="graphic-block graphic-block-lg-only">
            <svg
              viewBox="0 0 200 200"
              fill="none"
              style={{
                background: "rgb(50, 49, 46)",
                transform: "rotate(0deg)",
                display: "block",
              }}
            >
              <path
                d="M1.74846e-05 -1.74846e-05L0 200L200 0L1.74846e-05 -1.74846e-05Z"
                fill="rgb(235, 94, 40)"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      <div className="bg-[#eb5e28] pb-24">
        <div className="mx-auto p-5 sm:max-w-xl sm:min-h-[860px] flex flex-col justify-center gap-y-10 md:items-center">
          <div className="pt-10 gap-[20px] flex flex-col md:items-center">
            <motion.div
              viewport={{ once: ONCE }}
              initial={{ scale: 0, y: 10 }}
              whileInView={{ scale: 1, y: 0, transition: { delay: 0.1 } }}
              transition={{ type: "spring", mass: 0.5 }}
              className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full flex-none"
            >
              <img
                className="object-cover rounded-full h-full w-full"
                src="https://framerusercontent.com/images/A6CUvZ5PjXmwdMvyDnrOSj6gdo.jpeg"
                alt=""
                srcSet="
      https://framerusercontent.com/images/A6CUvZ5PjXmwdMvyDnrOSj6gdo.jpeg?scale-down-to=512   512w,
      https://framerusercontent.com/images/A6CUvZ5PjXmwdMvyDnrOSj6gdo.jpeg?scale-down-to=1024 1024w,
      https://framerusercontent.com/images/A6CUvZ5PjXmwdMvyDnrOSj6gdo.jpeg?scale-down-to=2048 2048w,
      https://framerusercontent.com/images/A6CUvZ5PjXmwdMvyDnrOSj6gdo.jpeg                    3024w
    "
                sizes="max((min(100vw - 80px, 1000px) - 40px) / 2, 0px)"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  objectPosition: "center",
                  objectFit: "cover",
                  imageRendering: "auto",
                }}
              />
            </motion.div>

            <motion.div
              viewport={{ once: ONCE }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, ease: "circOut" },
              }}
              className="text-white font-['Albert_Sans'] text-[20px] md:text-center select-none"
            >
              Hello! I am Tenor. I bring a focused energy to product iteration
              with high-fidelity prototypes, built in TypeScript.
            </motion.div>

            <motion.div
              viewport={{ once: ONCE }}
              initial={{ width: "0%" }}
              whileInView={{
                width: "100%",
                transition: { delay: 0.2, ease: "circOut" },
              }}
              className="border-b-4 border-white"
            ></motion.div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 gap-y-5 mb-10">
            <motion.div
              layout
              viewport={{ once: ONCE }}
              initial={{ y: 20, opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", delay: 0.3, mass: 0.5 },
              }}
            >
              <motion.button
                layout
                initial={{ scale: 1, y: 0 }}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.99, transition: { duration: 0.05 } }}
                className="w-52 shadow rounded-lg py-2 cursor-pointer bg-white inline-block flex flex-col items-start gap-y-2 group relative overflow-hidden hover:shadow-inset"
                onClick={seeSkills}
              >
                <div className="absolute inset-0 group-hover:bg-[#252422]/[0.1] group-active:bg-[#252422]/[0.2]"></div>
                <span className="px-2 w-full font-[HelveticaNowDisplay] font-semibold tracking-wider text-xl text-[#252422]/[0.6] uppercase inline-flex justify-between items-center leading-none">
                  <span>See Skills</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.77 4.21a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 011.08-1.04L10 8.168l3.71-3.938a.75.75 0 011.06-.02zm0 6a.75.75 0 01.02 1.06l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 111.08-1.04L10 14.168l3.71-3.938a.75.75 0 011.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </motion.button>
            </motion.div>

            {goToPassionsButton}
          </div>
        </div>
      </div>

      <div className="bg-[#eb5e28] bg-[center_left_40px] bg-[url(pattern-darkened.svg)] bg-repeat h-8 w-full"></div>

      <Element
        name="skills"
        className="bg-[#eb5e28] bg-[length:8000px_8000px] bg-[center_left_19500px] bg-[url(background-pattern.svg)] bg-repeat py-5"
      >
        <motion.div className="mx-auto p-5 sm:max-w-2xl sm:py-[80px] sm:min-h-[800px] flex flex-col justify-center gap-y-10 md:items-center relative">
          <motion.div
            viewport={{ once: ONCE }}
            initial={{ scale: 0.9, opacity: 0, rotateX: 45 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              rotateX: 0,
              transition: { delay: 0.5, duration: 0.5, ease: "easeOut" },
            }}
            className="absolute inset-5"
          >
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 border-l-4 border-t-4 w-20 h-40 border-white"></div>
              <div className="absolute bottom-0 right-0 border-r-4 border-b-4 w-14 h-12 border-white"></div>
            </div>
          </motion.div>

          <div className="px-5 pt-8 mb-10">
            <div className="max-w-7xl mx-auto relative flex flex-col items-center gap-y-10 sm:gap-y-0">
              <motion.span
                viewport={{ once: ONCE }}
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { delay: 0.3, ease: "backOut", duration: 0.5 },
                }}
                className="text-center text-white text-6xl sm:text-9xl font-bold font-['Montserrat'] uppercase tracking-wider leading-none select-none"
              >
                Skills
              </motion.span>

              <div className="hidden sm:block">{goToPassionsButton}</div>
            </div>
          </div>
          <div className="flex flex-row gap-3 gap-y-3 mb-10 flex-wrap justify-center select-none">
            {[
              "TypeScript",
              "React",
              "TailwindCSS",
              "Framer Motion",
              "UI/UX",
              "Product Research",
              "User Research",
              "Team Advocacy",
              "Documentation",
              "React Native",
              "Web3",
              "Ethereum",
              "Prisma",
              "Node.js",
              "HTTP",
              "GraphQL",
              "REST APIs",
              "Serverless",
              "Onboarding",
              "Monitoring",
              "Analytics",
              "Feature Flags",
            ].map((name, index) => (
              <SkillTag name={name} index={index} />
            ))}
          </div>
        </motion.div>
      </Element>

      <Element
        name="passions"
        className="bg-white flex flex-col gap-y-10 items-stretch"
      >
        <div className="bg-[#f7a17c] w-full flex justify-between gap-10 relative">
          <div className="absolute inset-0 w-full h-full bg-repeat bg-[url(background-pattern-blue.svg)]"></div>
          <div
            style={{
              backgroundImage:
                "linear-gradient(to top, #f7a17c, #f7a17c, transparent)",
            }}
            className="absolute inset-0 w-full h-full from-[#f7a17c]"
          ></div>
          <div className="w-full mx-5 my-24 flex items-center justify-center">
            <motion.div
              viewport={{ once: ONCE }}
              initial={{ opacity: 0, y: 4, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { delay: 0.2, ease: "easeInOut", duration: 1 },
              }}
              className="bg-[#f7a17c] border border-white gap-10 sm:h-[18rem] relative sm:flex sm:flex-row relative overflow-visible z-10"
            >
              <div className="sm:min-w-[24rem] w-full max-w-sm overflow-hidden text-clip overflow-hidden relative text-center flex flex-col items-start gap-y-5 justify-end my-10">
                <div className="text-3xl font-[Inter] leading-none break-none text-clip relative  pl-20">
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    viewport={{ once: ONCE }}
                    whileInView={{
                      width: "100%",
                      opacity: 1,
                      transition: {
                        delay: 0.3,
                        ease: "easeInOut",
                        duration: 1,
                      },
                    }}
                    className="absolute inset-0 bg-white"
                  ></motion.div>
                  <span className="text-[#f7a17c] tracking-tightest relative">
                    PASSIONS
                  </span>
                </div>

                <div className="relative h-8 w-full">
                  <motion.div
                    initial={{ maxWidth: 0, opacity: 0 }}
                    viewport={{ once: ONCE }}
                    whileInView={{
                      maxWidth: "24rem",
                      opacity: 1,
                      transition: {
                        delay: 0.5,
                        ease: "easeInOut",
                        duration: 1,
                      },
                    }}
                    className="absolute bg-[center_left_40px] bg-[url(pattern.svg)] bg-repeat h-8 w-full"
                  ></motion.div>
                </div>
              </div>

              <motion.div
                viewport={{ once: ONCE }}
                initial={{ y: 80, rotateX: -45, scale: 0.5, opacity: 0 }}
                whileInView={{
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.6, duration: 1, ease: "easeOut" },
                }}
                className="basis-0 shrink-0 inline-block shrink-0 font-mono text-white flex items-end tracking-widest px-5 my-10 min-w-[12rem] font-bold"
              >
                interaction design
                <br />
                inclusive design
                <br />
                team advocacy
              </motion.div>

              <motion.div
                viewport={{ once: ONCE }}
                initial={{ color: "#ffffff", opacity: 0 }}
                whileInView={{
                  color: "#007fff",
                  opacity: 1,
                  transition: { opacity: { delay: 2 }, color: { delay: 2.5 } },
                }}
                className="absolute -left-16 -bottom-16"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-24 h-24"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>

              <motion.div
                viewport={{ once: ONCE }}
                initial={{ opacity: 0, color: "#ffffff" }}
                whileInView={{
                  opacity: 1,
                  color: "#007fff",
                  transition: { opacity: { delay: 1 }, color: { delay: 1.5 } },
                }}
                className="absolute -right-16 -top-16"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-24 h-24"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute w-full flex justify-center -bottom-4">
            <div className="bg-[center_left_4px] bg-[url(pattern-inverted.svg)] bg-repeat h-8 w-96"></div>
          </div>
          <div className="absolute w-full flex justify-center -bottom-4">
            <div className="bg-[center_left_40px] bg-[url(pattern.svg)] bg-repeat h-8 w-96"></div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <PassionSection
            count={1}
            heading={<>Interaction Design</>}
            content={
              <>
                <div>
                  <span className="font-semibold">
                    Empathy is the best building block for a user-friendly
                    product.
                  </span>{" "}
                  Through research, I identify common interaction pitfalls in
                  existing experiences. By staying aware of pitfalls and
                  avoiding them, our final product can deliver an
                  uncompromisingly-empathetic experience for your market.
                </div>
                <ul className="list-inside list-disc">
                  <li className="font-semibold">identifying pitfalls</li>
                  <li className="font-semibold">
                    innovating with motion design
                  </li>
                  <li className="font-semibold">
                    delivering state-of-the-art user flows
                  </li>
                </ul>
              </>
            }
            firstCircle={
              <>
                <div>
                  <video
                    className="rounded-full max-w-xs mx-auto"
                    autoPlay
                    loop
                    muted
                    src="/piece-1.mov"
                  />
                </div>
              </>
            }
            secondCircle={
              <>
                <div className="w-80 h-80 relative overflow-hidden rounded-full">
                  <video
                    className="absolute w-full h-full rounded-full max-w-sm mx-auto object-cover w-full h-auto scale-150"
                    autoPlay
                    loop
                    muted
                    src="/piece-2.mov"
                  />
                </div>
              </>
            }
            background={
              <div
                className="absolute inset-0 w-full h-full bg-white"
                style={{
                  backgroundSize: "80px",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='12' viewBox='0 0 40 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 6.172L6.172 0h5.656L0 11.828V6.172zm40 5.656L28.172 0h5.656L40 6.172v5.656zM6.172 12l12-12h3.656l12 12h-5.656L20 3.828 11.828 12H6.172zm12 0L20 10.172 21.828 12h-3.656z' fill='%2380bfff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}
              ></div>
            }
          />

          <div className="bg-[#f7a17c] bg-[center_left_40px] bg-[url(pattern.svg)] bg-repeat h-8 w-full"></div>

          <PassionSection
            count={2}
            heading={<>Inclusive Products</>}
            background={
              <div
                className="absolute inset-0 w-full h-full bg-white"
                style={{
                  backgroundSize: "140px",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='64' viewBox='0 0 48 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M48 28v-4L36 12 24 24 12 12 0 24v4l4 4-4 4v4l12 12 12-12 12 12 12-12v-4l-4-4 4-4zM8 32l-6-6 10-10 10 10-6 6 6 6-10 10L2 38l6-6zm12 0l4-4 4 4-4 4-4-4zm12 0l-6-6 10-10 10 10-6 6 6 6-10 10-10-10 6-6zM0 16L10 6 4 0h4l4 4 4-4h4l-6 6 10 10L34 6l-6-6h4l4 4 4-4h4l-6 6 10 10v4L36 8 24 20 12 8 0 20v-4zm0 32l10 10-6 6h4l4-4 4 4h4l-6-6 10-10 10 10-6 6h4l4-4 4 4h4l-6-6 10-10v-4L36 56 24 44 12 56 0 44v4z' fill='%2380bfff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}
              ></div>
            }
            content={
              <>
                <div>
                  I am driven by the belief that{" "}
                  <span className="font-semibold">
                    design has the power to transform lives
                  </span>
                  . It is my unwavering commitment to design and develop digital
                  experiences that are accessible, user-friendly, and inclusive.
                  I prefer the opportunity to challenge the status quo while
                  building a customer-focused product.
                </div>
              </>
            }
            firstCircle={
              <>
                <div>
                  <img
                    alt="inclusive design"
                    className="rounded-full max-w-xs mx-auto saturate-50"
                    src="/inclusive-design.jpeg"
                  />
                </div>
              </>
            }
            secondCircle={
              <div className="w-80 h-80 relative overflow-hidden rounded-full">
                <div className="absolute inset-0 w-full h-full flex items-center justify-center text-white/[0.8]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                </div>

                <img
                  alt="globe"
                  className="rounded-full w-full h-full object-cover"
                  src="/globe.jpeg"
                />
              </div>
            }
          />

          <div className="bg-[#f7a17c] bg-[center_left_40px] bg-[url(pattern.svg)] bg-repeat h-8 w-full"></div>

          <PassionSection
            count={3}
            heading={<>Team Advocacy</>}
            background={
              <div
                className="absolute inset-0 w-full h-full bg-white"
                style={{
                  backgroundSize: "100px",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='88' viewBox='0 0 80 88' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 21.91V26h-2c-9.94 0-18 8.06-18 18 0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73 3.212-6.99 9.983-12.008 18-12.73V62h2c9.94 0 18-8.06 18-18 0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73-3.212 6.99-9.983 12.008-18 12.73zM54 58v4.696c-5.574 1.316-10.455 4.428-14 8.69-3.545-4.262-8.426-7.374-14-8.69V58h-5.993C12.27 58 6 51.734 6 44c0-7.732 6.275-14 14.007-14H26v-4.696c5.574-1.316 10.455-4.428 14-8.69 3.545 4.262 8.426 7.374 14 8.69V30h5.993C67.73 30 74 36.266 74 44c0 7.732-6.275 14-14.007 14H54zM42 88c0-9.94 8.06-18 18-18h2v-4.09c8.016-.722 14.787-5.738 18-12.73v7.434c-3.545 4.262-8.426 7.374-14 8.69V74h-5.993C52.275 74 46 80.268 46 88h-4zm-4 0c0-9.943-8.058-18-18-18h-2v-4.09c-8.012-.722-14.785-5.738-18-12.73v7.434c3.545 4.262 8.426 7.374 14 8.69V74h5.993C27.73 74 34 80.266 34 88h4zm4-88c0 9.943 8.058 18 18 18h2v4.09c8.012.722 14.785 5.738 18 12.73v-7.434c-3.545-4.262-8.426-7.374-14-8.69V14h-5.993C52.27 14 46 7.734 46 0h-4zM0 34.82c3.213-6.992 9.984-12.008 18-12.73V18h2c9.94 0 18-8.06 18-18h-4c0 7.732-6.275 14-14.007 14H14v4.696c-5.574 1.316-10.455 4.428-14 8.69v7.433z' fill='%2380bfff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}
              ></div>
            }
            content={
              <div>
                I am driven by the belief that{" "}
                <span className="font-semibold">
                  design has the power to transform lives
                </span>
                . It is my unwavering commitment to design and develop digital
                experiences that are accessible, user-friendly, and inclusive. I
                prefer the opportunity to challenge the status quo while
                building a customer-focused product.
              </div>
            }
            firstCircle={
              <>
                <div className="h-80 w-80 relative overflow-hidden rounded-full">
                  <img
                    alt="inclusive design"
                    className="rounded-full h-full w-full object-cover"
                    src="/team-advocacy-1.jpg"
                  />
                </div>
              </>
            }

            secondCircle={
              <>
                <div className="w-80 h-80 relative overflow-hidden rounded-full">
                  <img
                    alt="globe"
                    className="rounded-full w-full h-full object-cover"
                    src="/team-advocacy-2.jpg"
                  />
                </div>
              </>
            }
          />

        </div>
      </Element>
    </>
  );
}

export default App;
