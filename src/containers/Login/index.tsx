import { AnchorText } from '@/components/elements'
import { Link } from '@/navigation'

import LoginForm from './LoginForm'
import SSOButtons from './SSOButtons'

async function Login() {
  // const t = await getTranslations('login')

  return (
    <div className="m-16 gap-4 flex flex-col">
      <div>
        <h3>Login to your Account</h3>
        <span>See what going on with your business</span>
      </div>

      <SSOButtons />

      <LoginForm />

      <div className="mx-auto mt-16">
        Not registered yet?
        <Link href="/register">
          <AnchorText> Register account</AnchorText>
        </Link>
      </div>
    </div>
  )
}

export default Login
