import React from 'react';
import InputText from './input-text';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('InputText Component', () => {
  let component;
  let props;

  Enzyme.configure({
    adapter: new Adapter()
  });

  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      label: 'keywords',
      keywords: 'this is some keyword',
    }

    component = shallow(
      <InputText
        label={props.label}
        value={props.keywords}
        onChange={props.onChange} />
    );
  })

  it('Should render the right way', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render the label the right way', () => {
    expect(component.find('label').text()).toBe(props.label + ':');
  });

  it('should call the onChange function', () => {
    let mountedComponent = mount(
      <InputText
        label={props.label}
        value={props.keywords}
        onChange={props.onChange} />
    );

    mountedComponent.find('input').simulate('change');

    expect(props.onChange).toHaveBeenCalled();
  });

  it('should change the value of the input onChange', () => {
    let mountedComponent = mount(
      <InputText
        label={props.label}
        value={props.keywords}
        onChange={props.onChange} />
    );

    mountedComponent.find('input').simulate('change');

    expect(mountedComponent.find('input').prop('value')).toBe(props.keywords);
  })
})