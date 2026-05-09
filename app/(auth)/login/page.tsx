"use client";
import Link from "next/link";
import { AuthButton } from "../../components/auth/AuthButton";
import { AuthField } from "../../components/auth/AuthField";
import { AuthHeader } from "../../components/auth/AuthHeader";
import { AuthShell } from "../../components/auth/AuthShell";
import { AuthVisual } from "../../components/auth/AuthVisual";
import { useState } from "react";
import { signIn } from "next-auth/react";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!email || !password) {
        throw new Error("Email and password are required");
      }
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/dashboard",
      });

      if (res?.ok) {
        router.push("/dashboard");
      } else {
        throw new Error(res?.error || "Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <AuthShell visual={<AuthVisual />}>
      <div className="w-full max-w-md space-y-6">
        <AuthHeader
          title="Welcome back"
          subtitle="Settle in and continue your quiet journaling ritual."
        />
        <form onSubmit={handleSubmit} className="space-y-4">
          <AuthField
            label="Email address"
            name="email"
            type="email"
            placeholder="you@justdiary.com"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <AuthField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete="current-password"
            required
          />
          <div className="flex items-center justify-between text-sm text-neutral-600">
            <label className="flex items-center gap-2 mt-4">
              <input
                className="h-4 w-4 rounded border-neutral-300 text-emerald-900 focus:ring-emerald-900/30"
                type="checkbox"
                name="remember"
              />
              Remember me
            </label>
            <Link
              className="text-emerald-900 hover:text-emerald-700"
              href="/forgot-password"
            >
              Forgot password?
            </Link>
          </div>
          <AuthButton type="submit">Sign in</AuthButton>
        </form>
        <p className="text-sm text-neutral-600">
          New here?{" "}
          <Link
            className="font-semibold text-emerald-900 hover:text-emerald-700"
            href="/signup"
          >
            Create an account
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
