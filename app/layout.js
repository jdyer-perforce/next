import Navbar from "./components/Navbar"
import './styles.css'

export const metadata = {
  title: "My Title",
  description: "My Description",
  keywords: "Your, Keywords, Here",
  author: "Jonathan Dyer"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}