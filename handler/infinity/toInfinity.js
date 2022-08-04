const { infinity_char } = require('../../settings');

function ParseDeepArray(target) {
  target.forEach((item, index) => {
    if (!item) return item;

    item = item === infinity_char ? Infinity : item;
    switch (item.constructor) {
      case Array: item = ParseDeepArray(item); break;
      case Object: item = ParseDeepObject(item); break;
      case Number: item = item === infinity_char ? Infinity : item;
    };
    target[index] = item;
  });
  return target;
};

function ParseDeepObject(target) {
  var entries = Object.entries(target);
  entries.forEach(([key, item]) => {
    if (!item) return { [key]: item };

    item = item === infinity_char ? Infinity : item;
    switch (item.constructor) {
      case Array: item = ParseDeepArray(item); break;
      case Object: item = ParseDeepObject(item); break;
      case Number: item = item === infinity_char ? Infinity : item;
    };
    target[key] = item;
  });
  return target;
};

function charToInfinity(data) {
  if (data === infinity_char) data = Infinity;
  switch (data.constructor) {
    case Array: data = ParseDeepArray(data); break;
    case Object: data = ParseDeepObject(data); break;
  };
  return data;
};
module.exports = charToInfinity;