const superman = {
    nombre: 'Clark',
    apellido: 'Kent',
    poder: 'Volar',
    getsuperheroe (){
        return `${this.nombre}  ${this.apellido} ${this.poder}`
    }
}

//Imprimir todo el objeto por su función en el return
        console.log (superman.getsuperheroe ());

//Desestructurar objetos opción 1 
        /*const nombre = superman.nombre;
        const apellido = superman.apellido;
        const poder = superman.poder;

        console.log (nombre, apellido, poder);*/

//Desestructurar objetos opción 2 
        /*const {nombre,apellido,poder} = superman;
        console.log (nombre, apellido, poder);*/

//Desestructurar objetos opción 3
        function imprimeHeroe ({nombre,apellido,poder}){
            console.log (nombre, apellido, poder);
        }

        imprimeHeroe (superman);



//Desestructurar arreglos 
const heroes = ['Superman','Batman','Spiderman'];

//opción 1 
const h1 = heroes[0];
const h2 = heroes[1];
const h3 = heroes[2];
console.log (h1,h2,h3);
//opcion 2

const [s1,s2,s3] = heroes;
console.log (s1,s2,s3);
console.log(s2);