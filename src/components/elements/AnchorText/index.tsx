export default function AnchorText({ children }: { children: React.ReactNode }) {
    return <span className="text-blue-500 text-sm hover:underline cursor-pointer">{children}</span>
}
