

import inquirer from 'inquirer'

import qr from 'qr-image'

import fs from 'fs'



// inquirer
//   .prompt([
//     {
//         type: 'confirm',
//         name: 'continue',
//         message: 'Do you wnat to continue',
//     }
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//     if(answers.continue){
//         console.log('Continuing....')
//     }else{
//         console.log('Stopping....')
//     }
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       console.log("Prompt couldn't be rendered in the current environment")
//     } else {
//       console.log(`Error occured:  ${error}`)
//     }
//   });

// const inquirer = require('inquirer');

// inquirer.prompt([
//   {
//     type: 'list',
//     name: 'color',
//     message: 'What is your favorite color?',
//     choices: ['Red', 'Green', 'Blue', 'Yellow'],
//   }
// ])
// .then((answers) => {
//   console.log(`Your favorite color is: ${answers.color}`);
// })
// .catch((error) => {
//   if (error.isTtyError) {
//     console.log('Prompt couldn\'t be rendered in the current environment');
//   } else {
//     console.error('An error occurred:', error);
//   }
// });

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

//1 

// inquirer
//   .prompt([
//     {
//         type: 'input',
//         name: 'firstName',
//         message: 'What is your first name ? '
//     },
//     {
//         type: 'input',
//         name: 'lastName',
//         message: 'What is your last name ? '
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is your email ? '
//     },
//   ])
//   .then((answers) => {
//     const info = `Your name is ${answers.firstName} ${answers.lastName}. Your email is ${answers.email}`
//     // console.log(info)

//     var qr_png = qr.image(info, { type: 'png' });
//     qr_png.pipe(fs.createWriteStream('user_info.png'));
     
//     var png_string = qr.imageSync(info, { type: 'png' });

//     fs.writeFile('user_info',info, (err)=> {
//       if (err) throw err;
//       console.log('The file has been saved!')
//     })
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       console.log(`Prompt couldn't be rendered in the current environment`)
//     } else {
//       console.log(`Error occured: ${error}`)
//     }
//   });


  inquirer
  .prompt([
    {
        type: 'input',
        name: 'url',
        message: 'What is your website URL ?'
    }
  ])
  .then((answers) => {
    const info = `Your url ${answers.url}`
    // console.log(info)

    var qr_png = qr.image(info, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('url.png'));
     
    var png_string = qr.imageSync(info, { type: 'png' });

    fs.writeFile('url',info, (err)=> {
      if (err) throw err;
      console.log('The file has been saved!')
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(`Prompt couldn't be rendered in the current environment`)
    } else {
      console.log(`Error occured: ${error}`)
    }
  });

//   var qr_png = qr.image(info, { type: 'png' });
//   qr_png.pipe(require('fs').createWriteStream('user_info.png'));
   
//   var png_string = qr.imageSync('I love QR!', { type: 'png' });
