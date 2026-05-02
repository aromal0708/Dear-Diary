import Link from "next/link";

import { AuthButton } from "../../components/auth/AuthButton";
import { AuthField } from "../../components/auth/AuthField";
import { AuthHeader } from "../../components/auth/AuthHeader";
import { AuthShell } from "../../components/auth/AuthShell";
import { AuthVisual } from "../../components/auth/AuthVisual";

export default function SignupPage() {
  return (
    <AuthShell visual={<AuthVisual />}>
      <div className="w-full max-w-md space-y-6">
        <AuthHeader
          title="Create your space"
          subtitle="Begin a calm ritual for capturing moments that matter."
        />
        <form className="space-y-4">
          <AuthField
            label="Full name"
            name="name"
            type="text"
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
          />
          <AuthField
            label="Password"
            name="password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            required
          />
          <AuthField
            label="Confirm password"
            name="confirmPassword"
            type="password"
            placeholder="Re-enter your password"
            autoComplete="new-password"
            required
          />
          <AuthButton type="submit">Create account</AuthButton>
        </form>
        <p className="text-sm text-neutral-600">
          Already have an account?{" "}
          <Link className="font-semibold text-emerald-900 hover:text-emerald-700" href="/login">
            Sign in
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}