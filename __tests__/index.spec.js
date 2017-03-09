/**
 * Copyright 2016, Yahoo Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

var LangList = require('../index');

var Languages = require('../data/languages.json');

var StrictLanguages = require('../data/strict-languages.json');

describe('index', function() {

    it('should return object after `require(\'lang-list\')`', function () {
        expect(LangList).toEqual(jasmine.any(Object));
    });

    it('should be a function for `LangList.getList`', function () {
        expect(LangList.getList).toEqual(jasmine.any(Function));
    });

    it('should throw exception when calling `LangList.getList()` without config', function () {
        expect(function () {
            LangList.getList();
        }).toThrowErrorMatchingSnapshot();
    });

    it('should throw exception when calling `LangList.getList()` without `config.supportedLangs`', function () {
        expect(function () {
            LangList.getList({});
        }).toThrowErrorMatchingSnapshot();
    });

    it('should throw exception when calling `LangList.getList()` with wrong type for `config.supportedLangs`', function () {
        expect(function () {
            LangList.getList({ supportedLangs: 'ar' });
        }).toThrowErrorMatchingSnapshot();
    });

    it('should return NONE strict languages list when calling `LangList.getList()` without config', function () {
        expect(LangList.getList({ supportedLangs: ['ar', 'en', 'fr', 'es', '00'] })).toMatchSnapshot();
    });

    it('should return strict languages list when calling `LangList.getList()` without config', function () {
        expect(LangList.getList({ supportedLangs: ['ar_AR', 'en_US', 'fr_CA', 'es', '00'], strict: true })).toMatchSnapshot();
    });

    it('should match languages list snapshot', function () {
        expect(Languages).toMatchSnapshot();
    });

    it('should match strict languages list snapshot', function () {
        expect(StrictLanguages).toMatchSnapshot();
    });
});
