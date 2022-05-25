//display on the screen
//select an operation
//compute the displayed values with the selected operation
//clear the screen
//backspace incase of a mistake
 // Applying solid principles

const result=document.getElementById('result');



class Calculator {
 data:any=result.textContent;

  displayNumber(data){
  this.data+=data;
}

 clearData(){
 this.data='';
}

backSpace(){
 this.data=result.textContent.slice(0,-1);
}

compute(){
 try {
  this.data=eval(result.textContent);
 } catch (error) {
  alert('invalid');
 }
 
}
}

const calc=new Calculator();
calc.displayNumber('');
calc.backSpace();
calc.clearData();
calc.compute();