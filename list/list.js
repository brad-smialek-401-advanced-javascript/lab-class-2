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
    let returnValue = this.data;
    this.length--;
    for (let i =0; i <= this.length -1 ; i++){
      this.data[i]=this.data[i+1];
    } 
    delete this.data[this.length];
    return returnValue;
  }

  //adds items to beggining of array
  unshift(item){
    let returnValue = this.data;
    this.length++;
    // this.data[0] = item;
    // console.log('Length:',this.length,returnValue);
    for (let i = this.length; i>0 ; i--){
      this.data[i-1]=this.data[i-2];
    }
    // console.log(returnValue);

    this.data[0] = item;
    // this.length++;
  
  
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

  //calls a function on each element returns new arr the same length
  // map(){
  //   let returnValue = this.data;
  //   let val = 'b';
  //   for (let i =0; i< this.length; i++){
  //     this.data[i]= this.data[i] + val;
  //   }
  
  
  //   return returnValue;
  // }

  map(callback) {
    if ( typeof callback !== 'function' ) { return undefined; }
    let result = new List();
    for (let i = 0; i <= this.length - 1; i++) {
      result.push(callback(this[i], i));
    }
    return result;
  }

  //creates an array filled with all array elements that pass a test (provided as a function)
  
  filter(val){
    debugger;
    let data = this.data;
    
    // console.log(data);
    
    for (let i = this.length-1; i > 0; i--){
      if(data[i-1]=== val){
        
        data[i]=data[i+1];
        
        this.length--;
        delete data[i+1];
        // data[i]=data[i+1];
        
      } 
    }
    
    return this.length;
    return data;
  }

  //calls a function on each element returns new arr the same length
  reduce(){
    let returnValue = this.data;
    let val = 'b';
    for (let i =0; i< this.length; i++){
      this.data[i]= this.data[i] + val;
    }
  
  
    return returnValue;
  }


}


module.exports = List;
