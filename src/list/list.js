'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data;
    this.length--;
    delete this.data[this.length];
    return returnValue;
  }
  // Removes the first element from an array and returns that removed element
  shift(){  
    this.length--;
    let value =[];
    for (let i =0; i <= this.length -1 ; i++){
      value.push(this.data[i]);
      this.data[i]=this.data[i+1];
    } 
    delete this.data[this.length];
    console.log(value[0]);
    return value[0];
  }

  //adds items to beggining of array
  unshift(item){
    let returnValue = this.data;
    this.length++;
    for (let i = this.length; i>0 ; i--){
      this.data[i-1]=this.data[i-2];
    }
    
    this.data[0] = item;
    return returnValue;
  }
  //calls a function on each element does not return
  forEach(){
    let returnValue = this.data;
    let val = 'b';
    for (let i =0; i< this.length; i++){
      this.data[i]= this.data[i] + val;
    }
    return returnValue;
  }

  // creates a new array and does something to each element in array
  map(){
    let returnValue = this.data;
    // let val = 'b';
    for (let i =0; i< this.length; i++){
      this.data[i]= this.data[i].toUpperCase();
    }
    
    return returnValue;
  }

  //filters out elements that pass a test
  
  filter(val){
    let data = this.data;
    let newData = new List(); 
    
    for (let i = this.length-1; i > 0; i--){
      if(data[i].length > val){
        newData.push(data[i]);

      } 
    }
    return newData.data;
  }

  //executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
  reduce(){
    let  set = this.data;
    console.log(set);
    let acc = {};
    for (let i =0; i< this.length; i++){
      if (set[i] in acc){
        acc[set[i]]++;
      }else{
        acc[set[i]] = 1;
      }
    }
    return acc;
  }


}


module.exports = List;
