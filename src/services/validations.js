// TODO: Add here the function to validate

const spChars = new RegExp(/[!@#$%^&*()_+\=\[\]{};':"\\|,<>\/?]+/);

const isTagValid = (tag) => {
    return tag.length >= 8 && spChars.test(tag);
}

const isEmpty = (label) => !label || label.length === 0;

exports.isEmpty = isEmpty;

exports.isTagValid = isTagValid;
