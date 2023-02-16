//Part 1
for (var i=8;i<=49;i++){
var tr = document.getElementById('table').tHead.children[0],
    th = document.createElement('th');
    th.style.alignContent='center';
th.innerHTML = "AAA";
tr.appendChild(th);
}

//part 2


for (var i=1;i<24;i++){
    var tr=tbody.insertRow(12+i);
    var td=tr.insertCell(0);
        td.innerHTML="Slot A";
    for (var j=1;j<=49;j++){
        var td=tr.insertCell(j);
        td.innerHTML=" ";
        td.style.backgroundColor='black';
        td.id=(12+i)+'-'+(j-1);
    }
}
//part 3,create 6 more rows
var tbody=document.getElementById('tbody');
for (var i=0;i<=91;i++){
    var tr=tbody.getElementsByTagName('tr')[i];   
    //create 1 more td for each row,so that we can have 8 columns
    for (var j=0;j<7;j++){
        var td=tr.getElementsByTagName('td')[j+1];
        td.innerHTML=" ";
        td.style.backgroundColor='black';
        //set id to all of them,since it'll be easier to control
        td.id=i+'-'+j;
    }
    //add a new row
    for (var k=7;k<=48;k++){
        const td=tr.insertCell(k+1);
        td.innerHTML=" ";
        td.style.backgroundColor='black';
        td.id=i+'-'+k;
    }
}