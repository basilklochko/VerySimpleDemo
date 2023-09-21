class Index {
    public sharedService: any = "$SharedService";

    public internal: string = "set internally";

    public onReset(): void {
        this.internal = "set internally";
        this.sharedService.text = "";
    }

    public $onComponentLoad(): void {
        console.log("loading index");
        this.sharedService.text = "index";
    }
}