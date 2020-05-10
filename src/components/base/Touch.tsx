import React from 'react'
import { TouchableRipple } from 'react-native-paper'

declare type Props = React.ComponentProps<typeof TouchableRipple>

class Index extends React.PureComponent<Props> {
  render() {
    const { children, ...restProps } = this.props
    return (
      <TouchableRipple hitSlop={{ top: 10, right: 10, left: 10, bottom: 10 }} {...restProps}>
        {children}
      </TouchableRipple>
    )
  }
}

export default Index
