    // 1.Diseñe un algoritmo que lea un vector de N elementos e imprima los números pares.
    function Pares(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0)
                console.log(array[i])
        }
    }

    // 2.Diseñe un algoritmo que lea una vector de N elementos e imprima los números primos.
    function Primos(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 2) {
                continue
            }
            if (array[i] % 2 != 0) {
                console.log(array[i])
            }
        }
    }

    // 3.Diseñe un algoritmo que lea una vector e imprima los números pares ubicados en posiciones impares.
    function ParPosInPar(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0 && i % 2 != 0) {
                console.log(array[i])
            }
        }
    }

    // 4.Diseñe un algoritmo que lea un vector e imprima los números que son múltiplos de su posición, en caso de no haber 
    // ninguno que lo cumpla esta condición, debe Salir un mensaje informándolo.
    function MultiplosPos(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] % i == 0) {
                console.log('El numero: ' + array[i] + ' es multiplo de la posicion: ' + i)
            } else {
                console.log('La posicion: ' + i + ' no tiene multiplos')
            }
        }
    }

    // 5. Diseñe un algoritmo que refleje el juego de concéntrese, con los números
    // del 0 al 9 donde el usuario indicara dos posiciones en una matriz, el algoritmo
    // verifica que los números en las posiciones sean iguales, en caso de serlo sumara
    // un punto, el algoritmo se repite hasta completar 10 puntos. Cada que el usuario
    // ingresa dos posiciones se debe de mostrar el valor de esas dos posiciones, se
    // ocultaran en caso de que tengan un valor diferente y quedan visibles en caso de
    // que sean iguales.

    let matriz = [
        [2, 3, 5, 1],
        [8, 6, 8, 9],
        [5, 3, 7, 10],
        [9, 2, 6, 10],
        [7, 4, 1, 4],
    ]

    let matriz2 = [
        ["?", "?", "?", "?"],
        ["?", "?", "?", "?"],
        ["?", "?", "?", "?"],
        ["?", "?", "?", "?"],
        ["?", "?", "?", "?"],
    ]
    let puntos = 0

    do {
        console.log("Concentrese")
        console.table(matriz2)
        let f1, c1, f2, c2, carta1, carta2
        let Nvalido = false
        while (Nvalido === false) {
            f1 = prompt("Ingrese la fila de la primera carta")
            c1 = prompt("Ingrese la columna de la primera carta")
            if (f1 < 0 || f1 >= matriz.length - 1 && c1 < 0 || c1 >= matriz.length - 1 && typeof f1 ==="string" || typeof c1 ==="string" ) {
                alert("La posicion de la primera carta no está dentro del concentrese o ya fue seleccionada, porfavor ingrese otra posicion")
            } else {
                Nvalido = true;
            }
        }
        Nvalido = false
        while (Nvalido === false) {
            f2 = prompt("Ingrese la fila de la segunda carta")
            c2 = prompt("Ingrese la columna de la segunda carta")
            if (f2 < 0 || f2 >= matriz.length - 1 && c2 < 0 || c2 >= matriz.length - 1 && typeof f2 ==="string" || typeof c2 ==="string") {
                alert("La posicion de la segunda carta no está dentro del concentrese, porfavor ingrese otra posicion")
            } else {
                Nvalido = true;
            }
        }
        console.clear()
        carta1 = matriz[f1][c1];
        carta2 = matriz[f2][c2];
        if (matriz2[f1][c1] == carta1 && matriz2[f2][c2] == carta2 && f2==f2 || c2==c2 && f1==f1 || c1==c1) {
            puntos--
            console.log("Las cartas elegidas ya estan descubiertas")
        }

        if (carta1 == carta2 && carta1!=carta1 && carta2!=carta2 ) {
            puntos++
            matriz2[f1][c1] = carta1
            matriz2[f2][c2] = carta2
            matriz2 = matriz2
            console.log("Felicidades, pareja encontrada")
            console.log("Cartas elegidas: ")
            console.table(matriz2)
            console.log("Tus puntos hasta el momento son: " + puntos)
        } else {
            puntos = puntos
            matriz2[f1][c1] = carta1
            matriz2[f2][c2] = carta2
            matriz2 = matriz2
            console.log("Cartas elegidas: ")
            console.table(matriz2)
            console.log("No descubriste ningun numero, sigue intentado, llevas: " + puntos + " puntos")
            alert("La pareja elegida no coinciden")
            if (f1 >= 0 && f1 < matriz.length - 1 && c1 >= 0 && c1 < matriz.length - 1 && f2 >= 0 && f2 < matriz.length - 1 && c2 >= 0 && c2 < matriz.length - 1) {
                matriz2[f1][c1] = "?"
                matriz2[f2][c2] = "?"
            }
        }

    } while (puntos < 10)
    alert("Felicidades!!, descubriste todas las parejas")

    // 6. Diseñe un algoritmo que tome dos vectores de 8 elementos y los imprima en una
    // matriz de la siguiente manera:
    // VECTOR 1                 VECTOR 2
    //  _____				    _____
    // |	 |                 |     |
    // |  1  |	    		   |  A  |
    // |_____|                 |_____|
    // |	 |                 |     |
    // |  2  |	    		   |  B  |
    // |_____|                 |_____|
    // |	 |                 |     |
    // |  3  |	    		   |  C  |
    // |_____|                 |_____|
    // |	 |                 |     |
    // |  4  |	    		   |  D  |
    // |_____|                 |_____|  
    // |	 |                 |     |
    // |  5  |	    		   |  E  |
    // |_____|                 |_____|
    // |	 |                 |     |
    // |  6  |	    		   |  F  |
    // |_____|                 |_____|
    // |	 |                 |     |
    // |  7  |	    		   |  G  |
    // |_____|                 |_____|
    // |	 |                 |     |
    // |  8  |	    		   |  H  |
    // |_____|                 |_____|
    //              MATRIZ
    //      |  A  |  1  |  B  |  2  |
    //      |  C  |  3  |  D  |  4  |
    //      |  E  |  5  |  F  |  6  |
    //      |  G  |  7  |  H  |  8  |    

    function DosVectoresAmatriz(array1, array2) {

        let matriz = []

        //lleno la matriz con ceros
        for (let i = 0; i < 4; i++) {
            matriz[i] = []
            for (let j = 0; j < 4; j++) {
                matriz[i][j] = 0

            }

        }
        //recorro el vector 1 de 2 en 2 iniciando desde la posicion 0 del vector
        let num = 0
        for (let i = 0; i < array1.length; i += 2) {
            matriz[num][1] = array1[i]
            num++
        }
        //reseteo la variable num
        num = 0
        //recorro el vector 1 de 2 en 2 iniciando desde la posicion 1 del vector
        for (let i = 1; i < array1.length; i += 2) {
            matriz[num][3] = array1[i]
            num++
        }

        //recorro el vector 2 de 2 en 2 iniciando desde la posicion 0 del vector
        let num2 = 0
        for (let i = 0; i < array2.length; i += 2) {
            matriz[num2][0] = array2[i]
            num2++
        }
        //reseteo la variable num2
        num2 = 0
        //recorro el vector 2 de 2 en 2 iniciando desde la posicion 1 del vector
        for (let i = 1; i < array2.length; i += 2) {
            matriz[num2][2] = array2[i]
            num2++
        }
        return console.log(matriz)
    }

    // 7. Diseñe un algoritmo que tome los elementos de una vector de 16 elementos y los
    // entregue en forma de una matriz.

    function VectorEnMatriz(array) {
        let matriz = []
        let i = 0
        for (let f = 0; f < 4; f++) {
            matriz[f] = []
            for (let c = 0; c < 4; c++) {
                matriz[f][c] = array[i]
                i++
            }

        }
        return console.log(matriz) + console.log(i)
    }

    // 8. Se pide un algoritmo que compare dos vectores de diferente tamaño, e
    // indique los números presentes en ambas de menor a mayor, se sabe que las
    // vectores iniciales no tienen elementos repetidos y que el tamaño de estas puede
    // variar a gusto del usuario.

    function PosicionesRepetidas(array1, array2) {
        let resultado = CompararVectores(array1, array2)
        let resultadoOrdenado = menorAmayor(resultado)
        console.log(resultadoOrdenado)


        function CompararVectores(array1, array2) {

            let vector3 = []

            for (let i = 0; i < array1.length; i++) {
                array1[i]
                for (let j = 0; j < array2.length; j++) {
                    if (array1[i] == array2[j]) {
                        vector3.push(array2[j])
                    } else {
                        continue
                    }

                }

            }
            return vector3
        }

    }
    function menorAmayor(array) {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] > array[j]) {
                    let aux = array[i]
                    array[i] = array[j]
                    array[j] = aux

                }

            }
        }
        return array
    }

    // 9. Se tiene una matriz de 7 columnas y 4 filas, cada columna representa un día
    // de la semana y cada fila una semana del mes, cada celda representa las ventas de
    // un día. Se desea conocer el promedio de ventas de un mes, en caso de que este sea
    // mayor a 10000 se desea mostrar las ventas de la primera semana, en caso de que
    // sea menor se desea mostrar las ventas de la última semana.
    function Ventas() {
        let Datos = []
        let suma = 0
        for (let f = 0; f < 4; f++) {
            Datos[f] = []
            for (let c = 0; c < 7; c++) {
                Datos[f][c] = Math.floor(Math.floor(Math.random() * 20000))
                suma += Datos[f][c]
            }

        }
        let promedio = suma / 28
        let promedioRedondeado = promedio.toFixed(2)
        let Ventas = []
        for (let c = 0; c < Datos[0].length; c++) {
            if (promedio > 10000) {
                Ventas.push(Datos[0][c])
            } else {
                Ventas.push(Datos[3][c])
            }

        }
        console.log("Los datos proporcionados en la tabla son los siguientes: ")
        console.table(Datos)
        console.log("El promedio de las ventas en el mes son:" + promedioRedondeado)

        if (promedio > 10000) {
            console.log("Las ventas de la primera semana son: ")
            console.table(Ventas)
        } else {
            console.log("Los valoreslas ventas de la ultima semana son: ")
            console.table(Ventas)
        }
    }

    // 10. Diseñe un algoritmo que le pida 10 números a un usuario y los entregue en
    // orden inverso a como el usuario los escribió.
    function OrdenInverso() {
        let vec = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        let j = 0
        for (let i = vec.length - 1; i >= 0; i--) {
            vec[i] = prompt("Ingrese el valor numero: " + (j + 1))
            j++

        }
        console.log(vec)
    }

    // 11. Desarrolle un algoritmo que calcule el valor del factorial de los elementos de
    // una vector de N elementos.
    function factorialArray() {
        let vec = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        for (let i = 0; i < vec.length; i++) {
            if (vec[i] == 0) {
                console.log("El factorial del elemento: " + i + " es: " + 1)
            } else {
                let resultado = 1
                for (let j = 1; j <= vec[i]; j++) {
                    resultado = resultado * j
                }
                console.log("El factorial del elemento: " + i + "(" + vec[i] + ")" + " es: " + resultado)
            }

        }
    }

    // 12. Dada una vector de estudiantes, desarrolle un algoritmo que busque el
    // nombre de “Estefanía” en la vector, al encontrarla indicará también la posición en
    // la que se encuentra, de no encontrarla, deberá indicar que no se encuentra en la
    // vector.

    function EncontrarNombre() {

        let SiEsta = false
        let cont = 0
        let pos
        for (let i = 0; i < vec.length; i++) {
            if (vec[i] == 'Estefania' || vec[i] == 'Estefanía' || vec[i] == 'estefania') {
                SiEsta = true
                pos = i
                cont++
            }
        }

        if (SiEsta === true && cont > 1) {
            console.log("El nombre si se encuentra en el vector, en la posicion " + pos + " del vector y ademas se repite " + cont + " veces")
        } else if (SiEsta === true) {
            console.log("El nombre si se encuentra en el vector, en la posicion " + pos + " del vector")
        } else {
            console.log("EL nombre no se encuentra en el vector")
        }
    }

    //     13. Se entrega una tabla con el nombre de N estudiantes en su primera
    // Columna, la nota del primer examen en la segunda, la nota del segundo
    // examen en la tercera y la nota del tercer examen en la cuarta, desarrolle un
    // algoritmo que imprima el nombre de cada estudiante, junto con el promedio
    // de calificación y si este es mayor o igual a 3 indicar que ha ganado la materia,
    // en caso contrario indicar que la ha perdido
    function NotasEstudiante(matriz) {

        let nom
        let prom
        for (let f = 0; f < matriz.length; f++) {
            let sum = 0
            for (let c = 1; c < 4; c++) {
                sum += matriz[f][c]
                prom = sum / 3
                nom = matriz[f][0]
            }
            if (prom >= 3) {
                return console.log("El estudiante: " + nom + " tiene un promedio de: " + Math.round(prom * 10) / 10 + " por lo tanto gano la materia")
            } else {
                return console.log("El estudiante: " + nom + " tiene un promedio de: " + Math.round(prom * 10) / 10 + " por lo tanto perdio la materia")
            }

        }
    }

    // 14. Dado un vector de números de longitud N, desarrolle un algoritmo que los
    // organice de mayor a menor.
    // Por ejemplo, si se entrega Vector = [5, 21,45, 1, 2]
    // debe entregar Vector = [45, 21, 5, 2, 1]

    function MayorAmenor(array) {
        for (let i = 0; i < array.length - 1; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] < array[j]) {
                    let aux = array[i]
                    array[i] = array[j]
                    array[j] = aux

                }

            }
        }
        return array
    }

    // 15. Desarrolle un algoritmo que recorra una matriz e imprima los valores
    // presentes en su diagonal principal, posterior mente imprima los valores de la
    // diagonal secundaria.
    function diagonal() {

        console.log("Los numeros de la diagonal principal son:")
        for (let i = 0; i < matriz.length; i++) {
            console.log(matriz[i][i])
        }
        console.log("Los numeros de la diagonal secundaria son:")

        for (let f = 0; f < matriz.length; f++) {
            let c = matriz.length - 1 - f
            console.log(matriz[f][c])

        }
    }

    //     16. Dada una vector de números de longitud N, desarrolle un algoritmo que los
    // organice de menor a mayor. Por ejemplo, si se entrega Vector = [5, 21,
    // 45, 1, 2] debe entregar Vector = [1, 2, 5, 21, 45]
    function point16(array) {
        menorAmayor(array)
    }

    // 17. Diseñe un algoritmo que recorra una vector de números, mire cuántos de
    // estos son pares, a continuación, coloque en las primeras posiciones los números
    // pares de menor a mayor y luego los impares de mayor a
    // menor. Por ejemplo, si se entrega Vector = [5, 21, 6, 45, 1, 2, 4] debe entregar
    // Vector = [2, 4, 6, 45, 21, 5, 1].
    function ParesImparesOrden(array) {

        let vec1 = []
        let vec2 = []

        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                vec1.push(array[i])
            } else {
                vec2.push(array[i])
            }

        }
        return console.log(menorAmayor(vec1) + "," + MayorAmenor(vec2))
    }

    //     18. Cree un algoritmo que lea dos parámetros, correspondientes a dos
    // matrices. La función debe efectuar la suma de dichas matrices e imprimir la
    // matriz resultante. En caso de que las matrices no puedan ser sumadas, el
    // mensaje de error que se debe mostrar es "No se pueden sumar estas matrices"

    function SumaMatrices(matriz1, matriz2) {
        function SumaMatrices(matriz1, matriz2) {
            let matrizSumada = []
            let suma = 0
            if (matriz1.length == matriz2.length) {
                for (let f = 0; f < matriz1.length; f++) {
                    suma = 0
                    matrizSumada[f] = []
                    for (let c = 0; c < matriz1[0].length; c++) {
                        suma = matriz1[f][c] + matriz2[f][c]
                        matrizSumada[f][c] = suma

                    }
                }
                return console.log(matrizSumada)
            }
            return console.log("No se pueden sumar estas matrices")
        }
    }

    // 19. Cree un algoritmo, que lea una vector con una cantidad desconocida de
    // elementos (Todos numéricos), dichos elementos corresponden a las
    // temperaturas de los últimos días en alguna ciudad. El algoritmo debe calcular
    // la temperatura promedio, si la temperatura promedio es por lo menos 25.6,debe imprimir por pantalla "Calor", 
    // en caso contrario, imprima por pantalla "Frio".

    function temperatura(array) {
        let promedio = 0
        let suma = 0
        for (let i = 0; i < array.length; i++) {
            suma = suma + array[i]
        }
        promedio = suma / array.length
        promedio = parseFloat(promedio.toFixed(1))
        if (promedio >= 25.6) {
            console.log("Calor")
        } else {
            console.log("Frio")
        }
    }

    // 20. En una matriz C de 24 x 6 se encuentran almacenadas las calificaciones de 6
    // materias de un grupo de 24 estudiantes. Elaborar un algoritmo que nos permita
    // calcular e imprimir los siguiente:
    // La nota promedio de cada estudiante
    // El número de estudiantes que aprobaron cada materia
    // El número de estudiantes que reprobaron cada materia
    // La nota promedio de cada materia

    function NotasEstudiantes(){
    let matriz = []
    for (let i = 0; i < 24; i++) {
        matriz[i] = []
        for (let j = 0; j < 6; j++) {
            matriz[i][j] = Math.floor(Math.random() * 6)
        }
    }
    console.log(matriz)
    for (let i = 0; i < 24; i++) {
        let promedio = 0
        for (let j = 0; j < 6; j++) {
            promedio += matriz[i][j]
        }
        promedio /= 6
        promedio = parseFloat(promedio.toFixed(1))
        console.log("el promedio del estudiante " + (i + 1) + " es " + promedio)
    }
    for (let j = 0; j < 6; j++) {
        let conteoPerdidas = 0
        let promedio = 0
        for (let i = 0; i < 24; i++) {
            if (matriz[i][j] < 3) {
                conteoPerdidas++
            }
            promedio += matriz[i][j]
        }
        promedio /= 24
        console.log("<---------------------------->")
        console.log("el numero de estudiantes que pierden la materia  " + (j + 1) + " es " + conteoPerdidas)
        console.log("el numero de estudiantes que ganan la materia  " + (j + 1) + " es " + (24 - conteoPerdidas))
        console.log("el promedio de la materia  " + (j + 1) + " es " + promedio)
    }
}
