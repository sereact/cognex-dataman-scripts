// Default script for data formatting
const DELIM = ';';
const CRLF = '\r\n';

function onResult(decodeResults, readerProperties, output) {

    const resultArray = decodeResults
        .filter(res => res.decoded && res.symbology?.center)
        .map(res => `${res.content}${DELIM}${res.symbology.center.x}${DELIM}${res.symbology.center.y}`);

    output.content = resultArray.length > 0 ? resultArray.join(CRLF) + CRLF : "";
}