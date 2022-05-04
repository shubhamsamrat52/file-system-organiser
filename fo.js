// if we have to give input in js then we have to give in the form of array.
 
// let input = process.argv[2] // node[0] fo.js[1] input[2]
let input = process.argv.slice(2)
let command =input[0]

let fs = require('fs');
let path = require('path');
// console.log(input) 

switch(command){
    case 'tree':
        console.log('tree implemented')
        break
    case 'organise':
        // console.log('organise implemented')
        organiseFn(input[1]);
        break;
    case 'help':
        // console.log('help implemented')
        helpFn();
        break;
    default:
        console.log('please enter a valid command')
        break;
}
// help fn will list all the fn by which you can run the commands of this project.
function helpFn(){
    console.log(`All command lists are:->>
                1. tree :node fo.js tree <directory path>
                2. organise: node fo.js organise <directory path>
                3. help: help implemented`)
                
}
    // organiseFn will organise all your target folder's files in a diffetent folders acc to their extensions.
function organiseFn(dirpath){
    // 1. not enter path
    // 2. pass invalid path
    let destpath;
    if(dirpath==undefined){
        console.log("please enter a valid path");
        return;
    }
     // 2. pass invalid path
     let doesExist = fs.existsSync(dirpath);
        // passed path is exists or not.

        // 
     if(doesExist==true){
         destpath = path.join(dirpath,'organise_files'); 
        }
        
        // check whether in the given destpath does a folder exists with same name and if does not exists make a folder.
        if(fs.existsSync(destpath)==false){
            fs.mkdirSync(destpath);
        }
        else{
            console.log("folder already exists");
        }
}