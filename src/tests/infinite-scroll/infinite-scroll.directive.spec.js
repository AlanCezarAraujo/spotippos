import chai from 'chai';
import { expect } from 'chai';
import spies from 'chai-spies';
import InfiniteScroll from '../../js/modules/infinite-scroll/infinite-scroll.directive';

chai.use(spies);
chai.should();

const $element = [{
    scrollHeight: 50,
    scrollTop: 100,
    offsetHeight: 100
}];

let callbackFunctions = {
    infiniteScroll: () => {}
};

function $interval(callback) {
    callbackFunctions.$intervalCallback = callback;
}

$element.on = function (eventName, callback) {
    callbackFunctions.scrollCallback = callback;
};

const on = chai.spy.on($element, 'on');

const infiniteScroll = new InfiniteScroll($interval);

describe('The InfiniteScroll Directive', () => {
    it('should be restricted to attribute', () => {
        expect(infiniteScroll.restrict).to.equal('A');
    });

    it('should receive a function through the attribute', () => {
        expect(infiniteScroll.scope.infiniteScroll).to.equal('=');
    });

    it('should listen to the scroll event', () => {
        infiniteScroll.link({}, $element);

        on.should.have.been.called();
    });

    it('should call infiniteScroll callback when it comes to the bottom of the wrapper', () => {
        const infiniteScrollCallback = chai.spy.on(callbackFunctions, 'infiniteScroll');

        infiniteScroll.link({
            infiniteScroll: infiniteScrollCallback
        }, $element);

        callbackFunctions.$intervalCallback();
        callbackFunctions.scrollCallback();

        infiniteScrollCallback.should.have.been.called();
    });
});
