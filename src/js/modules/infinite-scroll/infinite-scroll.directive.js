'use strict';

let $interval;
let didUserScrollToTheBottom = false;

class InfiniteScroll {
    constructor(_$interval_) {
        $interval = _$interval_;

        this.restrict = 'A';
        this.link = link;
        this.scope = {
            infiniteScroll: '='
        };
    }

    static infiniteScroll($interval) {
        return new InfiniteScroll($interval);
    }
}

function link($scope, $element) {
    $element.on('scroll', handleScroll);

    function handleScroll() {
        if (didUserScrollToTheBottom && itCameToTheBottom()) {
            didUserScrollToTheBottom = false;

            $scope.infiniteScroll && $scope.infiniteScroll();
        }
    }

    function itCameToTheBottom() {
        let scrollHeight = $element[0].scrollHeight;
        let scrollTop = $element[0].scrollTop;
        let offsetHeight = $element[0].offsetHeight + 100;

        return (scrollHeight - scrollTop) <= offsetHeight;
    }

    $interval(() => {
        if (itCameToTheBottom()) {
            didUserScrollToTheBottom = true;
        }
    }, 100);
}

InfiniteScroll.infiniteScroll.$inject = ['$interval'];
export default InfiniteScroll.infiniteScroll;
