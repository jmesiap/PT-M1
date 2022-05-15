'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.
function Node(value){ this.value = value; this.next = null;}
function LinkedList() { this.head = null;}

LinkedList.prototype.add = function(value){
  const nodo = new Node(value);
  if (!this.head){ this.head = nodo;}
  else{ let nposi = this.head; 
  while (nposi.next){ nposi = nposi.next;}
  nposi.next = nodo;
  return nodo
  }
}

LinkedList.prototype.search = function(data){
  let actual = this.head;  
  
  if (!actual){ return null; }  // Si la lista enlazada esta vacia
  
  while(actual){ 

    if (typeof(actual.value)==='function'){
      let nValor = actual.value()
      if (nValor === data){
    //      console.log(nValor)
          return nValor}
      }   
    
  if (typeof(actual.value)==='object'){
        let nValor = Object.values(actual.value)
        for (i=0; i < nValor.length; i++){
            if (nValor[i] === data){
                //console.log(nValor[i])
                return nValor[i]
            }
        }  
     }
  }
  
  if (actual.value === data){
      //console.log(actual.data)
      return actual.value;
  }
  
  actual = actual.next; 
  //console.log('No se encontro el dato buscado')
  return null;

} 

LinkedList.prototype.remove = function(){
  let actual = this.head;
  let anterior = null;
    
    // Si el primer nodo es vacio corta el proceso retornando null 
    if (!actual){this.head = null; return null;}
    
     // Si solo existe un nodo en la lista enlazada
    if (actual.next===null){ this.head = null; return actual.value;}

    //Cuando hay mas de un nodo en la lista enlazada 
    while(actual.next){  // Mientras exita un siguiente noto ingresa al bloque while
        anterior = actual // Almacena la posicion actual del nodo en otra variable llamada anterior
        actual = actual.next; // avanza al siguiente nodo
    } // Cuando el siguiente nodo esta vacio, ya no ingresa al bloque while

    anterior.next = null; // Asigna el valor null el nodo siguiente, partiendo de la posicion actual almacenada en la variable anterior
    return actual.value; // devuele el valor eliminado
}




// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {

}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
