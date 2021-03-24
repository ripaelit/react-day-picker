const sidebar = [
  'intro',
  'start',
  {
    Basics: [
      'basics/navigation',
      'basics/customization',
      'basics/selecting-days',
      'basics/styling'
    ]
  },
  {
    Guides: [
      'guides/modifiers',
      'guides/custom-selections',
      'guides/formatters',
      'guides/localization',
      'guides/input-fields',
      'guides/custom-components'
    ]
  },
  { 'API Reference': require('./typedoc-sidebar.ts') },
  'changelog',
  'contributing',
  'license'
];

module.exports = { sidebar };
