import { apiPath } from '@/config/settings'

import { Team } from './apiClasses/team'
import { Category } from './apiClasses/category'
import { Melody } from './apiClasses/melody'
import { Round } from './apiClasses/round'

const team = new Team(apiPath)
const category = new Category(apiPath)
const melody = new Melody(apiPath)
const round = new Round(apiPath)

export { team, category, melody, round }
