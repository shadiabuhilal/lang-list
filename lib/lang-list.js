/**
 * Copyright 2016, Yahoo Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

// vars
var languagesData = require('../data/languages.json');
var strictLanguagesData = require('../data/strict-languages.json');

function _filterList (listObj, filterArr) {

    var listArr = [];

    filterArr.forEach(function (key) {

        if (!listObj[key]) {
            return;
        }

        var lang = listObj[key];

        var LangObj = {
            code: key,
            int: lang.int,
            native: lang.native
        };

        listArr.push(LangObj);
    });

    return listArr;
}

function _validateConfig(config) {

    if (!config) {
        throw new Error('Argument `config` should be an object!');
    }

    if (!config.supportedLangs) {
        throw new Error('Argument `config.supportedLangs` is required!');
    }

    if (!Array.isArray(config.supportedLangs)) {
        throw new Error('Argument `config.supportedLangs` is required!');
    }
}

function getList (config) {

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
    getList: getList
};
