import { useState } from 'react'
import './App.css'
import { jsPDF } from 'jspdf';
import AddMovie from './components/addMovie';
import AddGrid from './components/addGrid';

function App() {
  const [lista, setLista] = useState([]);

  const addMovie = (movie) => {
    setLista([...lista, { id: Date.now(), movie }]);
  };

  const removeMovie = (id) => {
    setLista(lista.filter(item => item.id !== id));
  };

  const downloadPDF = () =>{
    const doc = new jsPDF()

    doc.setFontSize(16)
    doc.text("Movie list",10,10)

    doc.setFontSize(12)
    lista.forEach((item,index)=>{
      doc.text(`${index + 1}. ${item.movie}`, 10, 20 + index * 10);
    })

    doc.save("movie_list.pdf")
  }
  return (
    <>
      <AddMovie onAdd={addMovie} />
      <AddGrid lista={lista} onRemove={removeMovie} />

      <button onClick={downloadPDF} style={{ marginTop: "20px" }}>
        Download PDF
      </button>
    </>
  )
}

export default App;
