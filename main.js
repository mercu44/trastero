

(function() {
    emailjs.init("X7fgIhAQpsQZKfIr3"); // Reemplaza "TU_USER_ID" con tu User ID de EmailJS
})();
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío predeterminado del formulario

    // Captura los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const consulta = document.getElementById("consulta").value;

    // Configura los parámetros para EmailJS
    const serviceID = "service_13cd9vj"; // Reemplaza con tu Service ID de EmailJS
    const templateID = "template_vu2kz87"; // Reemplaza con tu Template ID de EmailJS

    // Envía el correo usando EmailJS
    emailjs.send(serviceID, templateID, {
        nombre: nombre,
        correo: correo,
        consulta: consulta
    }).then(
        function(response) {
            alert("Correo enviado con éxito.");
            console.log("SUCCESS!", response.status, response.text);
        },
        function(error) {
            alert("Error al enviar el correo.");
            console.error("FAILED...", error);
        }
    );
});
