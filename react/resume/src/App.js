import logo from './logo.svg';
import './App.css';
import generatePDF , { Resolution, Margin } from 'react-to-pdf';
import { useRef, useEffect } from 'react';
import Company from './components/company';
import Education from './components/education';
import Skills from './components/skills';


function App() {
  const targetRef = useRef();
  let generatefile = false

  const options = {
    // default is `save`
    method: 'open',
    // default is Resolution.MEDIUM = 3, which should be enough, higher values
    // increases the image quality but also the size of the PDF, so be careful
    // using values higher than 10 when having multiple pages generated, it
    // might cause the page to crash or hang.
    resolution: Resolution.HIGH,
    page: {
       // margin is in MM, default is Margin.NONE = 0
       margin: Margin.SMALL,
       // default is 'A4'
       format: 'letter',
       // default is 'portrait'
       orientation: 'portrait',
    },
    canvas: {
       // default is 'image/jpeg' for better size performance
       mimeType: 'image/png',
       qualityRatio: 1
    },
    // Customize any value passed to the jsPDF instance and html2canvas
    // function. You probably will not need this and things can break, 
    // so use with caution.
    overrides: {
       // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
       pdf: {
          compress: true
       },
       // see https://html2canvas.hertzen.com/configuration for more options
       canvas: {
          useCORS: true
       }
    },
    filename: 'react_generated_resume.pdf'
  };

  // useEffect(()=>{
  //   if (!generatefile) {
  //     console.log("generate file")
  //     generatePDF(targetRef, {filename: 'react_generated_resume.pdf'})
  //     generatefile = true
  //   }
    
  // }, [])
  
  return (
    <div className="" ref={targetRef}>
      <div className="px-12 my-4 py-4 text-6xl font-sans font-bold">
        Chan Yu-Xiang
      </div>
      <div className="px-12 py-2 text-2xl flex flex-row gap-3 items-baseline text-3xl">
        <img src="/email.webp" className="w-[20px] h-[20px]" />
        <a href="mailto:chanyuxiang6@gmail.com" className="text-3xl">chanyuxiang6@gmail.com</a>
      </div>
      <div className="px-12 py-1 text-lg flex flex-row gap-3 items-baseline">
        <img src="/linkedin.png" className="w-[20px] h-[20px]" />
        <a href="https://www.linkedin.com/in/yuxiang-c-054aba92/" className="text-3xl">https://www.linkedin.com/in/yuxiang-c-054aba92/</a>
      </div>
      <div className="px-12 py-1 text-lg flex flex-row gap-3 items-baseline">
        <img src="/github.webp" className="w-[20px] h-[20px]" />
        <a href="https://yxchansnsoft.github.io/" className="text-3xl">https://yxchansnsoft.github.io/</a>
      </div>
      <div className="px-12 py-1 text-lg flex flex-row gap-3 items-baseline text-3xl">
        <img src="/language.webp" className="w-[20px] h-[20px]" />
        Kuala Lumpur, Malaysia
      </div>

      <div className="mx-12 py-4 text-lg border-b-2 border-black text-3xl">
        <b>Work Experience</b>
      </div>
      <Company
        name="Govtech Nukleus Unit"
        period="September. 2024 – Present"
        title="Medior Full Stack Engineer"
        location="Kuala Lumpur, Malaysia"
        responsibilities={[
          "Built link shortener from ground up and set up its end to end infrastructure to scale for millions of users in just 3 months",
          "Stack used: NextJs, Tailwind, Golang, Kafka, ElasticSearch, AWS, Jaeger, Prometheus, Grafana"
        ]}
      />
      <Company
        name="ExxonMobil"
        period="Apr. 2022 – September 2024"
        title="Mid level Full Stack Developer"
        location="Kuala Lumpur, Malaysia"
        responsibilities={[
          "Strengthen cyber security by implementing oAuth authentication between different backend applications.",
          "Migrated applications from on prem IIS to AWS openshift, reducing server downtime and maintenance costs.",
          "Created automated collection of logs and displaying them on datadog monitoring dashboard, saving an average of 160 hours annually of manual work.",
          "Horizontally scaled databases using sql replication with a single source of truth that are spread across each continent worldwide, reducing latency below 150ms.",
          "Created an emergency switch that will shut down network wide access to critical resources in an event of cyber intrusion to protect the company's intellectual property.",
          "Stack used: Javascript, Python, React, Fastapi, Flask, Microsoft SQL, Powershell, on prem hosting, windows IIS, openshift, ansible, Datadog"
        ]}
      />

      <Company
        name="BlueCrystal App Play"
        period="April 2023 – Dec 2023"
        title="Software Engineer"
        location="Fully Remote/Freelance"
        responsibilities={[
          "Built a tour booking company website for Cahaya Nur sdn bhd from the ground up.",
          "Participated in building a real time real estate management system with a multi level marketing bonus scheme for real estate companies to manage their downlines and their assets.",
          "Stack: Vercel, Javascript, NextJs, Tailwind, Vercel, Sequelize, react-hook form, chart js, React Query",
          "https://www.kakijalan.com, https://www.2290travel.com"
        ]}
      />

      <Company
        name="Gamma Interactive Inc"
        period="Sept 2020 – April 2022"
        title="Front end web developer"
        location="Fully Remote"
        responsibilities={[
          "Built the UI of gaming websites based on figma. Achieved KPI of above 4/5 2 years in a row.",
          "Stack: Javascript, NextJs, Antd, Webpack"
        ]}
      />

      <Company
        name="Madx Radicle Sdn Bhd"
        period="Feb 2020– Sept 2020"
        title="PHP programmer"
        location="Selangor/Malaysia"
        responsibilities={[
          "Develop new web applications that follow the specified technical requirement and business logic.",
          "Stack: Javascript, PHP, in house MVC framework, Jquery, Postgres Sql, CPanel"
        ]}
      />

      <div className="mx-12 py-4 text-lg border-b-2 border-black text-3xl">
        <b>Education</b>
      </div>

      <Education
        institute="University of East London"
        period="Graduation June, 2014"
        location="London, United Kingdom"
        degree="Bachelor in Biochemistry"
      />

      <Education
        institute="Tunku Abdul Rahman College"
        period="Graduation March, 2012"
        location="Kuala Lumpur, Malaysia"
        degree="Diploma of Science (Biology and Chemistry)"
      />

      <div className="mx-12 py-4 text-lg border-b-2 border-black text-3xl">
        <b>Skills</b>
      </div>

       <Skills/> 
       
    </div>
  );
}

export default App;



