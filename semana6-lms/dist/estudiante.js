"use strict";
function redondear(valor) {
    return Math.round(valor * 100) / 100;
}
class Estudiante {
    constructor(nombre, creditos) {
        this.nombre = nombre;
        this.creditos = creditos;
    }
    estado() {
        if (this.creditos < 1 || this.creditos > 24) {
            return "Créditos inválidos";
        }
        else if (this.creditos >= 12) {
            return "Matriculado";
        }
        else {
            return "Pendiente";
        }
    }
}
const estudiantes = [
    new Estudiante("María Torres", 18),
    new Estudiante("Luis Pérez", 8),
    new Estudiante("Ana Ruiz", 14)
];
console.log("=== Mini-LMS (Node + TypeScript) ===");
estudiantes.forEach((e) => {
    console.log(`${e.nombre} -> ${e.estado()}`);
});
const matriculados = estudiantes.filter((e) => e.creditos >= 12).length;
console.log("Matriculados:", matriculados);
console.log("Promedio de créditos:", redondear(estudiantes.reduce((suma, e) => suma + e.creditos, 0) / estudiantes.length));
