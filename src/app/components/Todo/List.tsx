'use client'

// react
import { useEffect, useState } from 'react'

// components
import Filters from './Filters'
import TodoForm from './Form'
import TodoItem from './Item'

// types
export interface Todo {
  id: number
  text: string
  completed: boolean
  category: string
}

export default function TodoList() {
  // states
  const [todos, setTodos] = useState<Todo[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [filter, setFilter] = useState<string>('all')

  // check if there are todos in localStorage
  // @if there are, set them to state
  // @if not, set isLoading to false
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
    setIsLoading(false)
  }, [])

  // save todos to localStorage
  // @if isLoading is false, save todos to localStorage
  // @if isLoading is true, do nothing
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }, [todos, isLoading])

  // add todo to state
  // @if text and category are not empty, add todo to state
  const addTodo = (text: string, category: string) => {
    if (text.trim() && category.trim()) {
      const newTodos = [
        ...todos,
        {
          id: Date.now(),
          text: text.trim(),
          completed: false,
          category: category.trim(),
        },
      ]
      setTodos(newTodos)
    }
  }

  // toggle todo in state
  const toggleTodo = (id: number) => {
    const newTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    setTodos(newTodos)
  }

  // delete todo in state
  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  // filter todos based on filter state
  const filteredTodos = filter === 'all' ? todos : todos.filter((todo) => todo.category === filter)

  // sort todos based on completed state
  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (a.completed === b.completed) return 0
    return a.completed ? 1 : -1
  })

  // get all categories from todos
  const categories = ['all', ...Array.from(new Set(todos.map((todo) => todo.category).filter(Boolean)))]

  // if isLoading is true, return loading message
  if (isLoading) {
    return (
      <div className="w-full max-w-4xl">
        <div className="globant-card rounded-2xl p-12 text-center">
          <div className="animate-spin text-6xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold text-gray-700">Initializing Globant TODO...</h3>
          <p className="text-gray-500 mt-2">Preparing your innovation workspace</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="flex flex-col w-full">
        <TodoForm addTodo={addTodo} />
        <div className="w-full mt-8">
          <div className="globant-card rounded-2xl p-6 mb-6">
            <Filters categories={categories} setFilter={setFilter} />
          </div>
          <div className="globant-card rounded-2xl p-6 min-h-[400px]">
            {sortedTodos.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Ready to innovate?</h3>
                <p className="text-gray-500">Add your first task and start organizing like a true Globant professional!</p>
              </div>
            ) : (
              <>
                <ul className="space-y-3">
                  {sortedTodos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                  ))}
                </ul>
                
                {/* Task Statistics */}
                <div className="mt-8 pt-6 border-t border-lime-200">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-600">{todos.length}</div>
                      <div className="text-sm text-blue-500">Total Tasks</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                      <div className="text-2xl font-bold text-green-600">{todos.filter(t => t.completed).length}</div>
                      <div className="text-sm text-green-500">Completed</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
                      <div className="text-2xl font-bold text-orange-600">{todos.filter(t => !t.completed).length}</div>
                      <div className="text-sm text-orange-500">Pending</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
                      <div className="text-2xl font-bold text-purple-600">{Math.round((todos.filter(t => t.completed).length / todos.length) * 100) || 0}%</div>
                      <div className="text-sm text-purple-500">Progress</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
