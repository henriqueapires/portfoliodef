import type { NextPage } from 'next'
import { Navbar } from './components/Navbar'
import { FiInstagram, FiLinkedin, FiGithub  } from "react-icons/fi";
import { Accord } from './components/Accordion';
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiGit, SiGithub } from "react-icons/si";

const Home: NextPage = () => {

  const htmlIcon = {color: "#E65100"}
  const cssIcon = {color: "#0277BD"}
  const jsIcon = {color: "#FFD600"}
  const tsIcon = {color: "#1976D2"}
  const reactIcon = {color: "#80DEEA"}
  const nextIcon = {color: "#212121"}
  const twIcon = {color: "#00ACC1"}
  const gitIcon = {color: "#F4511E"}
  const ghIcon = {color: "#455A64"}

  return (
   <>
      <Navbar/>
      <header className='z-10 bg-[url("../public/bgimg.jpg")] dark:bg-[url("../public/bgdark.png")] bg-center bg-no-repeat bg-cover shadow-3xl duration-300'>
        <div className='min-h-[100vh] flex flex-col items-center container mx-auto'>
          <div className='text-center m-auto leading-10 max-w-[900px]'>
              <p className='text-6xl font-semibold dark:text-[#d3d3d3] duration-200'>Olá, me chamo <span className='text-[#ff3877]'>Henrique</span></p>
              <p className='py-7 text-6xl dark:text-[#d3d3d3] duration-200'>Sou desenvolvedor web Front-End & designer UX</p>
              <p className='text-md dark:text-[#d3d3d3] duration-200'>Eu sou um desenvolvedor Front-end</p>
              <ul className="p-5 text-lg text-black flex flex-row justify-center gap-5 dark:text-white">
                  <li className="p-6 dark:bg-[#3D3D3D] dark:hover:bg-[#ff3877b2] shadow-xl rounded-full hover:cursor-pointer hover:bg-[#ffb0c9] duration-200"><FiInstagram/></li>
                  <li className="p-6 dark:bg-[#3D3D3D] dark:hover:bg-[#ff3877b2] shadow-xl rounded-full hover:cursor-pointer hover:bg-[#ffb0c9] duration-200"><FiGithub/></li>
                  <li className="p-6 dark:bg-[#3D3D3D] dark:hover:bg-[#ff3877b2] shadow-xl rounded-full hover:cursor-pointer hover:bg-[#ffb0c9] duration-200"><FiLinkedin/></li>
              </ul>
          </div>
          </div>
          
      </header>

      {/* <div className="middle w-full pb-10">
              <div className="mouse"></div>
        </div> */}

    <section className='w-full dark:bg-[#1f1f1f] duration-300'>
        <div className='min-h-screen flex flex-row items-center container mx-auto px-5 py-10 dark:text-[#d3d3d3]'>
            <div>
                <div className='text-center'>
                    <p className='font-semibold'>/sobre</p>
                    <p className='text-5xl'>Quem sou eu</p>
                    <hr className="m-auto w-[30px] mt-10 mb-10 border-[2px] rounded-full border-[#ff3877]"></hr>
                    <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                </div>
                <div className='grid lg:grid-cols-2 py-20 gap-10 '>
                    <div>
                        <h1 className='mb-10 text-3xl'>Me conheça um pouco!</h1>
                        <p className='text-xl'>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
                        <p className='py-5 text-xl'>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p>
                        <p className='text-xl'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                    </div>
                    <div>
                        <h1 className='mb-10 text-3xl'>Lugares onde trabalhei</h1>
                        <div className='flex flex-row gap-5'>
                            <Accord/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 

    <section className='w-full dark:bg-[#1f1f1f] duration-300'>
      <div className='min-h-screen grid items-center container mx-auto py-10 dark:text-[#d3d3d3]'>
            <div>
                <div className='text-center'>
                    <p className='font-semibold'>/skills</p>
                    <hr className="m-auto w-[30px] mt-10 mb-10 border-[2px] rounded-full border-[#ff3877]"></hr>
                    <p className='text-3xl'>Meus conhecimentos</p>
                </div>
                <div className='grid lg:grid-cols-4 grid-cols-2 gap-10 py-10 text-lg font-semibold'>
                    <div className='p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300'><div className='m-auto'><FaHtml5 size={70} style={htmlIcon}/></div>HTML</div>
                    <div className='p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300'><div className='m-auto'><FaCss3Alt size={70} style={cssIcon}/></div>CSS</div>
                    <div className='p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300'><div className='m-auto'><SiJavascript size={60} style={jsIcon}/></div>JavaScript</div>
                    <div className='p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300'><div className='m-auto'><SiTypescript size={60} style={tsIcon}/></div>TypeScript</div>
                    <div className='p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300'><div className='m-auto'><FaReact size={70} style={reactIcon}/></div>React</div>
                    <div className='p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300'><div className='m-auto'><SiNextdotjs size={70} style={nextIcon}/></div>Next</div>
                    <div className='p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300'><div className='m-auto'><SiTailwindcss size={60} style={twIcon}/></div>Tailwind</div>
                    <div className='p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300'><div className='m-auto'><SiGit size={60} style={gitIcon}/></div>Git</div>
                    <div className='p-6 shadow-lg dark:bg-[#3d3d3d] grid lg:grid-cols-2 text-center items-center rounded-md hover:scale-105 duration-300'><div className='m-auto'><SiGithub size={60} style={ghIcon}/></div>Github</div>
                </div>
            </div>
      </div>
    </section>

    <section className='w-full dark:bg-[#1f1f1f] '>
        <div className='min-h-screen py-20 bg-[url("../public/wall.png")] dark:bg-[url("../public/bgdark.png")] bg-center bg-no-repeat bg-cover duration-300'>
                <div className='container mx-auto text-center'>
                    <form className='max-w-[800px] m-auto rounded-xl shadow-xl bg-[#fff] dark:bg-[#333333] duration-300'>
                        <div className='p-10'>
                            <label className='flex flex-col text-left'>
                                <span className='font-semibold dark:text-[#d3d3d3]'>Nome</span>
                                <input type="text" placeholder="Escreva seu nome" className='p-5 my-5 bg-[#ececec] dark:bg-[#525252] rounded duration-300'></input>
                            </label>
                            <label className='flex flex-col text-left'>
                                <span className='font-semibold dark:text-[#d3d3d3]'>Nome</span>
                                <input type="email" placeholder="Escreva seu Email" className='p-5 my-5 bg-[#ececec] dark:bg-[#525252] rounded duration-300'></input>
                            </label>
                            <label className='flex flex-col text-left'>
                                <span className='font-semibold dark:text-[#d3d3d3]'>Mensagem</span>
                                <textarea  placeholder="Escreva seu nome" className='p-5 my-5 bg-[#ececec] dark:bg-[#525252] rounded duration-300' rows={10}></textarea>
                            </label>
                        </div>
                    </form>
                    <div className='max-w-[800px] bg-[#fff] dark:bg-[#333333] shadow-xl m-auto mt-5 py-10 rounded-xl duration-300'>
                        <p className='dark:text-[#d3d3d3]'>Outras formas de contato</p>
                        <ul className="p-5 text-lg text-black flex flex-row justify-center gap-5">
                            <li className="p-6 dark:bg-[#525252] dark:hover:bg-[#ff3877b2]  dark:text-[#d3d3d3] shadow-xl rounded-full hover:cursor-pointer hover:bg-[#ffb0c9] duration-300"><FiInstagram/></li>
                            <li className="p-6 dark:bg-[#525252] dark:hover:bg-[#ff3877b2]  dark:text-[#d3d3d3] shadow-xl rounded-full hover:cursor-pointer hover:bg-[#ffb0c9] duration-300"><FiGithub/></li>
                            <li className="p-6 dark:bg-[#525252] dark:hover:bg-[#ff3877b2]  dark:text-[#d3d3d3] shadow-xl rounded-full hover:cursor-pointer hover:bg-[#ffb0c9] duration-300"><FiLinkedin/></li>
                        </ul>
                    </div>
                </div>
         </div>
      </section>
   </>
  )
}

export default Home
