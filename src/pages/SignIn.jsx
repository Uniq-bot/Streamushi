import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../utils/auth";

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // TODO: integrate with your auth API
      await new Promise((r) => setTimeout(r, 600));
      // Persist minimal user info locally
      const inferredName = form.email?.split("@")[0] || "User";
      setUser({ name: inferredName, email: form.email, loggedIn: true });
      navigate("/");
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-[100vh] flex items-center justify-center px-4 py-10 bg-[#111] text-[#DDDDDD]">
      <div className="w-full max-w-md bg-[#1C1C1C] border border-gray-700 rounded-lg p-6 shadow-xl">
        <h1 className="text-2xl font-semibold mb-1">Sign in</h1>
        <p className="text-sm text-gray-400 mb-6">Welcome back to Streamushi</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
              className="w-full px-3 py-2 rounded bg-[#111] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm mb-1">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={onChange}
              required
              className="w-full px-3 py-2 rounded bg-[#111] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/60"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-indigo-500/90 hover:bg-indigo-600 text-white py-2 rounded transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-400">
          <span>Don't have an account? </span>
          <Link to="#" className="text-indigo-400 hover:text-indigo-300">Create one</Link>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
