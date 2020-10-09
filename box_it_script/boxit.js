 /*$ node boxit.js 'Jon Snow' 'Cersei Lannister' 'Daenerys Targaryen'
┏━━━━━━━━━━━━━━━━━━┓
┃Jon Snow          ┃
┣━━━━━━━━━━━━━━━━━━┫
┃Cersei Lannister  ┃
┣━━━━━━━━━━━━━━━━━━┫
┃Daenerys Targaryen┃
┗━━━━━━━━━━━━━━━━━━┛
$ node boxit.js 'Jon Snow'
┏━━━━━━━━┓
┃Jon Snow┃
┗━━━━━━━━┛
$ node boxit.js
┏┓
┗┛
*/

const nameList = process.argv.slice(2);
const hLine = "━";
const topRightLine = "┓";
const topLeftLine = "┏";
const verticalLine = "┃";
const midLeftLine ="┣";
const midRightline ="┫";
const bottomLeftLine = "┗";
const bottomRightLine ="┛";

function longestName() {
   let longestLength = 0;
   for(let i = 0; i < nameList.length; i++){
      if(longestLength < nameList[i].length){
          longestLength = nameList[i].length;
      }
   }
   return longestLength;
}

function drawLine(maxLength){
   let lineLength = "";
   for(let j = 1; j <= maxLength; j++){
      lineLength += hLine;
   }
   return lineLength;
}

function padding(name){
   let spaceLength = maxLength-name.length;
   let space = "";
   for(i = 0; i < spaceLength; i++){
      space += " ";
   }
   return space;
}

function finalResult (){
  console.log(topLine);
  for(let i = 0; i < nameList.length; i++){
    console.log(`${verticalLine}${nameList[i]}${padding(nameList[i])}${verticalLine}`); 
    if(i !== nameList.length -1){
      console.log(middleLine);
    }
  }
  console.log(bottomLine);
}

let maxLength = longestName();
let maxHrLine = drawLine(maxLength);
let topLine = `${topLeftLine}${maxHrLine}${topRightLine}`;
let middleLine = `${midLeftLine}${maxHrLine}${midRightline}`;
let bottomLine = `${bottomLeftLine}${maxHrLine}${bottomRightLine}`;

finalResult();
