
import useMedia from './useMedia'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const isWide = useMedia('(min-width: 970px')

  return (
    <div>
      footer
    </div>
  )
}

export default Footer
