"use client"

import React from "react";
import SignIn from "@/components/SignIn";
import {playSound} from "@/helpers/sound";
import {findHack} from "@/helpers/score";
import HackFoundModal from "@/components/HackFoundModal";

export default function AdminDash(): React.ReactNode {
  const [isAdmin, setIsAdmin] = React.useState(false);
  const tableRef: React.MutableRefObject<HTMLTableElement | null> = React.useRef<HTMLTableElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get('username')?.toString().toLowerCase() === 'admin' && data.get('password')?.toString().toLowerCase() === 'admin') {
      setIsAdmin(true);
      findHack('adminlogin')

    }
  };

  const deleteUser = (user_id: number) => {
    if (tableRef.current === null) {
      return
    }
    for (let i = 0; i < tableRef.current.lastElementChild!.childNodes.length; i++) {
      if (tableRef.current.lastElementChild!.children[i].firstElementChild!.innerHTML === user_id.toString()) {
        tableRef.current.deleteRow(i + 1);
        playSound(vineBoom());
        break;
      }
    }
  }

  const vineBoom: () => HTMLAudioElement = () => new Audio("/audio/vineboom.mp3");

  return (
    <main className={`w-full h-full pb-8 ${isAdmin && 'flex items-center justify-center'}`}>
      {!isAdmin && <SignIn handleForm={handleSubmit} />}
      {isAdmin && (
        <>
          <HackFoundModal title={'Weak Password Found!'}>
            <p className="text-gray-800">
              Okay, that one&apos;s on us - we made it too easy. +1 to your score I suppose...<br className={'mb-2'} />
              That was a classic (albeit exaggerated - hopefully) example of <strong>poor authentication</strong>. When creating a website that has a &lsquo;superuser&rsquo; type role, make sure that your superuser&apos;s login is hard to crack. And <strong>definitely</strong> make sure that regular users can&apos;t view pages that aren&apos;t meant for them - use good access control! For any user&apos;s that may sign up to your site, ensure you are enforcing suitable password requirements. (The <a href={'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html'} className={'underline cursor-pointer text-gray-800 hover:text-gray-500'}>OWASP Authentication Cheatsheet</a> is a good resource for this)
            </p>
          </HackFoundModal>
          <div className={`comic-sans w-full h-full ms-6`}>
            <h1 className={`text-6xl`}>Admin Dashboard</h1>
            <table id={'users-table'} className={'border-collapse text-left admin-dash'} ref={tableRef}>
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Admin</td>
                  <td>Admin</td>
                  <td>
                    <button
                      className={'bg-red-700 hover:bg-red-400 text-white border-none p-5 text-xl cursor-pointer'}
                      onClick={() => deleteUser(1)}
                    >
                      Delete User (DO NOT PRESS)
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>xX_ep1c_h4x0r_Xx</td>
                  <td>password</td>
                  <td>
                    <button
                      className={'bg-red-700 hover:bg-red-400 text-white border-none p-5 text-xl cursor-pointer'}
                      onClick={() => deleteUser(2)}
                    >
                      Delete User (DO NOT PRESS)
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>NS Intercity Trein Toestel 2201</td>
                  <td>pringles456</td>
                  <td>
                    <button
                      className={'bg-red-700 hover:bg-red-400 text-white border-none p-5 text-xl cursor-pointer'}
                      onClick={() => deleteUser(3)}
                    >
                      Delete User (DO NOT PRESS)
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>user47</td>
                  <td>interplanetary</td>
                  <td>
                    <button
                      className={'bg-red-700 hover:bg-red-400 text-white border-none p-5 text-xl cursor-pointer'}
                      onClick={() => deleteUser(4)}
                    >
                      Delete User (DO NOT PRESS)
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>florence</td>
                  <td>andthemachine</td>
                  <td>
                    <button
                      className={'bg-red-700 hover:bg-red-400 text-white border-none p-5 text-xl cursor-pointer'}
                      onClick={() => deleteUser(5)}
                    >
                      Delete User (DO NOT PRESS)
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>SkittleZealot</td>
                  <td>smarties</td>
                  <td>
                    <button
                      className={'bg-red-700 hover:bg-red-400 text-white border-none p-5 text-xl cursor-pointer'}
                      onClick={() => deleteUser(6)}
                    >
                      Delete User (DO NOT PRESS)
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>StatutoryRights</td>
                  <td>1234567890</td>
                  <td>
                    <button
                      className={'bg-red-700 hover:bg-red-400 text-white border-none p-5 text-xl cursor-pointer'}
                      onClick={() => deleteUser(7)}
                    >
                      Delete User (DO NOT PRESS)
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>steve</td>
                  <td>notadmin</td>
                  <td>
                    <button
                      className={'bg-red-700 hover:bg-red-400 text-white border-none p-5 text-xl cursor-pointer'}
                      onClick={() => deleteUser(8)}
                    >
                      Delete User (DO NOT PRESS)
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </main>
  );
}