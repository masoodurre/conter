let counter = 0;
let one =  document.getElementById("mb")
let one1 =  document.getElementById("mj")
  

function ass() {
    counter++;
   
    document.getElementById("pms").innerHTML= counter;
}


function mss() {
    counter= 0;
    document.getElementById("pms").innerHTML= counter;
}

function subtract () {
    counter = counter-1;
    document.getElementById("pms").innerHTML= counter;
}

function addition () {
    counter = counter+10;
    document.getElementById("pms").innerHTML= counter;
}



// ایک مشق مکمل ہوئی ہے

function table(){
    one1.innerHTML = '';
    for (let num = 1; num < 10; num++)
   { document.getElementById("mj").innerHTML+=num + "<br>" + " " 
}
}

function oddnumber(){
    one1.innerHTML = '';
    for (let onum = 1; onum < 15; onum+=2)
   { document.getElementById("mj").innerHTML+=onum + "<br>" + " " 
}
}

function evennumber(){
    one1.innerHTML = '';
    for (let num2 = 2; num2 < 14; num2+=2)
   { document.getElementById("mj").innerHTML+=num2 + "<br>" + " " 
}
}

// دوسری مشق مکمل ہوئی ہے

function table2 ()
{ 
    one.innerHTML = '';
    for(let number = 1; number<11; number++)
    {
   one .innerHTML+= "2x"+ number + "=" + number*2+ "<br>" + " "    
    }
}

function table3 ()
{
    one.innerHTML = '';
    for(let number = 1; number<11; number++)
    {
    one .innerHTML+= "3x"+ number + "=" + number*3+ "<br>" + " "    
    }
}

function table4 ()
{
    one.innerHTML= '';
    for(let number = 1; number<11; number++)
    {
    one .innerHTML+= "4x"+ number + "=" + number*4+ "<br>" + " "    
    }
}
// یہاں سے اووڈ اور ایون کا کاؤنٹر ہے

function as() {
    berr++;
    document.getElementById("ps").innerHTML= berr;
}
let berr = '0'
function odad (){
    as();
    if (berr%2==0)
   { document.getElementById('khan').innerHTML= 'even'}
   else {document.getElementById('khan').innerHTML= 'odd'}

}
alert ("میں آپ کو اپنی ویب سائٹ میں خوش آمدید کہتا ہوں");
     
        
    




