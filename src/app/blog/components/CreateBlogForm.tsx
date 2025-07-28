"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useCreateBlog from "@/hooks/blog/useCreateBlog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(500),
});

type CreateBlogFormValues = z.infer<typeof formSchema>;

const CreateBlogForm = ({ userId }: { userId: string }) => {
  const { createBlog, isLoading } = useCreateBlog();
  const form = useForm<CreateBlogFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (data: CreateBlogFormValues) => {
    createBlog({
      title: data.title,
      description: data.description,
      userId,
    });

    form.reset();
    toast.success("Blog created successfully");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating..." : "Create Blog"}
        </Button>
      </form>
    </Form>
  );
};

export default CreateBlogForm;
