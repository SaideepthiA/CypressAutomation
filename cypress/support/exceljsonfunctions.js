const xlsx = require("xlsx");
const fs = require("fs");
class functions{
     static generateExcelFile(){
        console.log("function started")
        let content = JSON.parse(fs.readFileSync("cypress/fixtures/usersapi.json","utf8"));
        let newWB= xlsx.utils.book_new(); //creates new workbook
        let newWS= xlsx.utils.json_to_sheet(content); //converts content to worksheet.
        xlsx.utils.book_append_sheet(newWB,newWS,"users"); //appending worksheet to workbook
        xlsx.writeFile(newWB,"cypress/fixtures/Users.xlsx");
    }
      generateJsonFile(){
        const wb = xlsx.readFile("cypress/fixtures/Users.xlsx");
        const ws= wb.Sheets["users"];
        const data = xlsx.utils.sheet_to_json(ws);
        fs.writeFileSync("cypress/fixtures/datajson.json",JSON.stringify(data,null,2));
        //console.log(jsondiff.diffString("cypress/fixtures/datajson.json","cypress/fixtures/userapi.json"));
       
    }
}
functions.generateExcelFile()


