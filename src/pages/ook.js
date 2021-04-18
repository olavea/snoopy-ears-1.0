import React from "react"
import ConvertKitForm from 'convertkit-react'

const MY_FORM_ID = 1234567

export default function OokPage() {
  return (
    <ConvertKitForm formId={MY_FORM_ID} />
  )
}