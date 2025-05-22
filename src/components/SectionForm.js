"use client"

import React, { useState, useEffect } from 'react';
import { supabase } from "@/lib/supabaseClient";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";

export default function Section1() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [instagram, setInstagram] = useState('');
  const [codice, setCodice] = useState('');
  const [telefono, setTelefono] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !email || !password || !telefono) {
      setErrorMessage('Tutti i campi obbligatori devono essere compilati.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // 1. Registrazione Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uidFirebase = userCredential.user.uid;

      // 2. Salvataggio su Supabase
      const { error } = await supabase
        .from('users')
        .insert([
          {
            uidFirebase,
            nome,
            email,
            codice,
            instagram,
            telefono
          }
        ]);

      if (error) {
        console.error(error);
        setErrorMessage('Errore nel salvataggio dei dati su Supabase.');
        return;
      }

      alert("Registrazione completata!");
      setIsRedirecting(true);
    } catch (err) {
      console.error(err);
      setErrorMessage('Errore durante la registrazione. Email forse già registrata.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isRedirecting) {
      window.location.href = 'https://apps.apple.com/it/app/skema-app/id6744457170?l=en-GB';
    }
  }, [isRedirecting]);

  return (
    <section id="hero" className="flex flex-col justify-center bg-white py-24 px-6 md:px-24 text-black">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">Unisciti a Skema</h1>
        <p className="text-lg md:text-xl text-center">
          Iscriviti per ricevere l'accesso al mondo Skema per un'esperienza di studio unica.
        </p>

        {errorMessage && (
          <div className="bg-red-500 text-white p-4 rounded-md mb-6 text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 bg-gray-100 p-6 rounded-md shadow-md">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome e Cognome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="codice" className="block text-sm font-medium text-gray-700">Codice Università</label>
            <input
              type="text"
              id="codice"
              value={codice}
              onChange={(e) => setCodice(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">Instagram</label>
            <input
              type="text"
              id="instagram"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Numero di Telefono</label>
            <input
              type="tel"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
              className="mt-1 block w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-[#387FF7]"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sbobinando...' : 'Sbobinami'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
