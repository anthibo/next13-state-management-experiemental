'use client'

import { Provider } from 'react-redux'
import Header from './Header'
import './globals.css'
import { persistor, store } from '@/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  )
}
