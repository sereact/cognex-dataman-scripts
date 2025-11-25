// Default script for data formatting
const DELIM = ';';
const CRLF = '\r\n';

function onResult(decodeResults, readerProperties, output) {

    resultArray = [];

    resultArray = [];
    for (let i = 0; i < decodeResults.length; i++) {
        if (decodeResults[i].decoded) {
            resultArray.push(decodeResults[i].content + DELIM + decodeResults[i].trucheck.overall.gradeLetter);
        }
    }
    output.content = resultArray.join(CRLF) + CRLF;
}