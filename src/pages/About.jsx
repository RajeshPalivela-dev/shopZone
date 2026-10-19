// import React from 'react'

// const About = () => {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-100 px-4 py-12">

//       <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl">

//         {/* Header Background */}
//         <div className="h-40 bg-gradient-to-r from-indigo-600 to-blue-500"></div>

//         {/* Profile Content */}
//         <div className="px-6 pb-10 text-center sm:px-12">

//           {/* Profile Image */}
//           <div className="-mt-20 flex justify-center">
//             <img
//                 src='rajesh.jpeg'
//               alt="Rajesh profile"
//               className="h-36 w-36 rounded-full border-4 border-white bg-gray-100 object-cover shadow-lg"
//             />
//           </div>

//           {/* Name and Role */}
//           <h1 className="mt-5 text-3xl font-extrabold text-gray-800 sm:text-4xl">
//             Mr. Rajesh
//           </h1>

//           <p className="mt-2 text-lg font-semibold text-indigo-600">
//             MERN Full Stack Developer
//           </p>

//           {/* About Description */}
//           <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
//             I am a passionate developer interested in building responsive,
//             user-friendly web applications. I enjoy learning new technologies
//             and creating practical projects using modern web development tools.
//           </p>

//           {/* Skills */}
//           <div className="mt-8">
//             <h2 className="text-xl font-bold text-gray-800">
//               Technical Skills
//             </h2>

//             <div className="mt-4 flex flex-wrap justify-center gap-3">
//               {['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'].map((skill) => (
//                 <span
//                   key={skill}
//                   className="rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-600 hover:text-white"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Contact Buttons */}
//           <div className="mt-8 flex flex-wrap justify-center gap-4">
//             <a
//                 target="_blank"
//               href="https://mail.google.com"
//               className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700"
//             >
//               Contact Me
//             </a>

//             <a
             
//               target="_blank"
//               rel="noreferrer"
//               href='https://github.com/RajeshPalivela-dev'
//               className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-gray-800 hover:bg-gray-800 hover:text-white"
//             >
//               GitHub
//             </a>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default About





import React from "react";
import {
  FaGithub,
  FaEnvelope,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

const About = () => {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
  ];

  const projects = [
    {
      title: "E-Commerce Application",
      description:
        "A shopping application with product listings, cart management, wishlist, and responsive UI.",
      tech: "React.js • Redux Toolkit • Tailwind CSS",
    },
    {
      title: "AI Interview IQ",
      description:
        "An AI-powered interview practice application designed to help users prepare for technical interviews.",
      tech: "React.js • Node.js • Express.js • MongoDB • AI Integration",
    },
    {
      title: "AI Resume Analyzer",
      description:
        "A tool concept for analyzing resume content against job descriptions and highlighting relevant skills.",
      tech: " JavaScript • React.js • Express.js •  Node.js  • AI Integration",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-5 py-20 text-white sm:py-28">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          {/* Profile */}
          <div className="text-center md:text-left">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-200">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Aspiring Software Developer
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Hello, I'm{" "}
              <span className="text-blue-400">Rajesh</span>
            </h1>

            <h2 className="mt-4 text-xl font-semibold text-slate-300 sm:text-2xl">
              Frontend Developer | React.js | Mern FullStack 
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-300 md:mx-0">
              I enjoy building responsive, user-friendly web applications
              with React.js and modern frontend technologies. I love
              learning new tools, solving problems, and turning ideas into
              practical projects.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="https://github.com/RajeshPalivela-dev"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-600"
              >
                <FaGithub />
                Visit GitHub
                <FaArrowRight className="text-sm" />
              </a>

              <a
                href="mailto:your-email@example.com"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-900"
              >
                <FaEnvelope />
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-xl" />

              <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-white/20 bg-slate-800 shadow-2xl sm:h-80 sm:w-80">
                <img
                  src="/rajesh.jpeg"
                  alt="Rajesh profile"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-3 -left-5 rounded-2xl border border-white/10 bg-white p-4 text-slate-800 shadow-xl">
                <div className="flex items-center gap-3">
                  <FaCode className="text-2xl text-blue-600" />
                  <div>
                    <p className="font-bold">Mern Stack</p>
                    <p className="text-xs text-slate-500">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Me */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              Get to know me
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              About Me
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-600" />
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-600">
                <FaLaptopCode />
              </div>

              <h3 className="text-xl font-bold">My Development Journey</h3>

              <p className="mt-4 leading-8 text-slate-600">
                I completed my B.Tech in Computer Science and have been
                developing my skills in web development. My current focus
                is on HTML, CSS, JavaScript, React.js, and building
                interactive user interfaces. I am also learning backend
                technologies to strengthen my full-stack development skills.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100 text-2xl text-indigo-600">
                <FaGraduationCap />
              </div>

              <h3 className="text-xl font-bold">Education</h3>

              <p className="mt-4 font-semibold text-slate-700">
                B.Tech Computer Science
              </p>

              <p className="mt-2 text-slate-600">
                RGUKT Srikakulam
              </p>

              <p className="mt-2 text-sm text-slate-500">
                2021 – 2025
              </p>

              <div className="mt-5 border-t border-slate-100 pt-5">
                <p className="font-semibold text-slate-700">
                  Career Goal
                </p>
                <p className="mt-2 leading-7 text-slate-600">
                  To contribute to real-world software projects, keep
                  improving my development skills, and grow as a software
                  developer.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-5xl">

          <div className="mb-12 text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              What I work with
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Technical Skills
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* Projects */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-blue-600">
              What I've been building
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              A few examples of projects I have worked on while developing
              my web development skills.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl font-extrabold text-blue-700">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold transition group-hover:text-blue-600">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <p className="mt-5 border-t border-slate-100 pt-4 text-sm font-medium leading-6 text-indigo-600">
                  {project.tech}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="bg-gradient-to-r from-indigo-950 to-blue-900 px-5 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Let's Build Something Together
          </h2>

          <p className="mt-5 leading-8 text-blue-100">
            I'm interested in entry-level opportunities where I can learn,
            contribute, and grow as a developer.
          </p>

          <a
            
            href="https://mail.google.com"
             target="_blank"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-3.5 font-bold text-indigo-900 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
          >
            <FaEnvelope />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-5 py-6 text-center text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} Rajesh. Built with React and Tailwind CSS.
        </p>
      </footer>

    </div>
  );
};

export default About;
