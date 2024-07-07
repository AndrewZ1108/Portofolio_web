/** @format */
import { useRef } from "react";
import "./portofolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Portofolio = () => {
  const items = [
    {
      id: 1,
      title: "Company Profile PT.Aria Agri",
      img: "./aria1.png",
      desc: `Internship project at PT. Aria Agri Indonesia, developed a company profile website. Using next js as a react framework and tailwind css as a css framework.
Collaborate with the UI/UX team to develop and improve the interface.
Implement mockup results that have been designed by the UI/UX team.`,
      link: "https://aria-indonesia.id/",
      period: "Dec 2022 - Mei 2023",
    },
    {
      id: 2,
      title: "Chem Mixing",
      img: "./chemmixing.png",
      desc: "This project is my final project, I made a chemistry simulation game as learning. The mechanism created in this game is very simple, where players will be asked to move the tools that have been provided with the aim of colliding chemical molecules.",
      link: "https://github.com/AndrewZ1108/Chem_Mixing",
      period: "Mar 2023 - June 2023",
    },
    {
      id: 3,
      title: "Redesign Website MyUMN",
      img: "./myumn.png",
      desc: "The MyUMN website redesign project aims to update and improve the user experience for Multimedia Nusantara University students, lecturers and staff. This redesign was designed by taking into account user feedback, technological developments and modern design trends to ensure that the MyUMN website can provide more efficient and user-friendly services.",
      link: "https://www.figma.com/proto/hdpbOT9f6nEH8CEEvt41pO/Re-Design-Website-MyUMN?page-id=0%3A1&node-id=107-532&starting-point-node-id=107%3A532&t=iMatAskBCubtoJHP-1",
      period: "Mar 2022 - May 2022",
    },
    {
      id: 4,
      title: "Ven-Plac",
      img: "./venplac.png",
      desc: "This is a group project where my team is designing a technology business in the form of a vending machine for disposing of plastic waste, equipped with a mobile application. These vending machines will be placed in strategic locations, allowing users to dispose of plastic waste and earn points. These points can be collected and redeemed through the integrated application for various types of subscriptions to other applications, such as streaming services, fitness, or others. The project includes the design and creation of an application mock-up, showcasing the main features and the point redemption process, with the aim of incentivizing the community to manage plastic waste and promoting environmentally friendly behavior.",
      link: "https://www.figma.com/proto/JiMzjx1kCEPrJ6oWgkwTeK/VENPLAC?page-id=0%3A1&node-id=532-165&viewport=655%2C756%2C0.61&scaling=scale-down&starting-point-node-id=510%3A6&t=TS4J8TJ32YI1vL4q-1",
      period: "Sep 2021 - Nov 2021",
    },
    {
      id: 5,
      title: "News Writter at UMN Juice",
      img: "./umnjuice.png",
      desc: "I am actively involved in journalistic activities, especially in collecting news and information, in one of the campus media at Multimedia Nusantara University. In carrying out these duties, I collaborate with other divisions such as design and visual editors to ensure the delivery of accurate, interesting and high-quality information to our audience.",
      link: "https://www.instagram.com/umn_juice/",
      period: "Jan 2020 - Dec 2020",
    },
    {
      id: 6,
      title: "Sound and Lighting Technician at Teater Katak",
      img: "./teaterkatak.png",
      desc: "I was involved in several Theater Katak performances, one of the extracurricular activities at Multimedia Nusantara University. In this activity, I collaborate with actors and directors to manage sound needs in the performance. I am also responsible for setting up the lights and lighting effects used in the theater. In addition, I contribute to helping other crew when setting up the stage, especially in the lighting department.",
      link: "https://www.instagram.com/teaterkatak/",
      period: "Oct 2019 - Feb 2020",
    },
  ];

  const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
    return (
      <section ref={ref}>
        <div className='container'>
          <div className='wrapper'>
            <div className='imageContainer'>
              <img src={item.img} alt='' />
            </div>
            <motion.div className='textContainer'>
              <h2>{item.title}</h2>
              <h3>{item.period}</h3>
              <p>{item.desc}</p>
              <a href={item.link} target='_blank' rel='noopener noreferrer'>
                <button>See Project or Activity</button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className='portofolio' ref={ref}>
      <div className='progress'>
        <h1>My Project & Activity</h1>
        <motion.div style={{ scaleX }} className='progressBar'></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portofolio;
