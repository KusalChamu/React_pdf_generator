import { useState } from "react";
import PersonalInfo from "./components/resumeBuilder/personalInfo";
import Project from "./components/resumeBuilder/projects";
import Skills from "./components/resumeBuilder/skills";
import ResumeGrid from "./components/resumeBuilder/addResumeGrid";
import { StyleSheet } from "@react-pdf/renderer";
import { Document, Page, Text, View, PDFDownloadLink } from '@react-pdf/renderer';

const pdfStyles = StyleSheet.create({
  page: { padding: 20, fontSize: 12 },
  section: { marginBottom: 10 },
  title: { fontSize: 18, marginBottom: 10 },
  listItem: { marginBottom: 5 },
});



function App3(){

    const [personal,setPersonal] = useState([])
    const [project,setProject] = useState([])
    const [skill,setSkill] = useState([])


    const personalDetails = (a,b,c) => {
        setPersonal([...personal,{id:Date.now(),name:a,age:Number(b),address:c}])
    }
    const skills = (text) =>{
        setSkill([...skill,{id:Date.now(),text}])
    }
    const projects = (d,e,f) => {
        setProject([...project,{id:Date.now(),title:d,description:e,tech:f}])
    }
    const removeProduct = (id)=>{
        setPersonal(personal.filter(item => item.id !== id))
    }
    const removeProject = (id) => {
        setProject(project.filter(item=>item.id !== id))
    }
    const removeSkill = (id) => {
        setSkill(skill.filter(item => item.id !== id));
     };

    const ResumePDF = (
  <Document>
    <Page style={pdfStyles.page}>
      <View style={pdfStyles.section}>
        <Text style={pdfStyles.title}>Personal Information</Text>
        {personal.map(p => (
          <Text key={p.id} style={pdfStyles.listItem}>
            {p.name}, Age: {p.age}, Address: {p.address}
          </Text>
        ))}
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.title}>Projects</Text>
        {project.map(p => (
          <Text key={p.id} style={pdfStyles.listItem}>
            {p.title} - {p.description} ({p.tech})
          </Text>
        ))}
      </View>

      <View style={pdfStyles.section}>
        <Text style={pdfStyles.title}>Skills</Text>
        {skill.map(s => (
          <Text key={s.id} style={pdfStyles.listItem}>
            {s.text}
          </Text>
        ))}
      </View>
    </Page>
  </Document>
);

    

    return(
        <div>
            <PersonalInfo onAdd={personalDetails}></PersonalInfo>
            <Project onAdd1={projects}></Project>
            <Skills onAdd2={skills}></Skills>
            <ResumeGrid 
                personal={personal} 
                project={project} 
                skill={skill} 
                onRemove={removeProduct} 
                onRemove1={removeProject} 
                onRemoveSkill={removeSkill} 
            />


            <div className="mt-6">
                <PDFDownloadLink document={ResumePDF} fileName="resume.pdf">
                {({ loading }) => (loading ? "Loading document..." : "Download Resume PDF")}
                </PDFDownloadLink>
            </div>
        </div>
    )
    
}

export default App3;