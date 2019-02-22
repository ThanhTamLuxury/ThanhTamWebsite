import React, {Component} from 'react'

export const mix_with_header_slider = (SliderComponent,WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <div>
          <Header/>
          <SliderComponent/>
          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  }
}
