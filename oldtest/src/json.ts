class Json {
    public httpService: any = "$HttpService";

    public isNotLoading: boolean = true;
    public data = [];

    public $onComponentLoad(): void {
        this.onLoad();
    }

    public onLoad(): void {
        this.isNotLoading = false;
        this.onClear();

        this.httpService.getJson("big.json").then((res) => {
            this.data = res;
            this.isNotLoading = false;
        });
    }

    public onClear(): void {
        this.data = [];
    }
}