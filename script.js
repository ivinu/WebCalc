function buttonclick(val){ 
    document.getElementById("screen").value+=val;
}

function clearr()
{
    document.getElementById("screen").value=""
}
function equalbtn(){
var input = document.getElementById("screen").value
var result=eval(input)
document.getElementById("screen").value=result

}