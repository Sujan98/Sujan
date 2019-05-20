var count = 4;
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var c5 = 0;
var b1 = 0;
var b2 = 0;
var b3 = 0;
var b4 = 0;
var w;

//val functions to validate products
function val1(){
if(c1==0){
  var type1 = $("#table").find(".nr1").text();
  var cost1 = $("#table").find(".tr1");
  var app1 = $('.tr1').val();
  console.log(app1);
  if(type1=="Food" && app1 <= 100)
    $(".value1").append("Cheap");
  else if(type1=="Food" && app1 <= 300)
    $(".value1").append("Average");
  else if(type1=="Food" && app1 > 300)
    $(".value1").append("Expensive");
  else if(type1=="Business" && app1 <= 1000)
    $(".value1").append("Cheap");
  else if(type1=="Business" && app1 <= 2000)
    $(".value1").append("Average");
    else if(type1=="Business" && app1 > 2000)
    $(".value1").append("Expensive");
    c1++;
}
}

function val2(){
if(c2==0){
  var type2 = $("#table").find(".nr2").text();
  var cost2 = $("#table").find(".tr2");
  var app2 = $('.tr2').val();

  console.log(app2);
  if(type2=="Business" && app2 <= 1000)
    $(".value2").append("Cheap");
  else if(type2=="Business" && app2 <= 2000)
    $(".value2").append("Average");
  else if(type2=="Business" && app2 > 2000)
    $(".value2").append("Expensive");
  else if(type2=="Food" && app2 <= 100)
    $(".value2").append("Cheap");
  else if(type2=="Food" && app2 <= 300)
    $(".value2").append("Average");
  else if(type2=="Food" && app2 > 300)
    $(".value2").append("Expensive");
    c2++;
}
}

function val3(){
if(c3==0){
  var type3 = $("#table").find(".nr3").text();
  var cost3 = $("#table").find(".tr3");
  var app3 = $('.tr3').val();

  console.log(app3);
  if(type3=="Food" && app3 <= 100)
    $(".value3").append("Cheap");
  else if(type3=="Food" && app3 <= 300)
    $(".value3").append("Average");
  else if(type3=="Food" && app3 > 300)
    $(".value3").append("Expensive");
  else if(type3=="Business" && app3 <= 1000)
    $(".value3").append("Cheap");
  else if(type3=="Business" && app3 <= 2000)
    $(".value3").append("Average");
  else if(type3=="Business" && app3 > 2000)
    $(".value3").append("Expensive");
c3++;
}
}

function val4(){
if(c4==0){
  var type4 = $("#table").find(".nr4").text();
  var cost4 = $("#table").find(".tr4");
  var app4 = $('.tr4').val();

  console.log(app4);
  if(type4=="Food" && app4 <= 100)
    $(".value4").append("Cheap");
  else if(type4=="Food" && app4 <= 300)
    $(".value4").append("Average");
  else if(type4=="Food" && app4 > 300)
    $(".value4").append("Expensive");
  else if(type4=="Business" && app4 <= 1000)
    $(".value4").append("Cheap");
  else if(type4=="Business" && app4 <= 2000)
    $(".value4").append("Average");
  else if(type4=="Business" && app4 > 2000)
    $(".value4").append("Expensive");
  c4++;
}
}

function val5(){
if(c5==0){
  var type5 = $("#table").find(".nr5").text();
  var cost5 = $("#table").find(".tr5");
  var app5 = $('.tr5').val();

  console.log(app5);
  if(type5=="Food" && app5 <= 100)
    $(".value5").append("Cheap");
  else if(type5=="Food" && app5 <= 300)
    $(".value5").append("Average");
  else if(type5=="Food" && app5 > 300)
    $(".value5").append("Expensive");
  else if(type5=="Business" && app5 <= 1000)
    $(".value5").append("Cheap");
  else if(type5=="Business" && app5 <= 2000)
    $(".value5").append("Average");
  else if(type5=="Business" && app5 > 2000)
    $(".value5").append("Expensive");
    c5++;
}
}

//update money to wallet
$(document).ready(function(){
  //get money value from URL
  var parameters = location.search.substring(1).split("&");
  var temp = parameters[0].split("=");
  l = unescape(temp[1]);
  if(l>0){
    //add money to wallet
    document.getElementById("money").value = l;
    w=l;
  }
  document.getElementById("button4").addEventListener("click", buy);
});

