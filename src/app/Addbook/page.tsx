import React, { useState } from 'react';
import BookAdd from '../../../component/BookAdd';
import Header from '../../../component/Header';
import Footer from '../../../component/Footer';

export default function Addbook() {


  return (
   <div>
    <Header/>
      <BookAdd/>
      <Footer/>
   </div>
  );
}