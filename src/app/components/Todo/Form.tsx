'use client'

// react

// framer-motion

// zod & react-hook-form
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

// shadcn-ui
import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// icons
import { RocketIcon } from '@radix-ui/react-icons'
// types
interface TodoFormProps {
  addTodo: (text: string, category: string) => void
}

// zod schema
const formSchema = z.object({
  text: z.string().min(1, 'Please enter a todo'),
  category: z.enum(['personal', 'work', 'travel', 'shopping']),
})

// form values
type FormValues = z.infer<typeof formSchema>

export default function TodoForm({ addTodo }: TodoFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
      category: 'personal',
    },
  })

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    console.log('Submitting form with values:', values)
    try {
      addTodo(values.text, values.category)
    } catch (error) {
      console.error('Error adding todo:', error)
    }
  }

  return (
    <Drawer>
      <DrawerTrigger className="bottom-0 left-0 right-0 flex justify-center pb-6 z-50 overflow-hidden fixed">
        <Button className="globant-button text-black font-semibold py-4 px-8 text-lg shadow-2xl">
          <RocketIcon className="h-5 w-5 mr-2" />
          Add New Task
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-gradient-to-br from-lime-50 to-green-50">
        <DrawerHeader className="text-center">
          <DrawerTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center">
            <span className="mr-2">✨</span>
            Create Your Next Innovation
          </DrawerTitle>
          <DrawerDescription className="text-gray-600">
            Transform your ideas into actionable tasks with Globant&apos;s organizational power
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="px-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-6">
              <FormField
                control={form.control}
                name="text"
                render={({ field }) => (
                  <FormItem>
                    <Input
                      {...field}
                      placeholder="🎯 What needs to be accomplished?"
                      className="w-full border-2 border-lime-200 focus:border-lime-400 focus:ring-lime-400/20 p-4 text-lg rounded-xl"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          form.handleSubmit(onSubmit)()
                        }
                      }}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="p-4 text-lg border-2 border-lime-200 focus:border-lime-400 rounded-xl">
                            <SelectValue placeholder="📂 Choose category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="personal">🏠 Personal</SelectItem>
                          <SelectItem value="work">💼 Work</SelectItem>
                          <SelectItem value="travel">✈️ Travel</SelectItem>
                          <SelectItem value="shopping">🛒 Shopping</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DrawerClose className="flex-1">
                  <Button 
                    type="submit" 
                    className="globant-button text-black font-semibold w-full p-4 text-lg rounded-xl"
                  >
                    <RocketIcon className="h-5 w-5 mr-2" />
                    Launch Task
                  </Button>
                </DrawerClose>
              </div>
            </form>
          </Form>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
