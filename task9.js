var addForm =document.getElementById('addForm');
var itemlist = document.getElementById('items');
var classlist=document.getElementsByClassName('list-group-item');
var filter = document.getElementById('filter');




addForm.addEventListener('submit',addItem);
itemlist.addEventListener('click',remove);
filter.addEventListener('keyup', filterItems);

function addItem(e)
{
    e.preventDefault();
    var newitem=document.getElementById('item').value;
     var  description = document.getElementById('description').value;
    var li = document.createElement('li');

    li.classList.add('list-group-item')
    console.log(li);

    li.appendChild(document.createTextNode(newitem.value));
    li.appendChild(document.createTextNode(description.value));

    var btn = document.createElement('button')
    //or we can add:
    //btn.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right' ,'delete');
    //btn.innerText='X';
    var newele=document.createElement('button');
    newele.className=' btn btn-primary btn-sm float-right';
    newele.appendChild(document.createTextNode('Edit'));
    itemlist.children[i].appendChild(newele);

    btn.className = ' btn btn-danger btn-sm float-right delete'
    btn.appendChild(document.createTextNode('X'));

    li.appendChild(btn);
    li.appendChild(newele)

    itemlist.appendChild(li);



}

function remove(e)
    {
    if(e.target.classList.contains('delete'))
        if(confirm('Are you sure'))
        {
            {
                var li = e.target.parentElement;
                itemlist.removeChild(li);
            } 
        }

    }

    var items= document.getElementsByTagName('li');

    //console.log(items.length)

    for(i=0; i<classList.length;i++)
    {   
        var newele=document.createElement('button');
        newele.className='  btn-sm float-right';
        newele.appendChild(document.createTextNode('Edit'));
        itemlist.children[i].appendChild(newele);

    }
    function filterItems(a){
        // convert text to lowercase
        var text = a.target.value.toLowerCase();
        // Get lis
        var items = itemList.getElementsByTagName('li');
        // Convert to an array
        Array.from(items).forEach(function(item){
          var itemName = item.firstChild.textContent;
          if(itemName.toLowerCase().indexOf(text) != -1)
          {
            item.style.display = 'block';
          } 
          else {
            item.style.display = 'none';
          }
        });
    }
    