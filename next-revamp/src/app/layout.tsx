import { Provider } from "@/components/ui/provider"

// Adding the suppressHydrationWarning prop to the html element is required to prevent the warning about the next - themes library.

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}