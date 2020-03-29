# Simple Node Application

[![Build Status](https://travis-ci.org/rwieruch/minimal-node-application.svg?branch=master)](https://travis-ci.org/rwieruch/minimal-node-application) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/rwieruch/minimal-node-application.svg)](https://greenkeeper.io/)

An easy way to get started with JavaScript on the command line. [Read more about it](https://www.robinwieruch.de/minimal-node-js-babel-setup).

[![Edit minimal-react-webpack-babel-setup](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/rwieruch/minimal-node-application/tree/master/?fontsize=14)

## Installation

* `git clone git@github.com:rwieruch/minimal-node-application.git`
* `cd minimal-node-application`
* `npm install`
* `npm start`
* optional: include *.env* in your *.gitignore*

## Debugging in VS Code

Borrowed from: https://github.com/microsoft/vscode-recipes/tree/master/nodemon

_Note: Debugging works best after installing and running a long running task, such as **Express** web server. VS Code automatically re-attaches to a newly spanned Node process whenever files change, but because this default console app immediately ends its process, VS Code doesn't have enough time to re-attach reliably._

* Terminal:
  * `npm run debug`
* VS Code:
  * Go to the Debug view and select `Node: Nodemon` configuration
  * Start the debugger with <kbd>F5</kbd>
  * VS Code should list all of the running node processes. Select `nodemon --exec babel-node --inspect src/index.js` 
![image](https://user-images.githubusercontent.com/504505/77853652-0c17a580-719a-11ea-88f1-4fc02ddd568c.png)
  * Set a breakpoint and it should now be hit
