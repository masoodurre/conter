let counter = 0;
let one =  document.getElementById("mb")
  

function ass() {
    counter++;
    document.getElementById("pms").innerHTML= counter;
}


function mss() {
    counter= 0;
    document.getElementById("pms").innerHTML= counter;
}
// ایک مشق مکمل ہوئی ہے

function table(){
    for (let num = 1; num < 10; num++)
   { document.getElementById("mj").innerHTML+=num + "<br>" + " " 
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
     
        
    




