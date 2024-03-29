"use client";
import { carProps } from "@/types/types";
import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import { generateCarImageUrl } from "@/utils";
interface CarDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  car: carProps;
}
const CarDetails = ({ isOpen, onClose, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 cursor-pointer"
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={
                    "pb-6 relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left transition-all flex flex-col gap-5 cursor-default"
                  }
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 z-10 w-fit p-2 rounded-full"
                    type="button"
                    onClick={onClose}
                  >
                    <X color="black" />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative bg-pattern bg-center w-full h-40 bg-cover rounded-lg">
                      <Image
                        src={generateCarImageUrl(car)}
                        alt="car"
                        fill
                        priority
                        sizes="100%"
                        style={{ objectFit: "contain" }}
                      ></Image>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "29")}
                          alt="car"
                          fill
                          priority
                          sizes="100%"
                          style={{ objectFit: "contain" }}
                        ></Image>
                      </div>
                      <div className="flex-1 relative w-full h-24 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "33")}
                          alt="car"
                          fill
                          priority
                          sizes="100%"
                          style={{ objectFit: "contain" }}
                        ></Image>
                      </div>
                      <div className="flex-1 relative w-full h-24 rounded-lg">
                        <Image
                          src={generateCarImageUrl(car, "13")}
                          alt="car"
                          fill
                          priority
                          sizes="100%"
                          style={{ objectFit: "contain" }}
                        ></Image>
                      </div>
                    </div>
                  </div>
                  <div className="   w-full text-left flex flex-col gap-5">
                    <p className="text-gray-500 mx-4 flex justify-between border-b border-gray-500">
                      make: <span className="uppercase">{car.make}</span>
                    </p>
                    <p className="text-gray-500 mx-4 flex justify-between border-b border-gray-500">
                      model: <span className="uppercase">{car.model}</span>
                    </p>
                    <p className="text-gray-500 mx-4 flex justify-between border-b border-gray-500">
                      year: <span>{car.year}</span>
                    </p>
                    <p className="text-gray-500 mx-4 flex justify-between border-b border-gray-500">
                      class: <span>{car.class}</span>
                    </p>
                    <p className="text-gray-500 mx-4 flex justify-between border-b border-gray-500">
                      fuel_type:
                      <span className="uppercase">{car.fuel_type}</span>
                    </p>
                    <p className="text-gray-500 mx-4 flex justify-between border-b border-gray-500">
                      city_mpg: <span>{car.city_mpg}</span>
                    </p>
                    <p className="text-gray-500 mx-4 flex justify-between border-b border-gray-500">
                      combination_mpg: <span>{car.combination_mpg}</span>
                    </p>
                    <p className="text-gray-500 mx-4 flex justify-between border-b border-gray-500">
                      highway_mpg: <span>{car.highway_mpg}</span>
                    </p>
                    <p className="text-gray-500 mx-4 flex justify-between border-b border-gray-500">
                      cylinders: <span>{car.cylinders}</span>
                    </p>
                    <p className="text-gray-500 mx-4 flex justify-between border-b border-gray-500">
                      displacement: <span>{car.displacement}</span>
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;

// transmission: string;
// year: number;
