function extractFile (input) {
    let fileNameStartIndex = input.lastIndexOf("\\") + 1
    let fileExtensionStart = input.lastIndexOf('.') + 1;
    let fileNmaeIndexEnd = fileExtensionStart - 1;
    let name = input.substring(fileNameStartIndex, fileNmaeIndexEnd);
    let extension = input.substring(fileExtensionStart);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extractFile ('C:\\Internal\\training-internal\\Template.pptx');
console.log('-----');
extractFile ('C:\\Projects\\Data-Structures\\LinkedList.cs');