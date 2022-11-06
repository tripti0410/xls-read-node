// Requiring the module
const xlsx = require('xlsx')

// Reading our test file
const file = xlsx.readFile('./example.xls')

let data = []

const sheets = file.SheetNames

for (let i = 0; i < sheets.length; i++) {
  const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
  temp.forEach((res) => {
    data.push(res)
  })
}

// Printing data
console.log(data)