"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaJava, FaPhp, FaBootstrap, FaLaravel, FaNodeJs, FaNpm, FaAngular } from "react-icons/fa";

import { SiTailwindcss, SiMysql, SiTypescript, SiApache, SiPostgresql, SiMariadb, SiPostman, SiSwagger } from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";

import { DiMsqlServer } from "react-icons/di";


//about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deserunt consequatur possimus molestiae!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rumeysa Bircan"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+90) 544 719 78 60"
    },
        {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Email",
      fieldValue: "dev.rumeysabircan@gmail.com"
    },
  ]
}

//experience data
const experience = {
  title: "My experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsam commodi cupiditate hic enim quae.",
  items: [
    {
      company: "Tobeto",
      position: ".NET & React Full Stack Developer Trainee",
      duration: "2023 - 2024",
    },
    {
      company: "Vomsis",
      position: "Full Stack Developer Trainee",
      duration: "2022 - 2023",
    },
  ]
}

// education data
const education = {
  title: 'My education',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor neque, nulla sunt aut deleniti non. Similique odio nihil eligendi.",
  items: [
    {
      institution: "Tobeto",
      degree: "Full Stack Developer",
      duration: "2023-2024"
    },
    {
      institution: "Codecademy",
      degree: ".Net & React Full Stack",
      duration: "2024"
    },
    {
      institution: "Turkcell Geleceği Yazanlar",
      degree: "Java",
      duration: "2024"
    },
    {
      institution: "Turkcell Geleceği Yazanlar",
      degree: "İleri Java",
      duration: "2024"
    },
    {
      institution: "BtkAkademi",
      degree: "İleri Java",
      duration: "2024"
    },
    {
      institution: "Turkcell Geleceği Yazanlar",
      degree: "React",
      duration: "2024"
    },
    {
      institution: "Turkcell Geleceği Yazanlar",
      degree: "Angular",
      duration: "2024"
    },
    {
      institution: "Turkcell Geleceği Yazanlar",
      degree: "SQL",
      duration: "2024"
    },
    {
      institution: "Turkcell Geleceği Yazanlar",
      degree: "C# ile Algoritma ve Programlama",
      duration: "2022"
    },
    {
      institution: "Turkcell Geleceği Yazanlar",
      degree: "C# Form ile Görsel ve Nesne Tabanlı Programlama",
      duration: "2022"
    },
    {
      institution: "University",
      degree: "Associate Degree in Computer Programmer",
      duration: "2022"
    },
  ]
}

//skills data
const skills = {
  title: "My Skills",
  description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5"
    },
    {
      icon: <FaCss3 />,
      name: "css 3"
    },
    {
      icon: <FaJs />,
      name: "javascript"
    },
    {
      icon: <FaReact />,
      name: "react.js"
    },
    {
      icon: <FaJava />,
      name: "java"
    },
    {
      icon: <FaPhp />,
      name: "php"
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap"
    },
    {
      icon: <FaLaravel />,
      name: "laravel"
    },
    {
      icon: <FaNodeJs />,
      name: "node.js"
    },
    {
      icon: <FaNpm />,
      name: "npm"
    },
    {
      icon: <FaAngular />,
      name: "angular"
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css"
    },
    {
      icon: <SiMysql />,
      name: "mysql"
    },
    {
      icon: <TbBrandCSharp />,
      name: "csharp"
    },
    {
      icon: <SiTypescript />,
      name: "typescript"
    },
    {
      icon: <SiApache />,
      name: "apache"
    },
    {
      icon: <DiMsqlServer />,
      name: "microsoftsqlserver"
    },
    {
      icon: <SiPostgresql />,
      name: "postgresql"
    },
    {
      icon: <SiMariadb />,
      name: "mariadb"
    },
    {
      icon: <SiPostman />,
      name: "postman"
    },
    {
      icon: <SiSwagger />,
      name: "swagger"
    },
  ]
}


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, }} className="min-h-[100vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" >Experience</TabsTrigger>
            <TabsTrigger value="education" >Education</TabsTrigger>
            <TabsTrigger value="skills" >Skills</TabsTrigger>
            <TabsTrigger value="about" >About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">{skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  )
                })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index}
                        className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
