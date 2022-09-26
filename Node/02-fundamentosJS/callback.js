const empleados = [
    {
        id:1,
        nombre:'Luis'
    },
    {
        id:2,
        nombre:'Alberto'
    },
    {
        id:3,
        nombre:'Marta'
    }
];

const sueldos = [
    {
        id:1,
        sueldo:1000
    },
    {
        id:2,
        sueldo:1500
    }
];

const getEmpleado = ( id, callbacks ) => {

    const empleado = empleados.find ( e => e.id === id)?.nombre

    if (empleado){
        callbacks(null,empleado)
    }
    else{
        callbacks(`Empleado con id ${id} no existe`)
    }
}

const getSueldo = (id, callbacks) => {
    const sueldo = sueldos.find (e => e.id === id)?.sueldo

    if (sueldo){
        callbacks(null,sueldo)
    }
    else {
        callbacks(`Empleado con id ${id} no existe`)
    }
}

const id = 2;

getEmpleado(id, (err,empleado) => {
    if (err){
        console.log ('ERROR!');
        return console.log (err);
    }

    getSueldo(id, (err,sueldo) => {
        if (err){
            console.log ('ERROR!');
            return console.log (err);
        }
        console.log (`El empleado ${empleado} tiene un salario de ${sueldo}`)
    }
    )
    
}
)















