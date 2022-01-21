import dynamic from "next/dynamic";

const SignupComponent = dynamic(() => import("../components/signup/index"), { ssr: false });
export default function Signup() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <SignupComponent />;
    </div>
  );
}
