
"use client";
import React, { useState } from 'react';
import { TextInput, Button, Container, NumberInput, MantineProvider } from '@mantine/core';
import Image from 'next/image';
import { useBookStore } from '../stores/book';
import '@mantine/core/styles.css';

interface Book {
  id: number;
  bookname: string;
  author: string;
  price: number;
  category: string;
}

export default function View() {
  const { books, addToCart, cart } = useBookStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [quantity, setQuantity] = useState(1);
  const booksPerPage = 6;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); 
  };

 const filteredBooks = books.filter(book =>
  book.bookname.toLowerCase().includes(searchQuery.toLowerCase()) ||
  book.category.toLowerCase().includes(searchQuery.toLowerCase())
  );
 
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleAddToCart = (book : any) => {
    setSelectedBook(book);
    setQuantity(1);
  };

  const handleConfirmAddToCart = () => {
    if (selectedBook) {
      addToCart({ ...selectedBook, quantity });
      setSelectedBook(null);
      setQuantity(1);
    }
  };

  return (
    <MantineProvider
    theme={{
        colors: {
          'ocean-blue': ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885'],
          'bright-pink': ['#F0BBDD', '#ED9BCF', '#EC7CC3', '#ED5DB8', '#F13EAF', '#F71FA7', '#FF00A1', '#E00890', '#C50E82', '#AD1374'],
        },
      }}>
    <div className='container mx-auto'>
      <h2 className='text-center text-[3rem] pt-20 pb-10 md:py-0 md:my-10 Lexend-SemiBold'>Stored Books</h2>

      <div className='flex justify-center mb-10'>
        <TextInput
          placeholder="Search by book name or category"
          value={searchQuery}
          onChange={handleSearchChange}
          className='w-4/5 outline-none border-none'
        />
      </div>

      <div className='flex justify-center'>
        <div className='flex flex-wrap w-[92%] md:w-4/5 gap-y-10 gap-x-5 xl:gap-x-10 justify-between'>
          {currentBooks.map((book) => (
            <div key={book.id} className='md:w-[30%] w-full bg-[#a8dff5] rounded-lg p-5'>
              <Image
                src="/Images/book.png"
                className="w-10/12 mx-auto"
                width={0}
                height={0}
                sizes="100vw"
                alt=""
              />
              <p className='Lexend'><span className='Lexend-Medium'>Book Name  :</span> {book.bookname}</p>
              <p><span className='Lexend-Medium'>Author Name :</span> {book.author}</p>
              <p><span className='Lexend-Medium'>Category of Book :</span> {book.category}</p>
              <p><span className='Lexend-Medium'>Price :</span><span className='text-[#b62fa4]'> {book.price}/=</span></p>
              <Button onClick={() => handleAddToCart(book)} className='mt-3'>Add to Cart</Button>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center my-10'>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          <Image
            src="/Images/left.png"
            className="w-[30px] mx-auto"
            width={0}
            height={0}
            sizes="100vw"
            alt=""
          />
        </button>
        <p className='mx-2 my-auto text-[white] bg-[#014951] px-6 py-3 rounded-lg'>{`${currentPage}`}</p>
        <p className='mx-2 my-auto text-[white] bg-[#014951] px-6 py-3 rounded-lg'>{`${totalPages}`}</p>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <Image
            src="/Images/right.png"
            className="w-[30px] mx-auto"
            width={0}
            height={0}
            sizes="100vw"
            alt=""
          />
        </button>
      </div>

      {selectedBook && (
        <div className='fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg h-[100vh] items-center justify-center flex' >
          <div>
          <h3 className='text-center text-[2rem] Lexend-SemiBold'>Add to Cart</h3>
          <div className='flex justify-center w-[20rem] md:w-[30rem]'>
            <div className='md:w-[100%] w-full bg-[#f5f5f5] rounded-lg p-5'>
              <Image
                src="/Images/book.png"
                className="w-10/12 mx-auto"
                width={0}
                height={0}
                sizes="100vw"
                alt=""
              />
              <p className='Lexend'><span className='Lexend-Medium'>Book Name  :</span> {selectedBook.bookname}</p>
              <p><span className='Lexend-Medium'>Author Name :</span> {selectedBook.author}</p>
              <p><span className='Lexend-Medium'>Category of Book :</span> {selectedBook.category}</p>
              <p><span className='Lexend-Medium'>Price :</span><span className='text-[#b62fa4]'> {selectedBook.price}/=</span></p>
            
              <NumberInput
                    label="Quantity"
                    value={quantity}
                    onChange={(value) => {
                      if (typeof value === 'number') {
                        setQuantity(value);
                      }
                    }}
                    min={1}
                  />
              <div className='mt-4'>
              <Button onClick={handleConfirmAddToCart}>Add to Cart</Button>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}


    </div>
    </MantineProvider>
  );
}


     

