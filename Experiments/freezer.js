//	The "Freezer" function below taken an object as input and performs recursive freezing all the nested objects as well.



function Freezer(obj) {
  Object.freeze(obj);
  for(let prop in obj){
    // console.log('props = ',typeof(obj[prop]), prop);
    if(typeof obj[prop] === 'object'){
      // console.log('prop = ',prop);
      Freezer(obj[prop]);
    }
  }
}