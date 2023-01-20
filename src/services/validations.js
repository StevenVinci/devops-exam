// TODO: Add here the function to validate
const isTagValid = (tag) => {
    return tag.length >= 8;
}

const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;

exports.isTagValid = isTagValid;
