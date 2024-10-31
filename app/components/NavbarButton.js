import { Button } from '@mui/material'
import { usePathname } from 'next/navigation'

const style = {
	margin: "4px",
	"&:hover": {
		borderBottom: "2px solid lightgreen"
	}
}

const activeStyle = {
	borderBottom: "2px solid darkgreen"
}

export default function NavbarButton({ children, href, align }) {
	const pathname = usePathname()
	const active = pathname == href
	return (
		<Button href={href} disableRipple color="inherit" sx={[
			style,
			active ? activeStyle : null,
			align == "right" ? { marginLeft: "auto" } : null
		]}>
			{children}
		</Button>
	)
}