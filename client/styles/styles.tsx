import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`, 
    body: `'Open Sans', sans-serif` 
  }, 
  colors: {
    green: {
        veryDark: "#102F27",
        dark: "#226252", 
        medium: "#308771", 
        light: "#E2EFDE", 
        veryLight: "F4F9F2"
    },
    white: {
        veryDark: "FBFBFB", 
    }, 
 

  },
})
export default theme