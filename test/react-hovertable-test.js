import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import sinon from 'sinon';
import HoverTable from 'HoverTable';

let wrapper;
let onCellClick;

describe('HoverTable default', () => {
  before(() => {
    onCellClick = sinon.spy();
    wrapper = mount(<HoverTable onClick={onCellClick}/>);
  });

  it('should create a default HoverTable', () => {
    expect(wrapper.find('DivTable')).to.have.length(1);
    expect(wrapper.find('DivRow')).to.have.length(12);
    expect(wrapper.find('DivCell')).to.have.length(144);
  });

  it('should set width and height to DivTable', () => {
    expect(wrapper.find('DivTable')).to.have.prop('width').equal(350);
    expect(wrapper.find('DivTable')).to.have.prop('height').equal(350);
  });

  it('should test every row to have the right rowHeight', () => {
    const timesArr = [].constructor.apply(this, new Array(12));

    timesArr.forEach((val, i) => {
      expect(wrapper.find('DivRow').at(i))
        .to.have.attr('data-rowHeight').equal(`${350 / 12}`);
    });
  });

  it('should test every cell to have the right rowHeight, cellWidth', () => {
    // just test first 20 cells
    const timesArr = [].constructor.apply(this, new Array(20));

    timesArr.forEach((val, i) => {
      expect(wrapper.find('DivCell').at(i))
        .to.have.attr('data-rowHeight').equal(`${350 / 12}`);
      expect(wrapper.find('DivCell').at(i))
        .to.have.attr('data-cellWidth').equal(`${350 / 12}`);
    });
  });

  it('should show Dimensions component', () => {
    expect(wrapper.find('Dimensions')).to.have.length(1);
  });

  it('should have no active cells', () => {
    expect(wrapper.find({'data-active': true})).to.have.length(0);
  });

  it('should simulates click events', () => {
    wrapper.find('DivCell').at(1).simulate('click');
    wrapper.find('DivCell').at(10).simulate('click');
    expect(onCellClick).to.have.property('callCount', 2);
  });
});

describe('HoverTable customize', () => {
  before(() => {
    onCellClick = sinon.spy();
    wrapper = mount(
      <HoverTable
        width={400}
        height={400}
        selectedRow={10}
        selectedColumn={5}
        row={20}
        column={15}
        showDimension={false}
        onClick={onCellClick}/>
    );
  });

  it('should create a HoverTable', () => {
    expect(wrapper.find('DivTable')).to.have.length(1);
    expect(wrapper.find('DivRow')).to.have.length(20);
    expect(wrapper.find('DivCell')).to.have.length(300);
  });

  it('should set width and height to DivTable', () => {
    expect(wrapper.find('DivTable')).to.have.prop('width').equal(400);
    expect(wrapper.find('DivTable')).to.have.prop('height').equal(400);
  });

  it('should test every row to have the right rowHeight', () => {
    const timesArr = [].constructor.apply(this, new Array(20));

    timesArr.forEach((val, i) => {
      expect(wrapper.find('DivRow').at(i))
        .to.have.attr('data-rowHeight').equal(`${400 / 20}`);
    });
  });

  it('should test every cell to have the right rowHeight, cellWidth', () => {
    // just test first 20 cells
    const timesArr = [].constructor.apply(this, new Array(20));

    timesArr.forEach((val, i) => {
      expect(wrapper.find('DivCell').at(i))
        .to.have.attr('data-rowHeight').equal(`${400 / 20}`);
      expect(wrapper.find('DivCell').at(i))
        .to.have.attr('data-cellWidth').equal(`${400 / 15}`);
    });
  });

  it('should not show Dimensions component', () => {
    expect(wrapper.find('Dimensions')).to.have.length(0);
  });

  it('should have 66 active cells', () => {
    expect(wrapper.find({'data-active': true})).to.have.length(66);
  });

  it('should simulates click events', () => {
    wrapper.find('DivCell').at(1).simulate('click');
    wrapper.find('DivCell').at(10).simulate('click');
    expect(onCellClick).to.have.property('callCount', 2);
  });
});
