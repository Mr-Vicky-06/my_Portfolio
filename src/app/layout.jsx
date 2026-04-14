import './globals.css'
import CyberCursor from '../components/CyberCursor'
import ScrollProgress from '../components/ScrollProgress'

export const metadata = {
  title: 'Vignesh | AI & Systems Engineer',
  description: 'Premium interactive portfolio showcasing AI, Data Science, and Autonomous Systems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className="antialiased font-sans selection:bg-mechanical-accentCyan selection:text-black cursor-auto md:cursor-none">
        <ScrollProgress />
        <CyberCursor />
        {children}
      </body>
    </html>
  )
}
