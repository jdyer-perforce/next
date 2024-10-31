import { AppBar, Toolbar, Button} from '@mui/material'

export default function Navbar() {
  return (
    <AppBar sx={{ bgcolor: "green" }} position="static">
      <Toolbar>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Forum</Button>
        <Button sx={{ marginLeft: "auto" }} color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}