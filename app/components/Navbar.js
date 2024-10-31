'use client'

import { AppBar, Toolbar } from '@mui/material'
import NavbarButton from './NavbarButton'

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "green" }}>
      <Toolbar>
        <NavbarButton href="/">Home</NavbarButton>
        <NavbarButton href="/forum" active>Forum</NavbarButton>
        <NavbarButton href="/login" align="right">Login</NavbarButton>
      </Toolbar>
    </AppBar>
  )
}