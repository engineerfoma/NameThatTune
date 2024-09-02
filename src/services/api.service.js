import { apiPath } from '@/config/settings'

import { Team } from './apiClasses/team'

const team = new Team(apiPath)

export { team }
