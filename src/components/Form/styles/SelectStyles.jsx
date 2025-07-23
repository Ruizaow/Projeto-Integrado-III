const selectStyles = {
  input: (provided) => ({
    ...provided,
    caretColor: 'transparent',
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#CDC9C9',

    width: '480px',
    height: '60px',

    border: 'none',
    borderRadius: '16px',
    paddingLeft: '8px',
    
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
    boxShadow: state.isFocused ? '0 0 0 2px #323A42' : 'none',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: '#CDC9C9',
    color: '#323A42',
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.6)',
    marginTop: '2px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#F47C48' : '#CDC9C9',
    color: '#323A42',
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
    paddingLeft: '18px',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#848689',
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
    marginBottom: '10px',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#323A42',
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
    marginBottom: '10px',
  }),
};

export default selectStyles;