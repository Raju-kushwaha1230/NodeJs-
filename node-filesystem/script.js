fs.appendFile('hello.txt', 'hey this side raju', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Data appended to file successfully');
    }
});

fs.open('hello.txt', 'w', (err, fd) => {
    if (err) {
        console.error('Error opening file:', err);
    } else {
        console.log('File opened successfully');
        fs.close(fd, (err) => {
            if (err) {
                console.error('Error closing file:', err);
            } else {
                console.log('File closed successfully');
            }
        });
    }
});

fs.unlink('hello.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('File deleted successfully');
    }
});
var fs = require('fs')

// fs.appendFile('hello.txt','hey this side raju',function(err){
//     if(err) throw err;
//     console.log('saved')
    
// })

// fs.open('hello.txt','w',function(err,data){
//     if(err) return err;
//     console.log('saved')
// })
// fs.unlink('hello.txt',function(err){
//     if(err) return err;
//     console.log('file deleted')
// })