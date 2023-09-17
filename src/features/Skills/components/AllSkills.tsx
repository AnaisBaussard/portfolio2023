import skillsList from 'config/skillsList'
import { Cell, Div, Grid } from 'design-system'

import SkillsList from './SkillsList'
import { ContactLinks } from 'components'

const AllSkills = () => {
  return (
    <Div mt={4}>
      <Grid cGap={5} mdLgCGap={0} mdLgRGap={3}>
        <Cell $cols={6} mdLgCols={12}>
          <SkillsList category="skills" skills={skillsList.skills} />
        </Cell>
        <Cell $cols={6} mdLgCols={12}>
          <SkillsList category="tools" separatorColor="secondary" skills={skillsList.tools} />
          <SkillsList
            category="softwares"
            mt={3}
            separatorColor="orange"
            skills={skillsList.softwares}
          />
        </Cell>
        <Cell $cols={6} mdLgCols={12}>
          <SkillsList
            category="languages"
            mt={3}
            separatorColor="violet"
            skills={skillsList.languages}
          />
        </Cell>
        <Cell $cols={6} mdLgCols={12}>
          <ContactLinks exclude={['email']} mode="small" />
        </Cell>
      </Grid>
    </Div>
  )
}

export default AllSkills
