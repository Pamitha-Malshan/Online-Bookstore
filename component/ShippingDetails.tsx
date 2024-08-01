"use client";
import React, { useState } from 'react';
import { MantineProvider, TextInput, Button, Group, Notification } from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import '@mantine/core/styles.css';

const shippingSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zip: z.string().min(1, 'ZIP code is required').regex(/^\d{5}$/, 'Invalid ZIP code'),
  country: z.string().min(1, 'Country is required'),
});

type ShippingFormValues = z.infer<typeof shippingSchema>;

export default function ShippingDetails() {
  const { register, handleSubmit, formState: { errors }, control, reset } = useForm<ShippingFormValues>({
    resolver: zodResolver(shippingSchema),
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = (data: ShippingFormValues) => {
    console.log('Shipping details submitted:', data);
    reset(); 
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); 
  };

  return (
    <MantineProvider
      theme={{
        colors: {
          'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        },
      }}
    >
      <div className='flex justify-center items-center md:h-[85vh] pt-28 md:pt-0 pb-12 md:my-0'>
        <div className='w-[90%] md:w-[32rem] border-2 border-[#9c9797] p-6 rounded-md'>
          <h1 className='Lexend-Medium text-[1.4rem] md:text-[2rem] uppercase text-center'>Shipping Details</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="Name"
              className='mt-4'
              placeholder="Enter your name"
              {...register('name')}
              error={errors.name?.message}
            />
            <TextInput
              label="Address"
              className='mt-3'
              placeholder="Enter your address"
              {...register('address')}
              error={errors.address?.message}
            />
            <TextInput
              label="City"
              className='mt-3'
              placeholder="Enter your city"
              {...register('city')}
              error={errors.city?.message}
            />
            <TextInput
              label="State"
              className='mt-3'
              placeholder="Enter your state"
              {...register('state')}
              error={errors.state?.message}
            />
            <TextInput
              label="ZIP Code"
              className='mt-3'
              placeholder="Enter your ZIP code"
              {...register('zip')}
              error={errors.zip?.message}
            />
            <TextInput
              label="Country"
              className='mt-3'
              placeholder="Enter your country"
              {...register('country')}
              error={errors.country?.message}
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
                Shipping details added successfully!
              </Notification>
            </div>
          )}
        </div>
      </div>
    </MantineProvider>
  );
}