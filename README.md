Ircstream
=========

A modular irc bot to serve as a bridge between Obscene and Twitch.tv chat.

Dependencies:
-------------
  Node.Js maintained via latest stable. Easiest way to make sure you're running it would be:
  
  ``` bash
  sudo npm cache clean -f
  sudo npm install -g n
  sudo n stable
  ``` 
  
  In the near future log.js will depend on postgres. I'll make sure to include an easy way to skip it.
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



  
  
