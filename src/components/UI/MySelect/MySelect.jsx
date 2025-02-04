const MySelect = ({ options, defaultValue, onChange, value }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value='' disabled>{defaultValue}</option>
      {options.map(option =>
        <option key={option.name} value={option.name}>{option.title}</option>
      )}
    </select>
  )
}

export default MySelect;