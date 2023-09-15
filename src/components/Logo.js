import React from 'react'

export const Logo = (props) => {
  const theme = props.theme === 'white' ? 'dark logo' : 'logo';
  return (
    <div className={theme}>
        {props.data}
    </div>
  );
};

export default Logo;
