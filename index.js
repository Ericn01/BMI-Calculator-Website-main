  /**
    * This function is very long and should be broken up * into multiple pieces 
  **/

   function handleFormInputs(){
    // Constants 
    var UNDERWEIGHT =  18.5;
    var NORMAL = 24.9;
    var OVERWEIGHT = 29.9;
    var OBESE = 35; 

    // initializing variables 
    var name = document.getElementById('fullname').value;
    var height = parseFloat(document.getElementById('height').value, 10);
    var weight = parseFloat(document.getElementById('weight').value, 10);
    var bmi = weight / Math.pow(height, 2);
    
    var bmiCondition = null;

    // conditionals - could be it's own function? 
    if (bmi < UNDERWEIGHT){
        bmiCondition = "Underweight";
    }
    else if (bmi > UNDERWEIGHT && bmi <= NORMAL) {
        bmiCondition = "Normal";
    }
    else if (bmi > NORMAL && bmi <= OVERWEIGHT){
        bmiCondition = "Overweight"
    }
    else if (bmi > OVERWEIGHT && bmi < OBESE) {
        bmiCondition = "Obese";
    }
    else{
        bmiCondition = "Extremely Obese"
    }

    // add results to the page
    document.getElementById("bmi-result").innerHTML += "<h4> " + name + " has a BMI of <i> " + bmi.toFixed(2) + " </i> - This is classified as " + bmiCondition + "</h4> <br>";
}