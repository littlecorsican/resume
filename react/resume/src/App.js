import logo from './logo.svg';
import './App.css';
import { useRef, useEffect } from 'react';
import Company from './components/company';
import Education from './components/education';
import Skills from './components/skills';
import ReactPDF, { PDFViewer , PDFDownloadLink, Svg,Link, Line, Page, Text, Image, View, Document, StyleSheet } from '@react-pdf/renderer';
import { contactStyles } from './styles/contact';
import { workStyles } from './styles/work';

function Pdf() {

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      display: "flex",
      justifyContent: "flex-start"
    },
    section: {
      marginLeft: 50,
      paddingLeft: 5,
      marginBottom: 5,
    }
  });

  return (
    <Document>
      <Page size="A4" orientation='portrait' style={styles.page}>
        <View style={styles.section}>
          <Text >
            Chan Yu-Xiang
          </Text>
        </View>
        <View style={contactStyles.contactWrapper}>
          <View style={contactStyles.contactItem}>
            <Image src="/email.png" style={contactStyles.contactImage} />
            <Link src="mailto:chanyuxiang6@gmail.com">chanyuxiang6@gmail.com</Link>
          </View>
          <View style={contactStyles.contactItem}>
            <Image src="/email.png" style={contactStyles.contactImage} />
            <Text>(+60) 1136429814</Text>
          </View>
          <View style={contactStyles.contactItem}>
            <Image src="/email.png" style={contactStyles.contactImage} />
            <Text>Malaysia</Text>
          </View>
        </View>
        <View style={contactStyles.contactLink}>
          <Image src="/linkedin.png" style={contactStyles.contactImage} />
          <Link src="https://www.linkedin.com/in/yuxiang-c-054aba92/">https://www.linkedin.com/in/yuxiang-c-054aba92/</Link>
        </View>
        <View style={contactStyles.contactLink}>
          <Image src="/github.png" style={contactStyles.contactImage} />
          <Link src="https://yxchansnsoft.github.io/">https://yxchansnsoft.github.io/</Link>
        </View>
        <View style={contactStyles.contactLink}>
          <Image src="/language.png" style={contactStyles.contactImage} />
          <Text >English, Malay, Mandarin</Text>
        </View>

        <View style={workStyles.workWrapper}>
          <Text style={workStyles.headerText}>
            WORK EXPERIENCE
          </Text>
          <Svg style={{ width: 500, height: 20 }}>
            <Line x1="50" y1="0" x2="500" y2="0" stroke="#000" strokeWidth="1" />
          </Svg>
          </View>
            <Text className="mx-12 py-4 text-lg border-b-2 border-black text-3xl">
              <b>Work Experience</b>
            </Text>
            <Company
              name="Govtech Nukleus Unit"
              period="September. 2024 – Present"
              title="Medior Full Stack Engineer"
              location="Kuala Lumpur, Malaysia"
              responsibilities={[
                "Built link shortener from ground up in just 3 months.",
                "Set up its end to end infrastructure using terraform, kubernetes, github actions and dockers to scale for millions of users.",
                "Take initiative to improve the ci/cd pipeline to streamline deployment operations.",
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
            
      </Page>
    </Document>
  );
}

const App = () => (
  // <div>
  //   <PDFDownloadLink document={<Pdf />} fileName="resume.pdf">
  //     {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
      
  //   </PDFDownloadLink>
  // </div>
  <PDFViewer width="100%" height="600">
    <Pdf />
  </PDFViewer>
);

export default App;



