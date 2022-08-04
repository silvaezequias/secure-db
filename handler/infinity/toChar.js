const { infinity_char, max_limit } = require('../../settings.json');

function ParseDeepObject(target) {
  var entries = Object.entries(target);
  entries.forEach(([key, item]) => {
    if (!item) return { [key]: item };

    item = item === Infinity ? infinity_char : item;
    switch (item.constructor) {
      case Array: item = ParseDeepArray(item); break;
      case Object: item = ParseDeepObject(item); break;
      case Number: item = item > max_limit ? infinity_char : item; break;
    };
    target[key] = item;
  })
  return target;
}

function ParseDeepArray(target) {
  target.forEach((item, index) => {
    if (!item) return item;

    item = item === Infinity ? infinity_char : item;
    switch (item.constructor) {
      case Array: item = ParseDeepArray(item); break;
      case Object: item = ParseDeepObject(item); break;
      case Number: item = item > max_limit ? infinity_char : item; break;
    };
    target[index] = item;
  });
  return target;
}

function infinityToChar(data) {
  if (data === Infinity) data = infinity_char;
  switch (data.constructor) {
    case Array: data = ParseDeepArray(data); break;
    case Object: data = ParseDeepObject(data); break;
  };
  return data;
};


module.exports = infinityToChar;