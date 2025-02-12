import adobePhotoshoicon from "../../assets/icons/adobePhotoshopicon.svg";
import adobeillustratoricon from "../../assets/icons/adobeillustratoricon.svg"
import adobedimensionicon from "../../assets/icons/adobedimensionicon.svg"
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import mockApi from "../../assets/icons/mocApi.svg";
import laravelicon from "../../assets/icons/laravelicon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import redux from "../../assets/icons/redux.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import mernicon from "../../assets/icons/mernicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import apiicon from "../../assets/icons/apiicon.svg";
import axiosicon from "../../assets/icons/axiosicon.svg";
import sandGrid from "../../assets/icons/sendgrid-svgrepo-com.svg";
import jwt from "../../assets/icons/jwt.svg";
import stribrna from "../../assets/img/stribrna.webp";
import logomanual from "../../assets/img/logomanual.webp";
import lekia from "../../assets/img/lekia.webp";
import accute from "../../assets/img/accute.webp";
import Deu from "../../assets/img/Deu.webp";
import sunizer from "../../assets/img/sunizer.webp";
import todo_app from "../../assets/img/todo_app.webp"
import profilepicture from "../img/CV EduardHerák 2.jpg";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject, GoFileMedia } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    sk: "Ahoj, som Ed",
    en: "Hi, I'm Ed",
  },
  subtitle: "Developer",
  description: {
    sk: "Som Edi, vývojár s cieľom posunúť svoju kariéru dopredu a podieľať sa na inšpirujúcich projektoch. Tu prezentujem svoju prácu a vášeň pre webový vývoj. Poďme spoločne formovať digitálne riešenia a tvoriť budúcnosť!",
    en: "I'm Ed, a developer aiming to advance my career and participate in inspiring projects. Here, I present my work and passion for web development. Let's shape digital solutions and create the future together!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        sk: "Kontaktuj ma",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        sk: "Moje projekty",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Stribrna",
    description:
      "Ďalším projektom bol Stribrna, prezentačný web interiérovej dizajnérky. Keďže ide o prezentačný web, nebol použitý žiadny backend a celý web som vytvoril sám v React.js, TypeScript, Tailwind CSS a Vite.js. Na webe je veľa obrázkov a vytvoril som vlastný carousel na ich zobrazenie, všetko podľa návrhu vo Figme.",
    description_EN:
      "One of the projects I worked on was Stribrna, a portfolio website for an interior designer. It is a presentation site with no backend. I independently developed the website using React.js, TypeScript, Tailwind CSS, and Vite.js. The site contains numerous images, and I created a custom carousel to showcase them, following the design provided in Figma.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Laravel", icon: laravelicon },
      { name: "REST Api", icon: apiicon },
      { name: "React", icon: reacticon },
      { name: "Typescript", icon: typescripticon },
      { name: "Figma", icon: figmaicon },
      { name: "Axios", icon: axiosicon },
      { name: "Tailwind", icon: tailwindcssicon },
    ],
    image: stribrna,
    deploymenturl: "https://github.com/Edd224?tab=repositories",
    githuburl: "https://github.com/Edd224?tab=repositories",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },

  {
    title: "Todo Application",
    description:
      "Todo aplikácia umožňuje používateľom vytvárať úlohy s názvami, nastaviť ich priority (od 1 do 3 hviezdičiek) a definovať termíny splnenia. Používatelia môžu tiež označiť úlohy relevantnými kľúčovými slovami pre lepšiu organizáciu. Všetky úlohy sú uložené a spravované prostredníctvom API požiadaviek na MockAPI. Aplikácia poskytuje intuitívne rozhranie pre prepínanie stavu dokončenia úloh a úpravu alebo odstraňovanie úloh podľa potreby. Pre lepší užívateľský zážitok v podmienkach slabého osvetlenia je možné prepínať tmavý režim.",
    description_EN:
      "The Todo App allows users to create tasks with titles, set their priorities (from 1 to 3 stars), and define due dates. Users can also tag tasks with relevant keywords for better organization. All tasks are stored and managed through API requests to MockAPI. The app provides an intuitive interface for toggling task completion and editing or deleting tasks as needed. Dark mode can be toggled for a better user experience in low light conditions.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "React", icon: reacticon },
      { name: "Typescript", icon: typescripticon },
      { name: "Axios", icon: axiosicon },
      { name: "Tailwind", icon: tailwindcssicon },
      { name: "MockApi", icon: mockApi },
    ],
    image: todo_app,
    deploymenturl: "https://edi-todo-app.netlify.app",
    githuburl: "https://github.com/Edd224/my-todo-app",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },

  {
    title: "Sunizer",
    description:
      "Vytvoril som firemný web pre spoločnosť Sunizer, ktorá vyrába svetlovody na zabezpečenie prirodzeného svetla v objektoch. Pracoval som na rôznych sekciách webu spolu s tímom. Použili sme React.js a TypeScript pre frontend, a štýlovali sme cez Tailwind CSS. Integrovali sme tiež Inertia.js pre plynulú navigáciu medzi stránkami. Na backende sme použili Laravel, hoci som sa na tejto časti priamo nepodieľal.",
    description_EN:
      "I contributed to developing a corporate website for Sunizer, a company specializing in light tubes that provide natural light to buildings. I collaborated with a team to work on various sections of the website. We utilized React.js and TypeScript for the front end and styled the application using Tailwind CSS. Additionally, we integrated Inertia.js for seamless page navigation. The backend was built with Laravel, although I did not work on that part directly.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Tailwind", icon: tailwindcssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Typescript", icon: typescripticon },
      { name: "Axios", icon: axiosicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Node.js", icon: nodejsicon },
      { name: "Figma", icon: figmaicon },
      { name: "Next", icon: nextjsicon },
    ],
    image: sunizer,
    deploymenturl: "https://github.com/Edd224?tab=repositories",
    githuburl:
      "https://github.com/Edd224?tab=repositories",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },

  {
    title: "Logomanual",
    description:
      "Ďalším projektom bol Logomanual, ktorý som taktiež vytvoril sám. Použil som React.js, TypeScript, Inertia.js, Laravel, API a Vite.js. Ide o webovú aplikáciu na ukladanie rôznych fontov, viacerých log, farieb a iných firemných assetov. Aplikácia má aj administratívnu verziu, kde je možné tieto prvky nahrávať, upravovať a pridávať. Obsahuje rôzne prezentácie fontov, farieb na logách, samotné logá a obrázky.",
    description_EN:
      "I developed Logomanual independently using React.js, TypeScript, Inertia.js, Laravel, API, and Vite.js. This web application was created to archive various fonts, logos, colours, and other corporate assets. It also includes an admin version where these elements can be uploaded, edited, and added. The application features different presentations of fonts, colours on logos, and the logos and images themselves.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Tailwind", icon: tailwindcssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Typescript", icon: typescripticon },
      { name: "Axios", icon: axiosicon },
      { name: "Figma", icon: figmaicon },
    ],
    image: logomanual,
    deploymenturl: "https://github.com/Edd224?tab=repositories",
    githuburl: "https://github.com/Edd224?tab=repositories",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Lekia",
    description:
      "Vytvoril som modernú a responzívnu webovú stránku pre alergologickú ambulanciu, ktorá poskytuje pacientom všetky dôležité informácie o službách, ordinačných hodinách a možnostiach objednania. Stránka je navrhnutá s dôrazom na jednoduchosť, prehľadnosť a rýchlu navigáciu. Okrem vývoja som sa podieľal aj na tvorbe dizajnu a vytvoril unikátne logo, ktoré odráža profesionálny a priateľský charakter ambulancie.",
    description_EN:
      "I developed a modern and responsive website for an allergy clinic, providing patients with essential information about services, working hours, and appointment options. The website is designed with a focus on simplicity, clarity, and fast navigation. In addition to development, I also designed the overall visual concept and created a unique logo that reflects the professional and friendly character of the clinic.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Tailwind", icon: tailwindcssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Next", icon: nextjsicon },
      { name: "React", icon: reacticon },
      { name: "Typescript", icon: typescripticon },
    ],
    image: lekia,
    deploymenturl: "https://lekia.sk/",
    githuburl: "https://github.com/Edd224/my-doctor-website",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Deutschsprachereise",
    description:
      "Tento projekt je profesionálna prezentačná webstránka zameraná na poskytovanie online kurzov nemeckého jazyka pre jednotlivcov aj firmy. Okrem vzdelávacích služieb ponúka odborné preklady a editorskú činnosť. Webstránka bola navrhnutá s dôrazom na moderný a prehľadný dizajn, ktorý som vytvoril vrátane loga. Implementoval som aj prepojenie na SendGrid a Email.js pre efektívnu e-mailovú komunikáciu s klientmi.",
    description_EN:
      "This project is a professional presentation website focused on providing online German language courses for individuals and businesses. In addition to educational services, it offers professional translations and editorial work. The website was designed with a modern and intuitive layout, which I created, including the logo. I also integrated SendGrid and Email.js to ensure efficient email communication with clients.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Tailwind", icon: tailwindcssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Next", icon: nextjsicon },
      { name: "React", icon: reacticon },
      { name: "Typescript", icon: typescripticon },
      { name: "SandGrid", icon: sandGrid },
    ],
    image: Deu,
    deploymenturl: "https://deutschsprachereise.sk/",
    githuburl: "https://github.com/Edd224/deutschsprachereise1",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Accute eshop",
    description:
      "Tento projekt je jednostránkový e-shop zameraný na predaj produktov( oblečenia). Bol navrhnutý s dôrazom na moderný dizajn, jednoduchú navigáciu a optimálny používateľský zážitok. Celý dizajn som vytvoril ja s cieľom dosiahnuť čistý a profesionálny vzhľad.",

    description_EN:
      "This project is a one-page e-commerce store focused products. It was designed with a modern look, easy navigation, and an optimized user experience. I created the entire design myself to ensure a clean and professional appearance.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "Tailwind", icon: tailwindcssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: reacticon },
      { name: "Typescript", icon: typescripticon },
      { name: "jwt-decode", icon: jwt },
      { name: "Redux", icon: redux },
    ],
    image: accute,
    deploymenturl: "https://accute-shop.netlify.app/",
    githuburl: "https://github.com/Edd224/accute",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },



] as const;

