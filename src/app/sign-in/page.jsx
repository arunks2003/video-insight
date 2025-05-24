import { SignedOut, SignIn, SignInButton, SignUpButton } from "@clerk/clerk-react";

const SignInPage = () => {
    return (
        <>
            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>
        </>
    );
};

export default SignInPage;