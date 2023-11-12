'use client'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

export default function PostReqFoundModal({children}:{children: React.ReactElement}) {

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
                    Broken Access Control Found!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-gray-800">
                      Oops - turns out we are not authenticating users after a POST request is made!<br className={'mb-2'} />
                      This is a great example of <strong>missing access controls</strong>. To avoid this pitfall, try to follow the principle of &lsquo;Deny by Default&rsquo; (make all user roles unable to access anything unless you explicitly allow them to). The <a href={'https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html'} className={'underline cursor-pointer text-gray-800 hover:text-gray-500'}>Authorisation Cheatsheet by OWASP</a> is a great source of information on preventing this vulnerability.
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
