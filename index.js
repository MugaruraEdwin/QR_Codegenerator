

import inquirer from 'inquirer'

import qr from 'qr-image'

import fs from 'fs'

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

    var qr_png = qr.image(info);
    qr_png.pipe(fs.createWriteStream('qr_url.png'));

    fs.writeFile('url.txt',info, (err)=> {
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
