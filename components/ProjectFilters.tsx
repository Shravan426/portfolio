'use client'

interface ProjectFiltersProps {
    activeFilter: string;
    setFilter: (filter: string) => void
}

export default function ProjectFilters({ activeFilter, setFilter }: ProjectFiltersProps) {
    const filters = ['all', 'web', 'mobile']

    return (
        <div className="flex justify-center mb-8">
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={`px-4 py-2 mx-2 rounded-full capitalize cursor-pointer ${activeFilter === filter
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                        }`}
                    onClick={() => setFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    )
}