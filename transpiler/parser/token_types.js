Array.prototype.hasItem = function(val) {
  return this.indexOf(val) > -1;
};

module.exports = {
  terminator : ["ARRAY_END", "DICTIONARY_END", "TUPLE_END", "TERMINATOR"],
  primitive : ["NUMBER", "BOOLEAN", "STRING"],
  collectionStart : ["ARRAY_START", "DICTIONARY_START", "TUPLE_START"],
  verb : ["PUNCTUATION", "OPERATOR", "SUBSTRING_LOOKUP_END", "SUBSTRING_LOOKUP_START"],
  noun : ["DECLARATION_KEYWORD", "IDENTIFIER", "TUPLE_ELEMENT_NAME", "STATEMENT_KEYWORD"]
};