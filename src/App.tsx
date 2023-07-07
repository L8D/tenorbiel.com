import {motion} from 'framer-motion'
import "./App.css";

const ONCE = true

function App() {
  return (
    <>
      <motion.div
        className="graphic-wrapper p-5 md:p-[100px] md:min-h-[800px]">
        <motion.svg
          viewport={{once: ONCE}}
          initial={{opacity: 0}}
          whileInView={{opacity: 1, transition: {delay: 0.1, ease: 'easeIn'}}}
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
          viewport={{once: ONCE}}
          initial={{opacity: 0}}
          whileInView={{opacity: 1, transition: {delay: 0.2, ease: 'easeIn'}}}
          className="subheading">
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
          viewport={{once: ONCE}}
          initial={{opacity: 0}}
          whileInView={{opacity: 1, transition: {delay: 0.3, ease: 'easeIn'}}}
          className="graphic">
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
      <div className="bg-[#eb5e28]">
        <div className="mx-auto p-5 sm:max-w-xl sm:min-h-[860px] flex flex-col justify-center gap-y-10 md:items-center">
          <div className="pt-10 gap-[20px] flex flex-col md:items-center">
            <motion.div
              viewport={{once: ONCE}}
              initial={{scale: 0, y: 10}}
              whileInView={{scale: 1, y: 0, transition: {delay: 0.1}}}
              transition={{type: 'spring', mass: 0.5}}
              className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full flex-none">
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
              viewport={{once: ONCE}}
              initial={{opacity: 0, y: 10}}
              whileInView={{opacity: 1, y: 0, transition: {delay: 0.2, ease: 'circOut'}}}
              className="text-white font-['Albert_Sans'] text-[20px] md:text-center">
              Hello! I am Tenor. I bring a focused energy to product iteration
              with high-fidelity prototypes, built in TypeScript.
            </motion.div>
          <motion.div 
            viewport={{once: ONCE}}
            initial={{width: '0%'}}
            whileInView={{width: '100%', transition: {delay: 0.2,  ease: 'circOut'}}}
            className="border-b-4 border-white"></motion.div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 gap-y-5 mb-10">
            <motion.button
              viewport={{once: ONCE}}
              initial={{y: 20, opacity: 0, scale: 0.9}}
              whileInView={{opacity: 1, y: 0, scale: 1, transition: {type: 'spring', delay: 0.3, mass: 0.5}}}
              whileHover={{scale: 1.05, y: -1}}
              whileTap={{scale: 0.99, transition: {duration: 0.05}}}
              className="w-52 shadow rounded-lg py-2 cursor-pointer bg-white inline-block flex flex-col items-start gap-y-2 group relative overflow-hidden hover:shadow-inset">
              <div className='absolute inset-0 group-hover:bg-[#252422]/[0.1] group-active:bg-[#252422]/[0.2]'></div>
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
            <motion.button
              viewport={{once: ONCE}}
              initial={{y: 20, opacity: 0, scale: 0.9}}
              whileInView={{opacity: 1, y: 0, scale: 1, transition: {type: 'spring', delay: 0.5, mass: 0.5}}}
              whileHover={{scale: 1.05, y: -1}}
              whileTap={{scale: 0.99, transition: {duration: 0.05}}}
              className="w-52 shadow rounded-lg py-2 cursor-pointer bg-white inline-block flex flex-col items-start gap-y-2 group relative overflow-hidden hover:shadow-inset">
              <div className='absolute inset-0 group-hover:bg-[#252422]/[0.1] group-active:bg-[#252422]/[0.2]'></div>
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
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col gap-y-10 py-10 items-center px-5">
        <div className="w-full max-w-7xl flex flex-col sm:flex-row sm:gap-10 gap-y-10">
          <div className="grow flex flex-col gap-y-10 items-start">
            <div className="flex flex-col gap-y-5 items-start">
              <div className="px-2 inline-block bg-[#252422] rounded-full uppercase font-[HelveticaNowDisplay] font-semibold text-white tracking-wide">
                passion
              </div>
              <div className="max-w-full relative flex">
                <span className="text-[#eb5e28] text-4xl lg:text-7xl font-bold font-['Montserrat'] uppercase not:text-[#252422] tracking-wider">
                  Interaction Design
                </span>
                {/*
- animations
- prototyping
- research-informed UX improvements
- user flows, look and feel
    */}
              </div>
            </div>
            <div className="font-[HelveticaNowDisplay] text-[#252422] text-[16px] sm:text-[20px] tracking-wide max-w-prose flex flex-col gap-y-5">
              <div>
                <span className="font-semibold">
                  Empathy is the best building block for a user-friendly
                  product.
                </span>{" "}
                Through research, I identify common interaction pitfalls in
                existing experiences. By staying aware of pitfalls and avoiding
                them, our final product can deliver an
                uncompromisingly-empathetic experience for your market.
              </div>
              <ul className="list-inside list-disc">
                <li className="font-semibold">identifying pitfalls</li>
                <li className="font-semibold">innovating with motion design</li>
                <li className="font-semibold">
                  delivering state-of-the-art user flows
                </li>
              </ul>
            </div>
          </div>
          {/* TODO link to https://gist.github.com/L8D/c27a4563f5d9e98b8220acb4bdae4cac */}
          <div className="max-w-6xl mx-auto flex flex-col items-center sm:items-end gap-y-10 grow-0">
            <div>
              <video
                className="rounded-full max-w-xs mx-auto"
                autoPlay
                loop
                muted
                src="/piece-1.mov"
              />
            </div>
            <div className="w-80 h-80 relative overflow-hidden rounded-full">
              <video
                className="absolute w-full h-full rounded-full max-w-sm mx-auto object-cover w-full h-auto scale-150"
                autoPlay
                loop
                muted
                src="/piece-2.mov"
              />
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl flex flex-col sm:flex-row sm:gap-10 gap-y-10">
          <div className="grow flex flex-col gap-y-10 items-start">
            <div className="flex flex-col gap-y-5 items-start">
              <div className="px-2 inline-block bg-[#252422] rounded-full uppercase font-[HelveticaNowDisplay] font-semibold text-white tracking-wide">
                passion
              </div>
              <div className="max-w-full relative flex">
                <span className="text-[#eb5e28] text-4xl lg:text-7xl font-bold font-['Montserrat'] uppercase not:text-[#252422] tracking-wider">
                  Inclusive Products
                </span>
              </div>
            </div>
            <div className="font-[HelveticaNowDisplay] text-[#252422] text-[16px] sm:text-[20px] tracking-wide max-w-prose flex flex-col gap-y-5">
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
            </div>
          </div>

          {/* TODO link to https://gist.github.com/L8D/c27a4563f5d9e98b8220acb4bdae4cac */}
          <div className="max-w-6xl mx-auto flex flex-col items-center sm:items-end gap-y-10 grow-0">
            <div>
              <img
                alt="inclusive design"
                className="rounded-full max-w-xs mx-auto saturate-50"
                src="/inclusive-design.jpeg"
              />
            </div>

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

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
</svg>

              </div>

              <img
                alt="globe"
                className="rounded-full w-full h-full object-cover"
                src="/globe.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
