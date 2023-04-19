
import { useEffect } from 'react';
import './App.css';

const Content={
  "Interest":"I am writing to express my interest in ReactJS entry-level developer position at Atlassoftweb.Pvt.Ltd. As a highly motivated and skilled MERN developer with strong understanding of web development concepts. I am confident I possess the necessary qualifications to excel in this role.",
  "myexperience":"With my experience in HTML, CSS, JavaScript, React, Redux, Node.JS, MongoDB, Express, TypeScript, Testing, React-Router-Dom, and Chakra UI library. I am well-equipped to collaborate with  your experienced development team and develop, test, maintain, craft awesome user interfaces and innovative web applications using ReactJS. Additionally, my ability to write clean, reusable, and efficient code, troubleshoot and debugg issues that arise in production environment, and stay up-to-date with latest trends and best practices in ReactJS will enable me to make valuable contributions to your team.",
  "belief":"As someone who believes in 3P’s- People, Projects, and Process, I am thrilled at the oppurtunity to work with a leading provider of top-notch mobile app and web development services that share this people centric web designing belief. I am also excited about the prospects of learning from customer feedback and working with  top brands and contributing to your mission of providing affordable and innovative solutions.",
  "confident":"With strong problem-solving skills, attention to detail, and excellent communication and collaboration skills, I am confident that I can thrive in fast-faced, dynamic work environment and positively impact your team.",
  "Thankyou":"Thank you for considering my application. I look forward to discussing my qualifications in more detail during an interview."
}

const {Interest,myexperience,belief,confident,Thankyou}=Content;

function App() {
  useEffect(()=>{
    document.title="CoverLetter";
  },[])
  return (
    <div className="App">
        <h1>Mohan M</h1>
        <address>
          <div>
            <p>Shrijitha Basu Dhar </p>
            <p>Human Resource Manager  </p>
            <p>Atlassoftweb. Pvt.Ltd   </p>
          </div>
          <div>
            <p>+91-9008510595</p>
            <p>mohananna501@gmail.com</p>
            <p>Bangalore,Karnataka</p>
          </div>
        </address>
        <p>20/04/2023</p>
        <p>ReactJS Developer Role</p>
        <article>
          {Interest}
        </article>
        <article>
          {myexperience}
        </article>
        <article>
          {belief}
        </article>
        <article>
          {confident}
        </article>
        <article>
          {Thankyou}
        </article>
        <p>Sincerely,</p>
        <p>Mohan M. </p>
    </div>
  );
}

export default App;
