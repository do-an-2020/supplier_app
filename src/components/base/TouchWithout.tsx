import React from 'react'
import { TouchableWithoutFeedback } from 'react-native'

declare type Props = React.ComponentProps<typeof TouchableWithoutFeedback>

class Index extends React.PureComponent<Props> {
  render() {
    const { children, ...restProps } = this.props
    return (
      <TouchableWithoutFeedback
        hitSlop={{ top: 10, right: 10, left: 10, bottom: 10 }}
        {...restProps}>
        {children}
      </TouchableWithoutFeedback>
    )
  }
}

export default Index
