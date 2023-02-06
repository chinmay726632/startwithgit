 var header=document.getElementById('header-title');
 header.style.borderBottom='solid 3px black';
var add = document.querySelectorAll('.title');
 add[0].style.fontWeight ='bold';
 add[0].style.backgroundColor ='green';
 var list = document.getElementsByClassName('list-group-items');
 console.log(list);
  for(var j=0;j<=list.length;j++)
 {
      list[j].style.backgroundColor='blue';
 }
 list.style.fontWeight='bold';
 list[2].style.backgroundColor='green';
 var li = document.getElementsByTagName('li');
 for(var i=0;i<=li.length;i++)
 {
    li[i].style.backgroundColor='#f4f4f4';
 }
  var item2 = document.querySelectorAll('.list-group-item');
  item2[1].style.backgroundColor='green';
  item2[1].style.color='blue';
  item2[2].style.opacity='0.0';
  var odd = document.querySelectorAll('li:nth-child(odd)')
  for(var n=0;n<odd.length;n++){
    odd[n].style.backgroundColor='red';
  }
 