//validate wallet money payment
function ss(){
    var fa = document.getElementById("amoun").value;
    //get wallet money from URL
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    l = unescape(temp[1]);
    document.getElementById("amoun").value = parseInt(l) + parseInt(fa);
    //validate for wallet requirement
    if(document.getElementById("amoun").value < 500 ){
      alert("Minimum amount is 500rs");
      return false;
      }
      else if(document.getElementById("amoun").value > 5000){
        alert("Maximum amount is 5000rs");
        return false;
        }
        return true;
}

//add new product record
function add(){
    if (count>0){
    var x = document.getElementById("pname").value
    var y = document.getElementById("type").value
    var z = document.getElementById("pcost").value
    var table = document.getElementById("app");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = x;
    if(count==4){
      cell2.classList.add("nr4");
    }
    else if(count==3){
      cell2.classList.add("nr3");
    }
    else if(count==2){
      cell2.classList.add("nr2");
    }
    else {
      cell2.classList.add("nr1");
    }
    cell2.innerHTML = y;
    let li = document.createElement('li');
    if(count==4){
    li.classList.add("tr4");
    }
    else if(count==3){
    li.classList.add("tr3");
    }
    else if(count==2){
    li.classList.add("tr2");
    }
    else{
    li.classList.add("tr1");
    }
    li.value = z;
    li.innerHTML = z + "rs";
    cell3.appendChild(li);
    let button = document.createElement('button');
    let span = document.createElement('span');
    button.classList.add("data");
    if(count==4){
    button.setAttribute('onclick','val4()');
    span.classList.add("value4");
    span.innerHTML = "   ";
    }
    else if(count==3){
    button.setAttribute('onclick','val3()');
    span.classList.add("value3");
    span.innerHTML = "   ";
    }
    else if(count==2){
    button.setAttribute('onclick','val2()');
    span.classList.add("value2");
    span.innerHTML = "   ";
    }
    else{
    button.setAttribute('onclick','val1()');
    span.classList.add("value1");
    span.innerHTML = "   ";
    }
    button.innerHTML = "Validate";
    cell4.appendChild(button);
    cell4.appendChild(span);
    let button2 = document.createElement('button');
    let span2 = document.createElement('span');
    button.classList.add("data");
    if(count==4){
      button2.setAttribute('onclick','buy4()');
      span2.classList.add("item4");
      span2.innerHTML = "   0";
    }
    else if(count==3){
      button2.setAttribute('onclick','buy3()');
      span2.classList.add("item3");
      span2.innerHTML = "   0";
    }
    else if(count==2){
      button2.setAttribute('onclick','buy2()');
      span2.classList.add("item2");
      span2.innerHTML = "   0";
    }
    else{
      button2.setAttribute('onclick','buy1()');
      span2.classList.add("item1");
      span2.innerHTML = "   0";
    }
    button2.innerHTML = "Buy Item";
    cell5.appendChild(button2);
    cell5.appendChild(span2);
    count--;
  }
  else {
    alert("Maximum limit reached!");
  }
  }

//buy functions to buy items
function buy5(){
    var m = $("#app").find('.tr5').val();
    w = parseInt(w) - parseInt(m);
}

function buy4(){
    b4++;
    var m = $("#app").find('.tr4').val();
    w = parseInt(w) - parseInt(m);
    $(".item4").html("   " + b4);
  }

function buy3(){
    b3++;
    var m = $("#app").find('.tr3').val();
    w = parseInt(w) - parseInt(m);
    $(".item3").html("   " + b3);
  }

function buy2(){
    b2++;
    var m = $("#app").find('.tr2').val();
    w = parseInt(w) - parseInt(m);
    $(".item2").html("   " + b2);
  }

function buy1(){
    b1++;
    var m = $("#app").find('.tr1').val();
    w = parseInt(w) - parseInt(m);
    $(".item1").html("   " + b1);
}

//for purchasing list and updating the wallet money
function purchase(){
  if (confirm("Confirm purchase? ")) {
    if(w>0){
    alert("Purchased items. Your wallet balance is " + w + ".");
    //payment from wallet money
    document.getElementById("money").value = w;
  }
  else{
    //not enough money
    alert("No Money in Wallet. Add money to purchase items")
  }
  } else {
    //nothing
  }
}
