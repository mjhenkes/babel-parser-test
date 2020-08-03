const babel = require('@babel/core');
const fs = require('fs');

const filePath = './class.jsx';

const source = fs.readFileSync(filePath, 'utf8');

const options = {
  parserOpts: {
    plugins: [
      'jsx',
      'flow',
      'asyncGenerators',
      'bigInt',
      'classProperties',
      'classPrivateProperties',
      'classPrivateMethods',
      'doExpressions',
      'dynamicImport',
      'exportDefaultFrom',
      'exportNamespaceFrom',
      'functionBind',
      'functionSent',
      'importMeta',
      'logicalAssignment',
      'nullishCoalescingOperator',
      'numericSeparator',
      'objectRestSpread',
      'optionalCatchBinding',
      'optionalChaining',
      'throwExpressions',
      'topLevelAwait',
      'estree',
    ],
  },
};

const ast = babel.parseSync(source, options);

console.log('parsed', JSON.stringify(ast, null, 2));
