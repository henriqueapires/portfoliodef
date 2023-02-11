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
                                <FaCaretRight className="text-[#ff3877]"/>CapittalX
                            </Box>
                            <AccordionIcon className="text-2xl mr-5" color={'#ff3877'}/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className="w-full mb-5 pt-2 pl-2 pb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel purus ultrices, imperdiet enim ut, laoreet arcu. Praesent tempor, tortor eu dapibus pharetra, erat nisl efficitur diam, vitae ultrices libero ipsum viverra risus. Pellentesque auctor in lectus sit amet convallis. Cras molestie risus vel erat convallis, ut feugiat tortor ullamcorper.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className="w-full my-5">
                    <h2>
                        <AccordionButton _expanded={{bg: '#ff38771b', borderLeftWidth: '2px', borderLeftColor: '#ff3877'}} className="border-l-[2px] border-transparent">
                            <Box flex='1' textAlign='left' className="btnAcc flex items-center gap-2 text-left p-5 border-[#ff38773e] duration-500 w-full">
                               <FaCaretRight className="text-[#ff3877]"/> Opus Entretenimento
                            </Box>
                            <AccordionIcon className="text-2xl mr-5" color={'#ff3877'}/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className="w-full mb-5 pt-2 pl-2 pb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel purus ultrices, imperdiet enim ut, laoreet arcu. Praesent tempor, tortor eu dapibus pharetra, erat nisl efficitur diam, vitae ultrices libero ipsum viverra risus. Pellentesque auctor in lectus sit amet convallis. Cras molestie risus vel erat convallis, ut feugiat tortor ullamcorper.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem className="w-full">
                    <h2>
                        <AccordionButton _expanded={{bg: '#ff38771b', borderLeftWidth: '2px', borderLeftColor: '#ff3877'}} className="border-l-[2px] border-transparent">
                            <Box flex='1' textAlign='left' className="btnAcc flex items-center gap-2 text-left p-5 border-[#ff38773e] duration-500 w-full">
                                <FaCaretRight className="text-[#ff3877]"/>Lojas Renner
                            </Box>
                            <AccordionIcon className="text-2xl mr-5" color={'#ff3877'}/>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel className="w-full mb-5 pt-2 pl-2 pb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel purus ultrices, imperdiet enim ut, laoreet arcu. Praesent tempor, tortor eu dapibus pharetra, erat nisl efficitur diam, vitae ultrices libero ipsum viverra risus. Pellentesque auctor in lectus sit amet convallis. Cras molestie risus vel erat convallis, ut feugiat tortor ullamcorper.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}