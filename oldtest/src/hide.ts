class Hide {
    public sharedService: any = "$SharedService";

    public isHidden: boolean = false;

    public onClick(): void {
        this.isHidden = !this.isHidden;
    }

    public $onComponentLoad(): void {
        console.log("loading hide");
        this.sharedService.text = "hide";
    }
}