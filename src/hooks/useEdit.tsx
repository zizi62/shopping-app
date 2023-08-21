import { useState } from 'react'

const useEdit = () => {
  const [isEdit, setEdit] = useState(false)

  const openEditForm = () => setEdit(true)

  const closeEditForm = () => setEdit(false)

  return {
    isEdit,
    openEditForm,
    closeEditForm,
  }
}

export default useEdit