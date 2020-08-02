import React from 'react'
import { Header } from 'common/components'
import { Container, Layout } from './MainLayout.style'

export const MainLayout: React.FC = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Container>{children}</Container>
    </Layout>
  )
}
