$(document).ready(function() {
    
  let words = ["John","Antony","Henry","Justin"];

  let imageArray = ["./images/2.jpg","./images/3.jpg","./images/4.jpg","./images/5.jpg","./images/6.jpg","./images/7.jpg"]

  const keySoundWin = () => {
    return new Audio("./sound/applause4.wav");
  }
  const keySoundLose = () => {
    return new Audio("./sound/Cry+2.wav");
  }

  let imageIndex = 0;
  function changeImage() {
    let newImage = document.getElementById("hangImage");
    newImage.setAttribute("src",imageArray[imageIndex]);
    imageIndex++;

    if(imageIndex === imageArray.length){
      setTimeout(function(){
        keySoundLose().play(); 
      },200); 
      setTimeout(function(){
        alert("Better luck next time...");
        location.reload();
      },500);    
    }    
  }

  // Pick a random word
  let word = words[Math.floor(Math.random() * words.length)];
  word=word.toUpperCase();

  let fill = [];
  for (let i = 0; i < word.length; i++){
    fill = fill + "_ ";
  }

  document.querySelector('#fill').innerHTML= fill;

  const inputs = document.querySelectorAll('.letterTile');

  inputs.forEach(input=>{
    let listener = (event) => {
      input.style.backgroundColor = 'red';
    
      const {currentTarget} = event;
      const letter=currentTarget.innerHTML;
      
      if(word.includes(letter)){
        let repeatindex=[];
        for(let i = 0; i < word.length; i++){
          if(word[i] === letter){
              repeatindex.push(i);
          }
        }
        const a = document.querySelector('#fill').innerHTML;
        let chars = a.split('');
   
        for(let i = 0,j=0; i <chars.length;i++){
          if(chars[i] == " "){
            continue; 
          }else{
            if(repeatindex.includes(j)){
              chars[i] = letter;
            }  
            j++; 
          }
    
          document.querySelector("#fill").innerHTML= chars.join("");

          if(!chars.includes("_")){
            setTimeout(function(){
              keySoundWin().play(); 
            },200);   

            setTimeout(function(){
              alert("Congratulations! You win!");
              location.reload();
            },500);   
          }
        }    

      }else{
        changeImage()
      }
    
      input.removeEventListener('click',listener);
    };
    input.addEventListener('click', listener);
  })
});