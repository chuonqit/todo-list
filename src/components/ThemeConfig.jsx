const themeDefault = {
  buttonPrimary: '#1f6feb',
  buttonPrimaryHover: '#388bfd',
  buttonPrimaryBorder: '#1f6feb',
  buttonPrimaryColor: '#ffffff',
  borderRadius: '0.3rem',
  borderDanger: '#f85149',
  borderRadiusTop: '0.3rem 0.3rem 0 0',
  borderRadiusBottom: '0 0 0.3rem 0.3rem',
};

export const DarkTheme = {
  background: '#0d1117',
  textColor: '#c9d1d9',
  boxBackground: '#161b22',
  borderColor: '#30363d',
  buttonDefault: '#21262d',
  buttonDefaultHover: '#30363d',
  buttonDefaultBorder: '#8b949e',
  buttonDefaultColor: '#ffffff',
  ...themeDefault,
};

export const LightTheme = {
  background: '#ffffff',
  textColor: '#24292f',
  boxBackground: '#f6f8fa',
  borderColor: '#d0d7de',
  buttonDefault: '#f6f8fa',
  buttonDefaultHover: '#f3f4f6',
  buttonDefaultBorder: 'rgba(27,31,36,0.15)',
  buttonDefaultColor: '#24292f',
  ...themeDefault,
};
