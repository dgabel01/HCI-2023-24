import React from 'react'
import Add from './Add';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Add a Product ',
  description: 'EasyShop page for adding a new product to the homepage',
}

const AddNew = () => {
  return (
    <div> <Add /></div>
  )
}

export default AddNew;