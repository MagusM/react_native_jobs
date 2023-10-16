module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "settings": {
        "react": {
            "version": "18.2"
        }
    },
    "extends": ["standard", "plugin:react/recommended"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "max-len": ["error", { "code": 80 }],
        "semi": ["error", "always"], // Always show an error for missing semicolons
        "indent": ["error", 2], // Use tabs for indentation
        "react/react-in-jsx-scope": "error" // Ensure 'React' is in scope when using JSX
    }

}
