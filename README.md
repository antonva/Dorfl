Dorfl
=========
>"we can rebake him, we have the pottery."

A modular irc bot written in javascript using node.js.

Dependencies:
-------------
  Node.Js maintained via latest stable. Easiest way to make sure you're running it would be:
  
  ``` bash
  sudo npm cache clean -f
  sudo npm install -g n
  sudo n stable
  ``` 
  
  In the near future I will be adding proper logging.
  
Instructions:
-------------
  ``` bash
  git clone https://github.com/antonva/ircstream  
  npm install
  node server.js
  ```
Notes:
------
  ./modules/config.js fetches configurable variables via Firebase by default. 
  These can either be hardcoded or implemented differently.



  
  
