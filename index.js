import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "node:fs";

inquirer
  .prompt([
    {message: "Hello there, what is your url that you wanna me to convert to QR ?",
    name:"URL"}
    /* Pass your questions in here */
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('myURL.png'));
    fs.appendFile("myURL", url + "\n", (err)=> {
        if(err) throw err;
        console.log("The url just been updated!");
    })
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log("isTtyError");
    } else {
        console.log(error);
    }
  });
