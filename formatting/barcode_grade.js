// Default script for data formatting
const DELIM = ';';
const CRLF = '\r\n';

function onResult(decodeResults, readerProperties, output) {

    const resultArray = decodeResults
        .filter(res => res.decoded)
        .map(res => `${res.content}${DELIM}${res.trucheck.grade}`);

    output.content = resultArray.length > 0 ? resultArray.join(CRLF) + CRLF : "";
}