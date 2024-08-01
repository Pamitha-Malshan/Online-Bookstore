"use client";
import React from "react";
import { Button, NumberInput, MantineProvider } from "@mantine/core";
import Image from "next/image";
import { useBookStore } from "../stores/book";
import "@mantine/core/styles.css";

export default function Cart() {
  const { cart, removeFromCart, updateCartItemQuantity } = useBookStore();

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id: number, value: string | number | null) => {
    if (typeof value === "number") {
      updateCartItemQuantity(id, value);
    }
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <MantineProvider
      theme={{
        colors: {
          "ocean-blue": [
            "#7AD1DD",
            "#5FCCDB",
            "#44CADC",
            "#2AC9DE",
            "#1AC2D9",
            "#11B7CD",
            "#09ADC3",
            "#0E99AC",
            "#128797",
            "#147885",
          ],
          "bright-pink": [
            "#F0BBDD",
            "#ED9BCF",
            "#EC7CC3",
            "#ED5DB8",
            "#F13EAF",
            "#F71FA7",
            "#FF00A1",
            "#E00890",
            "#C50E82",
            "#AD1374",
          ],
        },
      }}
    >
      <div className="container mx-auto">
        <div className="my-10">
          <h2 className="text-center text-[3rem] Lexend-SemiBold uppercase mb-5 md:mb-10">
            My Cart
          </h2>

          <div className="flex justify-end mb-8">
            <p className="Lexend-Medium text-[1.1rem] md:text-[1.6rem]">Total Price : {totalPrice}/=</p>
          </div>
          <div className="block lg:flex flex-wrap justify-center gap-y-10 gap-x-4 xl:gap-x-10">
            {cart.map((item) => (
              <div
                key={item.id}
                className="block md:flex lg:w-[45%] w-full bg-[#a8dff5] rounded-lg p-5 mb-5 lg:mb-0"
              >
                <div className="w-full md:w-[50%] flex items-center">
                  <Image
                    src="/Images/book.png"
                    className="w-10/12 mx-auto"
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt=""
                  />
                </div>
                <div className="w-full md:w-[50%]">
                  <p className="Lexend">
                    <span className="Lexend-Medium mb-2">Book Name :</span>{" "}
                    {item.bookname}
                  </p>
                  <p>
                    <span className="Lexend-Medium mb-2">Author Name :</span>{" "}
                    {item.author}
                  </p>
                  <p>
                    <span className="Lexend-Medium mb-2">
                      Category of Book :
                    </span>{" "}
                    {item.category}
                  </p>
                  <p>
                    <span className="Lexend-Medium mb-2">Price :</span>
                    <span className="text-[#b62fa4]"> {item.price}/=</span>
                  </p>
                  <p>
                    <span className="Lexend-Medium mb-2">Quantity :</span>{" "}
                    {item.quantity}
                  </p>

                  <p>
                    <span className="Lexend-Medium mb-2">Total Price : </span>
                    <span className="text-[#b62fa4]">
                      {item.quantity * item.price}/=
                    </span>
                  </p>

                  <div className="flex mt-4 gap-4">
                    <p>Update Quentity : </p>
                    <div>
                      <NumberInput
                        value={item.quantity}
                        onChange={(value) =>
                          handleQuantityChange(item.id, value)
                        }
                        min={1}
                        style={{ width: "5rem" }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="mt-4"
                    >
                      <Image
                        src="/Images/delete.png"
                        className="w-[25px] mx-auto mr-3"
                        width={0}
                        height={0}
                        sizes="100vw"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MantineProvider>
  );
}
