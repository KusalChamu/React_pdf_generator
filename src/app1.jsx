import { Page, PDFDownloadLink, StyleSheet, View } from "@react-pdf/renderer"


const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section :{
        margin:10,
        padding:10,
        flexGrow:1
    }
    
})

const myDocument =()=>{
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text>#section 1</Text>
            </View>
            <View style={styles.section}>
                <Text>#section 2</Text>
            </View>
        </Page>
    </Document>
}




function App1(){
    return(
        <div>
            <PDFDownloadLink document={<myDocument />} fileName="example.pdf">
            {({loading})=>(loading? "loading document":"download pdf")}
            </PDFDownloadLink>
        </div>
    )
}

export default App1 