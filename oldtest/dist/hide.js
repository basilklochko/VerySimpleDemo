class Hide {
    constructor() {
        this.sharedService = "$SharedService";
        this.isHidden = false;
    }
    onClick() {
        this.isHidden = !this.isHidden;
    }
    $onComponentLoad() {
        console.log("loading hide");
        this.sharedService.text = "hide";
    }
}
