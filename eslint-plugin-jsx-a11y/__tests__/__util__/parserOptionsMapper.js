const defaultParserOptions = {
  ecmaVersion: 2018,
  ecmaFeatures: {
    experimentalObjectRestSpread: true,
    jsx: true,
  },
};

export default function parserOptionsMapper({
  code,
  errors,
  options = [],
  parserOptions = {},
  settings,
}) {
  return {
    code,
    errors,
    options,
    parserOptions: {
      ...defaultParserOptions,
      ...parserOptions,
    },
    settings,
  };
}
