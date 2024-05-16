'use client'

import { Button } from '@/components/ui/button'
import { FaFacebook, FaGithub, FaGooglePlusG } from 'react-icons/fa'

export default function SSOButtons() {
    return (
        <div className="flex flex-col gap-2">
            <Button color="red">Continue with Google</Button>
            {/* <Button color="black" leftSection={<FaGithub size={20}/>}>Continue with Github</Button> */}
            {/* <Button color="blue"  leftSection={<FaFacebook size={20}/>}>Continue with Facebook</Button> */}
        </div>
    )
}
