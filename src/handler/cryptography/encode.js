module.exports = function Encode(data, { cryptography }){ var result = '';
    var { 
        key = process.env ? process.env.SECURE_DB || [[[1, 999 - Math.PI]]] : {},
        mode = ['deep', 'soft'][0], 
        output = [ 'hex', 'base64'][1]
    } = cryptography;

    switch (key.constructor){
        case String: if (key.trim().length === 0) throw new Error('Key of type string is required.'); break;
        default: throw new Error('Key of type string is required.'); break;
    }

    switch (mode) {
        case 'deep': result = deepCoding({ data, key }); break;
        case 'soft': result = softCoding({ data, key }); break;
        default: result = deepCoding({ data, key }); break;
    }

    switch (output) {
        case 'hex': result = Buffer.from(result).toString('hex'); break;
        case 'base64': case 'base64url': result = Buffer.from(result).toString('base64url'); output = 'base64url'; break;
        default: result = Buffer.from(result).toString('base64url'); break;
    }
    
    return Buffer.from(JSON.stringify({ output, mode, data: result })).toString(output);
}

function deepCoding({ data, key }){ var result = '';
    data.split('').forEach(letter => {
        result += String.fromCharCode(letter.charCodeAt(0) + 
        key.split('').map(current_letter => current_letter.charCodeAt(0))
        .reduce((current_letter, next_letter) => current_letter + next_letter));
    }); return result;
}

function softCoding({ data, key }){ var $bytebag = [];
    data.split('').forEach((letter, index) => {
        $bytebag.push(letter.charCodeAt(0) + key[Math.min(index, key.length - 1)].charCodeAt(0));
    }); return JSON.stringify($bytebag);
}