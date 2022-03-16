const adviceModule = (() => {
  const advicesArray = ['advice1', 'advice2', 'advice3','advice4', 'advice5'];
  
  return {
    getRandomAdvice: ()=> {
      const index = Math.floor(Math.random()*advicesArray.length);
      return advicesArray[index];
    }
  }
})();
 
 
document.getElementById('getAdvice').addEventListener('click', (e) =>{
  document.getElementById('advice').innerText = adviceModule.getRandomAdvice();
});