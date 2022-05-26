'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
    this.value = value, 
    this.left = null,
    this.right = null 
}

BinarySearchTree.prototype.insert = function(value){
  if (value > this.value){
    // el valor que quiero insertar es mas grande que el valor del nodo actual
    if (!this.right){ // this.right === null
      // la posición esta libre
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value)
    }
  } else {
    // el valor que quiero insertar es mas chico que el valor del nodo actual
    if (!this.left){ // this.left === null
      // la posición esta libre
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value)
    }
  }
}


BinarySearchTree.prototype.contains = function(value){
  if (this.value === null) return false
  if (this.value === value) return true;

   if (value > this.value) {
      if (!this.right){
        return false;
      } else {
        return this.right.contains(value);
      }
   } else{
     if (!this.left){
       return false;
     } else {
       return this.left.contains(value);
     }
   }

}
BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
    if (!order || order==='in-order'){
      if (this.left) this.left.depthFirstForEach(cb, order);
      cb(this.value);
      if (this.right) this.right.depthFirstForEach(cb, order);
    } else if (order==='pre-order'){
      cb(this.value);
      if (this.left) this.left.depthFirstForEach(cb, order);
      if (this.right) this.right.depthFirstForEach(cb, order);
    }else{
      if (this.left) this.left.depthFirstForEach(cb, order);
      if (this.right) this.right.depthFirstForEach(cb, order);
      cb(this.value);
    }
}
BinarySearchTree.prototype.breadthFirstForEach = function(cb, array=[]){
cb(this.value);
if (this.left) array.push(this.left);
if (this.right) array.push(this.right);

let nodonext = array.shift();
if (nodonext) nodonext.breadthFirstForEach(cb, array);

}

BinarySearchTree.prototype.size = function(){
  //Nodo hoja, caso base, no tiene nodos ni a la derecha ni a la izquierda
  if (!this.left && !this.right) { return 1; }
  // Nodo con solo hijo izquierdo
  if (!this.right){ return 1 + this.left.size();}
  // Nodo con solo hijo derecho
  if (!this.left){ return 1 + this.right.size();}    
  // Nodo con dos hijos
  return 1 + this.left.size() + this.right.size()
}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
