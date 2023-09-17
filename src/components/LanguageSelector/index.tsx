import { useMemo } from 'react'
import { OptionTypeBase } from 'react-select'
import { useRouter } from 'next/router'

import { find, map } from 'lodash'

import { Select } from 'design-system'

const LanguageSelector = () => {
  const router = useRouter()

  const options: OptionTypeBase = useMemo(
    () =>
      map(router.locales, localeName => ({
        label: localeName.toUpperCase(),
        value: localeName,
      })),
    [router.locales],
  )

  const handleOnChange = ({ value }: typeof options[number]) => {
    document.cookie = `NEXT_LOCALE=${value}; SameSite=None; Secure`
    router.push(router.pathname, router.pathname, { locale: value })
  }

  return (
    <Select
      defaultValue={find(options, { value: router.locale })}
      id="language-selector"
      instanceId="language-selector"
      onChange={handleOnChange}
      options={options}
      variant="minimal"
    />
  )
}

export default LanguageSelector
