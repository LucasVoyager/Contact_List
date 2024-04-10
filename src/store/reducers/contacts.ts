import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'
import * as enums from '../../utils/ContactsE'

type ContactState = {
  itens: Contact[]
}

const initialState: ContactState = {
  itens: [
    {
      id: 1,
      name: 'Eduardo silva',
      email: 'eduardosila@outlook.com.br',
      phone: 11985742356,
      local: enums.Places.LIFE
    },
    {
      id: 2,
      name: 'Enzo silva',
      email: 'enzinhogamer@gmail.com',
      phone: 1195687412,
      local: enums.Places.LIFE
    },
    {
      id: 3,
      name: 'Vitor Jara',
      email: 'jaradesenhos@yahoo.com.br',
      phone: 11985125874,
      local: enums.Places.LIFE
    }
  ]
}

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((t) => t.id === action.payload)
    },
    register: (state, action: PayloadAction<Omit<Contact, 'id'>>) => {
      const contactIE = state.itens.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLocaleLowerCase()
      )

      if (contactIE) {
        alert('contato já existente')
      } else {
        const lastContact = state.itens[state.itens.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.itens.push(newContact)
      }
    }
  }
})

export const { register, remove } = contactSlice.actions
export default contactSlice.reducer
