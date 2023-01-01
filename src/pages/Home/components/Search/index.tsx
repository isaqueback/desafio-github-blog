import { useContext } from 'react'
import { SearchContainer } from './styles'
import { GithubContext } from '../../../../contexts/GithubContext'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'

// Montando a estrutura do form com o zod
const SearchFormSchema = z.object({
  query: z.string(),
})

// Tipando a estrutura do form com o typescript e zod
type SearchFormInput = z.infer<typeof SearchFormSchema>

export function Search() {
  const { issues, fetchIssues } = useContext(GithubContext)

  // Agora é a vez de tipar o userForm e dizer a estrutura do form
  const { control, getValues } = useForm<SearchFormInput>({
    resolver: zodResolver(SearchFormSchema),
    defaultValues: {
      query: '',
    },
  })

  return (
    <SearchContainer>
      <div>
        <h3>Publicações</h3>
        {issues.totalCount > 1 ? (
          <span>{issues.totalCount} publicações</span>
        ) : (
          <span>{issues.totalCount} publicação</span>
        )}
      </div>

      {/* Dizendo para o useForm quais são as entradas do form no html */}
      <Controller
        name="query"
        control={control}
        render={({ field: { value, onChange } }) => {
          return (
            <input
              type="text"
              placeholder="Buscar conteúdo"
              value={value}
              onChange={(e) => {
                onChange(e)
                const newQuery = getValues('query')
                fetchIssues(newQuery || '')
              }}
            />
          )
        }}
      />
    </SearchContainer>
  )
}
