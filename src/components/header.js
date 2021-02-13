/** @jsx jsx */
import { jsx } from "theme-ui"

export default function Header(props) {
  return (
    <header
      sx={{
        // this uses the value from `theme.space[4]`
        padding: 4,
        // these use values from `theme.colors`
        color: "background",
        backgroundColor: "primary",
      }}
    >
      {props.children}
    </header>
  )
}