import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24 bg-light bg-cover ">
      <div className="">
        <h1 className="font-medium text-2xl">Hi!</h1>
        <p className="text-xl">
          I'm{" "}
          <strong className="bg-gradient-to-r from-blue-700 to-blue-400 text-transparent bg-clip-text">
            Lucas
          </strong>
          .
        </p>
      </div>
      <section className="bg-white bg-opacity-35 rounded-lg py-2 px-5 mt-4 ">
        <h3 className="font-semibold">Who am I?</h3>
        <p className="text-clip w-[420px]">
          I am a graduent student in Computer Engeineer, who loves to take
          photos and finding out how things works.
        </p>
        <h3 className=" pt-4 font-semibold">My projects</h3>
        <div className="flex justify-between">
          <div className="group transition ease-in-out delay-100 w-48 bg-gray-100 bg-opacity-80 rounded-lg p-3 mt-2 hover:shadow">
            <h4 className="bg-gradient-to-r from-green-700 to-green-400 text-transparent bg-clip-text">
              Eco APP
            </h4>
            <p className="text-sm">A social media app.</p>
            <a
              className="text-sm"
              href="https://expo.dev/accounts/lluciomeireles/projects/Eco"
            >
              Acess
              <FiArrowRight className="hidden group-hover:inline-block ml-1 text-green-800" />
              <span className="block max-w-0 group-hover:max-w-14 transition-all duration-500 h-0.5 bg-green-800"></span>
            </a>
          </div>
          <div className="group transition ease-in-out delay-10 w-48 flex-col bg-gray-100 bg-opacity-80 rounded-lg p-3 mt-2">
            <h4 className="bg-gradient-to-r from-green-900 to-green-300 text-transparent bg-clip-text">
              Eco WEB
            </h4>
            <p className="text-sm">A social media web app.</p>
            <a className="text-sm" href="https://ecoweb-sigma.vercel.app">
              Acess
              <FiArrowRight className="hidden group-hover:inline-block ml-1 text-green-800" />
              <span className="block max-w-0 group-hover:max-w-14 transition-all duration-500 h-0.5 bg-green-800"></span>
            </a>
          </div>
        </div>
        <h3 className="pt-4 font-semibold">My Skils</h3>
        <div>
          <ul className="list-disc">
            <li className="flex">
              Next
              <Image
                alt="Next Logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                width={15}
                height={15}
                className="ml-2"
              />
            </li>
            <li className="flex">
              React
              <Image
                alt="React Logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                width={15}
                height={15}
                className="ml-2"
              />
            </li>
            <li className="flex">
              JavaScript
              <Image
                alt="JavaScript Logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                width={15}
                height={15}
                className="ml-2"
              />
            </li>
            <li className="flex">
              TypeScript
              <Image
                alt="TypeScript Logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                width={15}
                height={15}
                className="ml-2"
              />
            </li>

            <li className="flex">
              Python
              <Image
                alt="Python Logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                width={15}
                height={15}
                className="ml-2"
              />
            </li>
          </ul>
        </div>
        <h3 className="pt-4 font-semibold">Where to find me</h3>
        <div>
          <ul className="list-disc">
            <li className="flex">
              <a href="https://github.com/lucaslmeireles">GitHub</a>
              <Image
                alt="GitHub Logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                width={15}
                height={15}
                className="ml-2"
              />
            </li>
            <li className="flex">
              <a href="https://www.linkedin.com/in/lucas-lucio-de-meireles-478936278/">
                LinkedIn
              </a>
              <Image
                alt="LinkedIn Logo"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                width={15}
                height={15}
                className="ml-2"
              />
            </li>
          </ul>
        </div>
      </section>
      <footer className="mt-5">
        <a className="text-sm text-white" href="">
          Feito com ❤️ por Lucas.
        </a>
      </footer>
    </main>
  );
}
