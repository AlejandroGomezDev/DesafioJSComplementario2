//crear un array que contenga la cantidad de goles que tiene Messi en el PSG, y que cada gol sea un objeto con la informacion de cada gol.

class Goles{
    constructor(fecha, oponente, marcador, resultado, competicion){
        this.fecha = fecha,
        this.oponente = oponente,
        this.marcador = marcador,
        this.resultado = resultado,
        this.competicion = competicion
    }
}

const cantidadGoles = []

const gol1 = new Goles("28/09/2021", "Manchester City", "2-0", "2-2", "UCL Grupos")
cantidadGoles.push(gol1)
const gol2 = new Goles("19/10/2021", "Leipzig", "2-2", "3-2", "UCL Grupos")
cantidadGoles.push(gol2)
const gol3 = new Goles("19/10/2021", "Leipzig", "3-2", "3-2", "UCL Grupos")
cantidadGoles.push(gol3)
const gol4 = new Goles("20/11/2021", "Nantes", "3-1", "3-1", "Ligue 1")
cantidadGoles.push(gol4)
const gol5 = new Goles("07/12/2021", "Brujas FC", "3-0", "4-1", "UFC Grupos")
cantidadGoles.push(gol5)
const gol6 = new Goles("07/12/2021", "Brujas FC", "4-1", "4-1", "UFC Grupos")
cantidadGoles.push(gol6)
const gol7 = new Goles("06/02/2022", "LOSC", "3-1", "5-1", "Ligue 1")
cantidadGoles.push(gol7)
const gol8 = new Goles("03/04/2022", "Lorient", "4-1", "5-1", "Ligue 1")
cantidadGoles.push(gol8)
const gol9 = new Goles("23/04/2022", "Lens", "1-0", "1-1", "Ligue 1")
cantidadGoles.push(gol9)
const gol10 = new Goles("14/05/2022", "Montpellier", "1-0", "4-0", "Ligue 1")
cantidadGoles.push(gol10)
const gol11 = new Goles("14/05/2022", "Montpellier", "2-0", "4-0", "Ligue 1")
cantidadGoles.push(gol11)
const gol12 = new Goles("31/07/2022", "Nantes", "1-0", "4-0", "SuperCopa de Francia")
cantidadGoles.push(gol12)


console.log(cantidadGoles)
console.log(`Messi tiene ${cantidadGoles.length} goles en el PSG`)