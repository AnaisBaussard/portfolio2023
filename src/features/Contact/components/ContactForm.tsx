import { useTranslation } from 'next-i18next'

import { Button, Input } from 'design-system'
import { FormContainer } from '../styles'

const ContactForm = () => {
  const { t } = useTranslation('contact')
  return (
    <FormContainer>
      <Input id="name" label={t('contact:form.name')} name="name" />
      <Input id="email" label={t('contact:form.email')} mt={1} name="email" />
      <Input
        id="message"
        label={t('contact:form.message')}
        mt={2}
        name="message"
        variant="textarea"
      />
      <Button mt={2}>{t('contact:form.send')}</Button>
    </FormContainer>
  )
}

export default ContactForm
