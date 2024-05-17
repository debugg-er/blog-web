'use client'

import { useMutation } from "@tanstack/react-query"

import { logout } from "@/api"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  const { mutateAsync: logoutUser } = useMutation({ mutationFn: logout })

  return <Button onClick={() => logoutUser()}>logout</Button>
}
