"use strict";
// Mini-LMS · Semana 6 - Sesión 11
console.log("Hola desde Node.js");
// Variables tipadas
let nombre = "María Torres";
let creditos = 18;
let activo = true;
console.log(nombre, creditos, activo);
// Función tipada
function saludar(persona) {
    return "Bienvenido/a, " + persona;
}
console.log(saludar(nombre));
const curso = { nombre: "JavaScript Avanzado", creditos: 3 };
console.log(`Curso: ${curso.nombre} (${curso.creditos} créditos)`);
