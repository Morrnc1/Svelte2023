<!-- Header.svelte -->
<nav>
   <a href="$src/">Home</a>
   <a href="$src/books">Books</a>
   <a href="$src/about">About</a>
 </nav>
 
 <style>
   @import '$lib/main.css';
 
   nav {
     display: flex;
     background-color: #f2f2f2;
     padding: 10px;
   }
 
   nav a {
     margin-right: 10px;
     text-decoration: none;
     color: #333;
   }
 
   nav a:hover {
     font-weight: bold;
   }
 </style>
 