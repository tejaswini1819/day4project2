var count=0;
var i;
function go(){
    var num=document.getElementById("num1").value;
  
    var color=document.getElementById("clr").value;
    for(i=0;i<num;i++){
        count++;
        var btn=document.createElement("BUTTON");
        btn.className="btn1";
      var t = document.createTextNode("new Button"+count);
  btn.appendChild(t);
        btn.innerHtml="new Button"+count;
        btn.style="background-color:"+(color)+";"
        document.body.appendChild(btn);
    }
}