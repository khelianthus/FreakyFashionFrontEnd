"use client"

import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const userData = {
      userName: email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5000/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        const data = await response.json();
        const token = data.token; // Hämta token från svaret
        console.log(token)
        // Gör något med tokenet, t.ex. lagra det eller använda det för autentisering
        
        // Skapa ett Date-objekt för nuvarande tidpunkt
        const currentTime = new Date();

        // Skapa ett Date-objekt för tidpunkten 30 minuter framåt i tiden
        const expirationTime = new Date(currentTime.getTime() + 30 * 60000); // 30 minuter * 60 sekunder * 1000 millisekunder

        // Konvertera giltighetstiden till en sträng i formatet för en cookie
        const expires = expirationTime.toUTCString();

        // Spara tokenet som en cookie med giltighetstid på 30 minuter
        document.cookie = `token=${token}; path=/; expires=${expires}; SameSite=Lax`;

        // Du kan sedan hämta tokenet från cookien vid behov
        const storedToken = document.cookie
          .split('; ')
          .find(row => row.startsWith('token='))
          ?.split('=')[1];

        console.log(storedToken); // Tokenet som hämtats från cookien
  
        alert("Inloggning lyckades!");
        window.location.replace("/");
      } else {
        alert("Felaktiga inloggningsuppgifter!");
      }
    } catch (error) {
      console.error('Något gick fel:', error);
    }
  };
  
  return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Logga in på ditt konto
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email adress
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Lösenord
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-lime-500 hover:text-lime-400">
                      Glömt lösenord?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-lime-100 hover:bg-lime-200 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Logga in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Inte medlem?{' '}
              <Link href="/account/register" className="font-semibold leading-6 text-lime-500 hover:text-lime-400">
                Registrera ny användare
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
  