import React from 'react'

export default function CharactersLayout({children}: {children: React.ReactNode}) {
    return (
        <main className='flex'>
            <div>
                {/* @ts-ignore */}
                {/* <TodoList /> */}
            </div>
            <div className="flex-1">
                {children}
            </div>
        </main>
    )
}
