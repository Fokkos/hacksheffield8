'use client'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

export default function AdminHackFoundModal({children}:{children: React.ReactElement}) {

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
                      Okay, that one&apos;s on us - we made it too easy. +1 to your score I suppose...<br className={'mb-2'} />
                      That was a classic (albeit exaggerated - hopefully) example of <strong>poor authentication</strong>. When creating a website that has a &lsquo;superuser&rsquo; type role, make sure that your superuser&apos;s login is hard to crack. For any user&apos;s that may sign up to your site, ensure you are enforcing suitable password requirements. (The <a href={'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html'} className={'underline cursor-pointer text-gray-800 hover:text-gray-500'}>OWASP Authentication Cheatsheet</a> is a good resource for this)
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
