"use client";

import {Button} from "@/components/ui/button";
import {Spinner} from "@/components/ui/spinner";
import { GithubLogoIcon } from "@phosphor-icons/react";
import {useFormStatus} from "react-dom";
import { signInWithGithub } from "../actions";

function GithubIcon(){
    return(
        <GithubLogoIcon size={32} />

    )
}

function SubmitButton(){
    const{pending} = useFormStatus();
    let buttonLabel = "Sign in with Github";
    let buttonIcon = <GithubIcon />;

    if(pending){
        buttonLabel = "Redirecting to Github...";
        buttonIcon = <Spinner className="size-4" />;
    }

    return(
        <Button type="submit" className="w-full" disabled={pending}
        size="lg" variant="outline">
            {buttonIcon}
            {buttonLabel}
        </Button>
    )
}

type GithubSignInFormProps = {
    callbackUrl?: string;
};

export function GithubSignInForm({callbackUrl}: GithubSignInFormProps){
    return(
        <form action={signInWithGithub} className="space-y-4" >
            {callbackUrl ?  (
                <input type="hidden" name="callbackUrl" value={callbackUrl} />
            ): null}
            <SubmitButton />
        </form>
    )
}