//  var header=document.getElementById('header-title');
//  header.style.borderBottom='solid 3px black';
// var add = document.querySelectorAll('.title');
//  add[0].style.fontWeight ='bold';
//  add[0].style.backgroundColor ='green';
//  var list = document.getElementsByClassName('list-group-items');
//  console.log(list);
//   for(var j=0;j<=list.length;j++)
//  {
//       list[j].style.backgroundColor='blue';
//  }
//  list.style.fontWeight='bold';
//  list[2].style.backgroundColor='green';
//  var li = document.getElementsByTagName('li');
//  for(var i=0;i<=li.length;i++)
//  {
//     li[i].style.backgroundColor='#f4f4f4';
//  }
//   var item2 = document.querySelectorAll('.list-group-item');
//   item2[1].style.backgroundColor='green';
//   item2[1].style.color='blue';
//   item2[2].style.opacity='0.0';
//   var odd = document.querySelectorAll('li:nth-child(odd)')
//   for(var n=0;n<odd.length;n++){
//     odd[n].style.backgroundColor='red';
//   }
 // parentElement
 var itemList = document.querySelector('#items');
 console.log(itemList.parentElement);
 itemList.parentElement.style.backgroundColor = '#f4f4f4';
 console.log(itemList.parentElement.parentElement.parentElement);
 //first child
 console.log(itemList.firstChild);
 // first elemntChild
 console.log(itemList.firstElementChild);
 itemList.firstElementChild.textContent='heelo 1';
 //last child
 console.log(itemList.lastChild);
 //last child Element
 console.log(itemList.lastElementChild);
 itemList.lastElementChild.textContent='heelo 4';
 // next sibling
 console.log(itemList.nextSibling);
 // next elemnt sibling
 console.log(itemList.nextElementSibling);
 //previous sebling
 console.log(itemList.previousSibling)
 //privious element sibling
 console.log(itemList.previousElementSibling);
 itemList.previousElementSibling.style.color='green';
 // create element
 var newDiv = document.createElement('div');
 newDiv.className='hello';
 newDiv.id='helo1';
 newDiv.setAttribute=('title','heelo div');
 var newDivtext = document.createTextNode('hello world');
 newDiv.appendChild(newDivtext);
 var container= document.querySelector('header .container');
 var h1 = document.querySelector('header h1');
 console.log('newDiv');
 container.insertBefore(newDiv,h1);
 //
 
 
 




