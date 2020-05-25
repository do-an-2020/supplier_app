import { SignInScreen, IPropsSignIn, userSetAuthen } from '@dvh/user'
import store from 'src/redux/store'

class SignIn extends SignInScreen {
  constructor(props: IPropsSignIn) {
    super(props)
    const { email } = store.getState()?.user

    this.state = {
      email,
      password: '',
    }
  }

  onSubmitSuccess = (token?: string) => {
    const { email } = this.state
    store.dispatch(userSetAuthen({ email, authen: token || '' }))
  }
}

export default SignIn
