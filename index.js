module.exports = function (dump, search, replace) {

  return dump.replace(new RegExp(search, 'g'), replace)
    .replace(/s:([1-9]\d*):\\"(.*?)\\";/g, (match, length, value) => {
      var unescapedValue = value.replace(/(?<!\\)\\(?!\\)/g, '').replace(/\\\\/g, '\\');
      var escapedLength = Buffer.byteLength(unescapedValue, 'utf-8');
      return `s:${escapedLength}:\"${value}\";`
    });
}
