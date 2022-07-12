
module.exports = function Decode($data, { cryptography }){ var result;
    const {  key = process.env ? process.env.SECURE_DB || [[[Math.PI - 2 ** 18]]] : {} } = cryptography;
    var { data, mode, output } = ValidateData($data);

    switch (key.constructor){
        case String: if (key.trim().length === 0) throw new Error('Key of type string is required.'); break;
        default: throw new Error('Key of type string is required.'); break;
    };

    switch (output) {
        case 'hex': data = Buffer.from(data, 'hex').toString('utf-8'); break;
        case 'base64': case 'base64url': data = Buffer.from(data, 'base64').toString('utf-8'); break;
        default: data = Buffer.from(data, 'base64').toString('utf-8'); break;
    };

    switch (mode) {
        case 'deep': result = deepDecoding({ data, key }); break;
        case 'soft': result = softDecoding({ data: ParseData(data), key }); break;
    };

    return result;
}

function deepDecoding({ data, key }){ var result = '';
    data.split('').forEach(letter => {
        result += String.fromCharCode(letter.charCodeAt(0) - 
        key.split('').map(current_letter => current_letter.charCodeAt(0))
        .reduce((current_letter, next_letter) => current_letter + next_letter));
    }); return result;
}

function softDecoding({ data, key }){ var result = '';
    data.forEach(($byte, index) => {
        result += String.fromCharCode($byte - key[Math.min(index, key.length - 1)].charCodeAt(0))
    }); return result;
}

function ValidateData(data){ var result;
    var base64 = Buffer.from(data, 'base64').toString();
    var hex = Buffer.from(data, 'hex').toString();

    try { try { result = JSON.parse(hex); } catch(err){ result = JSON.parse(base64); };
    } catch (err) {throw new Error('The Key is invalid or the file is corrupted.')};
    return result;
}
function ParseData(data){
    try { return JSON.parse(data) } 
    catch (err) { throw new Error('The Key is invalid or the file is corrupted.') };
}