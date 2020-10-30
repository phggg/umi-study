import React, {Context} from 'react';

interface TStateData {
  text: string,
  lists: string[]
}

interface TCountAction {
  type: string,
  payload: string
}

const SearchContext: Context<{
  state: TStateData,
  dispatch: React.Dispatch<TCountAction>
}> = React.createContext<any>(undefined)

export default SearchContext
