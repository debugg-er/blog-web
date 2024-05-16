import { cn } from '@/utils'

export default function AuthFormLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full h-full bg-[url(https://www.inkdrop.app/static/masthead-bg-f4b0f2b95bae8748ba397d4d5a72a08d.jpg)]">
      <div
        className={cn(
          'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] p-0 bg-white ',
          'rounded-xl overflow-auto shadow-[0_0px_32px_rgba(50,0,50,0.25)]',
        )}
      >
        {children}
      </div>
    </div>
  )
}
