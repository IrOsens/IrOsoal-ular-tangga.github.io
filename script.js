// Membuat element <ul>

var ul = document.createElement("ul");

// Menambahkan element <ul> ke dalam <div id="list">

document.getElementById("list").appendChild(ul);

// Perulangan untuk menambahkan element <li> dengan angka 1-50

for (var i = 1; i <= 50; i++) {

  var li = document.createElement("li");

  li.innerHTML = i;

  ul.appendChild(li);

}

