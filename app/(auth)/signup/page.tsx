"use client";
import Link from "next/link";

import { AuthButton } from "../../components/auth/AuthButton";
import { AuthField } from "../../components/auth/AuthField";
import { AuthHeader } from "../../components/auth/AuthHeader";
import { AuthShell } from "../../components/auth/AuthShell";
import { AuthVisual } from "../../components/auth/AuthVisual";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const formData = {
    name,
    email,
    password,
    confirmPassword,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
      const res = await fetch("api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Signup failed");
      }
      const data = await res.json();
      console.log("Signup successful:", data);
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  return (
    <AuthShell visual={<AuthVisual />}>
      <div className="w-full max-w-md space-y-6">
        <AuthHeader
          title="Create your space"
          subtitle="Begin a calm ritual for capturing moments that matter."
        />
        <form onSubmit={handleSubmit} className="space-y-4">
          <AuthField
            label="Full name"
            name="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Your name"
            autoComplete="name"
            required
          />
          <AuthField
            label="Email address"
            name="email"
            type="email"
            placeholder="you@justdiary.com"
            autoComplete="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <AuthField
            label="Password"
            name="password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <AuthField
            label="Confirm password"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            autoComplete="new-password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          <AuthButton className="cursor-pointer" type="submit">
            Create account
          </AuthButton>
        </form>
        <p className="text-sm text-neutral-600">
          Already have an account?{" "}
          <Link
            className="font-semibold text-emerald-900 hover:text-emerald-700"
            href="/login"
          >
            Sign in
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
