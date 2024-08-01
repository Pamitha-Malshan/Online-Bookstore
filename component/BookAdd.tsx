"use client";
import React, { useState } from 'react';
import { MantineProvider, TextInput, NumberInput, Button, Group, Notification } from '@mantine/core';
import { useBookStore } from '../stores/book';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import '@mantine/core/styles.css';

const schema = z.object({
  bookname: z.string().min(1, 'Book name is required'),
  author: z.string().min(1, 'Author is required'),
  price: z.number().min(0, 'Price must be a positive number'),
  category: z.string().min(1, 'Category is required'),
});

type FormValues = z.infer<typeof schema>;

export default function BookAdd() {
  const { register, handleSubmit, formState: { errors }, control, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  const { books, addBook } = useBookStore();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = (data: FormValues) => {
    addBook(data);
    reset();  // Reset form after submission
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); // Hide success message after 3 seconds
    console.log('Form submitted:', data);
  };

  return (
    <MantineProvider
      theme={{
        colors: {
          'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        },
      }}>
      <div className='flex justify-center items-center md:h-[85vh] my-12 md:my-0'>
        <div className='w-[90%] md:w-[32rem] border-2 border-[#9c9797] p-6 rounded-md'>
          <h1 className='Lexend-Medium text-[1.4rem] md:text-[2rem] uppercase text-center'>Add Book Details</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="Book Name"
              className='mt-4'
              placeholder="Enter book name"
              {...register('bookname')}
              error={errors.bookname?.message}
            />
            <TextInput
              label="Author"
              className='mt-3'
              placeholder="Enter author name"
              {...register('author')}
              error={errors.author?.message}
            />
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <NumberInput
                  label="Price"
                  className='mt-3'
                  placeholder="Enter price"
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                  error={errors.price?.message}
                  min={0}
                />
              )}
            />
            <TextInput
              label="Category"
              className='mt-3'
              placeholder="Enter category"
              {...register('category')}
              error={errors.category?.message}
            />
            <div className="flex justify-center mt-4">
              <Group>
                <Button type="submit" color="ocean-blue">Submit</Button>
              </Group>
            </div>
          </form>
          {showSuccessMessage && (
            <div className="mt-4">
              <Notification title="Success" color="green" onClose={() => setShowSuccessMessage(false)}>
                Book added successfully!
              </Notification>
            </div>
          )}
        </div>
      </div>
    </MantineProvider>
  );
}