
<nav class="nav">
    <a href="/">Home</a>
    <a href="/books">Books</a>
    <a href="/about">About</a>
  </nav>
  
  <style> 
    .nav {
  background-color: cyan;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
}

.nav a {
  color: black;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  transition: background-color 0.3s, color 0.3s;
}

.nav a:hover {
  background-color: magenta;
  color: white;
}

</style>