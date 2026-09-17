interface Persona {
  nombre: string;
  creditos: number;
}

function redondear(valor: number): number {
  return Math.round(valor * 100) / 100;
}

class Estudiante implements Persona {
  nombre: string;
  creditos: number;

  constructor(nombre: string, creditos: number) {
    this.nombre = nombre;
    this.creditos = creditos;
  }

  estado(): string {
    if (this.creditos < 1 || this.creditos > 24) {
      return "Créditos inválidos";
    } else if (this.creditos >= 12) {
      return "Matriculado";
    } else {
      return "Pendiente";
    }
  }
}

const estudiantes: Estudiante[] = [
  new Estudiante("María Torres", 18),
  new Estudiante("Luis Pérez", 8),
  new Estudiante("Ana Ruiz", 14)
];

console.log("=== Mini-LMS (Node + TypeScript) ===");
estudiantes.forEach((e: Estudiante): void => {
  console.log(`${e.nombre} -> ${e.estado()}`);
});

const matriculados: number = estudiantes.filter((e) => e.creditos >= 12).length;
console.log("Matriculados:", matriculados);
console.log("Promedio de créditos:", redondear(
  estudiantes.reduce((suma, e) => suma + e.creditos, 0) / estudiantes.length
));