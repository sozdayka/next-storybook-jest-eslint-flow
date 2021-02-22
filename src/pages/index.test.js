// @flow

import { mount } from 'enzyme'
import React from 'react'
// import renderer from 'react-test-renderer'

import Index from 'pages/index'

describe('<Index />', () => {
  it('shows "Batman TV Shows"', () => {
    const wrapper = mount(<Index />)
    expect(wrapper.find('Index').find('h1').text()).toEqual('Batman TV Shows')
  })
})

// describe('<Index /> snapshot', () => {
//   it('matches snapshot', () => {
//     const component = renderer.create(<Index shows={showsMock} />)
//     const tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })
