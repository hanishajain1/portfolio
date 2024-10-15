import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Instagram, Twitter, Linkedin, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-900 p-8">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold">JULIA HUANG</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#projects" className="hover:underline">PROJECTS</Link></li>
            <li><Link href="#about" className="hover:underline">ABOUT</Link></li>
            <li><Link href="#contact" className="hover:underline">CONTACT</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Artist Redefining Architecture with AI-Driven Design</h2>
            <div className="w-16 h-16 rounded-full bg-pink-200 mb-4"></div>
            <p className="mb-4">
              Julia Huang is an innovative AI artist, renowned for blending cutting-edge technology with creative expression. Based in LA, she crafts unique digital art experiences accessible globally.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg flex items-center justify-center">
            <span className="text-4xl text-gray-400">Image Placeholder</span>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-pink-200 p-8 flex items-center justify-between">
            <h3 className="text-2xl font-bold">Contact me</h3>
            <ArrowUpRight size={24} />
          </Card>
          <Card className="bg-gray-100 p-8">
            <h3 className="text-2xl font-bold mb-4">Musea</h3>
            <div className="w-full h-32 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400">Project Image</span>
            </div>
          </Card>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-pink-100 p-8">
            <h3 className="text-2xl font-bold">Elara</h3>
          </Card>
          <Card className="bg-pink-100 p-8">
            <h3 className="text-2xl font-bold">Verve</h3>
          </Card>
        </section>
      </main>

      <footer className="flex justify-center space-x-4">
        <Button variant="ghost" size="icon">
          <Instagram className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Twitter className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Linkedin className="h-5 w-5" />
        </Button>
      </footer>
    </div>
  )
}
// // @flow strict

// import { personalData } from "@/utils/data/personal-data";
// import Image from "next/image";
// import Link from "next/link";
// import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
// import { MdDownload } from "react-icons/md";
// import { RiContactsFill } from "react-icons/ri";
// import { SiLeetcode } from "react-icons/si";

// function HeroSection() {
//   return (
//     <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
//       <Image
//         src="/hero.svg"
//         alt="Hero"
//         width={1572}
//         height={795}
//         className="absolute -top-[98px] -z-10"
//       />

//       <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
//         <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
//           <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
//             Hello, <br />
//             This is {' '}
//             <span className=" text-pink-500">{personalData.name}</span>
//             {` , I'm a Professional `}
//             <span className=" text-[#16f2b3]">{personalData.designation}</span>
//             .
//           </h1>

//           <div className="my-12 flex items-center gap-5">
//             {/* <Link
//               href={personalData.github}
//               target='_blank'
//               className="transition-all text-pink-500 hover:scale-125 duration-300"
//             >
//               <BsGithub size={30} />
//             </Link> */}
//             <Link
//               href={personalData.linkedIn}
//               target='_blank'
//               className="transition-all text-pink-500 hover:scale-125 duration-300"
//             >
//               <BsLinkedin size={30} />
//             </Link>
//             {/* <Link
//               href={personalData.facebook}
//               target='_blank'
//               className="transition-all text-pink-500 hover:scale-125 duration-300"
//             >
//               <FaFacebook size={30} />
//             </Link> */}
//             {/* <Link
//               href={personalData.leetcode}
//               target='_blank'
//               className="transition-all text-pink-500 hover:scale-125 duration-300"
//             >
//               <SiLeetcode size={30} />
//             </Link> */}
//             <Link
//               href={personalData.twitter}
//               target='_blank'
//               className="transition-all text-pink-500 hover:scale-125 duration-300"
//             >
//               <FaTwitterSquare size={30} />
//             </Link>
//           </div>

//           <div className="flex items-center gap-3">
//             <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
//               <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
//                 <span>Contact me</span>
//                 <RiContactsFill size={16} />
//               </button>
//             </Link>

//             <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
//             >
//               <span>Get Resume</span>
//               <MdDownload size={16} />
//             </Link>
//           </div>

//         </div>
//         <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
//           <div className="flex flex-row">
//             <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
//             <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
//           </div>
//           <div className="px-4 lg:px-8 py-5">
//             <div className="flex flex-row space-x-2">
//               <div className="h-3 w-3 rounded-full bg-red-400"></div>
//               <div className="h-3 w-3 rounded-full bg-orange-400"></div>
//               <div className="h-3 w-3 rounded-full bg-green-200"></div>
//             </div>
//           </div>
//           <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
//             <code className="font-mono text-xs md:text-sm lg:text-base">
//               <div className="blink">
//                 <span className="mr-2 text-pink-500">const</span>
//                 <span className="mr-2 text-white">UI UX Designer</span>
//                 <span className="mr-2 text-pink-500">=</span>
//                 <span className="text-gray-400">{'{'}</span>
//               </div>
//               <div>
//                 <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
//                 <span className="text-gray-400">{`'`}</span>
//                 <span className="text-amber-300">Hanisha Jain</span>
//                 <span className="text-gray-400">{`',`}</span>
//               </div>
//               <div className="ml-4 lg:ml-8 mr-2">
//                 <span className=" text-white">skills:</span>
//                 <span className="text-gray-400">{`['`}</span>
//                 <span className="text-amber-300">Figma</span>
//                 <span className="text-gray-400">{"', '"}</span>
//                 <span className="text-amber-300">Sketch</span>
//                 <span className="text-gray-400">{"', '"}</span>
//                 <span className="text-amber-300">Wireframing</span>
//                 <span className="text-gray-400">{"', '"}</span>
//                 <span className="text-amber-300">Prototytping</span>
//                 <span className="text-gray-400">{"', '"}</span>
//                 <span className="text-amber-300">Adobe Illustrator</span>
//                 <span className="text-gray-400">{"', '"}</span>
//                 <span className="text-amber-300">Adobe Creative Suite</span>
//                 <span className="text-gray-400">{"', '"}</span>
//                 <span className="text-amber-300">Adobe After Effects</span>
//                 <span className="text-gray-400">{"', '"}</span>
//                 <span className="text-amber-300">Adobe Photoshop</span>
//                 <span className="text-gray-400">{"', '"}</span>
//                 <span className="text-amber-300">Balsamiq</span>
//                 <span className="text-gray-400">{"'],"}</span>
//               </div>
//               <div>
//                 <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
//                 <span className="text-orange-400">true</span>
//                 <span className="text-gray-400">,</span>
//               </div>
//               <div>
//                 <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
//                 <span className="text-orange-400">true</span>
//                 <span className="text-gray-400">,</span>
//               </div>
//               <div>
//                 <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
//                 <span className="text-orange-400">true</span>
//                 <span className="text-gray-400">,</span>
//               </div>
//               <div>
//                 <span className="ml-4 lg:ml-8 mr-2 text-green-400">explorer:</span>
//                 <span className="text-orange-400">function</span>
//                 <span className="text-gray-400">{'() {'}</span>
//               </div>
//               <div>
//                 <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
//                 <span className="text-gray-400">{`(`}</span>
//               </div>
//               <div>
//                 <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
//                 <span className="mr-2 text-white">hardWorker</span>
//                 <span className="text-amber-300">&amp;&amp;</span>
//               </div>
//               <div>
//                 <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
//                 <span className="mr-2 text-white">problemSolver</span>
//                 <span className="text-amber-300">&amp;&amp;</span>
//               </div>
//               <div>
//                 <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
//                 <span className="mr-2 text-white">skills.length</span>
//                 <span className="mr-2 text-amber-300">&gt;=</span>
//                 <span className="text-orange-400">5</span>
//               </div>
//               <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
//               <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
//               <div><span className="text-gray-400">{`};`}</span></div>
//             </code>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;