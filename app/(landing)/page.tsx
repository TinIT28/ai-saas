import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const LandingPage = () => {
  return (
    <div>
      <p>Lading page (Unproted page)</p>
      <Link href={"sigin-in"}>
        <Button>Login</Button>
      </Link>
      <Link href={"sigin-up"}>
        <Button>Register</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
