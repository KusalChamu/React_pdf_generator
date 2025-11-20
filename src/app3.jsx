import { useState } from "react";
import PersonalInfo from "./components/resumeBuilder/personalInfo";
import Project from "./components/resumeBuilder/projects";
import Skills from "./components/resumeBuilder/skills";
import ResumeGrid from "./components/resumeBuilder/addResumeGrid";
import { Document, Page, Text, View, PDFDownloadLink, StyleSheet, Font, Image } from '@react-pdf/renderer';



const pdfStyles = StyleSheet.create({
  page: { padding: 30, fontSize: 12 },
  section: { marginBottom: 20 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#2c3e50' },
  subtitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 5, color: '#34495e' },
  row: { flexDirection: 'row', marginBottom: 5 },
  col1: { flex: 1 },
  col2: { flex: 2 },
  col3: { flex: 1 },
  tableHeader: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#000', paddingBottom: 3, marginBottom: 5 },
  tableRow: { flexDirection: 'row', paddingVertical: 2 },
  tableCell1: { flex: 1, fontWeight: 'bold' },
  tableCell2: { flex: 2 },
  tableCell3: { flex: 1 },
  skillBadge: { marginRight: 8, backgroundColor: '#ecf0f1', padding: 3, borderRadius: 4 },
  profilePic: { width: 80, height: 80, borderRadius: 40, marginBottom: 15, alignSelf: 'center' },
});

function App3() {
  const [personal, setPersonal] = useState([]);
  const [project, setProject] = useState([]);
  const [skill, setSkill] = useState([]);

  // Add handlers
  const personalDetails = (name, age, address) => {
    setPersonal([...personal, { id: Date.now(), name, age: Number(age), address }]);
  };
  const addProject = (title, description, tech) => {
    setProject([...project, { id: Date.now(), title, description, tech }]);
  };
  const addSkill = (text) => {
    setSkill([...skill, { id: Date.now(), text }]);
  };

  // Remove handlers
  const removePersonal = (id) => setPersonal(personal.filter(p => p.id !== id));
  const removeProject = (id) => setProject(project.filter(p => p.id !== id));
  const removeSkill = (id) => setSkill(skill.filter(s => s.id !== id));

  // Advanced PDF Document
  const ResumePDF = (
  <Document>
    <Page style={pdfStyles.page}>

      {/* ---------------------- Personal Info ---------------------- */}
      {personal.length > 0 && (
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.title}>Personal Information</Text>

          {personal.map(p => (
            <View key={p.id} style={pdfStyles.row}>
              <Text style={pdfStyles.col1}>{p.name}</Text>
              <Text style={pdfStyles.col2}>Age: {p.age}</Text>
              <Text style={pdfStyles.col3}>{p.address}</Text>
            </View>
          ))}
        </View>
      )}

      {/* ---------------------- Projects ---------------------- */}
      {project.length > 0 && (
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.title}>Projects</Text>

          {/* Table Header */}
          <View style={pdfStyles.tableHeader}>
            <Text style={pdfStyles.tableCell1}>Title</Text>
            <Text style={pdfStyles.tableCell2}>Description</Text>
            <Text style={pdfStyles.tableCell3}>Tech</Text>
          </View>

          {/* Table Rows */}
          {project.map(p => (
            <View key={p.id} style={pdfStyles.tableRow}>
              <Text style={pdfStyles.tableCell1}>{p.title}</Text>
              <Text style={pdfStyles.tableCell2}>{p.description}</Text>
              <Text style={pdfStyles.tableCell3}>{p.tech}</Text>
            </View>
          ))}
        </View>
      )}

      {/* ---------------------- Skills ---------------------- */}
      {skill.length > 0 && (
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.title}>Skills</Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {skill.map(s => (
              <Text key={s.id} style={pdfStyles.skillBadge}>
                {s.text}
              </Text>
            ))}
          </View>
        </View>
      )}

    </Page>
  </Document>
);


  return (
    <div>
      <PersonalInfo onAdd={personalDetails} />
      <Project onAdd1={addProject} />
      <Skills onAdd2={addSkill} />
      <ResumeGrid 
        personal={personal} 
        project={project} 
        skill={skill} 
        onRemove={removePersonal} 
        onRemove1={removeProject} 
        onRemoveSkill={removeSkill} 
      />

      <div className="mt-6">
        <PDFDownloadLink document={ResumePDF} fileName="resume.pdf">
          {({ loading }) => (loading ? "Loading PDF..." : "Download Resume PDF")}
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default App3;
