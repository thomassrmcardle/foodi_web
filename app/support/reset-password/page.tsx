"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { getSupabaseClient } from "@/lib/supabase";

import { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: 'Reset Password | Cherub',
  description: "Reset the password of your Cherub account.",
};

export default function ResetPassword() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function setNewPassword(password: string) {
    setErrorMessage("");
    setLoading(true);

    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase.auth.updateUser({ password });

      if (error) {
        setErrorMessage(error.message);
        return;
      }

      router.push("/support/changed-password");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <h1>Reset Password</h1>
      <p>Enter a new password for your Cherub Account.</p>

      <form className="w-full"
        onSubmit={(event) => {
          event.preventDefault();
          setNewPassword(password);
        }}
      >
        <input
            className="w-full rounded-2xl"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="New password"
          autoComplete="new-password"
          required
          minLength={3}
          disabled={loading}
        />

        {errorMessage && <p className="text-sm mb-12 text-gray-500" role="alert">{errorMessage}</p>}

        <button className="bg-green rounded-2xl px-6 py-3 w-full font-semibold" type="submit" disabled={loading || !password}>
          {loading ? "Updating..." : "Change password"}
        </button>

      </form>
    </main>
  );
}