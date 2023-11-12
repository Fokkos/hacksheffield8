'use client'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

export default function SQLInjectionHackFoundModal({children}:{children: React.ReactElement}) {

  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
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
                <Dialog.Panel className="w-full max-w-xl transform overflow-show rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-black"
                  >
                    Weak Password Found!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-gray-800">
                      Looks like we MAY have forgotten to properly sanitise our search bar for any injections, especially as it links directly to our database!
                      What you've just done is an example of an <strong>SQL Injection Attack</strong>. When creating a website that has user input fields linked to a database, make sure to use prepared statements and/or sanitise ALL inputs. (There <a href={'https://portswigger.net/web-security/sql-injection/cheat-sheet'} className={'underline cursor-pointer text-gray-800 hover:text-gray-500'}>PortSwigger Cheat Sheet</a> has many great examples!)
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 cursor-pointer"
                      onClick={closeModal}
                    >
                      {children}
                      Got It 😎
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
