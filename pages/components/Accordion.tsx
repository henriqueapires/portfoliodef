import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { FaCaretRight } from "react-icons/fa"

export const Accord = () =>{
    return(
        <>
            <Accordion allowMultiple className="w-full text-[#000] shadow-xl rounded dark:text-white ">
                <AccordionItem className="w-full">
                    <h2>
                        <AccordionButton _expanded={{bg: '#ff38771b', borderLeftWidth: '2px', borderLeftColor: '#ff3877'}} className="border-l-[2px] border-transparent">
                            <Box flex='1' textAlign='left' className="btnAcc flex items-center gap-2 text-left p-5 border-[#ff38773e] duration-500 w-full">
                                <FaCaretRight className="text-[#ff3877]"/> Capittalx - Desenvolvedor Front-end e Web Designer
                            </Box>
                            <AccordionIcon className="text-2xl mr-5" color={'#ff3877'}/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className="w-full mb-5 pt-2 pl-2 pb-2">
                        <p className="py-2">05/22 - Atual</p>
                        Na Capittalx, sou responsável pelo desenvolvimento front-end e web design de sistemas e sites. Meu trabalho principal é o desenvolvimento de aplicações React. Durante meu tempo na empresa, participei do desenvolvimento de projetos desafiadores e contribuí para o sucesso de muitos deles.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className="w-full my-5">
                    <h2>
                        <AccordionButton _expanded={{bg: '#ff38771b', borderLeftWidth: '2px', borderLeftColor: '#ff3877'}} className="border-l-[2px] border-transparent">
                            <Box flex='1' textAlign='left' className="btnAcc flex items-center gap-2 text-left p-5 border-[#ff38773e] duration-500 w-full">
                               <FaCaretRight className="text-[#ff3877]"/> Opus Entretenimento - Assistente de Tecnologia
                            </Box>
                            <AccordionIcon className="text-2xl mr-5" color={'#ff3877'}/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className="w-full mb-5 pt-2 pl-2 pb-2">
                        <p className="py-2">09/21 - 05/22</p>
                        Como assistente de tecnologia na Opus Entretenimento, realizei uma variedade de tarefas relacionadas à manutenção e suporte técnico. Minhas responsabilidades incluíam manutenção de computadores, formatação, manutenção de cabos de rede e atendimento a chamados. Também ajudei a implementar e manter soluções de software e hardware para a empresa.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className="w-full">
                    <h2>
                        <AccordionButton _expanded={{bg: '#ff38771b', borderLeftWidth: '2px', borderLeftColor: '#ff3877'}} className="border-l-[2px] border-transparent">
                            <Box flex='1' textAlign='left' className="btnAcc flex items-center gap-2 text-left p-5 border-[#ff38773e] duration-500 w-full">
                                <FaCaretRight className="text-[#ff3877]"/>Lojas Renner - Auxiliar de Logística (Shipment)
                            </Box>
                            <AccordionIcon className="text-2xl mr-5" color={'#ff3877'}/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className="w-full mb-5 pt-2 pl-2 pb-2">
                        <p className="py-2">09/19 - 03/21</p>
                        Na Lojas Renner, trabalhei como auxiliar de logística, sendo responsável por receber as informações de carga e inseri-las no sistema. Durante minha passagem pela empresa, aprendi a lidar com grandes volumes de informações e a trabalhar com rapidez e precisão para manter a operação funcionando sem problemas.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}