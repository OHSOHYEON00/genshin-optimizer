import { Stack } from '@mui/material'
import CharacterEditor from './Character'
import CharacterSelector from './CharacterSelector'
import Database from './Database'
import Optimize from './Optimize'

// TODO: Move this to a lib once the components below are moved.
export default function PageHome() {
  return (
    <Stack gap={1} pt={1}>
      <CharacterSelector />
      <CharacterEditor />
      <Optimize />
      <Database />
    </Stack>
  )
}
