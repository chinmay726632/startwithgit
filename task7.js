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
 