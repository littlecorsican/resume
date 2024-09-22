import logo from './logo.svg';
import './App.css';
import generatePDF from 'react-to-pdf';
import { useRef, useEffect } from 'react';
import Company from './components/company';
import Education from './components/education';
import Skills from './components/skills';


function App() {
  const targetRef = useRef();

  // useEffect(()=>{
  //   generatePDF(targetRef, {filename: 'resume.pdf'})
  // }, [])
  
  return (
    <div className="" ref={targetRef}>
      <div className="px-12 py-2 text-5xl">
        Chan Yu-Xiang
      </div>
      <div className="px-12 py-2 text-xl">
        gnomemage1990@gmail.com / chanyuxiang6@gmail.com
      </div>
      <div className="px-12 py-1 text-lg">
        <a href="https://www.linkedin.com/in/yuxiang-c-054aba92/">https://www.linkedin.com/in/yuxiang-c-054aba92/</a>
      </div>
      <div className="px-12 py-1 text-lg">
        <a href="https://yxchansnsoft.github.io/">https://yxchansnsoft.github.io/</a>
      </div>

      <div className="mx-12 py-1 text-lg border-b-2 border-black">
        <b>Work Experience</b>
      </div>
      <Company
        name="ExxonMobil"
        period="Apr. 2022 – Present"
        title="Full Stack Developer"
        location="Kuala Lumpur, Malaysia"
        responsibilities={[
          "Strengthen cyber security by implementing oAuth authentication between different backend applications.",
          "Migrated applications from on prem IIS to AWS openshift, reducing server downtime and maintenance costs.",
          "Created automated collection of logs and displaying them on datadog monitoring dashboard, saving an average of 160 hours annually of manual work.",
          "Horizontally scaled databases using sql replication with a single source of truth that are spread across each continent worldwide, reducing latency below 150ms.",
          "Created an emergency switch that will shut down network wide access to critical resources in an event of cyber intrusion to protect the company's intellectual property.",
          "Stack used: Javascript, Python, React, Fastapi, Flask, Microsoft SQL, Powershell, on prem hosting, windows IIS, openshift"
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

      <div className="mx-12 py-1 text-lg border-b-2 border-black">
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

      <div className="mx-12 py-1 text-lg border-b-2 border-black">
        <b>Skills</b>
      </div>

       <Skills/> 
       
    </div>
  );
}

export default App;