export const liveTickerData = {
  content: {
    sk: "Ďalšie projekty na Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "MERN ",
        hash: "#Mern",
        icon: mernicon,
        color: "#4a4a4a",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      {
        title: "Figma",
        hash: "#Figma",
        icon: figmaicon,
        color: "#F24E1E"
      },
      {
        title: "Adobe Photoshop",
        hash: "#Adobe Photoshop",
        icon: adobePhotoshoicon,
        color: "#31A8FF",
      },
      {
        title: "Adobe Illustrator",
        hash: "#Adobe Illustrator",
        icon: adobeillustratoricon,
        color: "#FF9A00",
      },
      {
        title: "Adobe Dimension",
        hash: "#Adobe Dimension",
        icon: adobedimensionicon,
        color: "#99E83F",
      },
      {
        title: "Canva",
        hash: "#Canva",
        icon: canvaicon,
        color: "#00C4CC"
      },
    ],
  },
] as const;

// export const skillsDataCMS = [
//   {
//     skillsTitle: "CMS",
//     skills: [
//       {
//         title: "WordPress",
//         hash: "#WordPress",
//         icon: wordpressicon,
//         color: "#21759B",
//       },
//       {
//         title: "Shopify",
//         hash: "#Shopify",
//         icon: shopifyicon,
//         color: "#7AB55C",
//       },
//       {
//         title: "Webflow",
//         hash: "#Webflow",
//         icon: webflowicon,
//         color: "#4353FF",
//       },
//     ],
//   },
// ] as const;

