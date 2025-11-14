import TodoList from '@/app/components/Todo/List'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50">
      <div className="absolute inset-0 bg-gradient-to-br from-lime-100/50 via-transparent to-emerald-100/50"></div>
      
      <header className="relative z-10 pt-8 pb-4 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent">
              Globant TODO
            </h1>
            <div className="w-full h-1 bg-gradient-to-r from-lime-400 to-green-500 rounded-full mt-2"></div>
          </div>
          <p className="text-gray-600 text-lg font-medium">Organize your tasks with innovation and style</p>
        </div>
      </header>
      
      <div className="relative z-10 flex flex-col items-center px-6 pb-20">
        <TodoList />
      </div>
      
      <footer className="relative z-10 mt-12 py-8 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-600 mb-2">
            Powered by <span className="font-semibold bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent">Globant Innovation</span>
          </p>
          <p className="text-sm text-gray-500">
            🚀 Reinventing the way teams organize and execute
          </p>
        </div>
      </footer>
    </main>
  )
}
