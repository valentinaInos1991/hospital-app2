*Aplicación REACT Hospital Cordis*
------------------------------------------------
* Ejercicio Práctico 1- Módulo 5 (Consumo de Apis en el proyecto del hospital)
¿Por qué elegí Axios?
He elegido Axios para realizar las peticiones a la API debido a las siguientes razones:

*Simplicidad y Eficiencia:*
Axios ofrece una sintaxis clara y fácil de usar, lo que permite realizar peticiones HTTP con menos esfuerzo y un código más legible en comparación con fetch.

*Compatibilidad con Promesas y Async/Await:*
Soporta de forma nativa promesas, lo que lo hace perfecto para trabajar con async/await, mejorando la legibilidad y manejabilidad del código asíncrono.

*Manejo de Errores Integrado:*
Axios facilita el manejo de errores ya que incluye herramientas para detectar rápidamente fallos en las peticiones o respuestas sin la necesidad de comprobar manualmente el estado HTTP.

*Soporte para Configuración Global:*
Permite establecer configuraciones globales, como la URL base de la API o encabezados comunes, optimizando el manejo de múltiples peticiones.

*Transformación Automática de Datos:*
Axios transforma automáticamente los datos enviados y recibidos en formato JSON, reduciendo la necesidad de configuraciones adicionales.

*Cancelación de Peticiones:*
Proporciona soporte para cancelar peticiones en curso, lo cual es útil en aplicaciones con componentes dinámicos o dependientes de estados.

* Ejercicio Práctico 2
1. Manejo del DOM virtual en ReactJs
En el componente DoctorList se implementó una sección donde se gestiona eficientemente el uso del DOM Virtual con un listado de doctores en donde se actualiza solo si se agrega un doctor nuevo y no se vuelven a cargar los que ya estaban agregados, haciendo más eficiente la renderización de los datos.

2. Explica cómo ReactJS utiliza el DOM virtual para mejorar el rendimiento de la interfaz del hospital (secciones como listado de doctores o servicios).
Por ejemplo en un listado de doctores que se actualiza al cargar nuevos datos. Si trabajáramos directamente con el DOM, cada vez que llega un doctor nuevo:
*Reactualizaríamos toda la lista, incluso los elementos que no han cambiado.*
*Esto causaría un retraso visual notable, especialmente en listas grandes.*
Con el DOM Virtual:
* React detecta qué doctor nuevo debe ser agregado al DOM.
* Solo actualiza ese elemento específico.
* Esto reduce el tiempo de re-renderizado, haciendo la interfaz más rápida y fluida.

2. Implementa componentDidMount o el uso de useEffect para gestionar la actualización del DOM al cargar los datos.
En el component DoctorList se usó useEffect para gestionar la actualización del DOM al cargar los datos de la lista de doctores.


1. Manejo de Estado con useState
Se utilizó el hook useState para manejar el estado local del formulario, como el nombre del paciente, la fecha de la cita y el doctor seleccionado.
El estado inicial se establece utilizando un objeto formData que contiene las propiedades:
nombre: Representa el nombre del paciente.
fecha: La fecha seleccionada para la cita.
doctor: El doctor seleccionado inicialmente o ingresado en el formulario.

2. Uso de Props para Valores Dinámicos
El formulario recibe el nombre del doctor como una prop (doctorInicial) desde un componente padre.
Esto permite que el formulario sea reutilizable y que pueda precargar un doctor seleccionado en otra parte de la aplicación.
El valor recibido se establece como estado inicial en el campo "Doctor".

3. Sincronización de Props con useEffect
Para garantizar que el formulario se actualice si el doctor seleccionado cambia en el componente principal, se utilizó el hook useEffect.
Cada vez que la prop doctorInicial cambia, el estado del formulario se sincroniza.

4. Manejo de Eventos en los Inputs
El formulario utiliza la función handleChange para actualizar el estado a medida que el usuario interactúa con los campos del formulario.
Se usa el atributo name en cada <input> para identificar qué campo está siendo modificado y actualizar su valor en el estado.

5. Envío del Formulario
Al enviar el formulario con handleSubmit, se evita el comportamiento predeterminado del navegador utilizando e.preventDefault().
Luego, los datos ingresados se muestran en la consola y se muestra un mensaje de confirmación al usuario con alert.

6. Estructura JSX del Formulario
La interfaz visual se creó utilizando JSX. Cada <label> contiene un <input> correspondiente, y los valores son controlados mediante el estado.
El formulario incluye:
Campo para el Nombre del Paciente (input tipo texto).
Campo para la Fecha de la Cita (input tipo fecha).
Campo para el Doctor (input tipo texto).
Botón de Enviar que dispara el evento onSubmit.

7. Modularidad y Reutilización
El formulario AppointmentForm es un componente modular y reutilizable:
Puede ser utilizado en diferentes secciones de la aplicación.
Acepta datos iniciales mediante props para mejorar la flexibilidad y personalización.
El manejo del estado local garantiza que sea independiente y fácil de integrar con otros componentes.
