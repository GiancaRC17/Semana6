// Mini-LMS · Semana 6 - Sesión 11
console.log("Hola desde Node.js");

// Variables tipadas
let nombre: string = "María Torres";
let creditos: number = 18;
let activo: boolean = true;

console.log(nombre, creditos, activo);

// Función tipada
function saludar(persona: string): string {
  return "Bienvenido/a, " + persona;
}

console.log(saludar(nombre));

// Interfaz
interface Curso {
  nombre: string;
  creditos: number;
}

const curso: Curso = { nombre: "JavaScript Avanzado", creditos: 3 };
console.log(`Curso: ${curso.nombre} (${curso.creditos} créditos)`);
export {};