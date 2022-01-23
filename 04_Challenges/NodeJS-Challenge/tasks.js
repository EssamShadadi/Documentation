
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
fileName = "./database.json"
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  if (process.argv[2]){
    fileName = process.argv[2]
  }
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}
tasksList = [];

/*
Read data from JSON file using fs, JSONstringfy and jsonparse

*/
const fs = require("fs");
const { connect } = require("http2");

function jsonReader(filePath, cb) {
list = [];
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      
      for (let i= 0;i<object.length;i++){
        list.push(object[i]);
      }

      return cb && cb(null, list);
    } catch (err) {
      return cb && cb(err);
    }
  });
}


jsonReader("./database.json", (err, list) => {
  if (err) {
    console.log(err);
    return;
  }
  tasksList= list;
});

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  tempText = text.trim();
  textToArray = tempText.split(" ");
  if (text === 'quit\n' || text ==='exit\n') {
    save(fileName)
    quit();
  }
  else if(textToArray[0] === 'hello'){
    hello(textToArray[1]);
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text ==="list\n"){
    showTasks(tasksList);
  }
  else if(textToArray[0] === "add"){
    if(!textToArray[1]){
      console.log("error");
    }
    else{
      tasksList.push({text:textToArray[1], done:false});
    }
    
  }
  else if (textToArray[0]==="remove"){
    if (!textToArray[1]){
      tasksList.pop();
    }
    else{
      if (textToArray[1]<tasksList.length){
        tasksList.splice(parseInt(textToArray[1])-1);
      }
      else{
        console.log("Your entered number is out of list rang!")
      }
      
    }
    
  }
  else if(textToArray[0] === "edit"){
    if(!textToArray[1]){
      console.log("Error! You havve to enter at least a new text.");
    }
    else if (isNaN(parseInt(textToArray[1]))){
      tasksList[tasksList.length-1].text=textToArray[1];
    }
    else{
      
      tasksList[parseInt(textToArray[1])-1].text=textToArray[2];
    }

  }
  else if(textToArray[0]==="check"){
    tasksList[parseInt(textToArray[1])-1].done = true;
  }
  else if(textToArray[0]==="uncheck"){
    tasksList[parseInt(textToArray[1])-1].done = false;
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(name){
  if (name)
  console.log('hello '+name+"!");
  else
  console.log('hello!');
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  

    const jsonString = JSON.stringify(tasksList)
    fs.writeFileSync('./database.json', jsonString)
   
  console.log('Quitting now, goodbye!')
  process.exit();
}


/**
 * saving the data to file
 *
 * @returns {void}
 */
 function save(fileName){
  

  const jsonString = JSON.stringify(tasksList)
  fs.writeFileSync(fileName, jsonString)
}

/**
 * help
 * This function is supposed to list all avilable commands
 * @returns {void}
 */
 function help(){
  console.log('hello: saying hello!');
  console.log('hello[name]: saying hello [name]!');
  console.log('quit: quit the app');
  console.log('list: show list of item');
  console.log('add: add item tto list');
  console.log('remove: remove last item from list');
  console.log('remove [number]: remove item from list');
  console.log('check [number]: check the item as done');
  console.log('uncheck [number]: uncheck the item as not done');
}

/**
 * showTasks
 * This function is supposed to list all avilable commands
 * @returns {void}
 */

 function showTasks(list){
   for (let i = 0 ; i<list.length;i++){
     let done = checkSign(list[i].done) 
     console.log(i +1+". "+done+" "+ list[i].text);
   }
  
}

/**
 * help
 * This function is supposed to list all avilable commands
 * @returns {string}
 */
function checkSign(done){
  if (done){
    return "[✓]"
  }
  return "[ ]"
}
// The following line starts the application
startApp("Essam")