export const navLinks = [
  { sk: "Domov", en: "Home", hash: "#home", icon: GoHome },
  { sk: "Zručnosti", en: "Skills", hash: "#skills", icon: GoStack },
  { sk: "Projekty", en: "Projects", hash: "#projects", icon: GoProject },
  { sk: "O mne", en: "About me", hash: "#about-me", icon: GoPerson },
  { sk: "Galéria", en: "Gallery", hash: "#gallery", icon: GoFileMedia },
  { sk: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { sk: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { sk: "Ochrana osobných údajov", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:eduard.herakk@gmail.com",
  text: "eduard.herakk@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/eduard-herak/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/Edd224?tab=repositories",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:eduard.herakk@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    sk: '"Nie je vôbec dôležité, aby sa to podarilo na prvýkrát. Je nevyhnutné, aby sa to podarilo na posledný krát."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    sk: '"Web je ako plátno a kód je farba. Vytvor svoje majstrovské dielo."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "O mne",
  title_EN: "About me",
  description: "Niekoľko kompomentov o mne",
  description_EN: "A few code snippets about me",
  paragraphs_SK: [
    {
      title: "Obvody môjho srdca",
      description:
        "Keď nie som vo virtuálnom svete, skúmam fascinujúci svet technológie a hardvéru. Obvody a spoje sú pre mňa ako kúsky puzzle v napínavom dobrodružstve.",
      icon: hardwareicon,
    },
    {
      title: "Na rýchlej dráhe života",
      description:
        "Okrem kódovania sa venujem najmä svojej rodine ktorú nadovšetko milujem.",
      icon: caricon,
    },
    {
      title: "Radosť z objavovania ako životné motto",
      description:
        "Moja cesta ako webového vývojára je len časťou mojej životnej cesty. Žijem podľa motta, že dobrodružstvo sa začína, keď opustíte známe. Objavovanie nových miest je pre mňa forma kreatívnej inšpirácie.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "When not navigating the digital world, I explore the fascinating realm of technology and hardware. Circuits and solder joints are like puzzle pieces to me in an exciting adventure.",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars and enjoying being on unknown roads with powerful machines are my passions.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const galleryData = {
  title: "Galéria",
  title_EN: "Gallery",
  description: "Moje grafické práce",
  description_EN: "My graphic works",
}

export const contactData = {
  title: {
    sk: "Kontakt",
    en: "Contact",
  },
  description: {
    sk: "Napíš mi správu, a ja sa ti ozvem.",
    en: "Write me a message, and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        sk: "Tvoje meno",
        en: "Your Name",
      },
      type: "text",
      validation: {
        sk: "Prosím, zadajte svoje meno",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        sk: "Tvoja e-mailová adresa",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        sk: "Prosím, zadajte svoj email",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        sk: "Predmet tvojej správy",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        sk: "Prosím, zadajte predmet",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      sk: "Tvoja správa",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      sk: "Prosím, zadajte svoju správu",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      sk: "Odoslať",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      sk: "Súhlasím, že Edi môže použiť moje osobné údaje (meno a e-mailovú adresu) na kontaktovanie.",
      en: "I agree that Edi may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      sk: "Odoslaním tejto žiadosti potvrdzujete, že ste si prečítali zásady ochrany osobných údajov",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    sk: "🦄 Živá ukážka sa čoskoro otvorí. Spúšťajú sa servery...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    sk: "🦄 Ďakujem za tvoju email. Ozvem sa ti čo najskôr.",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    sk: "🦄 Žiaľ, odoslanie tvojej emailu sa nepodarilo. Skúste to prosím neskôr",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    sk: "Prosím, zadajte svoje meno",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    sk: "SK",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};


