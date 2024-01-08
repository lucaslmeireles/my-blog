import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { useTranslations } from "next-intl";
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';

type HomeData  = {
  params: {
    locale: string;
  }
}
export default function Home({params: {locale}}: HomeData) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Home')
  return (
    <main className="flex min-h-screen flex-col items-center pt-5">
      <div className="">
        <h1 className="font-medium text-2xl dark:text-white">{t('title')}</h1>
        <p className="text-xl dark:text-white">
          {t('am')}{" "}
          <strong className="bg-gradient-to-r from-blue-300 to-blue-100  sm:from-blue-700  sm:to-blue-400 text-transparent bg-clip-text ">
            Lucas
          </strong>
          .
        </p>
      </div>
      <section className="bg-white bg-opacity-35 rounded-lg py-2 px-1 xs:px-5 mt-4 ">
        <h3 className="font-semibold">{t('who')}</h3>
        <p className="text-clip w-[300px] sm:w-[420px]">
          {t("description")}
        </p>
        <h3 className=" pt-4 font-semibold">{t('my-project')}</h3>
        <div className="flex justify-between sm:flex-row flex-col items-center">
          <div className="group transition ease-in-out delay-100 w-48 bg-gray-100 bg-opacity-80 rounded-lg p-3 mt-2 hover:shadow">
            <h4 className="bg-gradient-to-r from-green-700 to-green-400 text-transparent bg-clip-text">
              Eco APP
            </h4>
            <p className="text-sm">{t('smapp')}</p>
            <a
              className="text-sm"
              href="https://expo.dev/accounts/lluciomeireles/projects/Eco"
            >
              {t('ac')}
              <FiArrowRight className="hidden group-hover:inline-block ml-1 text-green-800" />
              <span className="block max-w-0 group-hover:max-w-14 transition-all duration-500 h-0.5 bg-green-800"></span>
            </a>
          </div>
          <div className="group transition ease-in-out delay-10 w-48 flex-col bg-gray-100 bg-opacity-80 rounded-lg p-3 mt-2">
            <h4 className="bg-gradient-to-r from-green-900 to-green-300 text-transparent bg-clip-text">
              Eco WEB
            </h4>
            <p className="text-sm">{t('smwebapp')}</p>
            <a className="text-sm" href="https://ecoweb-sigma.vercel.app">
            {t('ac')}
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
        <h3 className="pt-4 font-semibold">{t('where-to')}</h3>
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
      <footer className="mt-3">
        <a
          className="text-sm text-white"
          href="https://github.com/lucaslmeireles/my-blog"
        >
          Feito com ❤️ por Lucas.
        </a>
      </footer>
    </main>
  );
}

export async function generateMetadata({params: {locale}}: HomeData) {
  const t = await getTranslations({locale, namespace: 'MetaData'});
 
  return {
    title: t('page-title')
  };
}