class Index {
    constructor() {
        this.sharedService = "$SharedService";
        this.internal = "set internally";
    }
    onReset() {
        this.internal = "set internally";
        this.sharedService.text = "";
    }
    $onComponentLoad() {
        console.log("loading index");
        this.sharedService.text = "index";
    }
}
