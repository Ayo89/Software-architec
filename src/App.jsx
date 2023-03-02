import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='header'>
      
        <h1>Software Architec</h1>
      </div>

      <p>El puesto de Arquitecto de Software es complejo, conlleva asumir la responsabilidad de diseñar y ejecutar soluciones de software según las instrucciones específicas de la empresa o del cliente. Es un puesto que a menudo combina las disciplinas necesarias en todas las etapas del desarrollo e implementación del software. Requiere un conocimiento experto del ciclo de vida de las aplicaciones de software.  </p>






      <h2>Funciones y Responsabilidades - ¿Que hace un arquitecto de software?</h2>
      <h3>El Arquitecto de Software tiene varias responsabilidades clave, entre ellas:</h3> 
  <ul>
        <li><p><strong>Identificar soluciones de software</strong> que beneficien al usuario final.</p></li>
        <li><p><strong>Encargarse de los proyectos de desarrollo de software </strong>y comunicar los avances a la dirección de la compañía.</p></li>
        <li><p><strong>Fomentar el talento dentro del equipo de software</strong> y establecer una cultura de mejora continua.</p></li>
        <li> <p><strong>Ofrecer soporte de tickets a las distintas partes implicadas </strong>y registrar todas las etapas de desarrollo del software.</p></li>
        <li><p><strong>Examinar y comprobar el código del proyecto</strong> y realizar tareas de corrección de posibles errores.</p></li>
        <li><p><strong>Trabajar con herramientas y tecnologías adecuadas </strong>para mejorar los sistemas y procesos.</p></li>
        <li><p><strong>Asegurarse de no sobrepasar el presupuesto y las limitaciones temporales </strong>sin que ello conlleve dejar de lograr los resultados deseados. </p></li>
   </ul>

  <h2>¿Como convertirse Arquitecto de software?</h2>
    <ol>
        <li>Convertirse en un experto programador de aplicaciones dominando varios lenguajes de programación de backend y frontend, aplicaciones y servicios junto a toda la tecnología de frontend (JavaScript, TypeScript, HTML, CSS, Node.js, etc, etc, etc.) adicional al uso de las herramientas de procesos de desarrollo (control de fuentes, compilación, despliegue, pruebas unitarias y automatizadas, etc.).</li>
        <li>Además, un arquitecto debe tener profundo conocimiento de temas de seguridad, diseño de aplicaciones seguro y cumplimiento de normas de seguridad, privacidad y protección de datos.</li>
        <li>Mecanismos de almacenamiento y obtención de información, bases de datos relacionales y NoSQL, diseño de estructuras de datos tanto operacionales como para reportes y BI.</li>
        <li>Mecanismos y procesos de integración de datos y sistemas, bases de datos, colas, servicios, archivos, etc. Conceptos de integración (tiempo real, casi-tiempo real, integridad de datos, etc.).</li>
        <li>Temas de infraestructura como cuando usar servicios en la nube y cuando no, autenticación y autorización de usuarios, diseño de redes y almacenamiento. Todo lo relacionado con alta disponibilidad es también un apartado sumamente importante.</li>
        <li>Patrones de diseño e implementación para evaluar y permitir la adecuada escalabilidad de las soluciones diseñadas, con los costos y limitaciones aceptables.</li>
       </ol>



    </div>
      
  )
}

export default App
