import React from 'react'

type PageProps = {
    params: { searchTerm: string }
};

const search = async (searchTerm: string) => {
    const res = await fetch(
        ``
    )
}
export default async function SearchResults({ params: { searchTerm } }: PageProps) {
    const searchResults = await search(searchTerm);
    return (
        <div>SearchResults</div>
    )
}
