<!-- Header.svelte -->
<nav>
   <a href="/">Home</a>
   <a href="/books">Books</a>
   <a href="/about">About</a>
 </nav>
 
 <style>
   @import '../assets/main.css';
 
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
 