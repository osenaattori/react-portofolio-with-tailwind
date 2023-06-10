import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Tietosuoja </title>
        <meta name="description" content="Tietosuoja" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h2 className="font-burtons text-x1">Tietosuoja</h2>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>

              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="."
                >
                  Kotisivu
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Tietosuoja
            </h2>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Oskarin IT-tuki arvostaa yksityisyyttäsi ja haluaa varmistaa, että
              tietosi ovat turvassa ja käsitellään asianmukaisesti. Tässä
              tietosuojakäytännössä kerromme, miten keräämme, käytämme ja
              suojaamme henkilötietojasi.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Henkilötietojen kerääminen: Keräämme henkilötietoja ainoastaan
              silloin, kun vapaaehtoisesti annat ne meille. Tällaisia tietoja
              voivat olla esimerkiksi nimesi, sähköpostiosoitteesi tai
              puhelinnumerosi. Emme kerää arkaluonteisia tietoja ilman
              nimenomaista suostumustasi.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Henkilötietojen käyttö: Käytämme keräämiämme henkilötietoja
              ainoastaan tiettyihin tarkoituksiin, kuten palveluidemme
              tarjoamiseen ja kommunikointiin kanssasi. Emme myy, vuokraa tai
              luovuta tietojasi kolmansille osapuolille ilman suostumustasi.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Tietoturva: Turvaamme henkilötietosi asianmukaisilla teknisillä ja
              organisatorisilla suojatoimenpiteillä. Käytämme suojattuja
              palvelimia ja SSL-salausta varmistaaksemme tietojesi turvallisen
              käsittelyn.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Evästeet: Sivustomme saattaa käyttää evästeitä (cookies)
              parantaakseen käyttökokemustasi. Evästeet ovat pieniä
              tekstitiedostoja, jotka tallentuvat laitteellesi. Ne auttavat
              meitä analysoimaan sivuston käyttöä ja personoimaan sisältöä. Voit
              halutessasi estää evästeiden käytön selaimen asetuksista, mutta
              tämä voi vaikuttaa sivuston toiminnallisuuteen.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Pidätämme oikeuden päivittää tätä tietosuojakäytäntöä
              tarvittaessa. Suosittelemme tarkistamaan säännöllisesti
              mahdolliset muutokset.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              @2023 Oskarin IT-tuki
            </p>
          </div>
        </section>
        <section>
          <div className="lg:flex gap-10"></div>
        </section>
      </main>
    </div>
  );
}
