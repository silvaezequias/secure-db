const infinity = {
  toChar: require('./infinity/toChar'),
  toInfinity: require('./infinity/toInfinity')
}

function compile(content){ return infinity.toChar(content); };
function decompile(content){ return infinity.toInfinity(content); };

function names(names){
  names = names.flat(Infinity);
  names = names.filter(name => [String, Number].includes(name?.constructor));
  names = names.map(name => name.toString());

  names.map(name => {
    var regex_name = new RegExp('[^a-z0-9\-\_]', 'gi');
    var replaced = name.replace(regex_name, '');
    var length_control = replaced.length > 50 ? replaced.slice(0, 50) : replaced;
    return length_control;
  });
  names = names.filter(name => name);
  return names;
}

module.exports = { 
  compile, decompile, names
};