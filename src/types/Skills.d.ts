type SkillCategory = 'languages' | 'skills' | 'softwares' | 'tools'

type SkillName =
  | 'adobeMajor'
  | 'adobeMinor'
  | 'agile'
  | 'animations'
  | 'css3'
  | 'cypress'
  | 'english'
  | 'french'
  | 'git'
  | 'graphql'
  | 'html5'
  | 'javascript'
  | 'jest'
  | 'mfe'
  | 'nodejs'
  | 'office'
  | 'php'
  | 'postgresql'
  | 'react'
  | 'ruby'
  | 'testing'
  | 'typescript'
  | 'uiux'
  | 'vue'
  | 'webpack'

type Skill = {
  level: 'beginner' | 'expert' | 'intermediate'
  name: SkillName
}
