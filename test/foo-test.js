import test from 'tape';
import React from 'react';
import { shallow, mount } from 'enzyme';
import configure from 'enzyme-adapter-react-helper';

import Foo from '../src/foo';

configure();

test('shallow', (t) => {
    const wrapper = shallow(<Foo />);
    t.equal(wrapper.contains(<span>Foo</span>), true);
    t.end();
});

test('mount', (t) => {
    const wrapper = mount(<Foo />);
    const fooInner = wrapper.find('.foo-inner');
    t.equal(fooInner.is('.foo-inner'), true);
    t.end();
});
