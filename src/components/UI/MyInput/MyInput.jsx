import classes from "./MyInput.module.css"

const MyInput = ({placeholder, value, onChange, required}) => {
  return (
<input className={classes.myInput} type="text" value={value} placeholder={placeholder} onChange={onChange} required={required}/>
  )
}
export default MyInput;