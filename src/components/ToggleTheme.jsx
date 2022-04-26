import React from 'react';
import { connect } from 'react-redux';
import {
  mapDispatchToProps,
  mapStateToProps,
} from '../features/App/appSelector';

import { RiLightbulbFill, RiLightbulbLine } from 'react-icons/ri';
import Button from './Button';

const ToggleTheme = ({ theme, setTheme }) => {
  return (
    <Button onClick={() => setTheme(theme)} style={{ marginBottom: 16 }}>
      {theme === 'light' ? (
        <RiLightbulbFill size={18} />
      ) : (
        <RiLightbulbLine size={18} />
      )}
    </Button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTheme);
