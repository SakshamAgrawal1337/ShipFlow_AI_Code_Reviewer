import React from 'react'
import Image from "next/image";
import type { Metadata } from 'next';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldSet,
} from "@/components/ui/field";
import {  GithubSignInForm } from '@/features/auth/components/github-sign-in-form';


export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to with your Google account.",
};

type SignInPageProps = {
  searchParams: Promise<{ callbackUrl?: string }>;
};


const SignInPage = async({searchParams}:SignInPageProps) => {
    const {callbackUrl} = await searchParams;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <Card className="w-full max-w-md ">
                     <br />
                <CardHeader>
                 <div className="flex items-center justify-center mb-4">
                   <Image
                    src="/logo.png"
                    alt="ShipFlow AI Logo"
                    width={100}
                    height={100}
                    />
                    </div> 
                    <br />  
                    <br />
                <CardTitle className="text-center text-2xl font-bold ">Welcome</CardTitle>
                <CardDescription className="text-center text-0.3xl">Sign in securely to continnue with your GitHub account
</CardDescription>
                </CardHeader>
           
                <CardContent>
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <GithubSignInForm callbackUrl={callbackUrl} />
                                <FieldDescription> We only request the permission needed to identify your account.You can revoke setting anytime from Github Settings. </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </CardContent>
            </Card>
        </div>
    );
}
export default SignInPage;