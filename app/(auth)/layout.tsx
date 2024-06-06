
import SvgComponent from "@/components/svg";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <main className="grow">

      <SvgComponent/>

      {children}

    </main>
  )
}
