import classes from "./MyButton.module.css"

const MyButton = ({children, onClick}) => {
  return (
    <button className={classes.myButton} onClick={onClick}>{children}</button>
  )
}

export default MyButton;