async function generateUniqueNumber(model, fieldName = 'number', min = 100, max = 1000) {
    let uniqueNumber;
    let isUnique = false;
  console.log('ll');
  
    while (!isUnique) {
      uniqueNumber = Math.floor(Math.random() * (max - min + 1)) + min; 
      const existingRecord = await model.findOne({ [fieldName]: uniqueNumber });
      if (!existingRecord) {
        isUnique = true;
      }
    }
    console.log('db',uniqueNumber);
  
    return uniqueNumber;
  }
  
  module.exports = generateUniqueNumber;
