import * as React from 'react';
import 'react-day-picker/style.css';

import CodeSandboxer from 'react-codesandboxer';
import OriginalCodeBlock from '@theme-original/CodeBlock';

import pkg from 'react-day-picker/package.json';

// Default implementation, that you can customize
/**
 * Very basic CodeBlock to run an app and show its source.
 *
 * ```include
 * filename
 * ```
 */
export default function CodeBlock(props) {
  const { children, className } = props;

  if (className !== 'language-include') {
    return (
      <OriginalCodeBlock className="language-jsx" {...props}>
        {children}
      </OriginalCodeBlock>
    );
  }

  const fileName = children.replace(/\n*/gi, '');

  try {
    require(`../../docs/${fileName}`).default;
  } catch (e) {
    return <OriginalCodeBlock {...props}>{e.message}</OriginalCodeBlock>;
  }

  const Component = require(`../../docs/${fileName}`).default;
  const src = require(`!!raw-loader!../../docs/${fileName}`).default;

  return (
    <div className="rdp-codeblock" style={{ position: 'relative' }}>
      <OriginalCodeBlock {...props} title="test" className="language-tsx">
        {src}
      </OriginalCodeBlock>
      <CodeSandboxer
        examplePath={`website/docs/${fileName}`}
        dependencies={{
          'react-day-picker': pkg.version,
          'date-fns': '2.19.0',
          '@babel/runtime': '7.13.10',
          react: '17.0.1',
          'react-dom': '17.0.1'
        }}
        gitInfo={{
          account: 'gpbl',
          branch: 'master',
          repository: 'react-day-picker',
          host: 'github'
        }}
        name={`react-day-picker: ${fileName}`}
      >
        {() => (
          <button type="submit" style={{ padding: '.4em .8em' }}>
            ↗ CodeSandbox
          </button>
        )}
      </CodeSandboxer>

      <details open>
        <summary>Output</summary>
        <div>
          <Component />
        </div>
      </details>
    </div>
  );
}
