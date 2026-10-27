
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";


export default function ResetPassword() {

    const router = useRouter()

    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function SetNewPassword(password: string) {
        setErrorMessage("");
        setLoading(true);

        try {
            const { error } = await supabase.auth.updateUser({
                password: password,
            });

            if (error) {
                setErrorMessage(error.message);
                return;
            }

            await router.push("/changed-password");
        } catch {
            setErrorMessage("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="mx-auto max-w-2xl px-5 py-10">
            <h1>Reset Password</h1>

            <p>Enter a new password for your account.</p>

            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    SetNewPassword(password);
                }}
            >
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="New password"
                    autoComplete="new-password"
                    required
                    minLength={8}
                    disabled={loading}
                />

                {errorMessage && (
                    <p role="alert">{errorMessage}</p>
                )}

                <button
                    type="submit"
                    disabled={loading || !password}
                >
                    {loading ? "Updating..." : "Change password"}
                </button>
            </form>
        </main>
    );
}
