'use client'

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  name: z.string().min(1, "Student Name is required"),
  studentClass: z.enum(["A", "B", "C", "D"], {
    required_error: "Class is required",
  }),
  studentYear: z.enum(["2022", "2023", "2024"], {
    required_error: "Year is required",
  }),
  phone: z
    .string()
    .regex(/^\+62[0-9]{9,14}$/, {
      message: "Phone must start with +62 and contain only numbers",
    }),
  message: z.string().min(1, "Message is required"),
  photo: z.any().optional(), // Optional file
})

type StudentFormData = z.infer<typeof formSchema>

interface ContactFormProps {
    onSuccess?: () => void
}

export default function ContactForm({onSuccess} : ContactFormProps) {
  const form = useForm<StudentFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      studentClass: undefined,
      studentYear: undefined,
      phone: "",
      message: "",
    },
  })

  const onSubmit = (values: StudentFormData) => {
    const file = (values.photo as FileList)?.[0]
    console.log("Form submitted:", { ...values, photo: file })
    // Implement submit ke backend / API dengan FormData jika butuh upload file
    if(onSuccess) onSuccess()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mx-auto w-full">
        {/* Student Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Student Class */}
        <FormField
          control={form.control}
          name="studentClass"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Class</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="A">A</SelectItem>
                  <SelectItem value="B">B</SelectItem>
                  <SelectItem value="C">C</SelectItem>
                  <SelectItem value="D">D</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Student Year */}
        <FormField
          control={form.control}
          name="studentYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student Year</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone Number */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+6281234567890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Photo Upload */}
        <FormField
          control={form.control}
          name="photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Photo (optional)</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit */}
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  )
}
