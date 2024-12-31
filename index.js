/*export const hello=(i,j,k)=>{
    return (i+j+k);
}

export const hi =(l,m,n)=>{
    return(l*m*n);
}*/

function myFunction() {
  const message = document.getElementById("p01");
  message.innerHTML = "";
  let x = document.getElementById("demo").value;
  try {
    if (x.trim() == "") throw "is empty";
    if (isNaN(x)) throw "is not a number";
    x = Number(x);
    if (x > 10) throw "the input is to high";
    if (x < 5) throw "the input is to low";
  }
  catch (err) {
    message.innerHTML = "Input " + err;
  }
  finally {
    document.getElementById("demo").value = "name";
  }
}



