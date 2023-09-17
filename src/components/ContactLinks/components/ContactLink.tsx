import { useResponsiveContext } from 'context/Responsive'
import { Div, Link } from 'design-system'

type Props = {
  children: React.ReactNode
  href: string
  icon: React.ReactNode
  locale?: string | false // RouterLink's locale prop, useful for changing locale route prefix
}

const ContactLink = ({ children, href, icon, locale }: Props) => {
  const { isDesktop } = useResponsiveContext()

  return (
    <Div ai="ce" di="f" fb={!isDesktop ? '100%' : undefined} fd="c">
      <a href={href}>{icon}</a>
      <Link href={href} locale={locale} mt={0.5}>
        {children}
      </Link>
    </Div>
  )
}

export default ContactLink
