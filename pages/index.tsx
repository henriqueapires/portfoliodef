import type { NextPage } from "next";
import { Navbar } from "../components/Navbar";
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { Accord } from "../components/Accordion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaElementor,
  FaWordpress,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiWhatsapp,
  SiAndroidstudio,
} from "react-icons/si";
import { MobileNavbar } from "../components/MobileNav";
import { useState } from "react";
import { ProjectCard } from "../components/project-card";

const Home: NextPage = () => {
  const [language, setLanguage] = useState("pt");

  const handleLanguageChange = () => {
    if (language === "pt") {
      setLanguage("en");
    } else {
      setLanguage("pt");
    }
  };

  const getTranslatedText = () => {
    if (language === "en") {
      return (
        <>
          <p className="text-xl">
            I am a frontend developer passionate about creating web systems and
            websites, with experience in React and Web Design. With a degree in
            Computer Science, I now apply the knowledge I acquired throughout my
            academic journey in my professional work as a frontend developer,
            crafting robust and innovative solutions.{" "}
          </p>
          <p className="py-5 text-xl">
            Throughout my career, I have worked on challenging projects,
            collaborating with cross-functional teams and engaging in various
            development areas to deliver solutions that meet clients' needs.{" "}
          </p>
          <p className="text-xl">
            I am driven by challenges and am always seeking new knowledge and
            skills to enhance my ability to create innovative, high-quality
            products.{" "}
          </p>
        </>
      );
    } else {
      return (
        <>
          <p className="text-xl">
            Sou um desenvolvedor frontend apaixonado por criar sistemas web e
            sites, com experiência em React e Web Design. Formado em Ciência da
            Computação, atualmente aplico todo o conhecimento adquirido ao longo
            da minha carreira profissional trabalhando como frontend,
            desenvolvendo soluções robustas e inovadoras.{" "}
          </p>
          <p className="py-5 text-xl">
            Ao longo da minha trajetória, participei de projetos desafiadores,
            colaborando com equipes multifuncionais e atuando em diferentes
            áreas do desenvolvimento para entregar soluções que atendam às
            necessidades dos clientes.{" "}
          </p>
          <p className="text-xl">
            Sou movido por desafios e estou sempre em busca de novos
            conhecimentos e habilidades para aprimorar minha capacidade de criar
            produtos inovadores e de alta qualidade.{" "}
          </p>
        </>
      );
    }
  };

  const htmlIcon = { color: "#E65100" };
  const cssIcon = { color: "#0277BD" };
  const jsIcon = { color: "#FFD600" };
  const tsIcon = { color: "#1976D2" };
  const reactIcon = { color: "#80DEEA" };
  const nextIcon = { color: "#212121" };
  const twIcon = { color: "#00ACC1" };
  const wpIcon = { color: "#23282d" };
  const btsIcon = { color: "#702cf6" };
  const gitIcon = { color: "#F4511E" };
  const ghIcon = { color: "#455A64" };
  const elIcon = { color: "#92003b" };
  const javaIcon = { color: "#E65100" };
  const androidIcon = { color: "#77d989" };

  const projects = [
    {
      title: "Aplicação de gestão financeira",
      description:
        "Aplicação web para gestão de finanças pessoais. Cadastre transações, categorias (receitas e despesas), metas, visualize gráficos, ative dark mode e defina limite mensal com alerta quando passar do teto.",
      image: "/numio.png",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      link: "https://numioapp.vercel.app/",
      linkGit: "https://github.com/henriqueapires/numio-app",
      featured: true,
    },
  ];

  return (
    <>
      <MobileNavbar />
      <Navbar />
      <header
        id="header"
        className='z-10 bg-[url("../public/bgimg.jpg")] dark:bg-[url("../public/bgdark.png")] bg-center bg-no-repeat bg-cover shadow-3xl duration-300'
      >
        <div className="min-h-[100vh] flex flex-col items-center container mx-auto">
          <div className="px-5 text-center m-auto leading-10 py-20">
            <p className="md:text-6xl text-4xl font-semibold dark:text-[#d3d3d3] duration-200">
              Olá, me chamo <span className="text-[#ff3877]">Henrique</span>
            </p>
            <p className="py-7 md:text-6xl text-4xl dark:text-[#d3d3d3] duration-200">
              Sou desenvolvedor Frontend & Designer UI/UX
            </p>
            <div className="max-w-[365px] m-auto">
              <div className="p-5 md:text-lg text-md text-black grid md:grid-cols-4 justify-center gap-5 dark:text-white">
                <a
                  href="https://www.instagram.com/henriqueapires/"
                  target="_blank"
                >
                  <p className="p-6 dark:bg-[#3D3D3D] dark:hover:bg-[#ff3877b2] shadow-xl rounded-full hover:cursor-pointer hover:bg-[#ffb0c9] duration-200">
                    <FiInstagram />
                  </p>
                </a>
                <a href="https://github.com/henriqueapires" target="_blank">
                  <p className="p-6 dark:bg-[#3D3D3D] dark:hover:bg-[#ff3877b2] shadow-xl rounded-full hover:cursor-pointer hover:bg-[#ffb0c9] duration-200">
                    <FiGithub />
                  </p>
                </a>
                <a
                  href="https://www.linkedin.com/in/henriqueapires"
                  target="_blank"
                >
                  <p className="p-6 dark:bg-[#3D3D3D] dark:hover:bg-[#ff3877b2] shadow-xl rounded-full hover:cursor-pointer hover:bg-[#ffb0c9] duration-200">
                    <FiLinkedin />
                  </p>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5551983327071"
                  target="_blank"
                >
                  <p className="p-6 dark:bg-[#3D3D3D] dark:hover:bg-[#ff3877b2] shadow-xl rounded-full hover:cursor-pointer hover:bg-[#ffb0c9] duration-200">
                    <SiWhatsapp />
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="sobre" className="w-full dark:bg-[#1f1f1f] duration-300">
        <div className="flex flex-row items-center container mx-auto px-5 py-10 dark:text-[#d3d3d3]">
          <div>
            <div className="text-center">
              <p className="font-semibold">/sobre</p>
              <p className="text-5xl">Quem sou eu</p>
              <hr className="m-auto w-[30px] mt-10 mb-10 border-[2px] rounded-full border-[#ff3877]"></hr>
              <p>
                Aqui você encontrará mais informações sobre mim, o que eu faço e
                minhas habilidades atuais, principalmente em termos de
                programação e tecnologia.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 py-20 gap-10 ">
              <div>
                <h1 className="mb-10 text-3xl">Me conheça um pouco!</h1>
                {getTranslatedText()}
                <button
                  onClick={handleLanguageChange}
                  className="bg-[#ff3877] px-4 py-1 my-5 rounded text-white"
                >
                  {language === "pt" ? "Translate" : "Traduzir"}
                </button>
              </div>
              <div>
                <h1 className="mb-10 text-3xl">Lugares onde trabalhei</h1>
                <div className="flex flex-row gap-5">
                  <Accord />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="projects" className="container mx-auto px-5 py-20">
        <header className="mb-16">
          <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            /Projetos
          </h1>
          <hr className="m-auto w-[30px] mt-10 mb-10 border-[2px] rounded-full border-[#ff3877]"></hr>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Aqui irei colocar alguns dos meus projetos pessoais.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>

      <section id="skills" className="w-full dark:bg-[#1f1f1f] duration-300">
        <div className="grid items-center container mx-auto pb-10 dark:text-[#d3d3d3]">
          <div>
            <div className="text-center">
              <p className="font-semibold">/skills</p>
              <hr className="m-auto w-[30px] mt-10 mb-10 border-[2px] rounded-full border-[#ff3877]"></hr>
              <p className="text-3xl">Meus conhecimentos</p>
            </div>
            <div className="grid md:grid-cols-4 gap-10 py-10 text-lg font-semibold md:px-0 px-10">
              <div className="p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300">
                <div className="m-auto">
                  <FaHtml5 size={70} style={htmlIcon} />
                </div>
                HTML
              </div>
              <div className="p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300">
                <div className="m-auto">
                  <FaCss3Alt size={70} style={cssIcon} />
                </div>
                CSS
              </div>
              <div className="p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300">
                <div className="m-auto">
                  <SiJavascript size={60} style={jsIcon} />
                </div>
                JavaScript
              </div>
              <div className="p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300">
                <div className="m-auto">
                  <SiTypescript size={60} style={tsIcon} />
                </div>
                TypeScript
              </div>
              <div className="p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300">
                <div className="m-auto">
                  <FaReact size={70} style={reactIcon} />
                </div>
                React
              </div>
              <div className="p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300">
                <div className="m-auto">
                  <SiNextdotjs size={70} style={nextIcon} />
                </div>
                Next
              </div>
              <div className="p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300">
                <div className="m-auto">
                  <FaWordpress size={70} style={wpIcon} />
                </div>
                Wordpress
              </div>
              <div className="p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300">
                <div className="m-auto">
                  <FaElementor size={70} style={elIcon} />
                </div>
                Elementor
              </div>
              <div className="p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300">
                <div className="m-auto">
                  <SiTailwindcss size={60} style={twIcon} />
                </div>
                Tailwind
              </div>
              <div className="p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300">
                <div className="m-auto">
                  <FaBootstrap size={60} style={btsIcon} />
                </div>
                Bootstrap
              </div>
              <div className="p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300">
                <div className="m-auto">
                  <SiGit size={60} style={gitIcon} />
                </div>
                Git
              </div>
              <div className="p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300">
                <div className="m-auto">
                  <SiGithub size={60} style={ghIcon} />
                </div>
                Github
              </div>
              <div className="p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300">
                <div className="m-auto">
                  <FaJava size={60} style={javaIcon} />
                </div>
                Java
              </div>
              <div className="p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300">
                <div className="m-auto">
                  <SiAndroidstudio size={60} style={androidIcon} />
                </div>
                Android Studio
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="w-full dark:bg-[#1f1f1f] ">
        <div className='min-h-screen py-20 bg-[url("../public/wall.png")] dark:bg-[url("../public/bgdark.png")] bg-center bg-no-repeat bg-cover duration-300 flex items-center'>
          <div className="container mx-auto text-center md:px-0 px-5">
            <form
              action="mailto:henrique.apires@outlook.com"
              method="post"
              className="max-w-[800px] m-auto rounded-xl shadow-xl bg-[#fff] dark:bg-[#333333] duration-300"
            >
              <div className="px-10 pt-10">
                <label htmlFor="nome" className="flex flex-col text-left">
                  <span className="font-semibold dark:text-[#d3d3d3]">
                    Email para contato:
                  </span>
                  <p className="p-5 my-5 bg-[#ececec] dark:bg-[#525252] rounded duration-300 dark:text-white overflow-hidden">
                    henrique.apires@outlook.com
                  </p>
                </label>
              </div>
              <div className="flex pb-5 px-10">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded"
                >
                  Enviar email
                </button>
              </div>
            </form>
            <div className="max-w-[800px] bg-[#fff] dark:bg-[#333333] shadow-xl m-auto mt-5 py-10 rounded-xl duration-300 ">
              <p className="dark:text-[#d3d3d3]">Outras formas de contato</p>
              <div className="max-w-[365px] m-auto">
                <div className="p-5 md:text-lg text-md text-black grid md:grid-cols-4 justify-center gap-5 dark:text-white">
                  <a
                    href="https://www.instagram.com/henriqueapires/"
                    target="_blank"
                  >
                    <p className="p-6 dark:bg-[#525252] dark:hover:bg-[#ff3877b2]  dark:text-[#d3d3d3] shadow-xl rounded-full hover:cursor-pointer hover:bg-[#ffb0c9] duration-300">
                      <FiInstagram />
                    </p>
                  </a>
                  <a href="https://github.com/henriqueapires" target="_blank">
                    <p className="p-6 dark:bg-[#525252] dark:hover:bg-[#ff3877b2]  dark:text-[#d3d3d3] shadow-xl rounded-full hover:cursor-pointer hover:bg-[#ffb0c9] duration-300">
                      <FiGithub />
                    </p>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/henriqueapires"
                    target="_blank"
                  >
                    <p className="p-6 dark:bg-[#525252] dark:hover:bg-[#ff3877b2]  dark:text-[#d3d3d3] shadow-xl rounded-full hover:cursor-pointer hover:bg-[#ffb0c9] duration-300">
                      <FiLinkedin />
                    </p>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=5551983327071"
                    target="_blank"
                  >
                    <p className="p-6 dark:bg-[#525252] dark:hover:bg-[#ff3877b2]  dark:text-[#d3d3d3] shadow-xl rounded-full hover:cursor-pointer hover:bg-[#ffb0c9] duration-300">
                      <SiWhatsapp />
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
