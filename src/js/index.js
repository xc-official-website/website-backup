var dbinited = false;
function DB() {
    this.init = function () {
        if (dbinited) {
            return;
        }
        AV.init({
            appId: 'V2l0aF5H9L02C1hirsq7cQSM-gzGzoHsz',
            appKey: 'gg2Bpu39NqGqo3AgpbnjBBeG'
        });
    };
    this.storeVisit = function () {
        var VisitCounter = AV.Object.extend('VisitCounter');
        var vc = new VisitCounter();
        vc.set('title', '工程师周会');
        vc.set('content', '每周工程师会议，周一下午2点');
        vc.set('location', '会议室');
        return vc.save();
    };
}
$(function () {
    var db = new DB();
    db.init();
});