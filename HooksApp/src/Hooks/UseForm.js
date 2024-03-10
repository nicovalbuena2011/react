import { useState } from "react"

export const UseForm = ( initial = {}) => {


  const [form, setform] = useState({
    initial
  })

  const handleForm = ({target}) =>{
    const { name, value } = target;

    setform({
      ...form,
      [name]: value
    })
  }


  const onResetForm = () => setform(initial)

  return {
    ...form,
    form,
    handleForm,
    onResetForm
  }

}
