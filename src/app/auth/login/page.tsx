import { Metadata } from "next";
import { LoginForm } from "./ui/LoginForm";

export const meta:Metadata = {
  title:"Login"
}
export default function LoginPage() {
  return (
    <div className="max-w-6xl mx-auto gap-4 px-2">
      <h1>Login</h1>
      <div className="flex justify-center items-center">
      <LoginForm/>
      </div>
    </div>
  );
}