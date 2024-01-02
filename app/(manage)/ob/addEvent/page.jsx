
"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { format } from "date-fns"

import { addEvent } from "@/utils/supabaseRequest"
import { useAuth } from '@clerk/nextjs'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  
import { CalendarIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

const formSchema = z.object({
    title: z.string().min(2, {
      message: "title must be at least 2 characters.",
    }),
    description: z.string().min(2, {
        message: "description must be at least 20 characters.",
    }),
    venue: z.string().min(2, {
        message: "venue must be at least 2 characters.",
    }),
    date: z.date({
        required_error: "date is required.",
    })
})

function page() {
    const {userId,getToken} = useAuth();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          title: "",
          description: "",
          venue: "", 
          date: "",
          organiser: "",
        },
    })

    const onSubmit = async (values) => {
        console.log(values);
        // const token = await getToken({template:"supabase"});
        // const todos = await addEvent({ userId ,token});

        form.reset()
    }

  return (
    <div className='flex justify-center items-center w-full h-full p-2'>
       <div className='flex flex-col w-[90%] lg:w-1/2 h-[80%] p-10 border bg-white rounded-lg'>
            <h1 className='font-bold border-b-2 mb-3'>Add Event</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col h-full gap-2 text-sm'>
                    <FormField
                        control={form.control}
                        name='title'
                        render={({field}) => (
                            <FormItem
                                className="flex flex-col md:flex-row md:items-center"
                            >
                                <FormLabel className='w-[35%] uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                                    title
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type='text'
                                        className='flex-1 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus-border-primary active:border-primary'
                                        placeholder='Enter Title'
                                        autoComplete="off"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    <FormField
                        control={form.control}
                        name='description'
                        render={({field}) => (
                            <FormItem
                                className="flex flex-col md:flex-row md:items-center"
                            >
                                <FormLabel className='w-[35%] uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                                    Description
                                </FormLabel>
                                <FormControl>
                                    <Textarea 
                                        placeholder="Tell us a little bit about the event"
                                        className="flex-1"
                                        
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField 
                        control={form.control}
                        name="date"
                        render={({field}) => (
                            <FormItem className="flex flex-col md:flex-row md:items-center">
                                <FormLabel className="w-[35%] uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">Event date</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "flex-1 pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                            date <  new Date()
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='venue'
                        render={({field}) => (
                            <FormItem
                                className="flex flex-col md:flex-row md:items-center"
                            >
                                <FormLabel className='w-[35%] uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                                    Venue
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type='text'
                                        className='flex-1 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus-border-primary active:border-primary'
                                        placeholder='Enter venue'
                                        autoComplete="off"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name='organiser'
                        render={({field}) => (
                            <FormItem
                                className="flex flex-col md:flex-row md:items-center"
                            >
                                <FormLabel className='w-[35%] uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                                    Organisers
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type='text'
                                        className='flex-1 rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus-border-primary active:border-primary'
                                        placeholder='Event Organisers'
                                        autoComplete="off"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                <Button
                    type="submit"
                    className="bg-sky-500 hover:bg-sky-600 text-white mt-4"
                    loading={form.formState.isSubmitting}
                > Submit </Button>

                <FormDescription className="mt-2 text-center">
                    The event will be added to the Proposed events list
                </FormDescription>

                </form>
            </Form>
       </div>
    </div>
  )
}

export default page