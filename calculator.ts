//display on the screen
//select an operation
//compute the displayed values with the selected operation
//clear the screen
//backspace incase of a mistake
 // Applying solid principles

// const result = document.getElementById('result');



class Calculator {

  // class data:----
  private data: any;
  private result: any;

  // class constructor:---
  constructor() {
    this.result = document.getElementById('result');
  }

  // class methods:----
  displayNumber(data:any){
    this.result.textContent += data;
  }

  clearData(){
    this.result.textContent = '';
  }

  backSpace(){
    this.result.textContent = this.result.textContent.slice(0,-1);
  }

  compute(){
    try {
      this.result.textContent = eval(this.result.textContent);
    } catch (error) {
      alert('invalid');
    }
  
  }
}

// instantiating 
let calc = new Calculator();
calc.displayNumber('0');
calc.backSpace();
calc.clearData();
calc.compute();


