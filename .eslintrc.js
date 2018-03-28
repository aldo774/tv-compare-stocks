module.exports = {
    'extends': 'airbnb',
    'rules': {
      'linebreak-style': ["error", "windows"],
      'class-methods-use-this': ["error", { "exceptMethods": ["request"] }],
      'import/no-extraneous-dependencies': ['error', {'devDependencies': ['tests/*.js', 'src/*.js']}]
    }
};
