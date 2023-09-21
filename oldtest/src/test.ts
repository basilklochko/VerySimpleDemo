class Test {
    public httpService: any = "$HttpService";

    public isDisabled: boolean = false;
    public text: string = "initial value";
    public dynClass: string = "red";

    public $onLoadComplete(): void {
        this.httpService.getJson("data.json").then((res) => {
            this.text = res.data;
            this.dynClass = "green";
            this.isDisabled = false;
        });
    }

    public onClick(): void {
        this.dynClass = "green";
        this.text = "initial value";
    }
}