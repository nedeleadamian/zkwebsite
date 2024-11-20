module.exports = {
    "root": false,
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "plugins": [
        "vue"
    ],
    "rules": {},
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "parser": "@babel/eslint-parser",
        "ecmaVersion": 2020,
        "sourceType": "module",
        "requireConfigFile": false
    }
}