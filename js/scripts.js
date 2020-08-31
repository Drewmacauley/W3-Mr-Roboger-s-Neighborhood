function threeDig(number) {      //Should return a value not JQ
  if (number === 1) {
   $("#numberInput").text("Beep");
  }
  else if (number === 2) {
   $("#numberInput").text("Boop");
  }
 else if (number === 3) {
    $("#numberInput").text("Wont you be my neighbor"); 
  });
});

    let newArr = [];
    for (let i=0; i < formInt; i += 1) {
      let newInt = (newArr[i]-1);        //peace out newInt add 3dig
     if (newInt === 0) {
        break;
      };
      newArr.push(newInt);      //output newArr with JQ.....not sure what that means
    }
   let facNum = newArr.reduce((a,b) => a * b);
    $("result").text(facNum);






//create a code to input 0-?


//Numbers that contain a 1: all digits are replaced all digits with "Beep!"



//Numbers that contain a 2: all digits are replaced all digits with "Boop!"



//Numbers that contain a 3: all digits are replaced all digits with "Won't you be my neighbor?"




