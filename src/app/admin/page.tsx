"use client"

import React, {useRef} from "react";
import Confetti from "react-dom-confetti";
import useMousePosition from "@/helpers/mouseposition";
import SignIn from "@/components/SignIn";
import AdminHackFoundModal from "@/components/AdminHackFoundModal";

export default function AdminDash(): React.ReactNode {

  function playSound() {
    var audio = new Audio("/tada.mp3");
    audio.play();
  }

  function handleButtonClick() {
    setIsExploding(!isExploding)
    playSound()
  }

  const [isExploding, setIsExploding] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const mouseLocation = useMousePosition();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get('username') === 'admin' && data.get('password') === 'admin') {
      setIsAdmin(true);
      setInterval(() => {
        setIsExploding(true);
      }, 500)
    }
  };

  const deleteUser = (user_id: number) => {
    let table = document.getElementById('users-table')
    // @ts-ignore
    for (let i=0; i<table.lastElementChild.childNodes.length; i++) {
      //@ts-ignore
      if (table.lastElementChild.childNodes[i].firstElementChild.innerText === user_id.toString()) {
        //@ts-ignore
        table.deleteRow(i+1);
        break;
      }
    }
  }

  return (
    <main className={`w-full h-screen ${isAdmin && 'flex items-center justify-center'}`}>
      {!isAdmin && <SignIn handleForm={handleSubmit} />}
      {isAdmin && (
        <>
          <AdminHackFoundModal>
            <Confetti
              active={isExploding}
              config={{
                spread: 360,
                elementCount: 300,
                startVelocity: 30
              }}
            />
          </AdminHackFoundModal>
          <div className={`comic-sans w-full h-full ms-6`}>
            <h1 className={`text-6xl`}>Admin Dashboard</h1>
            <table id={'users-table'} className={'border-collapse text-left admin-dash'}>
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