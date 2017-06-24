var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
   it('Полетело?', () => {
       expect (CountdownForm).toExist();
   }) ;
   it('вызывает onSetCountdown, если вбиты нормальные секунды', () => {
      var spy = expect.createSpy();
      var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
      var $el = $(ReactDOM.findDOMNode(countdownForm));

      countdownForm.refs.seconds.value='109';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(109);
   });

    it('не должен вызываться onSetCountdown, если вбиты корявые секунды', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value='109b';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});