# lang-list
![Build Status](https://github.com/shadiabuhilal/lang-list/actions/workflows/push-workflows.yml/badge.svg)


Node.js lib helps to retrieve a list of supported languages to be used in web apps UI.


## Usage

### require lang-list lib
```js
var LangList = require('lang-list');
```


### LangList.getList()
This function will retrieve a list of supported languages to be used in web apps UI based on the passed config object.

__Arguments:__


|     NAME       |        TYPE          | DEFAULT | REQUIRED | DESCRIPTION                                                  |
|----------------|----------------------|---------|----------|--------------------------------------------------------------|
| `supportedLangs` | `Array` of `Strings` |         |    YES   | Retrieve only the supported languages for your web app.      |
| `strict`         | `Boolean`            | `false` |     NO   | Retrieve only the supported languages with strict codes only |


__Examples:__

```js 
var languagesArr = LangList.getList({ supportedLangs: ['ar', 'en', 'fr', 'es'] });
/*
languagesArr will be: 
[
    {
        "code": "ar",
        "int": "Arabic",
        "native": "العربية",
    },
    {
        "code": "en",
        "int": "English",
        "native": "English",
    },
    {
        "code": "fr",
        "int": "French",
        "native": "Français",
    },
    {
        "code": "es",
        "int": "Spanish",
        "native": "Español",
  }
]
*/
```

```js
// calling `getList` with strict = true.
var strictLanguagesArr = LangList.getList({ supportedLangs: ['ar_AR', 'en_US', 'fr_CA', 'es_ES'], strict: true );
/*
languagesArr will be: 
[
    {
        "code": "ar_AR",
        "int": "Arabic",
        "native": "العربية"
    },
    {
        "code": "en_US",
        "int": "English (US)",
        "native": "English (US)"
    },
    {
        "code": "fr_CA",
        "int": "French (Canada)",
        "native": "Français (Canada)"
    },
    {
        "code": "es_ES",
        "int": "Spanish (Spain)",
        "native": "Español (España)"
    },
  }
]
*/
```

__With Handlebars Example:__
```html
    <ul class="dropdown-menu">
        {{#each languagesArr}}
        <li><a href="?lang={{code}}">{{native}}</a>
        {{/each}}
    </ul>
```

# License

Copyright 2016, Yahoo Inc.

Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
