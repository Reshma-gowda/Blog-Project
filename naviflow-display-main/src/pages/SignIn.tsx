import React from "react";

const SignIn: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-card border border-border shadow-card rounded-2xl p-8">
        
        <h2 className="text-3xl font-heading font-bold text-center text-foreground mb-6">
          Welcome Back
        </h2>

        <p className="text-center text-muted-foreground mb-6">
          Sign in to continue to My Blog
        </p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-secondary border border-border text-foreground outline-none focus:ring-2 focus:ring-primary transition"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-secondary border border-border text-foreground outline-none focus:ring-2 focus:ring-primary transition"
          />

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Don’t have an account?{" "}
          <span
            className="text-primary cursor-pointer hover:underline"
            onClick={() => window.location.href = "/signup"}
          >
            Create one
          </span>
        </p>

      </div>
    </div>
  );
};

export default SignIn;