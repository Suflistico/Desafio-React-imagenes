/* App.js */

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import Footer from "./components/Footer/Footer";
function App() {
    return (
    <div>
        <header title="Galeria de Imagenes con React"/>;  

        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://vevico.files.wordpress.com/2021/07/1.jpg"/>
        <Card.Body>
        <Card.Title>Martin Pescador</Card.Title>
        <Card.Text>Ave</Card.Text>
        </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO3jpj0HtqM61Mq97AYHhXv99lNpoEN8SDTQ&usqp=CAU"/>
        <Card.Body>
        <Card.Title>Tigre</Card.Title>
        <Card.Text>Carnivoro</Card.Text>
        </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://d1iibezb83drel.cloudfront.net/wp-content/uploads/2021/07/bebe-elefante.webp"/>
        <Card.Body>
        <Card.Title>Elefante Bebe</Card.Title>
        <Card.Text>Paquidermo</Card.Text>
        </Card.Body>
        </Card>
        <Footer/>
    </div>
    );
}
export default App;