// "use client";
// import React from 'react'
// import { TextInput, NumberInput, Button, Container, Group, Table } from '@mantine/core';
// import { useFormStore } from '../stores/store';
// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';

// const schema = z.object({
//   name: z.string().min(1, 'Name is required'),
//   age: z.number().min(1, 'Age must be at least 1'),
// });

// type FormValues = z.infer<typeof schema>;

// export default function Home() {
//     const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
//         resolver: zodResolver(schema),
//       });
//       const { entries, addEntry } = useFormStore();
    
//       const onSubmit = (data: FormValues) => {
//         addEntry(data);
//         reset();  // Reset form after submission
//         console.log('Form submitted:', data);
//       };
    
//       return (
//         <Container>
//       <h1>Submit Your Details</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <TextInput
//           label="Name"
//           placeholder="Enter your name"
//           {...register('name')}
//           error={errors.name?.message}
//         />
//         <NumberInput
//           label="Age"
//           placeholder="Enter your age"
//           {...register('age', { valueAsNumber: true })}
//           error={errors.age?.message}
//         />
//         <Group position="right" mt="md">
//           <Button type="submit">Submit</Button>
//         </Group>
//       </form>

//       <h2>Stored Values</h2>
//       <Table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//           </tr>
//         </thead>
//         <tbody>
//           {entries.map((entry) => (
//             <tr key={entry.id}>
//               <td>{entry.id}</td>
//               <td>{entry.name}</td>
//               <td>{entry.age}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//       );
// }

import { Group, Button, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

export default  function Demo() {
  return (
    <MantineProvider
      theme={{
        colors: {
          'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        },
      }}
    >
      <Group>
        <Button color="ocean-blue">Ocean blue button</Button>
        <Button color="bright-pink" variant="filled">
          Bright pink button
        </Button>
      </Group>
    </MantineProvider>
  );
}
