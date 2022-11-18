/**
 * Copyright 2016, Yahoo Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

// vars
var languagesData = require('../data/languages.json');
var strictLanguagesData = require('../data/strict-languages.json');

function _mapElement ([key, lang]) {
    return {
        code: key,
        int: lang.int,
        native: lang.native,
    };
}

function _filter (filterArr) {
    return filterArr != null
        ? ([key]) => filterArr.includes(key)
        : () => true;
}

function _filterList (listObj, filterArr) {
    return Object.entries(listObj)
        .filter(_filter(filterArr))
        .map(_mapElement);
}

function _validateConfig(config) {
    if (typeof config !== 'object' && !Array.isArray(config) && config != null) {
        throw new Error('Argument `config` must be an object');
    }

    const keys = Object.keys(config)

    if (keys.length > 2) {
        throw new Error('Argument `config` should contain only 2 properties!');
    }

    const allowedProperties = ['supportedLangs', 'strict'];

    if (!keys.every((key) => allowedProperties.includes(key))) {
        throw new Error('Argument `config` may contain only supportedLangs or strict properties');
    }

    if (config.supportedLangs != null && !Array.isArray(config.supportedLangs)) {
        throw new Error('Argument `config.supportedLangs` should be an array!');
    }
}

function getList (config = {}) {

    _validateConfig(config);

    var filterListArr = [];

    if (config.strict) {
        filterListArr = _filterList(strictLanguagesData, config.supportedLangs);
    } else {
        filterListArr = _filterList(languagesData, config.supportedLangs);
    }

    return filterListArr;
}

module.exports = {
    getList
};
