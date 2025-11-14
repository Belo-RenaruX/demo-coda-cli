// app components
import { Todo } from './List'

// framer-motion
import { motion } from 'framer-motion'

// shadcn-ui
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { TrashIcon } from '@radix-ui/react-icons'

// types
interface TodoItemProps {
  todo: Todo
  toggleTodo: (id: number) => void
  deleteTodo: (id: number) => void
}

export default function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'work': return '💼'
      case 'personal': return '🏠'
      case 'travel': return '✈️'
      case 'shopping': return '🛒'
      default: return '📋'
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'work': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'personal': return 'bg-purple-100 text-purple-700 border-purple-200'
      case 'travel': return 'bg-orange-100 text-orange-700 border-orange-200'
      case 'shopping': return 'bg-pink-100 text-pink-700 border-pink-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: todo.completed ? 0.98 : 1,
      }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <Card className={`p-4 border-2 transition-all duration-300 hover:shadow-lg ${
        todo.completed 
          ? 'bg-gray-50 border-gray-200 opacity-75' 
          : 'bg-white border-lime-200 hover:border-lime-300 hover:shadow-lime-100'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <Checkbox 
              id={todo.id.toString()} 
              checked={todo.completed} 
              onCheckedChange={() => toggleTodo(todo.id)}
              className="data-[state=checked]:bg-lime-500 data-[state=checked]:border-lime-500"
            />
            <div className="flex-1">
              <span className={`text-sm font-medium transition-all duration-300 ${
                todo.completed 
                  ? 'line-through text-gray-500' 
                  : 'text-gray-800'
              }`}>
                {todo.text}
              </span>
            </div>
            <Badge className={`${getCategoryColor(todo.category)} font-medium`}>
              <span className="mr-1">{getCategoryIcon(todo.category)}</span>
              {todo.category}
            </Badge>
          </div>

          <Button 
            variant="outline" 
            size="sm"
            onClick={() => deleteTodo(todo.id)}
            className="ml-4 hover:bg-red-50 hover:border-red-200 transition-all duration-200"
          >
            <TrashIcon className="h-4 w-4 text-red-500 hover:text-red-600" />
          </Button>
        </div>
      </Card>
    </motion.li>
  )
}
