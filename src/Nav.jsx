function Nav() {
  const food = [];
  food.push("chocolate");
  food.push("ice cream");
  food.push("watermelon");
  return(
    <ul>
      <li>{food[0]}</li>
      <li>{food[1]}</li>
      <li>{food[2]}</li>
    </ul>
  )
}

function Nav2() {
  return(<p>lala</p>)
}
export default Nav
export { Nav2 }