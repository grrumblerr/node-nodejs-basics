import {writeFile} from 'fs';
const create = async () => {
    // Write your code here 
    
    writeFile('./src/fs/files/fresh.txt', 'I am fresh and young', {flag: 'wx'}, function (err) {
        if (err) throw new Error ('FS operation failed')
    })
};

await create();